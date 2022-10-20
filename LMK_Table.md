LMK Table ( Local Master Key Tablosu)

LMK'ler, HSM'nin güvenli belleği içindeki bir tabloda saklanır ve her LMK, tablo içinde farklı bir 'yuva' işgal eder. Her yuva aşağıdaki özelliklere sahiptir.


attributes:

LKM ID: Tablodaki her bir LMK'nın konumunu benzersiz bir şekilde gösteren 2 basamaklı bir sayı. LMK'lara yapılan tüm referanslar, LMK Tanımlayıcısı belirtilerek yapılır.


Key Scheme: 

Geleneksel Racal/Thales LMK için "Varyant" – varyant yöntemi kullanılarak gerçekleştirilen anahtar şifreleme.
Gelişmiş güvenlik için "Anahtar Blok" – anahtar blok yöntemi kullanılarak gerçekleştirilen anahtar şifreleme.


Algorithm:

"3DES (2key)" veya "3DES (3key)", Varyant LMK'leri tarafından kullanılır.
"3DES (3key)" veya "AES (256-bit)", Key Block LMK'ler tarafından kullanılır.
Diğer algoritma türleri, gelecekteki yazılım sürümlerinde desteklenebilir.


Status:

"Test", LMK'nın test amacıyla kullanıldığını belirtir.
"Canlı", LMK'nın canlı prodüksiyon amacıyla kullanıldığını belirtir.
LMK'ları kurarken, HSM, aynı yuva içinde Test ve Canlı LMK'ların karıştırılmasını önleyecektir (yani, LMK Değeri ve Eski/Yeni LMK Değeri aynı statüye sahip olmalıdır).

Comments:

LMK'lerin tanımlanmasına yardımcı olmak için kullanılabilecek, kullanıcı tarafından girilen metin


Authorization:
Indicates the authorization status of the HSM for this particular LMK – either a flag (for Authorized State) or a list of authorized activities

Old/New Status:
Anahtar Değişikliği Deposunda tutulan her LMK için, bunların bir 'eski' LMK ('LO' komutuyla yüklenir) veya bir 'yeni' LMK ('LN' komutuyla yüklenir) olarak mı kullanılacağını belirten bayrak.

LMK Check Value:
The check value of the LMK

Old/New Check Value:
Anahtar Değişikliği Deposunda tutulan 'eski' veya 'yeni' LMK'nın kontrol değeri.

