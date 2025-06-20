View Security Configuration

Command: QS

Function: Reports the HSM security configuration, certain processing parameters, and the LMK check value.

Example output:

![image](https://user-images.githubusercontent.com/77227227/195853940-849b7a9c-9964-435f-b67e-84610756461b.png)

Inputs: None

Outputs: See example above.

Notes: When the software is PCI HSM certified, certain security settings must have the following values for compliance:
- Card/PIN authorization (local) – must be "C".
- Restrict PIN block usage for PCI compliance – must be YES (see payShield 9000 General Information Guide sections 6 and 10).
- Enforce key type 002 separation for PCI HSM compliance – must be YES.

NOTE: The "CS" command can also be used to configure these settings, but doing so requires erasing the LMK. If you need to change all settings, the LMK must be deleted and regenerated.

![image](https://user-images.githubusercontent.com/77227227/195858484-8f9958a5-f863-4b8a-b013-72c4bbec05f4.png)
