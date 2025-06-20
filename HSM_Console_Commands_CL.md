Configure Alarms

Command: CL

Function: Enables or disables the motion alarm. If the HSM will be moved, the alarm circuit should typically be disabled. When in service or storage, the alarm should be enabled. The alarm setting can optionally be stored on a smart card.

Authorization: Works only in SECURE mode.

Inputs:
- Motion alarm status: LOW, MEDIUM, HIGH or OFF
- Save setting to smart card: yes or no

Outputs: None

Errors: If the card is not formatted to store or retrieve HSM settings, an error prompts whether to try another card (Y/N).

Example 1:

![image](https://user-images.githubusercontent.com/77227227/196165705-73575570-c12b-4051-88cc-3c524154b417.png)

Example 2: Motion alarm can be set to a less or more secure level.

![image](https://user-images.githubusercontent.com/77227227/196166595-b164c9f0-ea3d-4075-91d2-8f6a30673e9b.png)

After entering the "CL" command, the prompt "Motion alarm [Low/Med/High/ofF] (OFF):" appears. Choose "H" for high security or "L" for low security as required.
