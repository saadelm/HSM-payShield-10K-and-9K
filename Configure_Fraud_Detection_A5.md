 Fraud Detection Command (Dolandırıcılık Komutları)
 
 Command : A5
 
 Function : HSM dolandırıcılık algılama işlevinin yapılandırmasını ayarlamak için kullanılır.
 
 Authorization : Fraud Detection için ayarlamasının yapılması için HSM Cihazının offline ya Secure modda olması gerekir. Ya da activity kısmının audit.console olması gerekmektedir.
 
 Inputs :
 
Dolandırıcılık Tespitine yanıt verilip verilmeyeceği ve nasıl yanıtlanacağı
Dakika başına PIN doğrulama hatası sayısı sınırını belirler.
Saat başına PIN doğrulama hatası sayısı sınırını belirler.
Tespit edilen PIN saldırılarının sayısı sınırını belirler.

Errors: 

Yetki yok hatası alınabilir.
Not Offline hatası alınabilir.


Ör-1 :

Secure-AUTH> authorization olduktan sonra "A5" komutunun çıktısını alabilir. Ayrıca activity kısmı authorized olmadığı için çıktı olarak belirtiyor.

![image](https://user-images.githubusercontent.com/77227227/196619494-6bb85ae0-b2f8-49fe-bfad-341e7421b877.png)
