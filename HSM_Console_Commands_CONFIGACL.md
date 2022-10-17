Host Port Access Control List (ACL)

Command : CONFIGACL

Function : HSM'nin ana bilgisayar bağlantı noktaları için Erişim Kontrol Listelerini (ACL'ler) görüntülemek ve değiştirmek için. CH konsol komutu kullanılarak ACL denetimi etkinleştirildiğinde, ana bilgisayarlardan gelen trafik, yalnızca ana bilgisayarın IP adresinin bu komut kullanılarak ayarlanan ACL girişlerinden birine dahil edildiği durumlarda kabul edilir.

Input : Kullancı girişleri görüntüleyebilir/eklenir/silinir. Girişler değiştirilemez.

Output : Sadece Hatalar(Errors) ve Onaylar

Ör-1 : CONFIGACL komutunu çıktısı:

![image](https://user-images.githubusercontent.com/77227227/196141827-40e406a3-e63f-4998-86ea-42bdc7b43d94.png)

Add/Delete/Quit seçeneklerimiz bulunmaktadır. ve aynı zamanda çıktı olarakta single range ve mask olarak gözükmektedir. Bizlere Type olarak ne eklemek istediğimizi burda soruyor ve biz "A" seçeneğini çalıştırdıktan sonra bize hangi type da olan kısmı eklememiz gerektiğini soruyor "Single/Range/Mask" olacak şekilde

![image](https://user-images.githubusercontent.com/77227227/196142073-6555b3b6-5587-4a17-a053-50092c3971e1.png)

Bu kısımdan sonra  Single/Range/Mask kısımlarına IP adreslerini eklememiz gerekmektedir.

![image](https://user-images.githubusercontent.com/77227227/196142593-58b3261e-dffc-44e7-b9e4-cd0e7360640f.png)

IP adresini ekledikten sonra IP üzerinden geçen trafik akışını takip edebiliriz.

