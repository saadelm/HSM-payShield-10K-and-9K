Configure Security

Command : CS

Function: HSM cihazlarının güvenlik konfigürasyonlarını ve bazı sürec parametlerini ayalardığımız ve HSM cihazını config etmeye yarayan komut.

Authorization : HSM config edilmesi için SECURE mode kısmında olması gerekmektedir.

Input : 

 PIN length [4-12]: a one or two-digit number in the range 4 to 12.
 
 Echo [oN/ofF]: N or F
 
 Atalla ZMK variant support [oN/ofF]: N or F
 
 Transaction key scheme: Racal, Australian or None? [R/A/N]: R or A or N
 
 User storage key length [S/D/T/V]: S, D, T, or V
 
 Display general information on payShield Manager Landing page? [Y/N]: Y or N
 
 Default LMK identifier [0-x]: Integer between 0 and x
 
 Management LMK identifier [0-x] : Integer between 0 and x
 
 Whether to erase the installed LMKs to enable the following settings to be changed.
 
 Enforce Atalla variant match to Thales key type [Y/N]
 
 Select clear PINs? [Y/N]: Y or N
 
 Enable ZMK translate command? [Y/N]: Y or N
 
 Enable X9.17 for import? [Y/N]: Y or N
 
 Enable X9.17 for export? [Y/N]: Y or N
 
 Solicitation batch size [1-1024]: a one to four-digit number, range 1 to 1024.
 
 Enable Single-DES [Y/N]: Y or N
 
 Prevent Single-DES keys masquerading as double or triple-length key? [Y/N]: Y or N
 
 Single/double length ZMKs [S/D]: S or D
 
 Decimalization table Encrypted/Plaintext [E/P]: E
 
 Enable decimalization table checks? [Y/N]: Y or N
 
 PIN encryption algorithm: A or B
 
 Whether to use the default Card Issuer password or to enter a different value (of 8 alphanumeric printable characters).
 
 Authorized State required when importing DES key under RSA key? [Y/N]: Y or N
 
 Minimum HMAC verification length in bytes [5-64]: number, range 5-64
 
 Enable PKCS#11 import and export for HMAC keys? [Y/N]: Y or N
 
 Enable ANSI X9.17 import and export for HMAC keys? [Y/N]: Y or N
 
 Enable ZEK/TEK encryption of ASCII data or Binary data or None? [A/B/N]: A or B or N
 
 Restrict Key Check Values to 6 hex chars? [Y/N]: Y or N
 
 Enable multiple authorized activities? [Y/N]: Y or N
 
 Enable variable length PIN offset? [Y/N]: Y or N
 
 Enable weak PIN checking? [Y/N]: Y or N
 
 Enable PIN Block format 34 as output format for PIN translations to ZPK? [Y/N]: Y or N
 
 Enable translation of account number for LMK encrypted PINs [Y/N]: Y or N.
 
 Enable 2DES LMK encryption of 3DES/2048-bit RSA keys [Y/N] : Y or N
 
 Use HSM clock for date/time validation? [Y/N]: Y or N
 
 Additional padding to disguise key length? [Y/N] : Y or N
 
 Key export and import in trusted format only? [Y/N] : Y or N
 
 Protect MULTOS Cipher Data Checksums? [Y/N]
 
 Card/password authorization [C/P]: C or P (Card or Password).
 
 Enable use of Tokens in PIN Translation? [Y/N]: Y or N
 
 Enable use of Tokens in PIN Verification? [Y/N]: Y or N
 
 Allow Error light to be extinguished when viewing Error Log? [Y/N]: Y or N
 
 Enforce host port override for LMK use? [Y/N]: Y or N
 
 Enforce key type 002 separation for PCI HSM compliance [Y/N]: Y or N. See notes below.
 
 Restrict PIN block usage for PCI HSM compliance? [Y/N]: Y or N.
 
 Enforce Authorization Time Limit? [Y/N] : Y or N.
 
 Enforce Multiple Key Components? [Y/N] : Y or N.
 
 Save SECURITY settings to smartcard? [Y/N]: Y or N
 
 ![image](https://user-images.githubusercontent.com/77227227/195837921-2e66ac2b-d59e-4d96-9e8f-a31b6899c16b.png)

NOT: Normalde yukarıdaki tüm ayarlamaları ve configleri yapmak gerekmektedir. Image da görülen kısımda eğer siz CS komutu ile güvenlik ayarlarını düzenlemek isterseniz var olan LMK'yı silmeniz gerekmektedir. Eğer erease LMK kısmında "N" derseniz güvenlik ayarlarının tamamını yapamazsınız.

NOT: "CM" komutu ile de güvenlik ayarlarını görmenizi sağlar. Kontrolü bu şekilde sağlayabilirsiniz.

![image](https://user-images.githubusercontent.com/77227227/195839240-1a28bc3b-30b3-47bf-a1be-91f9f9c9fbda.png)

