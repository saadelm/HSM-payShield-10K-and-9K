View Security Configuration

Command : QS

Function: HSM'nin güvenlik yapılandırmasını ve bazı işleme parametrelerini ve ayrıca LMK kontrol değerini raporlar.

"QS" Komutunun Çıktısı

![image](https://user-images.githubusercontent.com/77227227/195853940-849b7a9c-9964-435f-b67e-84610756461b.png)

Inputs: None

Outputs: See example below

Notes: Yazılımın PCI HSM sertifikalı olduğu durumlarda, PCI HSM uyumlu olması için bir dizi güvenlik ayarının aşağıdaki gibi belirli değerlere sahip olması gerekir.


Kart/şifre yetkilendirmesi (yerel) – "C" olmalıdır

PCI uyumluluğu için PIN bloğu kullanımını kısıtlayın – "EVET" olmalıdır (payShield 9000 Genel Bilgi Kılavuzunun 6. ve 10. Bölümlerine bakın)

PCI HSM uyumluluğu için anahtar türü 002 ayrımını uygula – "EVET" olmalıdır


NOT: "CS" komutu ile de "QS" komutudaki çıktıları ve ayarları configurasyon etmek için kullanılır.

![image](https://user-images.githubusercontent.com/77227227/195858484-8f9958a5-f863-4b8a-b013-72c4bbec05f4.png)

gerekli configurasyonları yapabilirsiniz ancak LMK yı silmeniz gerekmektedir. Tüm ayarları yapmak istiyorsanız!!!!!
