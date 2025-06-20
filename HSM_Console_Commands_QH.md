View Host Port Configuration

Command: QH

Function: Displays detailed host port configuration information.

Example command output:

![image](https://user-images.githubusercontent.com/77227227/195871690-879d2dc6-7448-40be-bd87-b0bbe87f7ed9.png)

Inputs: None

Outputs include:
- Message header length (number of characters before each command from the host to the HSM, after the STX character). The HSM returns the header in the response.
- Communication protocol used.

For asynchronous systems:
- Host baud rate
- Host word format
- Response delay (allowing half-duplex host communications where a delay is required between command transmission and HSM response)

For Ethernet systems:
- Well known port (generalized TCP port address)
- Transport method: TCP or UDP
- Number of TCP connections supported per interface
- IP address for each host interface and how it is derived
- Subnet mask for each host interface (management, host1 and host2 are recommended to be on different subnets)
- Port speed for each host interface

Also displayed:
- Whether Secure Host Communications is enabled
- Whether ACLs are in use

Example:

![image](https://user-images.githubusercontent.com/77227227/195872798-ccc3b4d5-ed88-4800-82c6-29668badabed.png)
