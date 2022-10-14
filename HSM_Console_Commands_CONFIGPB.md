
Command : CONFIGPB

Etkinleştirilmiş PIN engelleme biçimlerinin listesini görüntülemek ve (güvenli durumdaysa) ayrı PIN engelleme biçimlerini etkinleştirmek veya devre dışı bırakmak için kullanılır.

Authorization : PIN blok formatlarını etkinleştirmek/devre dışı bırakmak için HSM güvenli durumda olmalıdır. PIN Blok biçimi etkinleştirmenin mevcut durumu herhangi bir durumda görüntülenebilir.

Input: PIN Block Format beliryicisi.
output: PIN Blocak Format enable listesini gösterir.

Errors: Invalid entry

Ör-1 : Bu örnek, etkinleştirilmiş PIN blok biçimlerinin listesini görüntülemek için CONFIGPB konsol komutunun kullanımını gösterir.

![1111](https://user-images.githubusercontent.com/77227227/195834979-1a9a3a4b-f4f3-4110-bb22-e222e41d8047.png)


Ör-2: Bu örnek, HSM PIN Blok biçimi 03'ün kullanımını etkinleştirmek için CONFIGPB konsol komutunun kullanımını gösterir.

![image](https://user-images.githubusercontent.com/77227227/195835560-394e658d-f6a9-452e-addc-837bc5139e89.png)

not: +03 olarak komutu girdiğimizde ve daha sona "Q" ile çıkış yaptıktan sonra bize hsm cihazına smartcard insert etme işlemini yapmamızı isteyecektir ve daha sonrasonda "N" diyerek işlemi tamamlamış oluyoruz. Bu kısımdaki amacımız ise yapılan configurasyonun kart üzerine eklenmesidir.
