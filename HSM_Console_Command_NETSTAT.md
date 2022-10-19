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

                      





