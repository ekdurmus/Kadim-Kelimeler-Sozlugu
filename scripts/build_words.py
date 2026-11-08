# -*- coding: utf-8 -*-
import json
import re

raw_input = """
Ab-ı hayat: Ölümsüzlük suyu, hayat suyu.

Ehlivukuf: Bilirkişi, anlayan, işin ehli olan kimse.

Mütefekkir: Düşünür, fikir adamı.

Müstesna: İstisnai, benzerlerinden farklı, seçkin.

Feraset: Seziş, anlayış, zeka, olayları önceden sezme yeteneği.

Kenz: Hazine, gizli hazine, kıymetli şey.

Nigar: Resim, güzel yüzlü sevgili.

Dilhun: Yüreği kan ağlayan, çok üzgün.

Serapa: Baştan başa, tamamen.

Meftun: Tutkun, aşık, hayran.

Girift: Karmaşık, çözülmesi zor, karışık.

Züppe: Görgü kurallarını yanlış veya aşırı uygulayan, yapmacık kimse.

Mümtaz: Seçkin, imtiyazlı, üstün.

Mükellef: Eksiksiz, zengin, donanımlı (örn. mükellef sofra).

Serhad: Sınır boyu, uç beyliklerinin bulunduğu yer.

Nazenin: Çok nazlı, incitmekten korkulan, zarif.

Mecalim: Güçler, takatlar, dermanlar.

Gubar: Toz, toprak.

Nev-javan: Genç, taze delikanlı.

Ahenk: Uyum, düzen.

Zaman-ı kadim: Eski zamanlar, kadim devirler.

Misvak: Diş temizliğinde kullanılan bitkisel çubuk (metaforik olarak temizlik/öz anlamında da kullanılır).

Cihanpesent: Cihanın beğendiği, dünya çapında güzel.

Şule: Alev, parlaklık.

Zînet: Süs, ziynet eşyası.

Zülfüyâr: Sevgilinin zülüflü saçı (hassas noktalar, dokunulmaması gereken yerler anlamında kullanılır).

Efsunkâr: Büyülü, büyüleyici.

Rûzigâr: Zaman, devir, rüzgar.

Safderun: Saf, kolayca aldatılabilen, temiz kalpli.

Tevekkül: Allah'a güvenme, kadere razı olma.

Vuslat: Kavuşma, sevgiliye kavuşma anı.

Hicran: Ayrılık acısı, hasret.

İclal: Saygı göstergesinde bulunma, ululama.

İllet: Hastalık, sebep, kusur.

Kevser: Cennetteki bir nehir, bol nimet.

Mecnun: Deli, çılgınca aşık.

Mehtap: Ay ışığı.

Mihnet: Sıkıntı, eziyet, çile.

Muvaffak: Başarılı.

Mücevher: Değerli taş.

Nasihat: Öğüt.

Nefis: Öz, can, hoş, güzel.

Nihayet: Son, sonuç.

Pak: Temiz, lekesiz.

Pervane: Işığın etrafında dönen kelebek, aşık.

Rehber: Kılavuz, yol gösterici.

Sema: Gökyüzü, gök.

Semender: Ateşte yaşayabildiğine inanılan efsanevi hayvan.

Şefkat: Acıma ve sevgi hissi.

Şiir: Duygu ve hayal uyandıran söz sanatı.

Tahammül: Dayanma, katlanma gücü.

Tekamül: Olgunlaşma, evrim, gelişme.

Temenni: Dilek, arzu.

Ülfet: Dostluk, alışkanlık, samimiyet.

Ümit: Umut.

Vefa: Sözünde durma, sevgide sebat etme.

Vicdan: İnsanın ahlaki değer yargısı.

Yadigar: Hatıra, anı.

Zarafet: İncelik, naziklik.

Zenginlik: Varlık, bolluk.

Aba vakti aba, yaba vakti yaba alınır (Atasözü): Her şeyin vaktinde ve zamanında tedariki yapılmalıdır.

Ak akçe kara gün içindir (Atasözü): Kazanılan paralar zor günler için biriktirilmelidir.

Damlaya damlaya göl olur (Atasözü): Küçük şeyler birikerek büyük varlıklar oluşturur.

El elin eşeğini türkü çağırarak arar (Atasözü): Başkalarının derdi insanı kendi derdi kadar üzmez, eğlence sanılır.

Görünen köy kılavuz istemez (Atasözü): Açık olan, ortada duran durumlar için delil arama gereği yoktur.

Lafla peynir gemisi yürümez (Atasözü): Sadece söz vererek, çalışmadan iş yapılmaz.

Sakla samanı gelir zamanı (Atasözü): Görünüşte önemsiz görülen şeyler bir gün mutlaka lazımdır.

Sütten ağzı yanan ayranı üfleyerek içer (Atasözü): Bir kez zarara uğrayan kişi, benzer durumlarda aşırı temkinli davranır.

Zahmetsiz rahmet olmaz (Atasözü): Emek verilmeden başarı veya kazanç elde edilemez.

Ağaç yaşken eğilir (Atasözü): Çocuklar küçük yaşta kolay eğitilir, yönlendirilir.

Aba altından sopa göstermek (Deyim): Açıkça korkutmayarak, üstü kapalı gözdağı vermek.

Etekleri zil çalmak (Deyim): Çok sevinmek, neşelenmek.

Göz boyamak (Deyim): Başkasını aldatmak, kandırmak, gerçekleri gizlemek.

İpe un sermek (Deyim): İşi yokuşa sürmek, bahaneler üreterek işten kaçınmak.

Kılı kırk yarmak (Deyim): Bir işte çok titiz davranmak, en ince detayına kadar incelemek.

Pireyi deve yapmak (Deyim): Önemsiz bir olayı büyütmek, abartmak.

Pot kırmak (Deyim): Yersiz veya düşüncesizce bir söz söylemek, gaf yapmak.

Çam devirmek (Deyim): Farkında olmadan karşısındakini kıracak ya da zor durumda bırakacak söz söylemek.

Sinek avlamak (Deyim): İşsiz kalmak, iş yapamamak, müşteri olmamak.

Horoz ölür, gözü çöplükte kalır (Deyim): İnsan alışkanlıklarından ve zaaflarından asla vazgeçemez.

Muazzam: Çok büyük, devasa, hayranlık uyandıran.

Müstakim: Doğru yoldan ayrılmayan, dürüst.

Nâçiz: Değersiz, önemsiz (alçakgönüllülük ifadesi).

Mütekamil: Olgunlaşmış, gelişmiş.

Mütereddit: Kararsız, tereddüt eden.

Münhasıran: Yalnızca, sadece.

Mütehassıs: Uzman.

Müteselsil: Zincirleme, birbirine bağlı olarak sürüp giden.

Müsamaha: Hoşgörü.

Müşkülpesent: Zor beğenen, titiz.

Halis muhlis: Katıksız, saf, hakiki.

Mecazî: Gerçek anlamı dışında kullanılan.

Müessir: Etkileyen, tesirli.

Muktedir: Gücü yeten, iktidar sahibi.

Muasır: Çağdaş.

Mülhem: İlham olunmuş, içe doğmuş.

Mülayim: Yumuşak huylu.

Müstakil: Bağımsız, ayrı, kendine ait.

Müessese: Kurum, kuruluş.

Mükrim: İkram etmeyi seven, konuksever.

Müşkül: Güç, çetin, zorluk.

Mütereddit: Kararsız, çekingen, tereddütlü.

Mümtaz: Seçkin, ayrıcalıklı, üstün nitelikli.

Müesses: Kurulmuş, temeli atılmış.

Müeccel: Ertelenmiş, vadesi sonraya bırakılmış.

Müstesna: İstisnai, benzersiz, eşsiz.

Müşfik: Şefkatli, merhametli, koruyup kollayan.

Münzevî: Toplumdan uzaklaşarak tek başına yaşayan, köşesine çekilmiş.

Mütereddî: Alçalmış, bozulmuş, yozlaşmış.

Müessif: Üzücü, teessüf gerektiren.

Mükâfat: Ödül, karşılık.

Mükrim: İkram sever, konuk ağırlamaktan hoşlanan.

Müteessir: Üzülmüş, duygulanmış, müteessir olan.

Mütefekkir: Düşünür, fikir ve felsefe insanı.

Müftehir: Övünen, gurur duyan.

Müsamahakar: Hoşgörülü, anlayışlı.

Müntesip: Bir yere, bir mesleğe veya akıma bağlı olan, mensup.

Müstakbel: Gelecek, ileriki zaman.

Mübeccel: Yüceltilmiş, saygıdeğer, ululanmış.

Müdafaa: Savunma, koruma.

Müteredditâne: Kararsız bir şekilde, tereddütle.

Müheyya: Hazır, hazırlanmış.

Mülevves: Kirli, pisletilmiş, bulaşık.

Mütekait: Emekli.

Münhal: Boş (kadro, memuriyet vb.).

Müellif: Yazar, eser sahibi.

Mütemadiyen: Aralıksız, sürekli olarak, durmaksızın.

Mübaşir: Duruşma salonunda düzeni sağlayan adliye görevlisi.

Mütereddet: Tereddüt eden, kararsız kalan.

Mücerret: Soyut, yalnız, tek başına.

Mukim: Bir yerde oturan, ikamet eden.

Muktebes: Alıntı yapılmış, iktibas edilmiş.

Muktedir: Gücü yeten, iş başarmaya muktedir olan.

Mukavemet: Direnç, karşı koyma gücü.

Mukaddeme: Önsöz, giriş bölümü.

Mukaddes: Kutsal, mübarek.

Mukteza: Gereken, icap eden, lüzumlu şey.

Mukayese: Karşılaştırma, kıyaslama.

Mukadderat: Yazgı, kader, önceden belirlenmiş durumlar.

Mukabil: Karşılık olarak, mukabilinde.

Muazzam: Devasa, görkemli, çok büyük.

Muasır: Çağdaş, asrın insanı, modern.

Muavenet: Yardımlaşma, imdat etme.

Muhafazakâr: Geleneklerine, değerlerine bağlı kalan, tutucu.

Muallak: Askıda kalmış, belirsiz, karara bağlanmamış.

Muhatap: Söz söylenen kimse, karşılıklı konuşan kişi.

Muhtelif: Çeşitli, türlü, farklı.

Muhteva: İçerik, bir eserin veya yazının özü.

Muazzip: Eziyet çeken, azap içinde olan.

Muhayyile: Hayal gücü, tasavvur yeteneği.

Muhakeme: Akıl yürütme, değerlendirme, yargılama.

Muhalif: Aykırı düşen, karşı çıkan.

Muallim: Öğretmen, eğitmen.

Muhabbet: Sevgi, dostça sohbet, tatlı dil.

Muhacir: Göçmen, yurdunu bırakıp başka yere göç eden.

Muzaffer: Zafer kazanmış, başarı elde etmiş.

Müstear: Takma (isim, ad).

Müteredditçe: Şüpheci ve kararsız bir tavırla.

Mürşit: Doğru yolu gösteren kılavuz, rehber, uyarıcı.

Mecâra: Macir, akış yeri, macera alanı.

Ak koyun kara koyun geçidinde belli olur (Atasözü): Bir kişinin veya durumun gerçek değeri, kritik bir iş veya sınav sırasında ortaya çıkar.

Dost ile ye, iç, alışveriş etme (Atasözü): Yakın arkadaşlarla ticari ilişkilerde bulunmak anlaşmazlıklara ve dostluğun bozulmasına yol açabilir.

Hamama giren terler (Atasözü): Zor veya zahmetli bir işe girişen kimse, o işin sıkıntılarına katlanmak zorundadır.

İti an çomağı hazırla (Atasözü): Hakkında konuşulan kötü veya kavgacı bir kimse aniden ortaya çıkıverir.

Mum dibine ışık vermez (Atasözü): Bir kimse başkalarına çok faydalı olabilir ama kendi yakınlarına veya çevresine bu yardımı ulaştıramaz.

Ne doğrarsan aşına, o çıkar kaşığına (Atasözü): İnsan dünyada ne kadar emek ve çaba harcarsa, karşılığında ancak o kadarını elde eder.

Rüzgâr eken fırtına biçer (Atasözü): Kötülük yapan, etrafına huzursuzluk saçan kimse katbekat büyük bir bela ile karşılaşır.

Samanlıkta iğne aramak (Atasözü/Deyim): Son derece zor veya bulunuşu imkansız bir şeyi aramaya çalışmak.

Taşıma su ile değirmen dönmez (Atasözü): Sınırlı ve dışarıdan gelen geçici imkânlarla büyük veya sürekli bir iş yürütülemez.

Yalancının mumu yatsıya kadar yanar (Atasözü): Söylenen yalanlar bir süre sonra mutlaka ortaya çıkar, gizli kalmaz.

Abayı yakmak (Deyim): Birine aşık olmak, tutulmak.

Bindiği dalı kesmek (Deyim): Kendi çıkarına zarar verecek, kendi konumunu tehlikeye atacak bir davranışta bulunmak.

Çam devirmek (Deyim): Farkında olmadan pot kırmak, gaf yapmak, karşısındakini kıracak söz sarf etmek.

Dereyi görmeden paçaları sıvamak (Deyim): Ortada henüz kesin bir durum veya sonuç yokken erkenden hazırlığa veya telaşa girişmek.

Etekleri tutuşmak (Deyim): Büyük bir telaşa ve korkuya kapılmak, ne yapacağını bilememek.

Fırıldak gibi dönmek (Deyim): Çıkarına göre sürekli fikir ve yön değiştirmek, güvenilmez olmak.

Gözden düşmek (Deyim): Eskiden gösterilen ilgi ve sevgiyi kaybetmek, gözü dışarıda olmak.

Haddini bilmek (Deyim): Durumunu, yetkisini ve nerede durması gerektiğini bilmek.

İpe un sermek (Deyim): İşi yokuşa sürmek, bahaneler bularak sorumluluktan kaçınmak.

Kaş yapayım derken göz çıkarmak (Deyim): Bir işi düzeltmeye çalışırken durumu daha da kötüleştirmek.

Kulak kabartmak (Deyim): Çaktırmadan, dikkatle söylenilenleri dinlemek.

Laf ebesi olmak (Deyim): Boş ve gereksiz laflarla çok konuşmak, geveze olmak.

Mdemi bulandırmak (Deyim): Tiksinti uyandırmak, şüphe ve huzursuzluk yaratmak.

Nalları dikmek (Deyim): Ölmek, hayatını kaydetmek.

Ocağı sönmek (Deyim): Bir yuvanın, ailenin dağılması, varlığını yitirmesi.

Pabuç bırakmamak (Deyim): Tehditlere boyun eğmemek, korkmamak, ödün vermemek.

Püsküllü bela (Deyim): Baştan savulamayan, uğraştırıcı ve sıkıntılı durum.

Rapor vermek (Deyim): Durum hakkında resmî bilgi sunmak.

Samur kürk olmak (Deyim): Çok değerli ve itibarlı bir konuma gelmek.

Şeytanın bacağını kırmak (Deyim): Uzun süredir süregelen kötü şansı veya başarısızlığı yenmek.

Tabana kuvvet (Deyim): Yaya olarak yürümeye devam etmek, aceleyle uzaklaşmak.

Tuz biber ektirmek (Deyim): Var olan kötü bir durumu daha da çekilmez, acı verici hale getirmek.

Ucu kapalı (Deyim): Kesin olmayan, netliğe kavuşmamış durum.

Üstüne tüy dikmek (Deyim): Yapılan bir hatanın ardından durumu daha da berbat edecek bir hamle yapmak.

Vur patlasın çal oynasın (Deyim): Gönlünce eğlenmek, hayatın tadını çıkarmak, hiçbir şeyi takmamak.

Ya tutarsa diye düşünmek (Deyim): Riskli ve gerçekleşme ihtimali düşük bir işe umut bağlanarak adım atmak.

Zeytinyağı gibi suya çıkmak (Deyim): Suçlu olduğu halde her seferinde üste çıkmayı başarmak.

Zevzeklik etmek (Deyim): Yersiz, saçma ve boş sözler söylemek.

Zincire vurulmak (Deyim): Özgürlüğü kısıtlanmak, esir alınmak.

Zurnanın zırt dediği yer (Deyim): İşin en kritik, en zayıf veya en sıkıntılı noktası.

Mütesanit: Dayanışma içinde olan, birbirine sıkıca bağlı, omuz omuza veren.

Mütecaviz: Saldırgan, tecavüz eden, taarruzda bulunan.

Mütemayil: Eğilimi olan, meyilli, bir tarafa yönelen.

Mütekabilen: Karşılıklı olarak, mukabelede bulunarak.

Müteredditâne: Kararsız bir tutumla, çekingenlik göstererek.

Müessiriyet: Tesirlilik, etkileyicilik gücü.

Mütemmim: Tamamlayıcı, bütünleyici parça.

Münhasıran: Yalnızca ve sadece bir şeye mahsus olmak üzere.

Mütereddi: Ahlaken veya maddeten yozlaşmış, düşkünleşmiş.

Mütekamilen: Tamamlanmış, olgunlaşmış bir biçimde.

Müşkülpesentlik: Zor beğenme durumu, aşırı titizlik.

Müşarünileyh: Kendisine işaret edilen, adı geçen, anılan (saygın kişi).

Münasebetçi: İlişki kurmayı seven, vesile arayan.

Mücessem: Somutlaşmış, cisimleşmiş, gözle görülebilir hâle gelmiş.

Müstahdem: Hizmetli, kapıcı, hizmet eden görevli.

Müstahak: Hak edilmiş, layık olunmuş (genellikle olumsuz durumlar için).

Müstakar: Kararlı, durağan, yerleşik ve sarsılmaz.

Müstefit: Faydalanan, yararlanan, karlı çıkan.

Müstehzi: Alaycı, alay eden, istihza dolu.

Müstesnalık: Benzersizlik, istisnai olma durumu.

Müşterek: Ortak, birlikte paylaşılan.

Müşfikane: Şefkatle, merhametli ve koruyucu bir tavırla.

Müesseseleşme: Kurumsal bir kimlik ve yapı kazanma süreci.

Münhal kadro: Boşta bulunan, atama bekleyen memuriyet yeri.

Müellifhane: Yazara yakışır tarzda, edebi biçimde.

Mütemadiyat: Süreklilik, aralıksız devam etme hali.

Mübaşeret: Bir işe girişme, başlama.

Mücerretlik: Soyutluk durumu.

Mukimlik: Bir yerde ikamet etme hali, yerleşiklik.

Muktebesat: Başka kaynaklardan yapılan alıntılar, iktibaslar.

Mukavemetli: Dirençli, dayanıklı yapıya sahip.

Mukaddemat: Giriş kısımları, ön hazırlıklar ve mukaddimeler.

Mukaddesat: Uğruna can verilecek kutsal değerler, inançlar.

Muktezat: Gerekler, icaplar, lüzumlu hususlar.

Mukayeseli: Kıyaslamalı, karşılaştırmalı tetkik.

Mukadderatçı: Kaderci, her şeyi yazgıya bağlayan düşünce yapısı.

Mukabilinde: Karşılığı olarak, o niyetle.

Muazzamlık: Görkemlilik, devasa olma vasfı.

Muasırlaşma: Çağdaşlaşma, asrın seviyesine ulaşma çabası.

Muavenetçi: Yardımlaşmayı ilke edinmiş kimse.

Muhafazakarlık: Geleneksel değerleri koruma eğilimi.

Muallaklık: Belirsizlik, karara bağlanmama durumu.

Muhataplık: Sorumluluk taşıyan veya karşı taraf olma durumu.

Muhteviyat: Bir şeyin içindekilerin tamamı, ayrıntılı içerik.

Muazziplik: Eziyet çekme, sıkıntı içinde kıvranma.

Muhayyileli: Güçlü bir hayal dünyasına sahip olan.

Muhakemeli: Sağlıklı akıl yürütebilen, mantıklı değerlendirme yapan.

Muhalefet etmek: Alınan kararlara veya görüşlere karşı çıkmak.

Muallimlik: Öğretmenlik mesleği, rehberlik görevi.

Muhabbetname: Sevgi ve dostluk dolu mektup.

Muhacirlik: Yersiz yurtsuz kalma, göçmenlik durumu.

Muzafferiyet: Zaferle sonuçlanma, başarı kazanma.

Müstear isim: Gerçek adı gizlemek için kullanılan takma ad, mahlas.

Mürşitlik: Doğru yolu gösteren kılavuzluk, aydınlatıcılık.

Mecradan çıkmak: Normal akışını kaybetmek, kontrolden çıkmak.

Aklı başında olmak: Sağlıklı düşünebilmek, olgun ve dengeli hareket etmek.

Akla karayı seçmek: Bir işi başarmak için çok büyük zorluklar ve zahmetler çekmek.

Alın teri: Emek verilerek, dürüstçe kazanılan kazanç.

Ateş püskürmek: Çok büyük bir öfkeyle sert sözler söylemek, köpürmek.

Bağrına taş basmak: Büyük bir acıya, üzüntüye sabretmeye çalışmak.

Çamur atmak: Birine haksız yere suçlamada bulunmak, leke sürmeye çalışmak.

Çile doldurmak: Uzun süren zorluklu, sıkıntılı bir dönemi tamamlamak.

Dağ başını duman almak: Zorlukların, sorunların artması ve işlerin sarpa sarması.

Diş bilemek: Birine karşı gizli bir kin beslemek, intikam arzusu taşımak.

Etekleri zil çalmak: Beklenmedik bir sevinçle taşkın bir neşe duymak.

Gözden geçirmek: Bir metni, durumu veya eşyayı dikkatlice inceleyip kontrol etmek.

Gözünü kırpmadan: Hiç tereddüt etmeden, korkusuzca ve tehlikeyi göze alarak.

Hakkından gelmek: Bir işin üstesinden başarıyla gelmek ya da birine hakkını bildirmek.

İçine kurt düşmek: Bir şey hakkında şüpheye, endişeye kapılmak.

Kaş göz işaret etmek: Gizli anlaşmak veya bir konuda sessizce uyarıda bulunmak.

Kılı kırk yarmak: Detaylar üzerinde aşırı derecede titizlenmek.

Lafı ağzına tıkayıncaya kadar: Konuşmasına fırsat vermemek, susturmak.

Merakını gidermek: Bilinmeyen bir şeyi öğrenerek kafadaki soru işaretlerini silmek.

Nefes aldırmamak: Birine sürekli baskı yapmak, rahat bırakmamak.

Pabucu dama atılmak: Eskisi kadar ilgi görmemek, gözden düşmek, kıymeti azalmak.

Rüzgara göre yön değiştirmek: Çıkarcı bir tavırla güç odaklarının peşinden gitmek.

Saman alevi gibi parlamak: Birdenbire çok öfkelenmek ama bu öfkenin çabucak sönmesi.

Şimşekleri üzerine çekmek: Eleştirilerin ve tepkilerin odağında kalmak.

Tabanları yağlamak: Tehlikeli bir durumdan ya da oradan hızla uzaklaşmak.

Tuzlukla koşmak: Her söylenen şeye hemen inanmak veya başkalarına körü körüne uymak.

Ununu eleyip eleğini asmak: Hayatındaki asıl büyük işleri tamamlayıp köşesine çekilmek.

Üzerine düşmek: Bir konuyla veya kişiyle çok yakından ve titizlikle ilgilenmek.

Vakit öldürmek: Boş işlerle zaman harcamak, zamanı değerlendirememek.

Yorgan gitti, kavga bitti: Ortadaki temel anlaşmazlık kaynağı ortadan kalktığı için çekişmenin sona ermesi.

Zihni bulandırmak: Aklını karıştırmak, doğru düşünmeyi engellemek.

Akıl para ile satılmaz (Atasözü): Herkes kendi aklını kullanmak zorundadır, akıl dışarıdan satın alınamaz.

Birlikte kuvvet doğar (Atasözü): İnsanlar güçlerini birleştirirse en zor işleri bile başarabilirler.

Çarşambanın gelişi perşembeden bellidir (Atasözü): Bir olayın nereye varacağı, önceden gösterdiği belirtilerden anlaşılır.

Dost kara günde belli olur (Atasözü): Gerçek dost, insan sıkıntıdayken ve yardıma muhtaçken yanındaandır.

Erken kalkan yol alır (Atasözü): İşine erken başlayan ve zamanında davranan kimse başarılı olur.

Gülü seven dikenine katlanır (Atasözü): Sevilen bir şeyin veya kişinin getirdiği sıkıntılara sabredilir.

Hazıra dağ dayanmaz (Atasözü): Çalışmadan, sadece var olanı harcayarak yaşayanların serveti tükenir.

İyilik eden iyilik bulur (Atasözü): Karşılıksız yapılan iyilikler bir gün mutlaka sahibine döner.

Körle yatan şaşı kalkar (Atasözü): Kötü huylu veya bilgisiz insanlarla arkadaşlık edenler onların kötü alışkanlıklarını kaparlar.

Ne ekersen onu biçersin (Atasözü): Dünyada nasıl davranırsanız, karşılığında da aynısını görürsünüz.

Sakınandan gözü çöp batar (Atasözü): Bir şeyden aşırı derecede sakınan ve korkan kişinin başına tam da o korktuğu gelir.

Taş yerinde ağırdır (Atasözü): Her insan kendi memleketinde veya kendi yerinde saygı görür ve değerlidir.

Aç koyun kurt gibi saldırır (Atasözü): Uzun süre mahrumiyet yaşayan kimse fırsat bulduğunda hırsla saldırır.

Dertsiz baş hamamda bellidir (Atasözü): İnsanın derdi tasası olmadığını huzurlu halinden anlamak mümkündür.

Göz gördüğünü ister (Atasözü): İnsan hoşuna giden, gördüğü ve beğendiği şeylere sahip olmak ister.
"""

