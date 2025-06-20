Command: CONFIGPB

Used to display the list of enabled PIN block formats and, when in Secure mode, to enable or disable individual PIN block formats.

Authorization: The HSM must be in Secure mode to enable or disable PIN block formats. The current status can be viewed in any state.

Input: PIN Block Format identifier.
Output: Shows the list of enabled PIN Block Formats.
Errors: Invalid entry.

Example 1: Displaying the list of enabled PIN block formats:

![1111](https://user-images.githubusercontent.com/77227227/195834979-1a9a3a4b-f4f3-4110-bb22-e222e41d8047.png)

Example 2: Enabling use of PIN Block format 03 with the CONFIGPB command:

![image](https://user-images.githubusercontent.com/77227227/195835560-394e658d-f6a9-452e-addc-837bc5139e89.png)

After entering `+03` and exiting with `Q`, you are prompted to insert a smart card to save the configuration. Selecting "N" ends the process without saving to card.
