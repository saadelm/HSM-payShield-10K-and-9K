Configure Host Port

Command: CH

Function: Configures the host port to emulate data communications equipment or control equipment. Supported modes include:
- Standard asynchronous emulation
- Transparent asynchronous emulation
- Ethernet
- FICON

The host port settings can optionally be stored on a smart card. New settings take effect immediately after the command completes. It is recommended that the Management Ethernet Port, Host 1 Ethernet Port, and Host 2 Ethernet Port are on different IP subnets.

Authorization: The HSM must be in Offline or Secure mode (not Online).

Inputs: Configure the desired settings (for example IP address, subnet, TLS, TCP, UDP, etc.).

Example:

![image](https://user-images.githubusercontent.com/77227227/195867664-6b708748-9d36-442f-9790-e6d077a34d6d.png)

Note: When saving host settings to a smart card, choose "Y" when prompted. This process erases the installed LMKs, which must then be regenerated.
