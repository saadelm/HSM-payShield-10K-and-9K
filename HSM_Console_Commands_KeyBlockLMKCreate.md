
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

![image](https://user-images.githubusercontent.com/77227227/195851082-8913a930-9796-465c-a68f-7b5fc939e8cc.png)

Daha sonraki aşamada ise enter command seceneği geliyor ve biz de keyblockLMK için bir commet belirliyoruz Ör:KeyBlockLMK

![image](https://user-images.githubusercontent.com/77227227/195851298-30448c60-28ea-4d24-acc5-8413bce0b6a8.png)

Diğer aşamada insert card and press ENTER : kısmı geliyor ve keyblockLMK smartcard'ının hsm cihazına insert ediyoruz.

![image](https://user-images.githubusercontent.com/77227227/195851533-86a46dc3-cd10-4248-940a-328e0bc7d899.png)

smartcard PIN'i giriyoruz. ve hsm cihazı smartcard'ı kendisi çıkartıyor ve bize check: "examplenumber" değeri veriyor.

Load more components? Y/N şeklinde diğer seçenek geliyor ve başka bir component üretmek istersek yes diyoruz ve diğer lmk smartcardını takıyoruz. yok ise "N" diyoruz ve işlem tamamlanmış oluyor.

![image](https://user-images.githubusercontent.com/77227227/195852160-47d8b0da-29bc-4049-8e9e-21ee9156918d.png)

Confirm Details Y/N : şeklinde seçenek geliyor ve Y dedikten sonra keyblockLMK üretmiş oluyoruz.

En son işlem başarılı bir şekilde tamamlandıktan sonra VT komutu ile keyblock LMK'yı görmek için yazıp çalıştırıyoruz.

![image](https://user-images.githubusercontent.com/77227227/195852708-fd6006fb-2b59-4a48-9218-d311ccd8366f.png)

comment schema algoritma olarak hepsini kontrol edebiliyoruz check kısmında değerleri de yazıyor.












