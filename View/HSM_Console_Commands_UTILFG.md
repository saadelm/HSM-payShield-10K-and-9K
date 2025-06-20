View/Change Instantaneous Utilization Period

Command: UTILCFG

Function: Displays the current setting for the period over which utilization statistics are collected when Instantaneous Utilization Data is requested. This command also allows the setting to be changed (only when offline/Secure).

Authorization: No authorization required for this command.

Inputs: New values for the Instantaneous Utilization Period.
Outputs: Note that resetting the value requires the HSM to be Offline or in Secure state.

NOTE: Because data collected over very short periods will not reflect actual activity, it is recommended that the period not be set to less than 10 seconds.

After running the "UTILCFG" command, it shows us for how many seconds the data is set. If we want to change it, after running "utilcfg" it asks if we want to change it. After answering "Y", we must enter the new second value. As mentioned, data collected over a short period will not reflect actual activity, so it should be above 10 seconds.

Example 1:

![image](https://user-images.githubusercontent.com/77227227/196178541-f8597790-ace9-4b75-bb8c-3caa0f66ae60.png)

After the command, a message appears: "Measurement period for instantaneous statistics is 10 seconds". After running the command and answering Change "Y", we enter the number of seconds and press enter to complete the action.

![image](https://user-images.githubusercontent.com/77227227/196180513-9c2f22bf-054d-4fce-9c17-4ae38e5b83e5.png)
