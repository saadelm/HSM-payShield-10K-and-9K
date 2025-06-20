Console Command Configuration

1) CONFIGCMDS

This command lists host and console commands that are enabled or disabled. All commands are enabled by default but can be disabled as required.

Use the syntax `+` or `-` with `C` or `H` followed by the command code:
- `+` enables the specified command
- `-` disables the specified command
- `C` identifies a console command
- `H` identifies a host command

Authorization: The HSM must be in Secure mode to enable or disable commands.

Example 1:
```
Online > CONFIGCMDS
List of enabled Console commands:
GC GS EC FK
List of enabled Host commands:
A0 A4 GG GY
```
![image](https://user-images.githubusercontent.com/77227227/195816544-bdd9b3ab-f05d-435b-89ff-038dc95ec07a.png)

Example 2: Enable console command DE and disable host command A4:
```
Secure> CONFIGCMDS
List of enabled Console commands:
GC GS EC FK
List of enabled Host commands:
A0 A4 GG GY
Enter command code (e.g. +CDE) or Q to Quit: +CDE
Enter command code (e.g. +CDE) or Q to Quit: -HA4
```

Example 3: Disable all host commands and then enable only console commands beginning with "A" using the `*` wildcard:
```
Secure> CONFIGCMDS
Enter command code (e.g. +CDE) or Q to Quit: -H*
Enter command code (e.g. +CDE) or Q to Quit: +HA*
Save COMMAND settings to smart card? [Y/N]: Y
Insert card and press ENTER:
COMMAND settings saved to the smartcard.
Secure>
```
![Screenshot_2](https://user-images.githubusercontent.com/77227227/195814201-26eb533c-6e97-4e74-a0a8-abf7e240f333.png)
