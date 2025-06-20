Configure Security

Command: CS

Function: Configures HSM security settings and certain processing parameters.

Authorization: The HSM must be in SECURE mode.

Input parameters include:
- PIN length [4-12]
- Echo [oN/ofF]
- Atalla ZMK variant support [oN/ofF]
- Transaction key scheme [R/A/N]
- User storage key length [S/D/T/V]
- Display information on the payShield Manager landing page [Y/N]
- Default LMK identifier [0-x]
- Management LMK identifier [0-x]
- Whether to erase installed LMKs to change certain settings
- Enforce Atalla variant match to Thales key type [Y/N]
- Select clear PINs [Y/N]
- Enable ZMK translate command [Y/N]
- Enable X9.17 for import [Y/N]
- Enable X9.17 for export [Y/N]
- Solicitation batch size [1-1024]
- Enable translation of account number for LMK encrypted PINs [Y/N]
- Enable 2DES LMK encryption of 3DES/2048-bit RSA keys [Y/N]
- Use HSM clock for date/time validation [Y/N]
- Additional padding to disguise key length [Y/N]
- Key export and import in trusted format only [Y/N]
- Protect MULTOS Cipher Data Checksums [Y/N]
- Card/password authorization [C/P]
- Enable Tokens in PIN Translation [Y/N]
- Enable Tokens in PIN Verification [Y/N]
- Allow Error light to be extinguished when viewing Error Log [Y/N]
- Enforce host port override for LMK use [Y/N]
- Enforce key type 002 separation for PCI HSM compliance [Y/N]
- Restrict PIN block usage for PCI HSM compliance [Y/N]
- Enforce Authorization Time Limit [Y/N]
- Enforce Multiple Key Components [Y/N]
- Save SECURITY settings to smartcard [Y/N]

![image](https://user-images.githubusercontent.com/77227227/195837921-2e66ac2b-d59e-4d96-9e8f-a31b6899c16b.png)

NOTE: To change these security settings, the existing LMK must be erased. If you answer "N" to erase LMK you cannot modify all settings. The CM command can also display security settings for verification.

![image](https://user-images.githubusercontent.com/77227227/195839505-dc3b8f96-da32-4e4d-bb4e-ad8826189b02.png)
