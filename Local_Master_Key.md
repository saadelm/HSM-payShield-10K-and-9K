LOCAL MASTER KEY (LMK)

LMK Tipleri ; iki kısıma ayrılık Variant LMK, Key Block LMK

Bir Varyant LMK, farklı anahtar türlerini şifrelemek için kullanılan farklı "pairs" ve bu "pairs" varyantları ile 20 adet çift veya üçlü uzunlukta TDES anahtarından oluşan bir settir. 
"Pairs" teriminin, LMK'nın çift uzunluktaki anahtarlardan mı yoksa üç uzunluktaki anahtarlardan mı oluştuğuna bakılmaksızın kullanıldığını unutmayın. 
Thales (Racal) HSM ürün yazılımının önceki tüm sürümlerinde desteklenen standart LMK formatı, 20 adet çift uzunluklu TDES anahtarından oluşur.

NOT : "Varyant LMK" terimi, varyantların LMK'yı kullanmadan önce LMK'ya uygulandığı gerçeğine atıfta bulunur; 
Bir Varyant LMK, kendisi başka bir anahtarın bir varyantı değildir.


Bir Anahtar Bloğu LMK, ya üç uzunlukta bir TDES anahtarı ya da 256 bitlik bir AES anahtarıdır ve anahtarları bir anahtar bloğu biçiminde şifrelemek için kullanılır.
Anahtar Bloğu LMK, Varyant LMK ile uyumlu değildir ve yalnızca anahtar bloğu biçimindeki anahtarları şifrelemek için kullanılabilir.

Not: "Key Block LMK" terimi, anahtarları şifrelemenin 'anahtar bloğu' yöntemini ifade eder; bir Anahtar Blok LMK, kendisi anahtar blok formatında saklanmaz.


Variant ve Key Block LMK arasındaki farklardan bahsetmiş olduk. Ayrıca payshield hsm cihazlarında LMK anahtarları tutulur.

LMK altında ZMK key üretimleri ve paylaşım süreçleri de yapılmaktadır.
