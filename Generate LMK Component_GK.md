Generate LMK Component (GK)

Function: Used to generate the component(s) of an LMK and store the component(s) on smart cards.

LMK types that can be generated with this command:
- Double-length (2DES) Variant LMK
- Triple-length (3DES) Variant LMK
- Triple-length (3DES) Key Block LMK
- 256-bit AES Key Block LMK

When generating a Variant LMK or a 3DES Key Block LMK, this command produces data for a single LMK component card. When generating an AES Key Block LMK, this command produces data for all required LMK component cards.

Authorization: The HSM must be in Secure mode for the command to run.

VARIANT
![image](https://user-images.githubusercontent.com/77227227/196936147-1b9a6f3e-7c00-4d9e-861e-8a5347d161fa.png)

KEY BLOCK
![image](https://user-images.githubusercontent.com/77227227/196936451-9ff39e16-8415-4e4d-9f1b-cd40d8e3508e.png)
