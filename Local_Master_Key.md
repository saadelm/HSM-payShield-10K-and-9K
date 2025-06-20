LOCAL MASTER KEY (LMK)

There are two types of LMK: Variant LMK and Key Block LMK.

A Variant LMK is a set of twenty double- or triple-length TDES keys used to encrypt different key types by applying different "pairs" of variants. The term "pairs" is used regardless of whether the LMK consists of double- or triple-length keys. The standard LMK format supported by earlier versions of Thales (Racal) HSM firmware comprises twenty double-length TDES keys.

NOTE: The term "Variant LMK" refers to the fact that variants are applied to the LMK before it is used; a Variant LMK is not itself a variant of another key.

A Key Block LMK is either a triple-length TDES key or a 256-bit AES key and is used to encrypt keys in key block format. A Key Block LMK is not compatible with a Variant LMK and can only be used to encrypt keys in key block format. The term "Key Block LMK" refers to the method of encrypting keys using the key block technique; the LMK itself is not stored in key block format.

The differences between Variant and Key Block LMKs are explained above. payShield HSMs store LMK keys and allow generation and sharing of ZMK keys under the LMK.