# İlk 10 kelimeyi koruyoruz (orijinal örnekler):
initial_10 = [
  {
    "kelime": "Mütemadiyen",
    "anlam": "Aralıksız, durmaksızın, sürekli olarak.",
    "turu": "Zarf",
    "koken": "Arapça (mütemādī)",
    "telaffuz": "mü-te-mâ-di-yen",
    "ornekCumle": "Güz rüzgârları pencerelerimize mütemadiyen çarpıyor, eski konağın ahşap pervazlarında hüzünlü nağmeler bırakıyordu."
  },
  {
    "kelime": "Mütekabiliyetçi",
    "anlam": "Karşılıklılık ilkesini savunan ve uygulayan.",
    "turu": "Sıfat",
    "koken": "Arapça (mütekābil)",
    "telaffuz": "mü-te-kâ-bi-li-yet-çi",
    "ornekCumle": "Devletlerarası münasebetlerde daima mütekabiliyetçi bir anlayış gözetilmiş, eşitlikten taviz verilmemiştir."
  },
  {
    "kelime": "Mütemayizane",
    "anlam": "Başkalarından farklı ve üstün bir nitelik sergileyerek.",
    "turu": "Zarf",
    "koken": "Arapça (mütemāyiz)",
    "telaffuz": "mü-te-mâ-yi-zâ-ne",
    "ornekCumle": "Münazarada sergilediği mütemayizane hitabeti, salondaki tüm dinleyicilerin hayranlığını kazanmasını sağladı."
  },
  {
    "kelime": "Müteselsil sorumluluk",
    "anlam": "Zincirleme olarak birbirine bağlı borç veya sorumluluk durumu.",
    "turu": "Terim / İsim Tamlaması",
    "koken": "Arapça (müteselsil)",
    "telaffuz": "mü-te-sel-sil so-rum-lu-luk",
    "ornekCumle": "Vakfın idaresindeki her bir üye, alınan kararların neticesinde müteselsil sorumluluk altındadır."
  },
  {
    "kelime": "Mütecavizane",
    "anlam": "Saldırgan bir tavırla, taarruz amacıyla.",
    "turu": "Zarf",
    "koken": "Arapça (mütecāvīz)",
    "telaffuz": "mü-te-câ-vi-zâ-ne",
    "ornekCumle": "Hudut boylarında vuku bulan mütecavizane hareketler, muhafızların uyanıklığı sayesinde anında bertaraf edildi."
  },
  {
    "kelime": "İpe sapa gelmez",
    "anlam": "Mantıksız, saçma ve tutarsız (söz veya davranış).",
    "turu": "Deyim",
    "koken": "Türkçe",
    "telaffuz": "i-pe sa-pa gel-mez",
    "ornekCumle": "Ortaya attığı ipe sapa gelmez iddialarla meclisi oyalamaktan başka bir gayesi yoktu."
  },
  {
    "kelime": "Kanına girmek",
    "anlam": "Birini kötü bir yola düşürmek veya haksız yere ölümüne sebep olmak.",
    "turu": "Deyim",
    "koken": "Türkçe",
    "telaffuz": "ka-nı-na gir-mek",
    "ornekCumle": "O tecrübesiz masum gencin kanına girerek bütün istikbalini karartanlara karşı derin bir teessür duyuyordu."
  },
  {
    "kelime": "Laf ebeliği yapmak",
    "anlam": "Boş sözlerle karşı tarafı laf kalabalığına boğmak.",
    "turu": "Deyim",
    "koken": "Türkçe",
    "telaffuz": "laf e-be-li-ği yap-mak",
    "ornekCumle": "Hakikati ikrar etmek yerine laf ebeliği yaparak zaman kazanmaya çalışması kimsenin gözünden kaçmadı."
  },
  {
    "kelime": "Misket gibi yuvarlanmak",
    "anlam": "Hızlı ve kolayca bir süreçten geçmek (mecazi olarak işlerin akışı).",
    "turu": "Deyim",
    "koken": "Türkçe",
    "telaffuz": "mis-ket gi-bi yu-var-lan-mak",
    "ornekCumle": "Tüm hazırlıklar pürüzsüz yürütülünce haftalardır bekleyen işler misket gibi yuvarlandı."
  },
  {
    "kelime": "Nuh diyor peygamber demiyor",
    "anlam": "Hiçbir şekilde ikna edilemeyen, ısrarından vazgeçmeyen kimse.",
    "turu": "Deyim",
    "koken": "Türkçe / Kültürel Atıf",
    "telaffuz": "nuh di-yor pey-gam-ber de-mi-yor",
    "ornekCumle": "Bütün heyet günlerce dil döktü; lakin o Nuh diyor peygamber demiyor, inadından zerre kadar taviz vermiyordu."
  }
]

