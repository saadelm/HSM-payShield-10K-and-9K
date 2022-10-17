View Alarm Configuration

Command : "QL"

Function : "Alarm konfigürasyonunun detayını göstermek için kullanılır.

Authorization : Bu komutu çalıştırmak için herhangi bir yetki gerekmemektedir.

Inputs : None

Outputs : 

Hareket Alarm Durumu

Sıcaklık alarm Durumu

Errors : None

ÖR-1 :

"CL" komutu ile konfigürasyon ettikten sonra "QL" komutu ile çıktısını görebiliriz.Biz yüksek seviyede güvenlik ayarı
oluşturduğumuz için çıktıyı ona göre verecektir.

![image](https://user-images.githubusercontent.com/77227227/196167917-008b41ea-efde-455d-9b27-a5d402554382.png)

Görsel de gördüğünüz üzere Motion alarm enabled high sensitivity olarak gözükmetedir. Şimdi "CL" komutunu kullanarak less secure
seviyesine çektikten sonra tekrar "QL" komutunu çalıştıralım ve çıktısına bakalım.

ÖR-2

![image](https://user-images.githubusercontent.com/77227227/196168227-3bd49610-e33f-42f1-a8ed-31fd8b05b444.png)

ÖR-2 de görüldüğü üzere "CL" komutu ile hareket alarm komutunu çalıştırdık ve LOW olarak seçtik ve ayarlamasını yaptık sonrasında
"QL" komutunu çalıştırdığımız da bize vermiş olduğu çıktı Motion alaram enabled low sensitivity şeklindedir.

Umarım yapmış olduğumuz demo faydalı olmuştur.
