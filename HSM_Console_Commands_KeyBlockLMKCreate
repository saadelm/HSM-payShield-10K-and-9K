
Key Block LMK Oluşturma!

Load LMK 

LMK oluşturma için yapılması gereken işlemler.

Command: LK

Function: LMK bileşenlerini akıllı kartlardan yüklemek için.

Authorization: Bu komutu çalıştırmak için HSM SECURE(güvenli) durumda olmalıdır

Inputs: 

LMK Tanımlayıcı: 2 sayısal basamak.

LMK bileşenlerine sahip akıllı kartlar (RLMK'ler desteklenir).

Akıllı kartlar veya şifreler için PIN'ler. PIN 60 saniye içinde girilmelidir.

Bu LMK'nın Varsayılan/Yönetim LMK'sı yapılıp yapılmayacağı - aşağıdaki Notlara bakın.

Outputs:

Bireysel LMK bileşeni kontrol değeri/değerleri.

Sürekli olan LMK kontrol değeri.

Notes: For PCI HSM süreci PINs ve smartkartların authencate olması için S.O (SecurityOfficerlara ihtiyac vardır.)

Her bir SO farklı bir smartkartı hsm cihazına insert eder ve PIN değerini girer. Bu sürec LMKları üretirken yapılması gerek sürectir. Burda örnek olarak key block LMK dan bahsedeceğiz.


Errors: 

Geçersiz LMK tanımlayıcısı - LMK yüklenmemiş veya girilen tanımlayıcı aralık dışında.

Yükleme başarısız çek karşılaştırması - kart boş.

LMK kartı değil - HSM ayarları için biçimlendirilmiş kart veya bir lisans kartıdır.

Kart biçimlendirilmemiş - kart biçimlendirilmemiş.

Akıllı kart hatası; komut/dönüş: 0003 - geçersiz PIN girildi.

Geçersiz PIN; yeniden girin - 5'ten az veya 8 basamaktan büyük bir PIN girilir.

Geçersiz anahtar – standart bir Thales test anahtarına canlı durum verilemez.

Uyumsuz anahtar durumu – bileşenlerin farklı durumları vardır ("canlı" veya "test").

Geçersiz anahtar - Birden çok anahtar bileşen gerekli - birden çok bileşeni zorlamak için güvenlik ayarı EVET olarak ayarlandığında, tek bir bileşen kullanılarak bir LMK (test LMK'sı dışında) yüklenmeye çalışıldı.




Ör: KeyBlock LMK Generate

Command : LK komutunu kullanacak işlemlere başlıyoruz. ve LK komutunu girdikten sonra bizdeler LMK ID soracaktır ve keyblock 1 olduğu için 1 işaretleyip enter'a basıyoruz.

