const express = require('express');
const net = require('net');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const CONFIG_FILE = path.join(__dirname, 'hsm-config.json');

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Load or initialize configuration
function loadConfig() {
    try {
        if (fs.existsSync(CONFIG_FILE)) {
            return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
        }
    } catch (error) {
        console.error('Error loading config:', error);
    }
    return { ip: '', port: 1500 };
}

// Save configuration
function saveConfig(config) {
    try {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving config:', error);
        return false;
    }
}

// Get current configuration
app.get('/api/config', (req, res) => {
    const config = loadConfig();
    res.json(config);
});

// Save configuration
app.post('/api/config', (req, res) => {
    const { ip, port } = req.body;

    if (!ip || !port) {
        return res.status(400).json({ error: 'IP and port are required' });
    }

    const config = { ip, port: parseInt(port) };

    if (saveConfig(config)) {
        res.json({ success: true, message: 'Configuration saved successfully' });
    } else {
        res.status(500).json({ error: 'Failed to save configuration' });
    }
});

// Send command to HSM
app.post('/api/command', (req, res) => {
    const { command } = req.body;
    const config = loadConfig();

    if (!config.ip || !config.port) {
        return res.status(400).json({ error: 'HSM not configured. Please set IP and port first.' });
    }

    if (!command) {
        return res.status(400).json({ error: 'Command is required' });
    }

    const client = new net.Socket();
    let responseData = '';
    const timeout = 10000; // 10 seconds timeout

    // Set timeout
    client.setTimeout(timeout);

    client.on('timeout', () => {
        client.destroy();
        res.status(408).json({ error: 'Connection timeout' });
    });

    client.on('error', (err) => {
        res.status(500).json({ error: `Connection error: ${err.message}` });
    });

    client.on('data', (data) => {
        responseData += data.toString();
    });

    client.on('close', () => {
        if (responseData) {
            res.json({
                success: true,
                response: responseData,
                timestamp: new Date().toISOString()
            });
        }
    });

    // Connect to HSM
    client.connect(config.port, config.ip, () => {
        console.log(`Connected to HSM at ${config.ip}:${config.port}`);
        console.log(`Sending command: ${command}`);

        // HSM commands typically end with carriage return
        client.write(command + '\r');

        // Give some time for response, then close
        setTimeout(() => {
            client.end();
        }, 2000);
    });
});

// Test connection to HSM
app.post('/api/test-connection', (req, res) => {
    const config = loadConfig();

    if (!config.ip || !config.port) {
        return res.status(400).json({ error: 'HSM not configured. Please set IP and port first.' });
    }

    const client = new net.Socket();
    const timeout = 5000; // 5 seconds timeout

    client.setTimeout(timeout);

    client.on('timeout', () => {
        client.destroy();
        res.json({ success: false, message: 'Connection timeout' });
    });

    client.on('error', (err) => {
        res.json({ success: false, message: `Connection failed: ${err.message}` });
    });

    client.connect(config.port, config.ip, () => {
        console.log(`Test connection successful to ${config.ip}:${config.port}`);
        client.end();
        res.json({ success: true, message: 'Connection successful' });
    });
});

