View Host Port Configuration

Command : "QH"

Function : HSM Cihazında host port configurasyonlarını detaylı çıktısını verir.

örnek "QH" Komut Çıktısı

![image](https://user-images.githubusercontent.com/77227227/195871690-879d2dc6-7448-40be-bd87-b0bbe87f7ed9.png)

Inputs: None

Outputs: Tüm sistemler için.

İleti başlığı uzunluğu. Bu, Host'tan HSM'ye (STX karakterinden sonra) her komutun önündeki karakter sayısıdır. HSM, yanıtta ileti başlığını döndürür.
Kullanılan protokol

Asenkron bir sistem için:

Ana bilgisayar baud hızı.

Ana bilgisayar sözcük biçimi.

Tepki gecikmesi. Bu, HSM'nin Ana Bilgisayara yanıt vermesinden önceki gecikmedir. Bir komutun iletimi ile HSM'den gelen yanıt arasında tanımlı bir gecikme gerektiren yarı çift yönlü Ana Bilgisayar iletişimlerinin kullanılmasına izin verir.

Ethernet sistemi için:

Tanınmış Liman. Bu, HSM'nin genelleştirilmiş TCP Bağlantı Noktası adresidir.

Aktarım yöntemi: TCP veya UDP.

TCP bağlantılarının sayısı. Her ana bilgisayar arabirimi bu sayıda bağlantıyı destekler.

Her ana bilgisayar arabiriminin IP adresi ve bunların nasıl türetildiği. Bu, sistemdeki HSM'nin İnternet Protokolü adresidir.

Her ana bilgisayar arabirimi için alt ağ maskesi. Bu, bağlı TCP/IP ağının alt ağ maskesidir. Yönetim Ethernet Bağlantı Noktası, Ana Bilgisayar 1 Ethernet Bağlantı Noktası ve Ana Bilgisayar 2 Ethernet Bağlantı Noktasının birbirinden farklı IP alt ağlarında olması önerilir.

Her ana bilgisayar arabirimi için bağlantı noktası hızı.


Güvenli Ana Bilgisayar İletişiminin kullanılıp kullanılmadığı.

ACL'lerin kullanılıp kullanılmadığı


Ör-1: 

![image](https://user-images.githubusercontent.com/77227227/195872798-ccc3b4d5-ed88-4800-82c6-29668badabed.png)

