Host Port Access Control List (ACL)

Command: CONFIGACL

Function: Displays and modifies the Access Control Lists for the host ports. When ACL control is enabled using the CH console command, traffic from hosts is accepted only if the host IP address matches one of the ACL entries configured with this command.

Input: User entries can be viewed, added, or deleted. Entries cannot be edited in place.

Output: Error and confirmation messages only.

Example:

![image](https://user-images.githubusercontent.com/77227227/196141827-40e406a3-e63f-4998-86ea-42bdc7b43d94.png)

Add/Delete/Quit options are available. The output shows "single", "range" and "mask" options. After selecting "A" to add, the command prompts for the type (Single/Range/Mask).

![image](https://user-images.githubusercontent.com/77227227/196142073-6555b3b6-5587-4a17-a053-50092c3971e1.png)

Then you enter the IP addresses for the chosen type.

![image](https://user-images.githubusercontent.com/77227227/196142593-58b3261e-dffc-44e7-b9e4-cd0e7360640f.png)

After adding the IP address, traffic through that IP can be monitored.
