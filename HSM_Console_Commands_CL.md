Configure Alarms

Command : "CL"

Function : Hareket alarmını etkinleştirmek veya devre dışı bırakmak için kullanılır. HSM hareket ettirilecekse, HSM alarm devresinin tipik olarak kapatılması gerekir. HSM hizmetteyken veya saklanırken alarm açılmalıdır. Alarm ayarı isteğe bağlı olarak bir akıllı karta kaydedilebilir

Authorization : HSM Cihazının sadece SECURE modunda bu komut çalışır.

Inputs : Hareket alarm statüsü : 

LOW,MEDIUM,HIGH or OFF

SmartCard üzerine ayarlarının kaydetme : yes or no

Outputs : None

Errors : Kart, HSM ayarlarını kaydetmek/almak için biçimlendirilmemiş. Başka bir kartla deneniyor mu? Y/N olacak şekilde hata mesajı verir.

ör-1 : 

![image](https://user-images.githubusercontent.com/77227227/196165705-73575570-c12b-4051-88cc-3c524154b417.png)




öR-2 : less ve more secure dediğimiz iki kavram vardır. Hareket alarmında yüksek veya az güvenli olarak ayarlayabilirsiniz.


![image](https://user-images.githubusercontent.com/77227227/196166595-b164c9f0-ea3d-4075-91d2-8f6a30673e9b.png)

"CL" komutunu girdikten sonra size Motion alarm [Low/Med/High/ofF] (OFF): bir kısım gelecektir. Eğer yüksek güvenlik istiyorsanız "H" olarak yazıp enter'a basmanız gerekmektedir. Eğer düşük alarm seviyesi istiyorsanız da "L" seçeneğini seçip enter'a basmanız gerekmektedir.

