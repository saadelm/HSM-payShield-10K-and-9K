Fraud Detection Command (Fraud Detection Commands)

Command: A5

Function: Used to set the configuration of the HSM fraud detection function.

Authorization: To configure Fraud Detection the HSM must be offline or in Secure mode, or the activity state must be audit.console.

Inputs:
- Whether to respond to Fraud Detection and how to respond.
- Sets the limit for the number of PIN verification errors per minute.
- Sets the limit for the number of PIN verification errors per hour.
- Sets the limit for the number of detected PIN attacks.

Errors:
- Authorization error can occur.
- Not Offline error can occur.

Example 1:
After authorization via Secure-AUTH> you can run the "A5" command. It also notes that the activity state is not authorized.

![image](https://user-images.githubusercontent.com/77227227/196619494-6bb85ae0-b2f8-49fe-bfad-341e7421b877.png)
