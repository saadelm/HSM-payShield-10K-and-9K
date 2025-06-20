Key Block LMK Creation

Load LMK

The following steps describe how to create an LMK.

Command: LK

Function: Loads LMK components from smart cards.

Authorization: The HSM must be in SECURE mode.

Inputs:
- LMK Identifier: two digits.
- Smart cards containing the LMK components (RLMKs supported).
- PINs for the smart cards or passphrases. The PIN must be entered within 60 seconds.
- Whether this LMK becomes the Default/Management LMK (see notes below).

Outputs:
- Individual LMK component check value(s).
- Composite LMK check value.

Notes: For PCI HSM processes, authentication of PINs and smart cards requires Security Officers. Each SO inserts a different smart card and enters the PIN when generating LMKs. The example shows generation of a Key Block LMK.

Errors may include:
- Invalid LMK identifier.
- Load failed check comparison – card is empty.
- Not an LMK card – card formatted for HSM settings or license card.
- Card not formatted.
- Smart card error: invalid PIN entered.
- Invalid PIN – less than 5 or more than 8 digits.
- Invalid key – standard Thales test key cannot be used in live mode.
- Mismatched key status – components are in different states (live/test).
- Invalid key – multiple key components required.

Example procedure:
1. Enter the LK command and specify the LMK ID (e.g., 1 for Key Block 1).
2. Provide a comment for the Key Block LMK.
3. Insert the smart card and press ENTER.
4. Enter the smart card PIN.
5. The HSM ejects the card and displays a check value.
6. When prompted "Load more components? Y/N" insert additional component cards if required.
7. Confirm the details and the Key Block LMK is created.
8. Use the VT command to view the Key Block LMK.

![image](https://user-images.githubusercontent.com/77227227/195852708-fd6006fb-2b59-4a48-9218-d311ccd8366f.png)
