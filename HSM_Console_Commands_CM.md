Configure Management Port

Command: CM

Function: Configures the Management Ethernet port, which is used exclusively for administering the HSM. If host connectivity is via Ethernet, the host Ethernet port is used for that purpose. The management port is used to update firmware, update license information, and allow management through payShield Manager.

New configuration options can be enabled or disabled as required.

Authorization: The HSM must be offline and in Secure mode.

Inputs:
- Choose whether the IP address is set manually or automatically.
- If manual, provide the address details.
- If DHCP is used, a network name can be entered.
- Ethernet speed setting.
- Enable payShield Manager connectivity (local or remote).

Example output:

![image](https://user-images.githubusercontent.com/77227227/196153566-aa8e5c3b-ec62-46f1-b296-a440e3281f51.png)

Outputs: None

Errors: None

![image](https://user-images.githubusercontent.com/77227227/196155433-afe734e7-c6ff-4224-b825-7f5e15b03e9b.png)
