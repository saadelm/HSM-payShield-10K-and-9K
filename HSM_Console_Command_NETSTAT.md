Show Network Statistics (Ağ Yapılandırmasını Gösterir)

Function : HSM network aktivitelerini yapılandırmasını ve güvenlik ayarlarının gösterilmesini sağlar. Managment ve Host portlarının aktif olup olmadığıın ve durumlarının gösterir. 

HSM, kendisiyle iletişim kuran her 'endpoint' hakkında bilgi toplar. Kaydedilen bilgiler, paketi göndermek için kullanılan protokole bağlı olacaktır.

Auth: Yetkilendirme gerekmez.

Inputs : Syntax

Aktif olan socket protokolünü gösterir : netstat [-AanT] [-f address_family]

Diğer ağ veri yapılarından birinin içeriğini görüntüler : netstat [-dgiLmnrsTv] [-f address_family]

Arayüzlerle ilgili olarak yapılandırılmış ağdaki bilgi paketi trafiğini (bekleme aralığına göre) sürekli olarak görüntüleyin: netstat [-dnT] [-I arayüzü] [-w bekle]

Adlandırılmış protokolle ilgili istatistikleri görüntüler : netstat [-Tcp protokolü]

Belirtilen protokol için arayüz başına istatistikleri görüntüler : netstat [-p protokolü] [-iT] [-I arayüzü]

Belirtilen adres ailesi için arabirim başına istatistikleri görüntüler : netstat [-sT] [-f address_family] [-i] [-I arayüzü]


Parametreler : 

-A                      Soketlerle ilişkili tüm protokol kontrol bloklarının adreslerini gösterin.

-a                      Tüm soketlerin durumunu göster. -a olmadan, sunucu işlemleri tarafından kullanılan soketler gösterilmez.

-d                      (DROP)edilen paketlerin sayısını göster.

-f address_family       belirtilen adres ailesinden olanlar.
                        Adres ailesi address_family değeri
                        AF_INET
                        AF_INET6
                        AF_LOCAL yerel veya unix
                        AF_ARP arp


-g                    Çok noktaya yayın (grup adresi) yönlendirmesi ile ilgili bilgileri gösterin. Varsayılan olarak, IP Çok Noktaya Yayın sanal arabirimini ve yönlendirme tablolarını gösterin. -s ayrıca belirtilirse, çok noktaya yayın yönlendirme istatistiklerini gösterin.


-I interface :        -w ile kullanılıyorsa, yalnızca belirtilen arabirimle ilgili bilgileri gösterin.
                      -f address_family ve -s ile veya -p protokolü ile birlikte kullanılıyorsa, arayüzde arayüz başına istatistikleri göster

                      
-I
Otomatik olarak yapılandırılan arabirimlerin durumunu gösterin. Bir sistemde statik olarak yapılandırılmış ancak önyükleme sırasında bulunmayan arabirimler gösterilmez.

-a'yı da belirtirseniz, her Ethernet arabirimi ve her IP arabirim adresi için şu anda kullanımda olan çok noktaya yayın adreslerini gösterin. Çok noktaya yayın adresleri, ilişkili oldukları arabirim adresini izleyen ayrı satırlarda gösterilir.

-f address_family ve -s veya -p protokolü ile birlikte kullanılıyorsa, sırasıyla address_family veya protokol için arabirimde arabirim başına istatistikleri göster

-L
Bağlantı düzeyinde yollar gösterme (örneğin, IPv4 ARP veya IPv6 komşu önbelleği).

-m
Bellek yönetimi rutinleri tarafından kaydedilen istatistikleri gösterin (ağ, özel bir bellek arabellek havuzunu yönetir).

-n
Ağ adreslerini sayı olarak göster (normalde netstat adresleri yorumlar ve sembolik olarak göstermeye çalışır).

-p protokolü
Bir protokol için iyi bilinen bir ad veya bunun için bir takma ad olan protokolle ilgili istatistikleri gösterin. Boş bir yanıt, tipik olarak, rapor edilecek ilginç bir sayı olmadığı anlamına gelir. Yardımcı program, protokolün bilinmemesi veya bunun için bir istatistik rutini olmaması durumunda şikayet eder.

-r
Yönlendirme tablolarını göster. -s ayrıca belirtilirse, bunun yerine yönlendirme istatistiklerini gösterin.

-s
Protokol istatistiklerine göre göster. Bu seçenek tekrarlanırsa sıfır değerine sahip sayaçlar bastırılır.

-T
Ad aramaları için TCP kullanın (varsayılan UDP'dir).

-v
Yönlendirme tabloları (-r) için fazladan (ayrıntılı) ayrıntı gösterin veya uzun adresleri kesmekten kaçının.

-w(wait)
Ağ arabirimi istatistiklerini görüntülemek için zaman aralığını belirtin.


![image](https://user-images.githubusercontent.com/77227227/196636232-050f1021-931c-4e04-9568-1ab4101224ef.png)


