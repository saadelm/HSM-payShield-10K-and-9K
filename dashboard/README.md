# HSM payShield Dashboard

A modern web-based dashboard for managing and controlling Thales payShield 10K and 9K Hardware Security Modules (HSMs).

## Features

- **HSM Configuration Management**: Save and manage HSM IP address and port settings
- **Connection Testing**: Verify connectivity to your HSM before sending commands
- **Predefined Commands**: Quick access to 40+ documented HSM commands organized by category:
  - Key Management
  - Configuration
  - Diagnostics
  - Network
  - SNMP
  - Fraud Detection
- **Custom Command Execution**: Send any custom HSM command
- **Real-time Results**: View command responses in real-time with formatted output
- **Command History**: Track previously executed commands with timestamps
- **Category Filtering**: Filter predefined commands by category for easy navigation
- **Responsive Design**: Modern, user-friendly interface that works on all devices

## Prerequisites

- Node.js (version 14.0.0 or higher)
- npm (comes with Node.js)
- Network access to a Thales payShield 10K or 9K HSM

## Installation

1. Navigate to the dashboard directory:
   ```bash
   cd dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Dashboard

Start the server:
```bash
npm start
```

The dashboard will be available at: **http://localhost:3000**

## Usage

### 1. Configure HSM Connection

1. Open the dashboard in your web browser
2. Enter your HSM's IP address (e.g., `192.168.1.100`)
3. Enter the HSM port (default is typically `1500`)
4. Click **Save Configuration**
5. Click **Test Connection** to verify connectivity

### 2. Execute Predefined Commands

1. Browse the predefined commands section
2. Use the category filter to narrow down commands
3. Click on any command card to execute it
4. View the response in the "Command Results" section

### 3. Execute Custom Commands

1. Scroll to the "Custom Command" section
2. Enter your HSM command in the text area
3. Click **Send Command**
4. View the response in the "Command Results" section

**Tip**: Press `Ctrl+Enter` in the custom command text area to quickly send the command

### 4. View Command History

- All executed commands are saved in the "Command History" section
- Click on any history item to populate the custom command field
- History persists across browser sessions (stored in localStorage)
- Clear history using the "Clear History" button

## Available Predefined Commands

### Key Management
- **GK** - Generate LMK Component
- **LK** - Load LMK
- **LO** - Load Old LMK
- **LN** - Load New LMK
- **V** - Verify LMK Store
- **DC** - Duplicate LMK Component
- **DM** - Delete LMK
- **DO** - Delete Old/New LMK
- **VT** - View LMK Table

### Configuration
- **CS** - Configure Security
- **CA** - Configure Auxiliary Port
- **CH** - Configure Host Port
- **CC** - Configure Console Port
- **CONFIGACL** - Configure ACL
- **CONFIGCMDS** - Configure Commands

### Diagnostics
- **DT** - Diagnostic Test
- **GETCMDS** - Get Available Commands
- **QA** - Query Authorizers
- **QC** - Query Console
- **QH** - Query Host
- **QL** - Query LMK
- **QP** - Query Ports
- **QS** - Query Security
- **VR** - View Software Revision
- **HEALTHSTATS** - Health Statistics
- **UTILSTATS** - Utilization Statistics

### Network
- **NETSTAT** - Network Statistics
- **PING** - Ping Test
- **TRACERT** - Trace Route

### SNMP
- **SNMP** - View SNMP Settings
- **SNMPADD** - Add SNMP Config
- **SNMPDELL** - Delete SNMP Config
- **SNMPTRAP** - SNMP Trap Config
- **SNMP_TRAPADD** - Add SNMP Trap
- **TRAPDEL** - Delete Trap

### Fraud Detection
- **A5** - Configure Fraud Detection (9K)
- **A7** - Configure Fraud Detection (10K)

## Configuration File

The dashboard stores HSM configuration in `hsm-config.json` in the dashboard directory. This file is automatically created when you save your configuration.

Example:
```json
{
  "ip": "192.168.1.100",
  "port": 1500
}
```

## Architecture

### Backend (Node.js/Express)
- **server.js**: Express server that handles:
  - Configuration management (save/load)
  - TCP/IP communication with HSM
  - REST API endpoints
  - Static file serving

### Frontend (HTML/CSS/JavaScript)
- **index.html**: Dashboard structure and layout
- **styles.css**: Modern, responsive styling with gradient backgrounds
- **app.js**: Client-side logic for:
  - UI interactions
  - API communication
  - Command history management
  - Real-time result updates

## API Endpoints

### GET `/api/config`
Get current HSM configuration

### POST `/api/config`
Save HSM configuration
```json
{
  "ip": "192.168.1.100",
  "port": 1500
}
```

### POST `/api/test-connection`
Test connection to HSM

### POST `/api/command`
Send command to HSM
```json
{
  "command": "VR"
}
```

### GET `/api/predefined-commands`
Get list of all predefined commands

## Security Considerations

- This dashboard is intended for use on secure, internal networks only
- No authentication is implemented - add authentication if exposing to wider networks
- HSM commands may require authorization on the HSM itself
- Always follow your organization's security policies when working with HSMs

## Troubleshooting

### Connection Timeout
- Verify the HSM IP address and port are correct
- Ensure the HSM is powered on and network accessible
- Check firewall rules allow TCP connections to the HSM port

### Command Not Responding
- Some HSM commands may require authorization on the HSM console
- Verify the command syntax is correct
- Check HSM logs for error messages

### Port Already in Use
If port 3000 is already in use, you can change it by editing `server.js`:
```javascript
const PORT = 3000; // Change this to another port
```

## Contributing

Contributions are welcome! Please ensure:
- Code follows existing style conventions
- New features are documented
- Commands are properly categorized

## Documentation Reference

This dashboard is built based on the comprehensive HSM documentation in the parent directory. Refer to the markdown files for detailed information about each command.

## License

MIT License - See LICENSE file for details

## Support

For issues or questions:
1. Check the HSM documentation in the parent directory
2. Review the Thales payShield manual
3. Contact your HSM administrator or Thales support
