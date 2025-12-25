// State management
let predefinedCommands = [];
let commandHistory = [];

// DOM elements
const hsmIpInput = document.getElementById('hsm-ip');
const hsmPortInput = document.getElementById('hsm-port');
const saveConfigBtn = document.getElementById('save-config');
const testConnectionBtn = document.getElementById('test-connection');
const configStatus = document.getElementById('config-status');
const categorySelect = document.getElementById('category-select');
const commandButtonsContainer = document.getElementById('command-buttons');
const customCommandInput = document.getElementById('custom-command-input');
const sendCustomCommandBtn = document.getElementById('send-custom-command');
const resultsContainer = document.getElementById('results-container');
const historyContainer = document.getElementById('history-container');
const clearResultsBtn = document.getElementById('clear-results');
const clearHistoryBtn = document.getElementById('clear-history');

// Initialize the app
async function init() {
    await loadConfig();
    await loadPredefinedCommands();
    loadHistoryFromStorage();
    setupEventListeners();
}

// Load configuration
async function loadConfig() {
    try {
        const response = await fetch('/api/config');
        const config = await response.json();

        if (config.ip) {
            hsmIpInput.value = config.ip;
        }
        if (config.port) {
            hsmPortInput.value = config.port;
        }
    } catch (error) {
        console.error('Error loading config:', error);
    }
}

// Save configuration
async function saveConfig() {
    const ip = hsmIpInput.value.trim();
    const port = hsmPortInput.value.trim();

    if (!ip || !port) {
        showStatus('Please enter both IP address and port', 'error');
        return;
    }

    try {
        const response = await fetch('/api/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip, port })
        });

        const result = await response.json();

        if (result.success) {
            showStatus('Configuration saved successfully!', 'success');
        } else {
            showStatus(result.error || 'Failed to save configuration', 'error');
        }
    } catch (error) {
        showStatus('Error saving configuration: ' + error.message, 'error');
    }
}

// Test connection
async function testConnection() {
    const ip = hsmIpInput.value.trim();
    const port = hsmPortInput.value.trim();

    if (!ip || !port) {
        showStatus('Please enter IP address and port first', 'error');
        return;
    }

    showStatus('Testing connection...', 'success');
    testConnectionBtn.disabled = true;

    try {
        const response = await fetch('/api/test-connection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();

        if (result.success) {
            showStatus('Connection successful! HSM is reachable.', 'success');
        } else {
            showStatus(result.message || 'Connection failed', 'error');
        }
    } catch (error) {
        showStatus('Error testing connection: ' + error.message, 'error');
    } finally {
        testConnectionBtn.disabled = false;
    }
}

// Load predefined commands
async function loadPredefinedCommands() {
    try {
        const response = await fetch('/api/predefined-commands');
        predefinedCommands = await response.json();

        populateCategories();
        renderCommandButtons();
    } catch (error) {
        console.error('Error loading predefined commands:', error);
    }
}

// Populate category dropdown
function populateCategories() {
    const categories = ['all', ...new Set(predefinedCommands.map(cmd => cmd.category))];

    categorySelect.innerHTML = '';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category === 'all' ? 'All Categories' : category;
        categorySelect.appendChild(option);
    });
}

// Render command buttons
function renderCommandButtons(filterCategory = 'all') {
    commandButtonsContainer.innerHTML = '';

    const filteredCommands = filterCategory === 'all'
        ? predefinedCommands
        : predefinedCommands.filter(cmd => cmd.category === filterCategory);

    filteredCommands.forEach(cmd => {
        const card = document.createElement('div');
        card.className = 'command-card';
        card.innerHTML = `
            <div class="command-name">${cmd.name}</div>
            <div class="command-code">${cmd.command}</div>
            <div class="command-description">${cmd.description}</div>
            <div class="command-category">${cmd.category}</div>
        `;
        card.addEventListener('click', () => sendCommand(cmd.command, cmd.name));
        commandButtonsContainer.appendChild(card);
    });
}

// Send command to HSM
async function sendCommand(command, commandName = null) {
    if (!command.trim()) {
        showStatus('Please enter a command', 'error');
        return;
    }

    const displayName = commandName || 'Custom Command';

    // Add to results immediately
    addResult({
        command: command,
        commandName: displayName,
        response: 'Sending command...',
        timestamp: new Date().toISOString(),
        loading: true
    });

    try {
        const response = await fetch('/api/command', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ command })
        });

        const result = await response.json();

        // Update the last result
        if (result.success) {
            updateLastResult({
                command: command,
                commandName: displayName,
                response: result.response,
                timestamp: result.timestamp,
                success: true
            });

            // Add to history
            addToHistory(command, displayName, result.response, result.timestamp);
        } else {
            updateLastResult({
                command: command,
                commandName: displayName,
                response: result.error || 'Command failed',
                timestamp: new Date().toISOString(),
                success: false
            });
        }
    } catch (error) {
        updateLastResult({
            command: command,
            commandName: displayName,
            response: 'Error: ' + error.message,
            timestamp: new Date().toISOString(),
            success: false
        });
    }
}

