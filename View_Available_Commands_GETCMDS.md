View Available Commands (Uygun Olan Komutların Görüntülenmesi)

Command :GETCMDS

Function : açık olan ve uygun olan çalıştırılabilir olan host ve console komutlarının listesini gösterir.

Bireysel komutların kullanılabilir olup olmadığını kontrol eden üç özellik vardır:

Komutun kurulu bellenimde uygulanıp uygulanmadığı
Komutun kullanım için lisanslanıp lisanslanmadığı yani kurulu lisansa dahil olup olmadığı. Yalnızca ana bilgisayar komutlarının (konsol komutlarının değil) bu şekilde denetlendiğini unutmayın;
Komutun CONFIGCMDS konsol komutları kullanılarak (veya payShield Manager aracılığıyla) etkinleştirilip etkinleştirilmediği.

Not: Listelenen komutlardan bazıları, ek lisans seçeneklerinin etkinleştirilmesini gerektirebilir. Örneğin, EI komutu, doğru çalışması için RSA algoritmasının lisansa dahil edilmesini gerektirir.

Authorization : Herhangi bir yetki gerektirmez.

Inputs : [-hl]

Switch      Description
<blank>     Uygulanan, lisanslanan ve etkinleştirilen tüm ana bilgisayar ve konsol komutlarının bir listesini görüntüleyin.
  
-h          Uygulanan, lisanslanan ve etkinleştirilen ana bilgisayar ve konsol komutlarının bir karmasını görüntüleyin. (CONFIGCMDS konsol komutu kullanılarak komutların etkinleştirilmesi/devre dışı bırakılmasından etkilenir.)
  
-l          Uygulanan, lisanslanan tüm ana bilgisayar ve konsol komutlarının bir listesini görüntüleyin. (CONFIGCMDS konsol komutu kullanılarak komutların etkinleştirilmesi/devre dışı bırakılmasından etkilenmez.)

  
 Outputs : Uygun olan HSM komutları listeler.
  
  
  ![image](https://user-images.githubusercontent.com/77227227/196630413-dac85cab-c9c6-436d-9542-d674666b7424.png)