// Get predefined commands
app.get('/api/predefined-commands', (req, res) => {
    const commands = [
        // Key Management Commands
        { category: 'Key Management', name: 'Generate LMK Component', command: 'GK', description: 'Generate LMK Component (2DES/3DES Variant or 3DES/AES Key Block)' },
        { category: 'Key Management', name: 'Load LMK', command: 'LK', description: 'Load LMK from smart cards' },
        { category: 'Key Management', name: 'Load Old LMK', command: 'LO', description: 'Load Old LMK into Key Change Storage' },
        { category: 'Key Management', name: 'Load New LMK', command: 'LN', description: 'Load New LMK into Key Change Storage' },
        { category: 'Key Management', name: 'Verify LMK Store', command: 'V', description: 'Verify LMK Store' },
        { category: 'Key Management', name: 'Duplicate LMK Component', command: 'DC', description: 'Duplicate LMK Component Sets' },
        { category: 'Key Management', name: 'Delete LMK', command: 'DM', description: 'Delete LMK' },
        { category: 'Key Management', name: 'Delete Old/New LMK', command: 'DO', description: 'Delete Old/New LMK from Key Change Storage' },
        { category: 'Key Management', name: 'View LMK Table', command: 'VT', description: 'View LMK Table' },

        // Configuration Commands
        { category: 'Configuration', name: 'Configure Security', command: 'CS', description: 'Configure Security settings (PIN length, echo, ZMK variant, etc.)' },
        { category: 'Configuration', name: 'Configure Auxiliary Port', command: 'CA', description: 'Configure Auxiliary Port (SNMP traffic)' },
        { category: 'Configuration', name: 'Configure Host Port', command: 'CH', description: 'Configure Host Port (emulation modes)' },
        { category: 'Configuration', name: 'Configure Console Port', command: 'CC', description: 'Configure Console Port (baud rate, word format)' },
        { category: 'Configuration', name: 'Configure ACL', command: 'CONFIGACL', description: 'Host Port Access Control List' },
        { category: 'Configuration', name: 'Configure Commands', command: 'CONFIGCMDS', description: 'Enable/disable console and host commands' },

        // Query & Diagnostics
        { category: 'Diagnostics', name: 'Diagnostic Test', command: 'DT', description: 'Run Diagnostic Test' },
        { category: 'Diagnostics', name: 'Get Available Commands', command: 'GETCMDS', description: 'View available/enabled/licensed commands' },
        { category: 'Diagnostics', name: 'Query Authorizers', command: 'QA', description: 'Query Authorizers' },
        { category: 'Diagnostics', name: 'Query Console', command: 'QC', description: 'Query Console configuration' },
        { category: 'Diagnostics', name: 'Query Host', command: 'QH', description: 'Query Host configuration' },
        { category: 'Diagnostics', name: 'Query LMK', command: 'QL', description: 'Query LMK status' },
        { category: 'Diagnostics', name: 'Query Ports', command: 'QP', description: 'Query Ports configuration' },
        { category: 'Diagnostics', name: 'Query Security', command: 'QS', description: 'View Security Configuration' },
        { category: 'Diagnostics', name: 'View Software Revision', command: 'VR', description: 'View Software Revision Number' },
        { category: 'Diagnostics', name: 'Health Statistics', command: 'HEALTHSTATS', description: 'View/Reset HealthCheck Counts' },
        { category: 'Diagnostics', name: 'Utilization Statistics', command: 'UTILSTATS', description: 'View/Reset Utilization Data' },

        // Network Commands
        { category: 'Network', name: 'Network Statistics', command: 'NETSTAT', description: 'Show Network Statistics' },
        { category: 'Network', name: 'Ping', command: 'PING', description: 'Test TCP-IP Network connectivity' },
        { category: 'Network', name: 'Trace Route', command: 'TRACERT', description: 'Trace TCP-IP route' },

        // SNMP Commands
        { category: 'SNMP', name: 'View SNMP Settings', command: 'SNMP', description: 'View SNMP Settings' },
        { category: 'SNMP', name: 'Add SNMP Config', command: 'SNMPADD', description: 'Add SNMP configuration' },
        { category: 'SNMP', name: 'Delete SNMP Config', command: 'SNMPDELL', description: 'Delete SNMP configuration' },
        { category: 'SNMP', name: 'SNMP Trap Config', command: 'SNMPTRAP', description: 'SNMP trap configuration' },
        { category: 'SNMP', name: 'Add SNMP Trap', command: 'SNMP_TRAPADD', description: 'Add SNMP trap' },
        { category: 'SNMP', name: 'Delete Trap', command: 'TRAPDEL', description: 'Delete SNMP trap' },

        // Fraud Detection
        { category: 'Fraud Detection', name: 'Configure Fraud Detection (9K)', command: 'A5', description: 'Configure Fraud Detection for payShield 9K' },
        { category: 'Fraud Detection', name: 'Configure Fraud Detection (10K)', command: 'A7', description: 'Configure Fraud Detection for payShield 10K' }
    ];

    res.json(commands);
});

app.listen(PORT, () => {
    console.log(`HSM Dashboard Server running on http://localhost:${PORT}`);
    console.log(`Access the dashboard at http://localhost:${PORT}`);
});