// Send custom command
function sendCustomCommand() {
    const command = customCommandInput.value.trim();
    if (command) {
        sendCommand(command);
    }
}

// Add result to results container
function addResult(resultData) {
    // Remove placeholder if exists
    const placeholder = resultsContainer.querySelector('.placeholder');
    if (placeholder) {
        placeholder.remove();
    }

    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    resultItem.innerHTML = `
        <div class="result-header">
            <span class="result-command">${resultData.commandName || resultData.command}</span>
            <span class="result-timestamp">${formatTimestamp(resultData.timestamp)}</span>
        </div>
        <div class="result-response ${resultData.loading ? '' : (resultData.success === false ? 'result-error' : '')}">
            ${resultData.loading ? '<div class="loading"></div> ' + resultData.response : resultData.response}
        </div>
    `;

    resultsContainer.insertBefore(resultItem, resultsContainer.firstChild);
}

// Update the last result
function updateLastResult(resultData) {
    const lastResult = resultsContainer.querySelector('.result-item');
    if (lastResult) {
        lastResult.innerHTML = `
            <div class="result-header">
                <span class="result-command">${resultData.commandName || resultData.command}</span>
                <span class="result-timestamp">${formatTimestamp(resultData.timestamp)}</span>
            </div>
            <div class="${resultData.success === false ? 'result-error' : 'result-response'}">
                ${resultData.response}
            </div>
        `;
    }
}

// Add to command history
function addToHistory(command, commandName, response, timestamp) {
    const historyItem = {
        command,
        commandName,
        response,
        timestamp
    };

    commandHistory.unshift(historyItem);

    // Keep only last 50 commands
    if (commandHistory.length > 50) {
        commandHistory = commandHistory.slice(0, 50);
    }

    saveHistoryToStorage();
    renderHistory();
}

// Render history
function renderHistory() {
    historyContainer.innerHTML = '';

    if (commandHistory.length === 0) {
        historyContainer.innerHTML = '<p class="placeholder">Command history will appear here.</p>';
        return;
    }

    commandHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="result-header">
                <span class="result-command">${item.commandName || item.command}</span>
                <span class="result-timestamp">${formatTimestamp(item.timestamp)}</span>
            </div>
            <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                Command: <code>${item.command}</code>
            </div>
        `;
        historyItem.style.cursor = 'pointer';
        historyItem.addEventListener('click', () => {
            customCommandInput.value = item.command;
            customCommandInput.focus();
        });
        historyContainer.appendChild(historyItem);
    });
}

// Save history to localStorage
function saveHistoryToStorage() {
    try {
        localStorage.setItem('hsmCommandHistory', JSON.stringify(commandHistory));
    } catch (error) {
        console.error('Error saving history:', error);
    }
}

// Load history from localStorage
function loadHistoryFromStorage() {
    try {
        const stored = localStorage.getItem('hsmCommandHistory');
        if (stored) {
            commandHistory = JSON.parse(stored);
            renderHistory();
        }
    } catch (error) {
        console.error('Error loading history:', error);
    }
}

// Clear results
function clearResults() {
    resultsContainer.innerHTML = '<p class="placeholder">No commands executed yet. Select a predefined command or enter a custom command above.</p>';
}

// Clear history
function clearHistory() {
    if (confirm('Are you sure you want to clear the command history?')) {
        commandHistory = [];
        saveHistoryToStorage();
        renderHistory();
    }
}

// Show status message
function showStatus(message, type) {
    configStatus.textContent = message;
    configStatus.className = 'status-message ' + type;

    setTimeout(() => {
        configStatus.className = 'status-message';
    }, 5000);
}

// Format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

// Setup event listeners
function setupEventListeners() {
    saveConfigBtn.addEventListener('click', saveConfig);
    testConnectionBtn.addEventListener('click', testConnection);
    categorySelect.addEventListener('change', (e) => renderCommandButtons(e.target.value));
    sendCustomCommandBtn.addEventListener('click', sendCustomCommand);
    clearResultsBtn.addEventListener('click', clearResults);
    clearHistoryBtn.addEventListener('click', clearHistory);

    // Allow Enter key in custom command input (Ctrl+Enter to send)
    customCommandInput.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            sendCustomCommand();
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
