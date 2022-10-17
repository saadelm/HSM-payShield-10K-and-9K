Suspend/Resume Collection of Utilization Data ( Kullanım Verilerini Enable/Disable Edilmesi)

Command : UTILENABLE

Function : Kullanım Verilerinin toplanmasını ve verilerin toplandığı saniye sayısını artırmayı askıya almak veya sürdürmek için kullanılır. 
Örneğin HSM'nin hizmet dışı kalması veya geçici olarak yeniden kullanılması durumunda veri toplamanın askıya alınmasına izin verir. 
Toplam geçen süre üzerinden komut hacimlerinin ortalaması alınarak tps oranlarının seyreltilmemesini, ancak yalnızca verilerin toplandığı süre boyunca seyreltilmesini sağlar.

Authorization: Bu komutu çalıştırma için yetki gerektirmez.
INPUTs : Mevcut Durumun değiştirilip değiştirilmeyeceğinin girdisi.
Outputs : Mevcut Durumun çıktısı

NOT : HSM çevrimiçi(online) olmadığı durumda veri toplama otomatik olarak askıya alınır.


![image](https://user-images.githubusercontent.com/77227227/196182945-082345fd-b204-4167-b9fa-1f87bf1a2a51.png)
