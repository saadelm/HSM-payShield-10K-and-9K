View Available Commands

Command: GETCMDS

Function: Lists the host and console commands that are currently enabled and available for execution.

Three factors determine whether an individual command is available:
- Whether the command is implemented in the installed firmware.
- Whether the command is licensed (this check applies only to host commands, not console commands).
- Whether the command has been enabled or disabled using the CONFIGCMDS console command (or via payShield Manager).

Note: Some listed commands may require additional license options. For example, the EI command requires the RSA algorithm to be licensed.

Authorization: None required.

Inputs: `[-h l]`

Switch | Description
-------|-----------
(blank) | Display a list of all host and console commands that are implemented, licensed and enabled.
`-h` | Display a mixture of implemented, licensed and enabled commands. (Affected by enabling/disabling commands using CONFIGCMDS.)
`-l` | Display a list of all implemented and licensed commands, regardless of enable/disable state.

Outputs: Lists the available HSM commands.

![image](https://user-images.githubusercontent.com/77227227/196630413-dac85cab-c9c6-436d-9542-d674666b7424.png)

`GETCMDS -h -l`

![image](https://user-images.githubusercontent.com/77227227/196631576-4604fbb9-cf9f-4810-9c04-43d064380b50.png)
