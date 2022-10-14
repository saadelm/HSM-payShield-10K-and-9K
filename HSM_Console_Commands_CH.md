
Configure Host Port

Command : CH

Function : Ana bilgisayar bağlantı noktasını, aşağıdakilerden biri olabilecek bir tür veri iletişim ekipmanı ve kontrol ekipmanına öykünecek şekilde yapılandırmak için:

Standart asenkron emülasyon.

Şeffaf asenkron emülasyon.

Ethernet.

FICON

Ana bilgisayar bağlantı noktası ayarı isteğe bağlı olarak bir akıllı karta kaydedilebilir. Yeni ayarlar, komut tamamlandıktan hemen sonra devreye girer. Yönetim Ethernet Bağlantı Noktası, Ana Bilgisayar 1 Ethernet Bağlantı Noktası ve Ana Bilgisayar 2 Ethernet Bağlantı Noktasının birbirinden farklı IP alt ağlarında olması önerilir.


Authorization : HSM bu komutu çalıştırması için Offline ya da Secure modunda olmalıdır. (Online mode çalıştırmaz)


Inputs : Secenekleri istelilen duruma göre konfigürasyon işlemi tamamlanır.


ör-1 : 

![image](https://user-images.githubusercontent.com/77227227/195867664-6b708748-9d36-442f-9790-e6d077a34d6d.png)

not: "CH" komutunu kullanarak gerekli ayarlamaları istenilen duruma göre yapılandırabiliyorsunuz. Ör: IP adresi, subnet, TLS, TCP, UDP vs gibi ayarlamaları gerçekleştirebiliyorsunuz. Eğer HSM cihazından daha önceden config yapılmış ve düzelmek istiyorsanız  "Save HOST settings to smart card? [Y/N]:" Y olarak işaretlemeniz gerekmektedir. Ancak bu süreçte LMK erase edilir ve tekrardan üretilir.


 
