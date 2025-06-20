LMK Table

LMKs are stored in a table within the secure memory of the HSM. Each LMK occupies a different "slot" in the table with the following attributes:

**LMK ID** – A two-digit number uniquely identifying the location of each LMK in the table. All references to LMKs use the LMK ID.

**Key Scheme** – "Variant" for traditional Racal/Thales LMKs where key encryption is performed using the variant method, or "Key Block" for enhanced security using the key block method.

**Algorithm** – "3DES (2key)" or "3DES (3key)" for Variant LMKs, and "3DES (3key)" or "AES (256-bit)" for Key Block LMKs. Other algorithms may be supported in future releases.

**Status** – "Test" indicates the LMK is for test purposes. "Live" indicates it is for production use. When installing LMKs, the HSM prevents mixing Test and Live LMKs in the same slot (LMK Value and Old/New LMK Value must have the same status).

**Comments** – User-entered text that helps identify the LMK.

**Authorization** – Indicates the authorization status of the HSM for this LMK, either a flag (Authorized State) or a list of authorized activities.

**Old/New Status** – For each LMK stored in the Key Change Storage, a flag indicates whether it is the "old" LMK (loaded with the LO command) or the "new" LMK (loaded with the LN command).

**LMK Check Value** – The check value of the LMK.

**Old/New Check Value** – The check value of the "old" or "new" LMK stored in Key Change Storage.
