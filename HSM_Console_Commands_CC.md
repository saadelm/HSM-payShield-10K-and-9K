Configure Console Port

Function: Sets the baud rate and word format for the console port.

The baud rate is the rate of signal changes per second in serial communications. Because of framing operations like start, stop and parity bits, it differs from the number of characters sent per second.

Authorization: No authorization required.

Inputs:
- Console baud rate
- Console word format
- Console parity
- Console flow control

Outputs: None

Errors: None

Default console settings:
- 9600 baud
- 8 data bits
- 1 stop bit
- no parity
- no flow control

NOTE: The "CC" command is not used on payShield 10K HSMs.

![image](https://user-images.githubusercontent.com/77227227/195861029-249addc0-4417-4430-9aaf-f938d33929f2.png)