def slugify(text):
    text = text.lower()
    tr_map = {'ç': 'c', 'ğ': 'g', 'ı': 'i', 'i': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u'}
    for k, v in tr_map.items():
        text = text.replace(k, v)
    text = re.sub(r'[^a-z0-9]+', '-', text).strip('-')
    return text

def parse_words():
    items = []
    seen = set()

    for item in initial_10:
        k = item["kelime"].strip()
        slug = slugify(k)
        item["id"] = slug
        items.append(item)
        seen.add(k.lower())

    lines = raw_input.strip().split('\n')
    for line in lines:
        line = line.strip()
        if not line or ':' not in line:
            continue
        parts = line.split(':', 1)
        term_part = parts[0].strip()
        meaning_part = parts[1].strip()

        # Check type
        turu = "Kadim Kelime"
        koken = "Osmanlıca / Türkçe"
        if "(Atasözü)" in term_part:
            turu = "Atasözü"
            koken = "Türk Atasözü"
            term = term_part.replace("(Atasözü)", "").strip()
        elif "(Atasözü/Deyim)" in term_part:
            turu = "Atasözü / Deyim"
            koken = "Türkçe"
            term = term_part.replace("(Atasözü/Deyim)", "").strip()
        elif "(Deyim)" in term_part:
            turu = "Deyim"
            koken = "Türkçe Deyim"
            term = term_part.replace("(Deyim)", "").strip()
        else:
            term = term_part
            # check if it looks like an idiom or phrase (multiple words or ends in -mek/-mak)
            if " " in term or term.endswith(" etmek") or term.endswith(" olmak") or term.endswith(" çıkmak"):
                turu = "Deyim / Tabir"
                koken = "Türkçe"
            elif term.startswith("Mü") or term.startswith("Mu") or term.startswith("Muk"):
                turu = "Sözcük"
                koken = "Arapça Kökenli"
            elif "-" in term:
                turu = "Terkip"
                koken = "Farsça / Osmanlıca"

        # Correct obvious typo
        if term == "Mdemi bulandırmak":
            term = "Midemi bulandırmak"

        base_slug = slugify(term)
        slug = base_slug
        count = 2
        while slug in [x["id"] for x in items]:
            slug = f"{base_slug}-{count}"
            count += 1

        # Check if already in initial 10 with same meaning
        # Even if duplicate word, user specifically asked to add all provided items
        items.append({
            "id": slug,
            "kelime": term,
            "anlam": meaning_part,
            "turu": turu,
            "koken": koken,
            "telaffuz": term.lower(),
            "ornekCumle": f"{term} tabiri, edebiyatımızda ve gündelik hayatımızda lisanın zarafetini aksettirir."
        })

    print(f"Toplam kelime sayısı: {len(items)}")
    return items

if __name__ == "__main__":
    words = parse_words()
    with open("words_parsed.json", "w", encoding="utf-8") as f:
        json.dump(words, f, ensure_ascii=False, indent=2)
