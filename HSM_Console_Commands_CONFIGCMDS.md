Thales Payshield 9K ve 10K Console Commands.

1-) CONFIGCMDS  

Host ve console komutlarının enable ve disable listesinş gösteren komuttur. Tüm komutlar default olarak enable gelir istersek biz disable duruma çekebiliriz.

Komutların enable ve disable olması için takip edilen sytax [+,-] ve [C,H] [Command Code] olacak şekildedir.

“+” belirtilen komutları enable etmemiz için kullanılır.
“-“ belirtilen komuları disable etmemiz için kullanılır.
“C” <Command Code> olarak kullanılır.
“H” <Command Code> olarak kullanılır.

Authorization: Komutları enable/disable etmek için HSM cihazının secure modda olması gerekmektedir.
Ör1:
Online > CONFIGCMDS ;
List of enable Console commands;
GC GS EC FK
List of enable Host commands;
A0 A4 GG GY


Ör-2: İkinci örnek bir konsol komutunu (DE) etklinleştirmek ve console komutunu (A4) devre dışı bırakmak için kullanılan örnektir.

Secure> CONFIGCMDS <Return> 
List of enabled Console commands: 
GC GS EC FK 
List of enabled Host commands: 
A0 A4 GG GY 
Enter command code (e.g. +CDE) or Q to Quit: +CDE <Return> 
List of enabled Console commands: 
GC GS EC FK DE 
List of enabled Host commands: 
A0 A4 GG GY 
Enter command code (e.g. +CDE) or Q to Quit: -HA4 <Return> 
List of enabled Console commands: 
GC GS EC FK DE 
List of enabled Host commands: 
A0 GG GY 
Enter command code (e.g. +CDE) or Q to Quit: Q <Return> 
Save COMMAND settings to smart card? [Y/N]: N <Return> 
Secure> 


Ör: Son örnek tüm komutları devre dışı bırakmak ve ardından sadece “A” ile başlayan console komularını etkinleştirmek için “*” joker karaktereinin kullanan CONFIGCMDS komutunu göstermek için yapılan örnektir.

Secure> CONFIGCMDS <Return> 
List of enabled Console commands: 
GC GS EC FK 
List of enabled Host commands: 
A0 A4 GG GY 
Enter command code (e.g. +CDE) or Q to Quit: -H* <Return> 
List of enabled Console commands: 
GC GS EC FK DE 
List of enabled Host commands: 
Enter command code (e.g. +CDE) or Q to Quit: +HA* <Return> 
List of enabled Console commands: 
GC GS EC FK DE 
List of enabled Host commands: 
A0 A2 A4 A6 A8 AA AC AE AG AS AU AW AY 
Enter command code (e.g. +CDE) or Q to Quit: Q <Return> 
Save COMMAND settings to smart card? [Y/N]: Y <Return> 
Insert card and press ENTER: <Return> 
COMMAND settings saved to the smartcard. 
Secure> 

![Screenshot_2](https://user-images.githubusercontent.com/77227227/195814201-26eb533c-6e97-4e74-a0a8-abf7e240f333.png)

  
  


