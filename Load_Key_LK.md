Load LMK

Command: LK

Function: Loads an LMK into the HSM. To load either a Key Block or Variant LMK, first issue this command and then insert the smart cards and confirm.

Authorization: The HSM must be in Secure mode.

Inputs:
- LMK Identifier: two digits
- Smart cards containing the LMK components (RLMKs supported)
- PINs for the smart cards or passwords (must be entered within 60 seconds)
- Whether this LMK should become the Default/Management LMK

Outputs:
- Individual LMK component check values
- Final LMK check value

