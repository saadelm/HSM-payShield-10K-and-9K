View Software Revision Number ( Yazılım Revizyon Numarasını Görüntüleme)

Command : VR

Function : Yazılım revizyon numarasını release numarası ve build numarasını görüntüler.

Aut : Herhangi bir yetkilendirme işlemine gerek yok.

Inputs : None

Outputs : Yazılım revizyon numarası

Errors: None

VR komutu tarafından bildirilen yazılım revizyonu aşağıdaki formlardan birine sahip olacaktır:
xxxx-19xx – bu, bu yazılımın PCI HSM sertifikalı olduğunu ve uygun güvenlik ayarlarının (örn. CS Konsolu komutunu kullanarak) gerekli değerlere ayarlandığını gösterir.
xxxx-09xx – bu, aşağıdakilerden birini gösterir.
Yazılımın bu sürümü PCI HSM sertifikalı değil veya Yazılımın bu sürümü PCI HSM sertifikalıdır, ancak uygun güvenlik ayarlarından bir veya daha fazlası (örn. CS Konsolu komutu kullanılarak) gerekli değerlere ayarlanmıştır.
3.0 ve üzeri yazılım sürümleri için, tüm RSA işlemleri otomatik olarak hızlandırılır ve bu nedenle, RSA Booster isteğe bağlı lisansı (HSM9-LIC033) artık kullanımda değildir ve VR komutunun çıktısında görünmez.

Ör-1: 

![image](https://user-images.githubusercontent.com/77227227/196627280-13e0a5b0-f8b0-4e81-baa4-5cef533a3d1a.png)
