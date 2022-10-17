View/Change Instantaneous Utilization Period (Anlık Kullanım Süresi Değişim)

Command : UTILCFG

Function : Anlık Kullanım Verileri istendiğinde kullanım istatistiklerinin toplanacağı dönemin mevcut ayarını görüntülemek için kullanılır.
Bu komut, ayarın değiştirilmesine de izin verir (sadece offline/Secure durumlarda).

Authorization : Bu komutu çalıştırmak için yetkilendirme gerektirmez.

Inputs:  Anlık Kullanım Süresi için değiştirilen değerler.
Outputs: Değerin sıfırlanmasının HSM'nin Offliene veya Secure durumda olmasını gerektirdiğini unutmayın.

NOT: Çok kısa sürelerde toplanan veriler fiili faaliyetin göstergesi olmayacağından, sürenin 10 saniyeden az olarak ayarlanmaması önerilir.



"UTILCFG" komutunu çalıştırdıktan sonra bize verilerin kaç saniyeye göre ayarlandığını gösterir. Biz değiştirmek isterdiğimiz "tilcfg" komutunu çalıştırdıktan sonra change 
edip etmeyeceğimizi sorar eğer "Y" dedikten sonra yeni saniye değerini girmemiz gerekmektedir. Not olarak bahsettiğim kısımda kısa sürede
toplanan veriler fiili faaliyetlerin göstergesi olmayacağından en az 10 saniyenin üstünde olması gerekmektedir.

Örnek-1 : 

![image](https://user-images.githubusercontent.com/77227227/196178541-f8597790-ace9-4b75-bb8c-3caa0f66ae60.png)

"Measurement period for instantaneous statistics is 10 seconds" bu şekilde bir yazı gelecektir. Komutu çalıştırdıktan sonra Change "Y" dedikten sonra
saniyeyi giriyoruz ve enter'a basıyoruz ve ilgili işlemi gerçekleştirmiş oluyoruz/

![image](https://user-images.githubusercontent.com/77227227/196180513-9c2f22bf-054d-4fce-9c17-4ae38e5b83e5.png)
