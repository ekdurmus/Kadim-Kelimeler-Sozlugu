export interface KadimKelime {
  id: string;
  kelime: string;
  anlam: string;
  turu: string;
  koken: string;
  donem?: string;
  ornekCumle: string;
  telaffuz?: string;
  ekBilgi?: string;
}

export const DONEM_LISTESI = [
  "Göktürkçe İzleri ve Eski Türkçe",
  "Divânü Lügati't-Türk & Karahanlı Dönemi",
  "Divan Edebiyatı ve Tasavvuf",
  "Anadolu Ağzı ve Halk Deyimleri"
] as const;

export const ILK_KELIMELER: KadimKelime[] = [
  {
    "id": "mutemadiyen",
    "kelime": "Mütemadiyen",
    "anlam": "Aralıksız, durmaksızın, sürekli olarak.",
    "turu": "Zarf",
    "koken": "Arapça (mütemādī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-mâ-di-yen",
    "ornekCumle": "Güz rüzgârları pencerelerimize mütemadiyen çarpıyor, eski konağın ahşap pervazlarında hüzünlü nağmeler bırakıyordu."
  },
  {
    "id": "mutekabiliyetci",
    "kelime": "Mütekabiliyetçi",
    "anlam": "Karşılıklılık ilkesini savunan ve uygulayan.",
    "turu": "Sıfat",
    "koken": "Arapça (mütekābil)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-kâ-bi-li-yet-çi",
    "ornekCumle": "Devletlerarası münasebetlerde daima mütekabiliyetçi bir anlayış gözetilmiş, eşitlikten taviz verilmemiştir."
  },
  {
    "id": "mutemayizane",
    "kelime": "Mütemayizane",
    "anlam": "Başkalarından farklı ve üstün bir nitelik sergileyerek.",
    "turu": "Zarf",
    "koken": "Arapça (mütemāyiz)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-mâ-yi-zâ-ne",
    "ornekCumle": "Münazarada sergilediği mütemayizane hitabeti, salondaki tüm dinleyicilerin hayranlığını kazanmasını sağladı."
  },
  {
    "id": "muteselsil-sorumluluk",
    "kelime": "Müteselsil sorumluluk",
    "anlam": "Zincirleme olarak birbirine bağlı borç veya sorumluluk durumu.",
    "turu": "Terim / İsim Tamlaması",
    "koken": "Arapça Terkip",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-sel-sil so-rum-lu-luk",
    "ornekCumle": "Vakfın idaresindeki her bir üye, alınan kararların neticesinde müteselsil sorumluluk altındadır."
  },
  {
    "id": "mutecavizane",
    "kelime": "Mütecavizane",
    "anlam": "Saldırgan bir tavırla, taarruz amacıyla.",
    "turu": "Zarf",
    "koken": "Arapça (mütecāvīz)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-câ-vi-zâ-ne",
    "ornekCumle": "Hudut boylarında vuku bulan mütecavizane hareketler, muhafızların uyanıklığı sayesinde anında bertaraf edildi."
  },
  {
    "id": "i-pe-sapa-gelmez",
    "kelime": "İpe sapa gelmez",
    "anlam": "Mantıksız, saçma ve tutarsız (söz veya davranış).",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "i-pe sa-pa gel-mez",
    "ornekCumle": "Ortaya attığı ipe sapa gelmez iddialarla meclisi oyalamaktan başka bir gayesi yoktu."
  },
  {
    "id": "kanina-girmek",
    "kelime": "Kanına girmek",
    "anlam": "Birini kötü bir yola düşürmek veya haksız yere ölümüne sebep olmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ka-nı-na gir-mek",
    "ornekCumle": "O tecrübesiz masum gencin kanına girerek bütün istikbalini karartanlara karşı derin bir teessür duyuyordu."
  },
  {
    "id": "laf-ebeligi-yapmak",
    "kelime": "Laf ebeliği yapmak",
    "anlam": "Boş sözlerle karşı tarafı laf kalabalığına boğmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "laf e-be-li-ği yap-mak",
    "ornekCumle": "Hakikati ikrar etmek yerine laf ebeliği yaparak zaman kazanmaya çalışması kimsenin gözünden kaçmadı."
  },
  {
    "id": "misket-gibi-yuvarlanmak",
    "kelime": "Misket gibi yuvarlanmak",
    "anlam": "Hızlı ve kolayca bir süreçten geçmek (mecazi olarak işlerin akışı).",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "mis-ket gi-bi yu-var-lan-mak",
    "ornekCumle": "Tüm hazırlıklar pürüzsüz yürütülünce haftalardır bekleyen işler misket gibi yuvarlandı."
  },
  {
    "id": "nuh-diyor-peygamber-demiyor",
    "kelime": "Nuh diyor peygamber demiyor",
    "anlam": "Hiçbir şekilde ikna edilemeyen, ısrarından vazgeçmeyen kimse.",
    "turu": "Deyim",
    "koken": "Türkçe / Kültürel Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "nuh di-yor pey-gam-ber de-mi-yor",
    "ornekCumle": "Bütün heyet günlerce dil döktü; lakin o Nuh diyor peygamber demiyor, inadından zerre kadar taviz vermiyordu."
  },
  {
    "id": "ab-i-hayat",
    "kelime": "Ab-ı hayat",
    "anlam": "Ölümsüzlük suyu, hayat suyu.",
    "turu": "Deyim / Tabir",
    "koken": "Farsça / Arapça Terkip (āb-ı ḥayāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "âb-ı ha-yat",
    "ornekCumle": "Hızır aleyhisselamın aradığı ab-ı hayat gibi, senin bir tek tatlı kelamın da kurumuş gönlüme can verdi."
  },
  {
    "id": "ehlivukuf",
    "kelime": "Ehlivukuf",
    "anlam": "Bilirkişi, anlayan, işin ehli olan kimse.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ehl-i vuḳūf)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "eh-li-vu-kûf",
    "ornekCumle": "Tarihi köşkün restorasyonu sırasında ortaya çıkan eski kitabeyi tetkik etmek üzere bir ehlivukuf heyeti kuruldu."
  },
  {
    "id": "mutefekkir",
    "kelime": "Mütefekkir",
    "anlam": "Düşünür, fikir adamı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütefekkir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-fek-kir",
    "ornekCumle": "Büyük mütefekkir, çağının meselelerine getirdiği felsefi tahlillerle cemiyete derin bir ufuk açıyordu."
  },
  {
    "id": "mustesna",
    "kelime": "Müstesna",
    "anlam": "İstisnai, benzerlerinden farklı, seçkin.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstesnā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-tes-nâ",
    "ornekCumle": "Musiki meclisinde seslendirdiği o kaside, dinleyenlerin hafızasında müstesna bir güzellik olarak kaldı."
  },
  {
    "id": "feraset",
    "kelime": "Feraset",
    "anlam": "Seziş, anlayış, zeka, olayları önceden sezme yeteneği.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (firāset)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "fe-râ-set",
    "ornekCumle": "Devlet adamının sergilediği yüksek feraset, yaklaşan tehlikeleri vaktinde sezmesini ve tedbir almasını sağladı."
  },
  {
    "id": "kenz",
    "kelime": "Kenz",
    "anlam": "Hazine, gizli hazine, kıymetli şey.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (kenz)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "kenz",
    "ornekCumle": "Gönül ehlinin sadrında sakladığı ilahi muhabbet, paha biçilemez gizli bir kenz gibidir."
  },
  {
    "id": "nigar",
    "kelime": "Nigar",
    "anlam": "Resim, güzel yüzlü sevgili.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (nigār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ni-gâr",
    "ornekCumle": "Ressamın tuvale nakşettiği nigar, devrin bütün güzellik anlayışını aksettiren zarif bir çehreye sahipti."
  },
  {
    "id": "dilhun",
    "kelime": "Dilhun",
    "anlam": "Yüreği kan ağlayan, çok üzgün.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (dil-ḫūn)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "dil-hûn",
    "ornekCumle": "Evladının gurbetten gelen hazin ve hasret dolu mektubunu okuyan ananın yüreği dilhun oldu."
  },
  {
    "id": "serapa",
    "kelime": "Serapa",
    "anlam": "Baştan başa, tamamen.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (sarāpā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "se-râ-pâ",
    "ornekCumle": "Akşam güneşi batarken Boğaz kıyısındaki asırlık erguvanlar serapa kızıla ve mora boyanmıştı."
  },
  {
    "id": "meftun",
    "kelime": "Meftun",
    "anlam": "Tutkun, aşık, hayran.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (meftūn)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mef-tûn",
    "ornekCumle": "Divan şiirinin büyüleyici ahengine ve Fuzûlî'nin gazellerine ilk gençliğinden beri meftundu."
  },
  {
    "id": "girift",
    "kelime": "Girift",
    "anlam": "Karmaşık, çözülmesi zor, karışık.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (girift)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "gi-rift",
    "ornekCumle": "Tarihi elyazmasındaki girift hat sanatı, okuyucunun gözünde çözülmesi zor ama hayranlık verici bir sırlar yumağıydı."
  },
  {
    "id": "zuppe",
    "kelime": "Züppe",
    "anlam": "Görgü kurallarını yanlış veya aşırı uygulayan, yapmacık kimse.",
    "turu": "Kadim Kelime",
    "koken": "İtalyanca Kökenli / Osmanlı Argocası",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "züp-pe",
    "ornekCumle": "Kendi milli irfanından habersiz, yabancı özentisiyle gösteriş yapan züppe tipler dönemin romanlarında sıkça eleştirilir."
  },
  {
    "id": "mumtaz",
    "kelime": "Mümtaz",
    "anlam": "Seçkin, imtiyazlı, üstün.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mümtāz)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müm-tâz",
    "ornekCumle": "Okulumuzun hazırladığı bu kadim lügat, Türkçemizin söz varlığı sahasında mümtaz bir konuma sahiptir."
  },
  {
    "id": "mukellef",
    "kelime": "Mükellef",
    "anlam": "Eksiksiz, zengin, donanımlı (örn. mükellef sofra).",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mükellef)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-kel-lef",
    "ornekCumle": "Gelen kıymetli misafirler için konağın selamlık dairesinde binbir çeşit lezzetin yer aldığı mükellef bir sofra kuruldu."
  },
  {
    "id": "serhad",
    "kelime": "Serhad",
    "anlam": "Sınır boyu, uç beyliklerinin bulunduğu yer.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (ser-ḥadd)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ser-had",
    "ornekCumle": "Tuna boyundaki serhad boylarında nöbet tutan akıncıların destansı cesareti asırlarca türkülere konu oldu."
  },
  {
    "id": "nazenin",
    "kelime": "Nazenin",
    "anlam": "Çok nazlı, incitmekten korkulan, zarif.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (nāzenīn)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "nâ-ze-nîn",
    "ornekCumle": "Sert poyraz rüzgârları esince bahçedeki nazenin yaseminler narin yapraklarını toprağa döktü."
  },
  {
    "id": "mecalim",
    "kelime": "Mecalim",
    "anlam": "Güçler, takatlar, dermanlar.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mecāl)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "me-câ-lim",
    "ornekCumle": "Sabahtan akşama kadar tarlada orak sallayan yaşlı adamın ayakta duracak mecali kalmamıştı."
  },
  {
    "id": "gubar",
    "kelime": "Gubar",
    "anlam": "Toz, toprak.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ġubār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "gu-bâr",
    "ornekCumle": "Kütüphanenin tavan arasındaki tozlu sandıktan çıkarılan kadim cilt üzerindeki gubar hürmetle silindi."
  },
  {
    "id": "nev-javan",
    "kelime": "Nev-javan",
    "anlam": "Genç, taze delikanlı.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (nev-cevān)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "nev-ce-vân",
    "ornekCumle": "Meydana atılan nev-javan yiğit, cüreti ve çevikliğiyle ordunun gözbebeği haline gelmişti."
  },
  {
    "id": "ahenk",
    "kelime": "Ahenk",
    "anlam": "Uyum, düzen.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (āheng)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "â-henk",
    "ornekCumle": "Mevlevihanedeki ney ve kudüm sesleri, salonda ruha sükûnet veren kusursuz bir ahenk meydana getiriyordu."
  },
  {
    "id": "zaman-i-kadim",
    "kelime": "Zaman-ı kadim",
    "anlam": "Eski zamanlar, kadim devirler.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça Terkip (zamān-ı ḳadīm)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "za-mâ-nı ka-dîm",
    "ornekCumle": "Zaman-ı kadimden bu yana akan nehir, vadideki medeniyetlerin yükselişine ve çöküşüne şahitlik etmişti."
  },
  {
    "id": "misvak",
    "kelime": "Misvak",
    "anlam": "Diş temizliğinde kullanılan bitkisel çubuk (metaforik olarak temizlik/öz anlamında da kullanılır).",
    "turu": "Kadim Kelime",
    "koken": "Arapça (misvāk)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mis-vâk",
    "ornekCumle": "Dedem her namaz öncesinde ceviz kutudan misvakını çıkarır, hem sünnete uyar hem de nezafetine itina gösterirdi."
  },
  {
    "id": "cihanpesent",
    "kelime": "Cihanpesent",
    "anlam": "Cihanın beğendiği, dünya çapında güzel.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (cihān-pesend)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ci-hân-pe-sent",
    "ornekCumle": "Süleymaniye'nin Boğaz'a bakan silüeti, yerli yabancı her seyyahın hayran kaldığı cihanpesent bir letafettedir."
  },
  {
    "id": "sule",
    "kelime": "Şule",
    "anlam": "Alev, parlaklık.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (şuʿle)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "şu-le",
    "ornekCumle": "Gecenin koyu karanlığında parlayan küçük bir kandilin şulesi, yolunu kaybeden kervana menzili gösterdi."
  },
  {
    "id": "zinet",
    "kelime": "Zînet",
    "anlam": "Süs, ziynet eşyası.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (zīnet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "zî-net",
    "ornekCumle": "İpek kaftanının üzerine işlenen altın sırmalar, sultanın asil duruşuna ayrı bir zînet katıyordu."
  },
  {
    "id": "zulfuyar",
    "kelime": "Zülfüyâr",
    "anlam": "Sevgilinin zülüflü saçı (hassas noktalar, dokunulmaması gereken yerler anlamında kullanılır).",
    "turu": "Kadim Kelime",
    "koken": "Farsça Terkip (zülf-i yār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "zül-fü-yâr",
    "ornekCumle": "Şair, sevgilinin rüzgârda salınan zülfüyârını geceye benzeterek gönlünün o zülüflere esir olduğunu söyler."
  },
  {
    "id": "efsunkar",
    "kelime": "Efsunkâr",
    "anlam": "Büyülü, büyüleyici.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (afsūn-kār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ef-sun-kâr",
    "ornekCumle": "Dolunayın durgun göl yüzeyinde oluşturduğu efsunkâr ışıltı, izleyenleri adeta bir masal alemine taşıyordu."
  },
  {
    "id": "ruzigar",
    "kelime": "Rûzigâr",
    "anlam": "Zaman, devir, rüzgar.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (rūzigār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "rû-zi-gâr",
    "ornekCumle": "Feleğin rûzigârı tersine dönünce, dünün en mağrur vezirleri dahi makamlarından olup yalnız kaldılar."
  },
  {
    "id": "safderun",
    "kelime": "Safderun",
    "anlam": "Saf, kolayca aldatılabilen, temiz kalpli.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça (ṣāf-derūn)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "saf-de-rûn",
    "ornekCumle": "Kalbinde hiçbir kötülük taşımayan safderun ihtiyara kasabadaki herkes derin bir hürmetle yaklaşırdı."
  },
  {
    "id": "tevekkul",
    "kelime": "Tevekkül",
    "anlam": "Allah'a güvenme, kadere razı olma.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (tevekkül)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "te-vek-kül",
    "ornekCumle": "Çiftçi toprağı ekip tohumunu suladıktan sonra yağmur için tevekkül deryasına sığındı."
  },
  {
    "id": "vuslat",
    "kelime": "Vuslat",
    "anlam": "Kavuşma, sevgiliye kavuşma anı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (vuṣlat)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "vus-lat",
    "ornekCumle": "Yıllarca süren hasretin nihayetinde gerçekleşen vuslat anında iki kardeş sevinçten gözyaşlarına boğuldu."
  },
  {
    "id": "hicran",
    "kelime": "Hicran",
    "anlam": "Ayrılık acısı, hasret.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (hicrān)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "hic-rân",
    "ornekCumle": "Sılaya duyduğu derin hicran sebebiyle yazdığı gurbet mektupları herkesin yüreğini dağlıyordu."
  },
  {
    "id": "i-clal",
    "kelime": "İclal",
    "anlam": "Saygı göstergesinde bulunma, ululama.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (iclāl)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ic-lâl",
    "ornekCumle": "Ulu çınarın gölgesinde oturan ak saçlı bilgeye köyün delikanlıları hürmet ve iclal ile selam verdiler."
  },
  {
    "id": "i-llet",
    "kelime": "İllet",
    "anlam": "Hastalık, sebep, kusur.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ʿillet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "il-let",
    "ornekCumle": "Toplumları içten içe kemiren tembellik illetine karşı en etkili ilaç azimle çalışmaktır."
  },
  {
    "id": "kevser",
    "kelime": "Kevser",
    "anlam": "Cennetteki bir nehir, bol nimet.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (kevser)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "kev-ser",
    "ornekCumle": "Yaz sıcağında yayla pınarından kana kana içtiğimiz su, sanki cennet pınarı kevser gibi ferahlatıcıydı."
  },
  {
    "id": "mecnun",
    "kelime": "Mecnun",
    "anlam": "Deli, çılgınca aşık.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mecnūn)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mec-nûn",
    "ornekCumle": "İlim ve irfan öğrenme tutkusuyla kütüphaneleri arşınlayan genç araştırmacı adeta bir hakikat mecnunuydu."
  },
  {
    "id": "mehtap",
    "kelime": "Mehtap",
    "anlam": "Ay ışığı.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (māh-tāb)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "meh-tâp",
    "ornekCumle": "Boğaz sırtlarında mehtabın suya vuran parıltısı eşliğinde edilen o edebi sohbet sabaha dek sürdü."
  },
  {
    "id": "mihnet",
    "kelime": "Mihnet",
    "anlam": "Sıkıntı, eziyet, çile.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (miḥnet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mih-net",
    "ornekCumle": "Hayatın önüne çıkardığı mihnet ve çileleri sabırla göğüsleyip dimdik ayakta kalmayı bildi."
  },
  {
    "id": "muvaffak",
    "kelime": "Muvaffak",
    "anlam": "Başarılı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muvaffaḳ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-vaf-fak",
    "ornekCumle": "Zorlu imtihanları üstün bir dereceyle geçerek arzuladığı tıp fakültesine girmeye muvaffak oldu."
  },
  {
    "id": "mucevher",
    "kelime": "Mücevher",
    "anlam": "Değerli taş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mücevher)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-cev-her",
    "ornekCumle": "Kütüphanelerimizde korunan her bir yazma eser, medeniyetimizin paha biçilmez birer mücevheridir."
  },
  {
    "id": "nasihat",
    "kelime": "Nasihat",
    "anlam": "Öğüt.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (naṣīḥat)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "na-sî-hat",
    "ornekCumle": "Büyüklerin samimi nasihatlerine kulak tıkayanlar, hayatın fırtınalarında daha kolay tökezlerler."
  },
  {
    "id": "nefis",
    "kelime": "Nefis",
    "anlam": "Öz, can, hoş, güzel.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (nefīs)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ne-fîs",
    "ornekCumle": "Bahçedeki yaseminlerin etrafa yaydığı nefis rayiha, akşam serinliğine tarifsiz bir huzur katıyordu."
  },
  {
    "id": "nihayet",
    "kelime": "Nihayet",
    "anlam": "Son, sonuç.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (nihāyet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ni-hâ-yet",
    "ornekCumle": "Aylardır süren hummalı çalışmalar nihayet semeresini vermiş, lügat basıma hazır hale gelmişti."
  },
  {
    "id": "pak",
    "kelime": "Pak",
    "anlam": "Temiz, lekesiz.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (pāk)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "pâk",
    "ornekCumle": "Tertemiz bir vicdan ve pak bir niyetle yola çıkanın akıbeti daima hayır ve selamet olur."
  },
  {
    "id": "pervane",
    "kelime": "Pervane",
    "anlam": "Işığın etrafında dönen kelebek, aşık.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (pervāne)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "per-vâ-ne",
    "ornekCumle": "Hakikatin ışığını arayan âşık, lambanın alevi etrafında sabırla dönen pervane gibidir."
  },
  {
    "id": "rehber",
    "kelime": "Rehber",
    "anlam": "Kılavuz, yol gösterici.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (reh-ber)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "reh-ber",
    "ornekCumle": "Sarp yayla geçitlerinde tipi bastırınca kervanı emniyetle köye ulaştıran tecrübeli rehber oldu."
  },
  {
    "id": "sema",
    "kelime": "Sema",
    "anlam": "Gökyüzü, gök.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (semāʿ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "se-mâ",
    "ornekCumle": "Mevlevi dervişleri vecd ile sema dönerken salondaki seyirciler adeta manevi bir iklime kanat açtı."
  },
  {
    "id": "semender",
    "kelime": "Semender",
    "anlam": "Ateşte yaşayabildiğine inanılan efsanevi hayvan.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (semender)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "se-men-der",
    "ornekCumle": "Aşkın meşakkatine göğüs geren gönül eri, ateşte yanmadığına inanılan efsanevi semender misalidir."
  },
  {
    "id": "sefkat",
    "kelime": "Şefkat",
    "anlam": "Acıma ve sevgi hissi.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (şefḳat)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "şef-kat",
    "ornekCumle": "Kimsesiz çocuklara gösterdiği engin şefkat, mahallede herkesin ona 'Hacı Anne' diye hitap etmesini sağladı."
  },
  {
    "id": "siir",
    "kelime": "Şiir",
    "anlam": "Duygu ve hayal uyandıran söz sanatı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (şiʿr)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "şi-ir",
    "ornekCumle": "Yunus Emre'nin duru Türkçesiyle mısralara dökülen şiirler, yüzyıllardır yüreklerimizi titretir."
  },
  {
    "id": "tahammul",
    "kelime": "Tahammül",
    "anlam": "Dayanma, katlanma gücü.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (taḥammül)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ta-ham-mül",
    "ornekCumle": "Zulme ve haksızlığa tahammül göstermeyen milletimiz, her daim adaletin yanında saf tutmuştur."
  },
  {
    "id": "tekamul",
    "kelime": "Tekamül",
    "anlam": "Olgunlaşma, evrim, gelişme.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (tekāmül)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "te-kâ-mül",
    "ornekCumle": "İnsanın ahlaken tekâmül edebilmesi, nefsani arzularını ilim ve terbiye süzgecinden geçirmesiyle kaimdir."
  },
  {
    "id": "temenni",
    "kelime": "Temenni",
    "anlam": "Dilek, arzu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (temennī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "te-men-nî",
    "ornekCumle": "Dünyanın dört bir yanındaki masumların huzur ve emniyete kavuşması en halis temennimizdir."
  },
  {
    "id": "ulfet",
    "kelime": "Ülfet",
    "anlam": "Dostluk, alışkanlık, samimiyet.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ülfet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ül-fet",
    "ornekCumle": "Kısa zamanda komşularıyla kurduğu samimi ülfet sayesinde gurbet acısını hafifletmeyi başardı."
  },
  {
    "id": "umit",
    "kelime": "Ümit",
    "anlam": "Umut.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (umīd)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ü-mit",
    "ornekCumle": "Karanlığın en koyu anında dahi doğacak sabahın müjdesine dair yüreğinde sarsılmaz bir ümit taşırdı."
  },
  {
    "id": "vefa",
    "kelime": "Vefa",
    "anlam": "Sözünde durma, sevgide sebat etme.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (vefā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ve-fâ",
    "ornekCumle": "Eski hocasını ömrünün son demlerinde bir an olsun yalnız bırakmayarak örnek bir vefa tablosu sergiledi."
  },
  {
    "id": "vicdan",
    "kelime": "Vicdan",
    "anlam": "İnsanın ahlaki değer yargısı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (vicdān)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "vic-dan",
    "ornekCumle": "Huzursuz geceler geçirmek istemiyorsan, attığın her adımda vicdanının sesine kulak vermelisin."
  },
  {
    "id": "yadigar",
    "kelime": "Yadigar",
    "anlam": "Hatıra, anı.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (yādegār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "yâ-di-gâr",
    "ornekCumle": "Dedemden kalan köstekli gümüş saat, ailemizin nesilden nesile intikal eden en kıymetli yadigârıdır."
  },
  {
    "id": "zarafet",
    "kelime": "Zarafet",
    "anlam": "İncelik, naziklik.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ẓarāfet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "za-râ-fet",
    "ornekCumle": "Eski İstanbul hanımefendilerinin hitabetindeki edep ve zarafet, dinleyenleri hayran bırakırdı."
  },
  {
    "id": "zenginlik",
    "kelime": "Zenginlik",
    "anlam": "Varlık, bolluk.",
    "turu": "Kadim Kelime",
    "koken": "Farsça / Türkçe (zengīn + lik)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "zen-gin-lik",
    "ornekCumle": "Türkçemizin en büyük zenginliği, bin yılı aşan kadim metinlerindeki duygu ve düşünce derinliğidir."
  },
  {
    "id": "aba-vakti-aba-yaba-vakti-yaba-alinir",
    "kelime": "Aba vakti aba, yaba vakti yaba alınır",
    "anlam": "Her şeyin vaktinde ve zamanında tedariki yapılmalıdır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "a-ba vak-ti a-ba",
    "ornekCumle": "Kış gelmeden odununu, yaz gelmeden orağını hazırlayan köylü 'Aba vakti aba, yaba vakti yaba alınır' der."
  },
  {
    "id": "ak-akce-kara-gun-icindir",
    "kelime": "Ak akçe kara gün içindir",
    "anlam": "Kazanılan paralar zor günler için biriktirilmelidir.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "ak ak-çe ka-ra gün",
    "ornekCumle": "Gençliğinde kazandığının bir kısmını biriktirerek 'Ak akçe kara gün içindir' öğüdünü bizzat tatbik etti."
  },
  {
    "id": "damlaya-damlaya-gol-olur",
    "kelime": "Damlaya damlaya göl olur",
    "anlam": "Küçük şeyler birikerek büyük varlıklar oluşturur.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "dam-la-ya dam-la-ya",
    "ornekCumle": "Küçük tasarrufların zamanla nasıl büyük bir sermayeye dönüştüğünü görünce damlaya damlaya göl olur dedi."
  },
  {
    "id": "el-elin-esegini-turku-cagirarak-arar",
    "kelime": "El elin eşeğini türkü çağırarak arar",
    "anlam": "Başkalarının derdi insanı kendi derdi kadar üzmez, eğlence sanılır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "el e-lin e-şe-ği-ni",
    "ornekCumle": "Başkalarından senin derdine senin kadar yanmasını bekleme; zira el elin eşeğini türkü çağırarak arar."
  },
  {
    "id": "gorunen-koy-kilavuz-istemez",
    "kelime": "Görünen köy kılavuz istemez",
    "anlam": "Açık olan, ortada duran durumlar için delil arama gereği yoktur.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "gö-rü-nen köy kı-la-vuz",
    "ornekCumle": "Bütün deliller ve neticeler apaçık meydandayken fazla söze lüzum yok; görünen köy kılavuz istemez."
  },
  {
    "id": "lafla-peynir-gemisi-yurumez",
    "kelime": "Lafla peynir gemisi yürümez",
    "anlam": "Sadece söz vererek, çalışmadan iş yapılmaz.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "laf-la pey-nir ge-mi-si",
    "ornekCumle": "Sürekli büyük projelerden bahsedip kılını kıpırdatmayan ortağına 'Lafla peynir gemisi yürümez' diye çıkıştı."
  },
  {
    "id": "sakla-samani-gelir-zamani",
    "kelime": "Sakla samanı gelir zamanı",
    "anlam": "Görünüşte önemsiz görülen şeyler bir gün mutlaka lazımdır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "sak-la sa-ma-nı",
    "ornekCumle": "Eski sandıktaki kumaş parçalarını atmayan usta terzi, sakla samanı gelir zamanı diyerek onları antika sedire yama yaptı."
  },
  {
    "id": "sutten-agzi-yanan-ayrani-ufleyerek-icer",
    "kelime": "Sütten ağzı yanan ayranı üfleyerek içer",
    "anlam": "Bir kez zarara uğrayan kişi, benzer durumlarda aşırı temkinli davranır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "süt-ten ağ-zı ya-nan",
    "ornekCumle": "Önceki ortaklığında dolandırılan tüccar, sütten ağzı yanan ayranı üfleyerek içer misali yeni sözleşmenin her bendini kılı kırk yararak okudu."
  },
  {
    "id": "zahmetsiz-rahmet-olmaz",
    "kelime": "Zahmetsiz rahmet olmaz",
    "anlam": "Emek verilmeden başarı veya kazanç elde edilemez.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "zah-met-siz rah-met",
    "ornekCumle": "Zirveye ulaşmak isteyen dağcı fırtınaya göğüs germelidir; çünkü zahmetsiz rahmet olmaz."
  },
  {
    "id": "agac-yasken-egilir",
    "kelime": "Ağaç yaşken eğilir",
    "anlam": "Çocuklar küçük yaşta kolay eğitilir, yönlendirilir.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "a-ğaç yaş-ken e-ği-lir",
    "ornekCumle": "Çocukların güzel ahlak ve edebini küçük yaşta kazanmaları şarttır, zira ağaç yaşken eğilir."
  },
  {
    "id": "aba-altindan-sopa-gostermek",
    "kelime": "Aba altından sopa göstermek",
    "anlam": "Açıkça korkutmayarak, üstü kapalı gözdağı vermek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "a-ba al-tın-dan so-pa",
    "ornekCumle": "Toplantıda kibar görünmeye çalışsa da üstü kapalı tehditlerle aba altından sopa gösteriyordu."
  },
  {
    "id": "etekleri-zil-calmak",
    "kelime": "Etekleri zil çalmak",
    "anlam": "Çok sevinmek, neşelenmek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "e-tek-le-ri zil çal-mak",
    "ornekCumle": "Yıllardır görmediği evladının vatana döndüğünü işiten annenin sevinçten etekleri zil çalıyordu."
  },
  {
    "id": "goz-boyamak",
    "kelime": "Göz boyamak",
    "anlam": "Başkasını aldatmak, kandırmak, gerçekleri gizlemek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "göz bo-ya-mak",
    "ornekCumle": "Kusurlu malların üzerine cafcaflı ambalajlar koyarak müşterinin gözünü boyamaya kalktılar."
  },
  {
    "id": "i-pe-un-sermek",
    "kelime": "İpe un sermek",
    "anlam": "İşi yokuşa sürmek, bahaneler üreterek işten kaçınmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "i-pe un ser-mek",
    "ornekCumle": "Kendisine tevdi edilen sorumluluğu savsaklamak için bin dereden su getirip ipe un seriyordu."
  },
  {
    "id": "kili-kirk-yarmak",
    "kelime": "Kılı kırk yarmak",
    "anlam": "Bir işte çok titiz davranmak, en ince detayına kadar incelemek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "kı-lı kırk yar-mak",
    "ornekCumle": "Eski arşiv belgelerini tasnif eden tarihçi, her bir satırı kılı kırk yararak inceliyordu."
  },
  {
    "id": "pireyi-deve-yapmak",
    "kelime": "Pireyi deve yapmak",
    "anlam": "Önemsiz bir olayı büyütmek, abartmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "pi-re-yi de-ve yap-mak",
    "ornekCumle": "Küçük bir ev kazasını pireyi deve yaparak bütün akrabalara büyük bir facia gibi anlattı."
  },
  {
    "id": "pot-kirmak",
    "kelime": "Pot kırmak",
    "anlam": "Yersiz veya düşüncesizce bir söz söylemek, gaf yapmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "pot kır-mak",
    "ornekCumle": "Düğün merasiminde konuşurken gelinin sırrını açığa vurup salondakilerin önünde büyük bir pot kırdı."
  },
  {
    "id": "cam-devirmek",
    "kelime": "Çam devirmek",
    "anlam": "Farkında olmadan karşısındakini kıracak ya da zor durumda bırakacak söz söylemek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "çam de-vir-mek",
    "ornekCumle": "Müdürün yanında şirketin en hassas mevzusundan uluorta bahsederek öyle bir çam devirdi ki ortam buz kesti."
  },
  {
    "id": "sinek-avlamak",
    "kelime": "Sinek avlamak",
    "anlam": "İşsiz kalmak, iş yapamamak, müşteri olmamak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "si-nek av-la-mak",
    "ornekCumle": "Yeni köprü açılınca eski güzergahtaki küçük esnaf akşama kadar sinek avlamak zorunda kaldı."
  },
  {
    "id": "horoz-olur-gozu-coplukte-kalir",
    "kelime": "Horoz ölür, gözü çöplükte kalır",
    "anlam": "İnsan alışkanlıklarından ve zaaflarından asla vazgeçemez.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ho-roz ö-lür gö-zü",
    "ornekCumle": "Makamından emekli olduğu halde her sabah eski dairesini teftişe gelen adama 'Horoz ölür gözü çöplükte kalır' dediler."
  },
  {
    "id": "muazzam",
    "kelime": "Muazzam",
    "anlam": "Çok büyük, devasa, hayranlık uyandıran.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muʿaẓẓam)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-az-zam",
    "ornekCumle": "Selimiye Camii'nin kubbesi altına girdiğinizde mimarinin o muazzam azameti insanı derinden sarsar."
  },
  {
    "id": "mustakim",
    "kelime": "Müstakim",
    "anlam": "Doğru yoldan ayrılmayan, dürüst.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mustaḳīm)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-ta-kîm",
    "ornekCumle": "Dünyevi menfaatlerin ve rüşvetin kol gezdiği yerde müstakim bir duruş sergileyerek dürüstlükten şaşmadı."
  },
  {
    "id": "naciz",
    "kelime": "Nâçiz",
    "anlam": "Değersiz, önemsiz (alçakgönüllülük ifadesi).",
    "turu": "Kadim Kelime",
    "koken": "Farsça (nā-çīz)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "nâ-çiz",
    "ornekCumle": "Bu nâçiz kitapçığı, ömrünü Türk diline vakfeden cefakâr muallimlerimize bir vefa borcu olarak sunuyorum."
  },
  {
    "id": "mutekamil",
    "kelime": "Mütekamil",
    "anlam": "Olgunlaşmış, gelişmiş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütekāmil)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-kâ-mil",
    "ornekCumle": "Otuz yıllık ilmi birikimin neticesinde vücuda gelen bu lügat, sahasının en mütekamil kaynağıdır."
  },
  {
    "id": "mutereddit",
    "kelime": "Mütereddit",
    "anlam": "Kararsız, tereddüt eden.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütereddid)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-red-dit",
    "ornekCumle": "Önündeki iki mühim yol ayrımında hangi istikameti seçeceği hususunda günlerce mütereddit kaldı."
  },
  {
    "id": "munhasiran",
    "kelime": "Münhasıran",
    "anlam": "Yalnızca, sadece.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (munḥaṣıran)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mün-ha-sı-ran",
    "ornekCumle": "Yazma Eserler Kütüphanesi'nin bu nadide salonu, münhasıran lisansüstü araştırmacılara tahsis edilmiştir."
  },
  {
    "id": "mutehassis",
    "kelime": "Mütehassıs",
    "anlam": "Uzman.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müteḫaṣṣıṣ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-has-sıs",
    "ornekCumle": "Eski çinilerin restorasyonu ancak alanında mahir bir mütehassıs gözetiminde yürütülebilir."
  },
  {
    "id": "muteselsil",
    "kelime": "Müteselsil",
    "anlam": "Zincirleme, birbirine bağlı olarak sürüp giden.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müteselsil)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-sel-sil",
    "ornekCumle": "Kanun karşısında ortaklardan her biri, şirketin mali yükümlülüklerine müteselsil kefil sayılmıştır."
  },
  {
    "id": "musamaha",
    "kelime": "Müsamaha",
    "anlam": "Hoşgörü.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müsāmaḥa)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-sâ-ma-ha",
    "ornekCumle": "Farklı fikirlere gösterdiği engin müsamaha, onun talebeleri tarafından hürmetle anılmasını sağladı."
  },
  {
    "id": "muskulpesent",
    "kelime": "Müşkülpesent",
    "anlam": "Zor beğenen, titiz.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça (muşkil-pesend)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müş-kül-pe-sent",
    "ornekCumle": "Her kelimeyi ve her cümleyi defalarca eleyen müşkülpesent bir yazar olduğu için eseri geç tamamlandı."
  },
  {
    "id": "halis-muhlis",
    "kelime": "Halis muhlis",
    "anlam": "Katıksız, saf, hakiki.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça İkileme",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ha-lis muh-lis",
    "ornekCumle": "Köyden getirdiği tereyağı ve bal, hiçbir katkı maddesi bulunmayan halis muhlis memleket mahsulüydü."
  },
  {
    "id": "mecazi",
    "kelime": "Mecazî",
    "anlam": "Gerçek anlamı dışında kullanılan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mecāzī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "me-câ-zî",
    "ornekCumle": "Şairin dizelerindeki 'gül ve bülbül' tasvirleri, ilahi aşkı anlatan mecazî bir mahiyet taşır."
  },
  {
    "id": "muessir",
    "kelime": "Müessir",
    "anlam": "Etkileyen, tesirli.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müʾeŝŝir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-es-sir",
    "ornekCumle": "Hocanın mecliste yaptığı kısa fakat müessir konuşma, salondaki herkesi derinden sarstı."
  },
  {
    "id": "muktedir",
    "kelime": "Muktedir",
    "anlam": "Gücü yeten, iktidar sahibi.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳtedir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muk-te-dir",
    "ornekCumle": "Devlet idaresinde adalet ve asayişi tesis etmeye muktedir bir lider, halkına güven aşılar."
  },
  {
    "id": "muasir",
    "kelime": "Muasır",
    "anlam": "Çağdaş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muʿāṣır)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-â-sır",
    "ornekCumle": "Kendi köklerimize sımsıkı sarılırken muasır medeniyet seviyesinin de önüne geçmeyi hedeflemeliyiz."
  },
  {
    "id": "mulhem",
    "kelime": "Mülhem",
    "anlam": "İlham olunmuş, içe doğmuş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mülhem)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mül-hem",
    "ornekCumle": "Bestekârın bu hüzünlü nihavend şarkısı, Boğaz'ın akşam sisinden mülhem nağmelerle örülmüştür."
  },
  {
    "id": "mulayim",
    "kelime": "Mülayim",
    "anlam": "Yumuşak huylu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mülāyim)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-lâ-yim",
    "ornekCumle": "En öfkeli insanları bile tatlı dili ve mülayim tabiatıyla teskin etmeyi başarırdı."
  },
  {
    "id": "mustakil",
    "kelime": "Müstakil",
    "anlam": "Bağımsız, ayrı, kendine ait.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstaḳil)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-ta-kil",
    "ornekCumle": "Köyün yamacında bahçe içinde müstakil bir ev inşa edip ömrünün kalanını tabiatla baş başa geçirdi."
  },
  {
    "id": "muessese",
    "kelime": "Müessese",
    "anlam": "Kurum, kuruluş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müʾessese)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-es-se-se",
    "ornekCumle": "Darüşşafaka gibi asırlık bir hayır müessesesi, binlerce yetim gencin istikbalini aydınlatmıştır."
  },
  {
    "id": "mukrim",
    "kelime": "Mükrim",
    "anlam": "İkram etmeyi seven, konuksever.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mükrim)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mük-rim",
    "ornekCumle": "Gelen hiçbir yolcuyu aç göndermeyen mükrim hane sahibi, sofrasını herkese cömertçe açardı."
  },
  {
    "id": "muskul",
    "kelime": "Müşkül",
    "anlam": "Güç, çetin, zorluk.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müşkil)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müş-kül",
    "ornekCumle": "Karşımıza çıkan bu müşkül meseleyi ancak sahasında uzman kimselerle istişare ederek çözebiliriz."
  },
  {
    "id": "mutereddit-2",
    "kelime": "Mütereddit",
    "anlam": "Kararsız, çekingen, tereddütlü.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütereddid)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-red-dit",
    "ornekCumle": "Teklifi kabul edip etmemekte hâlâ mütereddit davranıyor, karar vermek için mühlet istiyordu."
  },
  {
    "id": "mumtaz-2",
    "kelime": "Mümtaz",
    "anlam": "Seçkin, ayrıcalıklı, üstün nitelikli.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mümtāz)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müm-tâz",
    "ornekCumle": "Cemiyet içinde ahlakı ve terbiyesiyle tebarüz etmiş mümtaz şahsiyetler topluma rehberlik eder."
  },
  {
    "id": "muesses",
    "kelime": "Müesses",
    "anlam": "Kurulmuş, temeli atılmış.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müʾesses)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-es-ses",
    "ornekCumle": "Yüz yıllık müesses nizamı bir gecede yıkmak yerine ıslah ederek dönüştürmek gerekir."
  },
  {
    "id": "mueccel",
    "kelime": "Müeccel",
    "anlam": "Ertelenmiş, vadesi sonraya bırakılmış.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müʾeccel)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-ec-cel",
    "ornekCumle": "Mahkeme kararıyla borcun ifası müeccel bir tarihe ertelenerek tüccara nefes aldırıldı."
  },
  {
    "id": "mustesna-2",
    "kelime": "Müstesna",
    "anlam": "İstisnai, benzersiz, eşsiz.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstesnā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-tes-nâ",
    "ornekCumle": "İstanbul'un fethi, dünya harp tarihinde askeri deha bakımından müstesna bir zaferdir."
  },
  {
    "id": "musfik",
    "kelime": "Müşfik",
    "anlam": "Şefkatli, merhametli, koruyup kollayan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müşfiḳ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müş-fik",
    "ornekCumle": "Evlatlarının üzerine müşfik bir anne kanadı gibi gerilerek onları her türlü tehlikeden korudu."
  },
  {
    "id": "munzevi",
    "kelime": "Münzevî",
    "anlam": "Toplumdan uzaklaşarak tek başına yaşayan, köşesine çekilmiş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (münzevī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mün-ze-vî",
    "ornekCumle": "Şehrin gürültüsünden kaçarak dağ başındaki ahşap kulübede münzevî bir ömür sürmeyi seçti."
  },
  {
    "id": "mutereddi",
    "kelime": "Mütereddî",
    "anlam": "Alçalmış, bozulmuş, yozlaşmış.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütereddī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-red-dî",
    "ornekCumle": "Milli ve ahlaki değerlerinden koparak mütereddî bir hayata sürüklenen cemiyetler zamanla çöker."
  },
  {
    "id": "muessif",
    "kelime": "Müessif",
    "anlam": "Üzücü, teessüf gerektiren.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müʾessif)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-es-sif",
    "ornekCumle": "Tarihi köprünün sel felaketinde yıkılması, hepimizin yüreğini burkan müessif bir hadisedir."
  },
  {
    "id": "mukafat",
    "kelime": "Mükâfat",
    "anlam": "Ödül, karşılık.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mükāfāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-kâ-fat",
    "ornekCumle": "Yıllarca döktüğü alın terinin mükâfatı olarak nihayet hak ettiği ödülü göğsüne taktı."
  },
  {
    "id": "mukrim-2",
    "kelime": "Mükrim",
    "anlam": "İkram sever, konuk ağırlamaktan hoşlanan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mükrim)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mük-rim",
    "ornekCumle": "Konağın kapısı daima açıktı; zira ev sahibi misafirperverlikte emsalsiz bir mükrim zattı."
  },
  {
    "id": "muteessir",
    "kelime": "Müteessir",
    "anlam": "Üzülmüş, duygulanmış, müteessir olan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müteʾeŝŝir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-es-sir",
    "ornekCumle": "Arkadaşının başına gelen elim kazayı duyunca son derece müteessir oldu ve derhal hastaneye koştu."
  },
  {
    "id": "mutefekkir-2",
    "kelime": "Mütefekkir",
    "anlam": "Düşünür, fikir ve felsefe insanı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütefekkir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-fek-kir",
    "ornekCumle": "Cemil Meriç, Doğu ve Batı medeniyetlerini derin vukufla tahlil eden abidevi bir mütefekkirdir."
  },
  {
    "id": "muftehir",
    "kelime": "Müftehir",
    "anlam": "Övünen, gurur duyan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müfteḫir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müf-te-hir",
    "ornekCumle": "Milletinin şanlı tarihiyle daima müftehir olan genç nesil, istikbale emin adımlarla yürür."
  },
  {
    "id": "musamahakar",
    "kelime": "Müsamahakar",
    "anlam": "Hoşgörülü, anlayışlı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça (müsāmaḥa-kār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-sâ-ma-ha-kâr",
    "ornekCumle": "İnsanların kusurlarına karşı müsamahakâr davranmak, meclislerde sevgi ve muhabbeti artırır."
  },
  {
    "id": "muntesip",
    "kelime": "Müntesip",
    "anlam": "Bir yere, bir mesleğe veya akıma bağlı olan, mensup.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müntesib)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mün-te-sip",
    "ornekCumle": "Geleneksel hat sanatına müntesip bir sanatkâr olarak yüzlerce nadide levha vücuda getirdi."
  },
  {
    "id": "mustakbel",
    "kelime": "Müstakbel",
    "anlam": "Gelecek, ileriki zaman.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstaḳbel)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-tak-bel",
    "ornekCumle": "Şimdiden yapılan bu köklü yatırımlar, memleketimizin müstakbel refahının teminatıdır."
  },
  {
    "id": "mubeccel",
    "kelime": "Mübeccel",
    "anlam": "Yüceltilmiş, saygıdeğer, ululanmış.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mübeccel)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-bec-cel",
    "ornekCumle": "Vatan uğrunda canını feda eden şehitlerimizin aziz hatırası milletimizin sinesinde daima mübecceldir."
  },
  {
    "id": "mudafaa",
    "kelime": "Müdafaa",
    "anlam": "Savunma, koruma.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müdāfaʿa)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-dâ-fa-a",
    "ornekCumle": "İstiklal Mücadelesi'nde cephede sergilenen kahramanca müdafaa, esareti asla kabul etmeyeceğimizin nişanesidir."
  },
  {
    "id": "muteredditane",
    "kelime": "Müteredditâne",
    "anlam": "Kararsız bir şekilde, tereddütle.",
    "turu": "Zarf",
    "koken": "Arapça / Farsça",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-red-di-tâ-ne",
    "ornekCumle": "Kürsüye çıkarken adımlarını müteredditâne attı; fakat konuşmaya başlayınca heyecanı kayboldu."
  },
  {
    "id": "muheyya",
    "kelime": "Müheyya",
    "anlam": "Hazır, hazırlanmış.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müheyyeʾ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-hey-yâ",
    "ornekCumle": "Gerekli tüm erzak ve teçhizat tamamlanmış, ordu sefere çıkmak üzere müheyya vaziyete gelmişti."
  },
  {
    "id": "mulevves",
    "kelime": "Mülevves",
    "anlam": "Kirli, pisletilmiş, bulaşık.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mülevveŝ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-lev-ves",
    "ornekCumle": "Dedikodularla zihni mülevves hale gelmiş kimseler hakikatin saffetini idrak edemezler."
  },
  {
    "id": "mutekait",
    "kelime": "Mütekait",
    "anlam": "Emekli.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütekāʿid)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-kâ-it",
    "ornekCumle": "Kırk yıllık devlet hizmetinden sonra mütekait olan ihtiyar memur, vaktini hatıralarını yazarak geçiriyordu."
  },
  {
    "id": "munhal",
    "kelime": "Münhal",
    "anlam": "Boş (kadro, memuriyet vb.).",
    "turu": "Kadim Kelime",
    "koken": "Arapça (münḥal)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mün-hal",
    "ornekCumle": "Vilayet dairesinde münhal bulunan yazı işleri müdürlüğü kadrosuna tecrübeli bir kâtip tayin edildi."
  },
  {
    "id": "muellif",
    "kelime": "Müellif",
    "anlam": "Yazar, eser sahibi.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müʾellif)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-el-lif",
    "ornekCumle": "Eserin müellifi, kaynakları bizzat yerinde inceleyerek kitabını sağlam vesikalara dayandırmıştır."
  },
  {
    "id": "mutemadiyen-2",
    "kelime": "Mütemadiyen",
    "anlam": "Aralıksız, sürekli olarak, durmaksızın.",
    "turu": "Zarf",
    "koken": "Arapça (mütemādī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-mâ-di-yen",
    "ornekCumle": "Gece boyunca mütemadiyen yağan kar, sabahleyin bütün şehri beyaz bir örtüyle kaplamıştı."
  },
  {
    "id": "mubasir",
    "kelime": "Mübaşir",
    "anlam": "Duruşma salonunda düzeni sağlayan adliye görevlisi.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mübāşir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-bâ-şir",
    "ornekCumle": "Duruşma salonunun kapısını açan mübaşir, yüksek sesle sıradaki davanın taraflarını içeri çağırdı."
  },
  {
    "id": "mutereddet",
    "kelime": "Mütereddet",
    "anlam": "Tereddüt eden, kararsız kalan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütereddid)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-red-det",
    "ornekCumle": "İki teklif arasında günlerce mütereddet kaldıktan sonra nihayet memleketinde kalmaya karar verdi."
  },
  {
    "id": "mucerret",
    "kelime": "Mücerret",
    "anlam": "Soyut, yalnız, tek başına.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mücerred)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-cer-ret",
    "ornekCumle": "Felsefe dersinde mücerret kavramlar üzerinde dururken hocamız günlük hayattan somut misaller verdi."
  },
  {
    "id": "mukim",
    "kelime": "Mukim",
    "anlam": "Bir yerde oturan, ikamet eden.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳīm)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kîm",
    "ornekCumle": "Üsküdar'da mukim olan ihtiyar sahaf, dükkanında yarım asırdır nadide kitaplar biriktirirdi."
  },
  {
    "id": "muktebes",
    "kelime": "Muktebes",
    "anlam": "Alıntı yapılmış, iktibas edilmiş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muktebes)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muk-te-bes",
    "ornekCumle": "Eski divanlardan muktebes beyitlerle süslediği nesri, okuyucunun dimağında zengin tatlar bırakıyordu."
  },
  {
    "id": "muktedir-2",
    "kelime": "Muktedir",
    "anlam": "Gücü yeten, iş başarmaya muktedir olan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳtedir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muk-te-dir",
    "ornekCumle": "Büyük krizleri suhuletle çözmeye muktedir idareciler memleketin huzurunu teminat altına alırlar."
  },
  {
    "id": "mukavemet",
    "kelime": "Mukavemet",
    "anlam": "Direnç, karşı koyma gücü.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳāvemet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kâ-ve-met",
    "ornekCumle": "Fırtınanın şiddetine karşı gösterdiği mukavemet sayesinde gemi batmaktan son anda kurtuldu."
  },
  {
    "id": "mukaddeme",
    "kelime": "Mukaddeme",
    "anlam": "Önsöz, giriş bölümü.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳaddime)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kad-de-me",
    "ornekCumle": "İbn Haldun'un meşhur Mukaddeme adlı eseri, sosyoloji ve tarih felsefesinin temel taşlarındandır."
  },
  {
    "id": "mukaddes",
    "kelime": "Mukaddes",
    "anlam": "Kutsal, mübarek.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳaddes)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kad-des",
    "ornekCumle": "Milli ve manevi mukaddes değerlerimizi korumak, her Türk gencinin en asli vazifesidir."
  },
  {
    "id": "mukteza",
    "kelime": "Mukteza",
    "anlam": "Gereken, icap eden, lüzumlu şey.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳteżā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muk-te-zâ",
    "ornekCumle": "Adaletin muktezası ne ise hakkaniyetle yerine getirilmiş, hiçbir tarafa iltimas geçilmemiştir."
  },
  {
    "id": "mukayese",
    "kelime": "Mukayese",
    "anlam": "Karşılaştırma, kıyaslama.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳāyese)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kâ-ye-se",
    "ornekCumle": "İki edebi dönemi mukayese eden araştırmacı, dil ve üsluptaki köklü değişimleri gözler önüne serdi."
  },
  {
    "id": "mukadderat",
    "kelime": "Mukadderat",
    "anlam": "Yazgı, kader, önceden belirlenmiş durumlar.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳadderāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kad-de-rat",
    "ornekCumle": "İnsan elinden gelen tüm gayreti gösterdikten sonra neticeyi mukadderatın takdirine bırakmalıdır."
  },
  {
    "id": "mukabil",
    "kelime": "Mukabil",
    "anlam": "Karşılık olarak, mukabilinde.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳābil)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kâ-bil",
    "ornekCumle": "Gördüğü büyük iyiliğe mukabil o da dostunun en dar gününde yardımına koştu."
  },
  {
    "id": "muazzam-2",
    "kelime": "Muazzam",
    "anlam": "Devasa, görkemli, çok büyük.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muʿaẓẓam)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-az-zam",
    "ornekCumle": "Süleymaniye Kütüphanesi'ndeki el yazması koleksiyonu gören her araştırmacıda muazzam bir hayranlık uyandırır."
  },
  {
    "id": "muasir-2",
    "kelime": "Muasır",
    "anlam": "Çağdaş, asrın insanı, modern.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muʿāṣır)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-â-sır",
    "ornekCumle": "Köklü geleneklerimizden kopmadan muasır dünyanın ilim ve teknolojisini yakalamak mecburiyetindeyiz."
  },
  {
    "id": "muavenet",
    "kelime": "Muavenet",
    "anlam": "Yardımlaşma, imdat etme.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muʿāvenet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-â-ve-net",
    "ornekCumle": "Mahalle halkı aralarında kurdukları muavenet sandığı ile darda kalan komşularına el uzatırdı."
  },
  {
    "id": "muhafazakar",
    "kelime": "Muhafazakâr",
    "anlam": "Geleneklerine, değerlerine bağlı kalan, tutucu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-ha-fa-za-kâr",
    "ornekCumle": "Kültürel mirasını ve dil inceliklerini titizlikle muhafaza eden muhafazakâr edipler medeniyet bağını canlı tutar."
  },
  {
    "id": "muallak",
    "kelime": "Muallak",
    "anlam": "Askıda kalmış, belirsiz, karara bağlanmamış.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muʿallaḳ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-al-lak",
    "ornekCumle": "Davanın karara bağlanması ertelenince taraflar arasındaki ihtilaf bir süre daha muallakta kaldı."
  },
  {
    "id": "muhatap",
    "kelime": "Muhatap",
    "anlam": "Söz söylenen kimse, karşılıklı konuşan kişi.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḫāṭab)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hâ-tap",
    "ornekCumle": "Söylediği sözlerin asıl muhatabı meclisteki tecrübesiz gençlerdi."
  },
  {
    "id": "muhtelif",
    "kelime": "Muhtelif",
    "anlam": "Çeşitli, türlü, farklı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḫtelif)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muh-te-lif",
    "ornekCumle": "Sempozyuma Türkiye'nin muhtelif üniversitelerinden yüzlerce saygın akademisyen iştirak etti."
  },
  {
    "id": "muhteva",
    "kelime": "Muhteva",
    "anlam": "İçerik, bir eserin veya yazının özü.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḥtevā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muh-te-vâ",
    "ornekCumle": "Hazırlanan derginin muhtevası hem edebi makaleler hem de dil incelemeleriyle son derece zengindi."
  },
  {
    "id": "muazzip",
    "kelime": "Muazzip",
    "anlam": "Eziyet çeken, azap içinde olan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muʿaẕẕib)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-az-zip",
    "ornekCumle": "Yaptığı haksızlığı hatırladıkça vicdan azabıyla kıvranan muazzip bir ruh hali içine giriyordu."
  },
  {
    "id": "muhayyile",
    "kelime": "Muhayyile",
    "anlam": "Hayal gücü, tasavvur yeteneği.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḫayyile)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hay-yi-le",
    "ornekCumle": "Masal dinleyerek büyüyen çocukların muhayyilesi çok daha geniş ve renkli olur."
  },
  {
    "id": "muhakeme",
    "kelime": "Muhakeme",
    "anlam": "Akıl yürütme, değerlendirme, yargılama.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḥākeme)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hâ-ke-me",
    "ornekCumle": "Sağlıklı bir muhakeme yürütebilmek için hadiselere peşin hükümle değil tarafsız akılla yaklaşmak icap eder."
  },
  {
    "id": "muhalif",
    "kelime": "Muhalif",
    "anlam": "Aykırı düşen, karşı çıkan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḫālif)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hâ-lif",
    "ornekCumle": "Kendi görüşüne muhalif olan düşüncelere dahi sabırla kulak verip nezaketle cevap verirdi."
  },
  {
    "id": "muallim",
    "kelime": "Muallim",
    "anlam": "Öğretmen, eğitmen.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muʿallim)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-al-lim",
    "ornekCumle": "Köy okulundaki fedakâr muallim, karlı kış günlerinde çocukların yolunu sabırla beklerdi."
  },
  {
    "id": "muhabbet",
    "kelime": "Muhabbet",
    "anlam": "Sevgi, dostça sohbet, tatlı dil.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḥabbet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hab-bet",
    "ornekCumle": "Eski ahşap konakta demlenen çay eşliğinde yapılan muhabbet gecenin geç saatlerine kadar sürdü."
  },
  {
    "id": "muhacir",
    "kelime": "Muhacir",
    "anlam": "Göçmen, yurdunu bırakıp başka yere göç eden.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muhācir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hâ-cir",
    "ornekCumle": "Balkan Savaşları sırasında ata topraklarını terk etmek zorunda kalan muhacir kafileleri Anadolu'ya sığındı."
  },
  {
    "id": "muzaffer",
    "kelime": "Muzaffer",
    "anlam": "Zafer kazanmış, başarı elde etmiş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muẓaffer)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-zaf-fer",
    "ornekCumle": "Milli Mücadele'den muzaffer çıkan kahraman ordumuz, İzmir'e tekbirlerle girdi."
  },
  {
    "id": "mustear",
    "kelime": "Müstear",
    "anlam": "Takma (isim, ad).",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müsteʿār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-te-âr",
    "ornekCumle": "Usta muharrir, devrin siyasi baskılarından korunmak için yazılarını müstear bir isimle neşrediyordu."
  },
  {
    "id": "muteredditce",
    "kelime": "Müteredditçe",
    "anlam": "Şüpheci ve kararsız bir tavırla.",
    "turu": "Zarf",
    "koken": "Arapça / Türkçe Zarf",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-red-dit-çe",
    "ornekCumle": "Soruya müteredditçe cevap vermesi, konuyu tam olarak kavramadığını açıkça ele veriyordu."
  },
  {
    "id": "mursit",
    "kelime": "Mürşit",
    "anlam": "Doğru yolu gösteren kılavuz, rehber, uyarıcı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mürşid)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mür-şit",
    "ornekCumle": "Hayatta en hakiki mürşit ilimdir ve fendir; cehaletin karanlığını ancak bilgi dağıtır."
  },
  {
    "id": "mecara",
    "kelime": "Mecâra",
    "anlam": "Macir, akış yeri, macera alanı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mecrā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mec-râ",
    "ornekCumle": "Hayatın akış mecrasında insan kimi zaman durgun göllere kimi zaman coşkun çağlayanlara rastlar."
  },
  {
    "id": "ak-koyun-kara-koyun-gecidinde-belli-olur",
    "kelime": "Ak koyun kara koyun geçidinde belli olur",
    "anlam": "Bir kişinin veya durumun gerçek değeri, kritik bir iş veya sınav sırasında ortaya çıkar.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "ak ko-yun ka-ra ko-yun",
    "ornekCumle": "İmtihan vakti gelip çattığında kimin gerçekten hazırlandığı, yani ak koyun kara koyun geçidinde belli oldu."
  },
  {
    "id": "dost-ile-ye-ic-alisveris-etme",
    "kelime": "Dost ile ye, iç, alışveriş etme",
    "anlam": "Yakın arkadaşlarla ticari ilişkilerde bulunmak anlaşmazlıklara ve dostluğun bozulmasına yol açabilir.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "dost i-le ye iç",
    "ornekCumle": "Eski tüccarlar aradaki muhabbetin bozulmaması için 'Dost ile ye, iç, alışveriş etme' nasihatine sımsıkı sarılırdı."
  },
  {
    "id": "hamama-giren-terler",
    "kelime": "Hamama giren terler",
    "anlam": "Zor veya zahmetli bir işe girişen kimse, o işin sıkıntılarına katlanmak zorundadır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "ha-ma-ma gi-ren ter-ler",
    "ornekCumle": "Bu zorlu ve mesuliyetli projeye talip olduysan şikayet etmeyeceksin; ne demişler, hamama giren terler."
  },
  {
    "id": "i-ti-an-comagi-hazirla",
    "kelime": "İti an çomağı hazırla",
    "anlam": "Hakkında konuşulan kötü veya kavgacı bir kimse aniden ortaya çıkıverir.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "i-ti an ço-ma-ğı",
    "ornekCumle": "Tam o bencil adamın yaptıklarından bahsediyorduk ki kapı açılıverdi; iti an çomağı hazırla dedikleri bu olsa gerek."
  },
  {
    "id": "mum-dibine-isik-vermez",
    "kelime": "Mum dibine ışık vermez",
    "anlam": "Bir kimse başkalarına çok faydalı olabilir ama kendi yakınlarına veya çevresine bu yardımı ulaştıramaz.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "mum di-bi-ne ı-şık",
    "ornekCumle": "Dışarıdaki herkese şifa dağıtan hekimin kendi evladının rahatsızlığını fark edememesi mum dibine ışık vermez sözünü hatırlattı."
  },
  {
    "id": "ne-dograrsan-asina-o-cikar-kasigina",
    "kelime": "Ne doğrarsan aşına, o çıkar kaşığına",
    "anlam": "İnsan dünyada ne kadar emek ve çaba harcarsa, karşılığında ancak o kadarını elde eder.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "ne doğ-rar-san a-şı-na",
    "ornekCumle": "Gençliğinde ilme ve ahlaka ne kadar emek verirsen ihtiyarlığında onun semeresini görürsün; ne doğrarsan aşına o çıkar kaşığına."
  },
  {
    "id": "ruzgar-eken-firtina-bicer",
    "kelime": "Rüzgâr eken fırtına biçer",
    "anlam": "Kötülük yapan, etrafına huzursuzluk saçan kimse katbekat büyük bir bela ile karşılaşır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "rüz-gâr e-ken fır-tı-na",
    "ornekCumle": "Komşularına sürekli hile ve husumet besleyen o adam sonunda yapayalnız kaldı; zira rüzgâr eken fırtına biçer."
  },
  {
    "id": "samanlikta-igne-aramak",
    "kelime": "Samanlıkta iğne aramak",
    "anlam": "Son derece zor veya bulunuşu imkansız bir şeyi aramaya çalışmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "sa-man-lık-ta iğ-ne",
    "ornekCumle": "Milyonlarca dijital dosya arasında kayıp bir tek paragrafı bulmaya çalışmak samanlıkta iğne aramaktan farksızdı."
  },
  {
    "id": "tasima-su-ile-degirmen-donmez",
    "kelime": "Taşıma su ile değirmen dönmez",
    "anlam": "Sınırlı ve dışarıdan gelen geçici imkânlarla büyük veya sürekli bir iş yürütülemez.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "ta-şı-ma su i-le",
    "ornekCumle": "Dışarıdan gelen geçici yardımlarla fabrikayı ayakta tutamazsınız; taşıma su ile değirmen dönmez, kendi çarkınızı kurmalısınız."
  },
  {
    "id": "yalancinin-mumu-yatsiya-kadar-yanar",
    "kelime": "Yalancının mumu yatsıya kadar yanar",
    "anlam": "Söylenen yalanlar bir süre sonra mutlaka ortaya çıkar, gizli kalmaz.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "ya-lan-cı-nın mu-mu",
    "ornekCumle": "Sahte belgelerle haklı çıkmaya çalışsa da gerçekler ilk teftişte belgelendi; ne de olsa yalancının mumu yatsıya kadar yanar."
  },
  {
    "id": "abayi-yakmak",
    "kelime": "Abayı yakmak",
    "anlam": "Birine aşık olmak, tutulmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "a-ba-yı yak-mak",
    "ornekCumle": "Komşu köyün ela gözlü kızına fena halde abayı yakan aşık delikanlı gün boyu pınar başında türkü söylerdi."
  },
  {
    "id": "bindigi-dali-kesmek",
    "kelime": "Bindiği dalı kesmek",
    "anlam": "Kendi çıkarına zarar verecek, kendi konumunu tehlikeye atacak bir davranışta bulunmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "bin-di-ği da-lı kes-mek",
    "ornekCumle": "Kendisine yıllardır kol kanat geren patronuna iftira atarak resmen bindiği dalı kesti."
  },
  {
    "id": "cam-devirmek-2",
    "kelime": "Çam devirmek",
    "anlam": "Farkında olmadan pot kırmak, gaf yapmak, karşısındakini kıracak söz sarf etmek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "çam de-vir-mek",
    "ornekCumle": "Tanımadığı misafirin yanında ev sahibinin eski borçlarından bahsederek büyük bir çam devirdi."
  },
  {
    "id": "dereyi-gormeden-pacalari-sivamak",
    "kelime": "Dereyi görmeden paçaları sıvamak",
    "anlam": "Ortada henüz kesin bir durum veya sonuç yokken erkenden hazırlığa veya telaşa girişmek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "de-re-yi gör-me-den",
    "ornekCumle": "İhale sonuçlanmadan kutlama yemeği tertip edenler dereyi görmeden paçaları sıvamış oldular."
  },
  {
    "id": "etekleri-tutusmak",
    "kelime": "Etekleri tutuşmak",
    "anlam": "Büyük bir telaşa ve korkuya kapılmak, ne yapacağını bilememek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "e-tek-le-ri tu-tuş-mak",
    "ornekCumle": "Müfettişlerin ansızın kapıdan içeri girdiğini gören muhasebecinin etekleri tutuştu."
  },
  {
    "id": "firildak-gibi-donmek",
    "kelime": "Fırıldak gibi dönmek",
    "anlam": "Çıkarına göre sürekli fikir ve yön değiştirmek, güvenilmez olmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "fı-rıl-dak gi-bi dön-mek",
    "ornekCumle": "Çıkarları neredeyse hemen oraya meyleden, fırıldak gibi dönen insanlara güven duyulmaz."
  },
  {
    "id": "gozden-dusmek",
    "kelime": "Gözden düşmek",
    "anlam": "Eskiden gösterilen ilgi ve sevgiyi kaybetmek, gözü dışarıda olmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "göz-den düş-mek",
    "ornekCumle": "Verdiği sözleri tutmayıp işi savsaklayınca hem ustasının hem de müşterilerin gözünden düştü."
  },
  {
    "id": "haddini-bilmek",
    "kelime": "Haddini bilmek",
    "anlam": "Durumunu, yetkisini ve nerede durması gerektiğini bilmek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "had-di-ni bil-mek",
    "ornekCumle": "Büyüklerin meclisinde söz alırken haddini bilmek ve edebini korumak en mühim meziyettir."
  },
  {
    "id": "i-pe-un-sermek-2",
    "kelime": "İpe un sermek",
    "anlam": "İşi yokuşa sürmek, bahaneler bularak sorumluluktan kaçınmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "i-pe un ser-mek",
    "ornekCumle": "Sorumluluk almaktan kaçınmak için türlü bahaneler üreterek ipe un seriyordu."
  },
  {
    "id": "kas-yapayim-derken-goz-cikarmak",
    "kelime": "Kaş yapayım derken göz çıkarmak",
    "anlam": "Bir işi düzeltmeye çalışırken durumu daha da kötüleştirmek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "kaş ya-pa-yım der-ken",
    "ornekCumle": "Eski saati tamir edeyim derken zembereğini koparınca kaş yapayım derken göz çıkarmış oldu."
  },
  {
    "id": "kulak-kabartmak",
    "kelime": "Kulak kabartmak",
    "anlam": "Çaktırmadan, dikkatle söylenilenleri dinlemek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ku-lak ka-bart-mak",
    "ornekCumle": "Yandaki masada konuşulan gizli planları duymak için gazetesinin arkasından çaktırmadan kulak kabarttı."
  },
  {
    "id": "laf-ebesi-olmak",
    "kelime": "Laf ebesi olmak",
    "anlam": "Boş ve gereksiz laflarla çok konuşmak, geveze olmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "laf e-be-si ol-mak",
    "ornekCumle": "Haklı çıkmak için durmaksızın laf ebesi gibi konuşsa da kimseyi ikna edemedi."
  },
  {
    "id": "midemi-bulandirmak",
    "kelime": "Midemi bulandırmak",
    "anlam": "Tiksinti uyandırmak, şüphe ve huzursuzluk yaratmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "mi-de-mi bu-lan-dır-mak",
    "ornekCumle": "İhale sürecinde dönen gayrimeşru pazarlıklar namuslu çalışanların midesini bulandırmaya yetti."
  },
  {
    "id": "nallari-dikmek",
    "kelime": "Nalları dikmek",
    "anlam": "Ölmek, hayatını kaydetmek.",
    "turu": "Deyim",
    "koken": "Türkçe Kaba / Argo Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "nal-la-rı dik-mek",
    "ornekCumle": "Kasabanın eski değirmenindeki emektar katır nihayet eceliyle nalları dikti."
  },
  {
    "id": "ocagi-sonmek",
    "kelime": "Ocağı sönmek",
    "anlam": "Bir yuvanın, ailenin dağılması, varlığını yitirmesi.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "o-ca-ğı sön-mek",
    "ornekCumle": "Savaş yıllarında cepheden geri dönemeyen üç evladın ardından o köşkün adeta ocağı söndü."
  },
  {
    "id": "pabuc-birakmamak",
    "kelime": "Pabuç bırakmamak",
    "anlam": "Tehditlere boyun eğmemek, korkmamak, ödün vermemek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "pa-buç bı-rak-ma-mak",
    "ornekCumle": "Rakiplerinin tehditlerine ve baskılarına pabuç bırakmayarak davasını mahkemeye taşıdı."
  },
  {
    "id": "puskullu-bela",
    "kelime": "Püsküllü bela",
    "anlam": "Baştan savulamayan, uğraştırıcı ve sıkıntılı durum.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "püs-kül-lü be-lâ",
    "ornekCumle": "Nereden çıktığı belli olmayan bu miras davası ailenin başına tam bir püsküllü bela oldu."
  },
  {
    "id": "rapor-vermek",
    "kelime": "Rapor vermek",
    "anlam": "Durum hakkında resmî bilgi sunmak.",
    "turu": "Deyim / Tabir",
    "koken": "Fransızca Kökenli / Türkçe Tabir",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ra-por ver-mek",
    "ornekCumle": "Görevi tamamlayan müfettiş heyeti, teftiş neticelerini bakanlığa resmi bir raporla sundu."
  },
  {
    "id": "samur-kurk-olmak",
    "kelime": "Samur kürk olmak",
    "anlam": "Çok değerli ve itibarlı bir konuma gelmek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "sa-mur kürk ol-mak",
    "ornekCumle": "Gözden düşmüş bir tavsiye samur kürk olsa kimse sırtına alıp giymez."
  },
  {
    "id": "seytanin-bacagini-kirmak",
    "kelime": "Şeytanın bacağını kırmak",
    "anlam": "Uzun süredir süregelen kötü şansı veya başarısızlığı yenmek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "şey-ta-nın ba-ca-ğı-nı",
    "ornekCumle": "Yıllardır finallerde elenen okul takımı bu sene nihayet şeytanın bacağını kırıp şampiyon oldu."
  },
  {
    "id": "tabana-kuvvet",
    "kelime": "Tabana kuvvet",
    "anlam": "Yaya olarak yürümeye devam etmek, aceleyle uzaklaşmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ta-ba-na kuv-vet",
    "ornekCumle": "Son otobüsü de kaçırınca karanlık köy yolunda tabana kuvvet diyerek yürümeye başladılar."
  },
  {
    "id": "tuz-biber-ektirmek",
    "kelime": "Tuz biber ektirmek",
    "anlam": "Var olan kötü bir durumu daha da çekilmez, acı verici hale getirmek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "tuz bi-ber ek-tir-mek",
    "ornekCumle": "Zaten canı burnunda olan esnafa bir de ceza kesilince acısına adeta tuz biber ektiler."
  },
  {
    "id": "ucu-kapali",
    "kelime": "Ucu kapalı",
    "anlam": "Kesin olmayan, netliğe kavuşmamış durum.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "u-cu ka-pa-lı",
    "ornekCumle": "Bu sözleşme maddesi ucu kapalı bırakıldığı için ileride hukuki ihtilaflara yol açabilir."
  },
  {
    "id": "ustune-tuy-dikmek",
    "kelime": "Üstüne tüy dikmek",
    "anlam": "Yapılan bir hatanın ardından durumu daha da berbat edecek bir hamle yapmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "üs-tü-ne tüy dik-mek",
    "ornekCumle": "Yaptığı hatayı telafi etmek yerine bir de karşı tarafa hakaret edince işin üstüne tüy dikti."
  },
  {
    "id": "vur-patlasin-cal-oynasin",
    "kelime": "Vur patlasın çal oynasın",
    "anlam": "Gönlünce eğlenmek, hayatın tadını çıkarmak, hiçbir şeyi takmamak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "vur pat-la-sın",
    "ornekCumle": "Bağ bozumu şenliklerinde köylüler vur patlasın çal oynasın sabaha kadar neşeyle eğlendi."
  },
  {
    "id": "ya-tutarsa-diye-dusunmek",
    "kelime": "Ya tutarsa diye düşünmek",
    "anlam": "Riskli ve gerçekleşme ihtimali düşük bir işe umut bağlanarak adım atmak.",
    "turu": "Deyim",
    "koken": "Türkçe Kültürel Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ya tu-tar-sa",
    "ornekCumle": "Nasreddin Hoca'nın göle maya çalarken 'Ya tutarsa' demesi gibi o da küçük bir ihtimale bel bağladı."
  },
  {
    "id": "zeytinyagi-gibi-suya-cikmak",
    "kelime": "Zeytinyağı gibi suya çıkmak",
    "anlam": "Suçlu olduğu halde her seferinde üste çıkmayı başarmak.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "zey-tin-ya-ğı gi-bi",
    "ornekCumle": "Hatalı olduğu apaçık ortadayken laf cambazlığıyla zeytinyağı gibi suyun üstüne çıkmayı başardı."
  },
  {
    "id": "zevzeklik-etmek",
    "kelime": "Zevzeklik etmek",
    "anlam": "Yersiz, saçma ve boş sözler söylemek.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "zev-zek-lik et-mek",
    "ornekCumle": "Ciddi bir devlet meselesi müzakere edilirken zevzeklik edip meclisin ciddiyetini bozdu."
  },
  {
    "id": "zincire-vurulmak",
    "kelime": "Zincire vurulmak",
    "anlam": "Özgürlüğü kısıtlanmak, esir alınmak.",
    "turu": "Deyim",
    "koken": "Türkçe Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "zin-ci-re vu-rul-mak",
    "ornekCumle": "Zalimin zindanlarında zincire vurulsa dahi hürriyet sevdasından zerre kadar taviz vermedi."
  },
  {
    "id": "zurnanin-zirt-dedigi-yer",
    "kelime": "Zurnanın zırt dediği yer",
    "anlam": "İşin en kritik, en zayıf veya en sıkıntılı noktası.",
    "turu": "Deyim",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "zur-na-nın zırt de-di-ği",
    "ornekCumle": "Mesele para ödemeye gelince zurnanın zırt dediği yere geldiklerini hepsi anladı."
  },
  {
    "id": "mutesanit",
    "kelime": "Mütesanit",
    "anlam": "Dayanışma içinde olan, birbirine sıkıca bağlı, omuz omuza veren.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütesānid)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-sâ-nit",
    "ornekCumle": "Zor günlerde yekvücut olup mütesanit bir duruş sergileyen cemiyetler her fırtınayı aşarlar."
  },
  {
    "id": "mutecaviz",
    "kelime": "Mütecaviz",
    "anlam": "Saldırgan, tecavüz eden, taarruzda bulunan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütecāvīz)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-câ-viz",
    "ornekCumle": "Sınır boyundaki köylere saldıran mütecaviz çeteler, hudut muhafızları tarafından püskürtüldü."
  },
  {
    "id": "mutemayil",
    "kelime": "Mütemayil",
    "anlam": "Eğilimi olan, meyilli, bir tarafa yönelen.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütemāyil)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-mâ-yil",
    "ornekCumle": "Genç araştırmacı, edebiyat teorilerinden ziyade metin tahlillerine mütemayil bir zihne sahipti."
  },
  {
    "id": "mutekabilen",
    "kelime": "Mütekabilen",
    "anlam": "Karşılıklı olarak, mukabelede bulunarak.",
    "turu": "Zarf",
    "koken": "Arapça (mütekābilen)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-kâ-bi-len",
    "ornekCumle": "İki ülke elçileri barış antlaşmasını mütekabilen imzalayarak dostluk bağlarını tazelediler."
  },
  {
    "id": "muteredditane-2",
    "kelime": "Müteredditâne",
    "anlam": "Kararsız bir tutumla, çekingenlik göstererek.",
    "turu": "Zarf",
    "koken": "Arapça / Farsça",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-red-di-tâ-ne",
    "ornekCumle": "Kürsüye çıkıp söze başlarken müteredditâne bir tavır sergilediyse de sonradan coşkuyla hitap etti."
  },
  {
    "id": "muessiriyet",
    "kelime": "Müessiriyet",
    "anlam": "Tesirlilik, etkileyicilik gücü.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müʾeŝŝiriyyet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-es-si-ri-yet",
    "ornekCumle": "Şairin kelimeleri seçerken gösterdiği titizlik, mısraların müessiriyetini katbekat artırıyordu."
  },
  {
    "id": "mutemmim",
    "kelime": "Mütemmim",
    "anlam": "Tamamlayıcı, bütünleyici parça.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütemmim)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-tem-mim",
    "ornekCumle": "Bahçedeki taş havuz ve kameriye, konağın mimarisini tamamlayan mütemmim birer cüzdür."
  },
  {
    "id": "munhasiran-2",
    "kelime": "Münhasıran",
    "anlam": "Yalnızca ve sadece bir şeye mahsus olmak üzere.",
    "turu": "Zarf",
    "koken": "Arapça (munḥaṣıran)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mün-ha-sı-ran",
    "ornekCumle": "Bu kıymetli elyazmaları kütüphanede münhasıran ihtisas sahibi alimlerin tetkikine açıktır."
  },
  {
    "id": "mutereddi-2",
    "kelime": "Mütereddi",
    "anlam": "Ahlaken veya maddeten yozlaşmış, düşkünleşmiş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütereddī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-red-dî",
    "ornekCumle": "Milli ahlaktan ve edepten uzaklaşan mütereddî zihniyetler toplumun bağlarını zayıflatır."
  },
  {
    "id": "mutekamilen",
    "kelime": "Mütekamilen",
    "anlam": "Tamamlanmış, olgunlaşmış bir biçimde.",
    "turu": "Zarf",
    "koken": "Arapça (mütekā сущalen)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-kâ-mi-len",
    "ornekCumle": "Tüm bölümleri mütekâmilen tamamlanan sözlük, araştırmacıların istifadesine sunuldu."
  },
  {
    "id": "muskulpesentlik",
    "kelime": "Müşkülpesentlik",
    "anlam": "Zor beğenme durumu, aşırı titizlik.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müş-kül-pe-sent-lik",
    "ornekCumle": "Yazılarındaki aşırı müşkülpesentlik sebebiyle tek bir sayfayı bile günlerce tashih ederdi."
  },
  {
    "id": "musarunileyh",
    "kelime": "Müşarünileyh",
    "anlam": "Kendisine işaret edilen, adı geçen, anılan (saygın kişi).",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müşārun ileyh)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-şâ-rün-i-leyh",
    "ornekCumle": "Ferman metninde adı geçen müşarünileyh paşa, seferin başkumandanı olarak tayin edilmişti."
  },
  {
    "id": "munasebetci",
    "kelime": "Münasebetçi",
    "anlam": "İlişki kurmayı seven, vesile arayan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-nâ-se-bet-çi",
    "ornekCumle": "Kendi menfaatini gözeterek herkese şirin görünmeye çalışan münasebetçi tavırlardan hiç hazzetmezdi."
  },
  {
    "id": "mucessem",
    "kelime": "Mücessem",
    "anlam": "Somutlaşmış, cisimleşmiş, gözle görülebilir hâle gelmiş.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mücessem)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-ces-sem",
    "ornekCumle": "O asil hanımefendi, nezaket ve letafetin adeta bu dünyada mücessem hale gelmiş timsaliydi."
  },
  {
    "id": "mustahdem",
    "kelime": "Müstahdem",
    "anlam": "Hizmetli, kapıcı, hizmet eden görevli.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstaḫdem)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-tah-dem",
    "ornekCumle": "Mektebin emektar müstahdemi, kış sabahları sobaya odun atarak sınıfları erkenden ısıtırdı."
  },
  {
    "id": "mustahak",
    "kelime": "Müstahak",
    "anlam": "Hak edilmiş, layık olunmuş (genellikle olumsuz durumlar için).",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstaḥaḳḳ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-ta-hak",
    "ornekCumle": "Hilesi meydana çıkınca herkesin ayıpladığı duruma düşmesi, kendi ettiklerine müstahak bir neticeydi."
  },
  {
    "id": "mustakar",
    "kelime": "Müstakar",
    "anlam": "Kararlı, durağan, yerleşik ve sarsılmaz.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstaḳarr)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-ta-kar",
    "ornekCumle": "Yıllar süren kargaşanın ardından nihayet ülkede adil ve müstakar bir idare tesis edildi."
  },
  {
    "id": "mustefit",
    "kelime": "Müstefit",
    "anlam": "Faydalanan, yararlanan, karlı çıkan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstefīd)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-te-fit",
    "ornekCumle": "Kütüphanenin zengin arşivinden müstefit olan talebeler tezlerini muvaffakiyetle bitirdiler."
  },
  {
    "id": "mustehzi",
    "kelime": "Müstehzi",
    "anlam": "Alaycı, alay eden, istihza dolu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müstehziʾ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-teh-zî",
    "ornekCumle": "Muhatabına yukarıdan bakan müstehzi tebessümü, salondaki vakar sahibi insanları incitti."
  },
  {
    "id": "mustesnalik",
    "kelime": "Müstesnalık",
    "anlam": "Benzersizlik, istisnai olma durumu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-tes-nâ-lık",
    "ornekCumle": "Eserin dilindeki o büyüleyici ahenk, ona çağdaşları arasında erişilmez bir müstesnalık kazandırmıştır."
  },
  {
    "id": "musterek",
    "kelime": "Müşterek",
    "anlam": "Ortak, birlikte paylaşılan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (müşterek)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müş-te-rek",
    "ornekCumle": "Milletimizin müşterek hafızasında yer eden türküler, bizi birbirimize sımsıkı bağlayan harçtır."
  },
  {
    "id": "musfikane",
    "kelime": "Müşfikane",
    "anlam": "Şefkatle, merhametli ve koruyucu bir tavırla.",
    "turu": "Zarf",
    "koken": "Arapça / Farsça",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müş-fi-kâ-ne",
    "ornekCumle": "Öğretmenin talebelerine yönelttiği o müşfikane bakış, sınıftaki bütün çekingenlikleri dağıttı."
  },
  {
    "id": "muesseselesme",
    "kelime": "Müesseseleşme",
    "anlam": "Kurumsal bir kimlik ve yapı kazanma süreci.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-es-se-se-leş-me",
    "ornekCumle": "Köklü vakıflarımızın yüzyıllar boyu ayakta kalması, müesseseleşme kabiliyetimizin bir ispatıdır."
  },
  {
    "id": "munhal-kadro",
    "kelime": "Münhal kadro",
    "anlam": "Boşta bulunan, atama bekleyen memuriyet yeri.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça Terkip",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mün-hal kad-ro",
    "ornekCumle": "Adliye teşkilatındaki münhal kadro için açılan imtihana yüzlerce genç hukukçu müracaat etti."
  },
  {
    "id": "muellifhane",
    "kelime": "Müellifhane",
    "anlam": "Yazara yakışır tarzda, edebi biçimde.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça Terkip",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-el-lif-hâ-ne",
    "ornekCumle": "Konağın üst katındaki müellifhane odası, yazarın ilham dolu yalnızlığına şahitlik ederdi."
  },
  {
    "id": "mutemadiyat",
    "kelime": "Mütemadiyat",
    "anlam": "Süreklilik, aralıksız devam etme hali.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mütemādiyyāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-te-mâ-di-yat",
    "ornekCumle": "Zamanın mütemadiyatı içinde kaybolup gitmemek için kalıcı ilmi eserler bırakmak gerekir."
  },
  {
    "id": "mubaseret",
    "kelime": "Mübaşeret",
    "anlam": "Bir işe girişme, başlama.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (mübāşeret)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-bâ-şe-ret",
    "ornekCumle": "Gerekli tüm hazırlıklar bittikten sonra köprü inşaatına resmen mübaşeret edildi."
  },
  {
    "id": "mucerretlik",
    "kelime": "Mücerretlik",
    "anlam": "Soyutluk durumu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mü-cer-ret-lik",
    "ornekCumle": "Sanatçının felsefi tablolarındaki mücerretlik, seyircinin hayal gücünü harekete geçiriyordu."
  },
  {
    "id": "mukimlik",
    "kelime": "Mukimlik",
    "anlam": "Bir yerde ikamet etme hali, yerleşiklik.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kîm-lik",
    "ornekCumle": "Tarihi mahallede kırk yıllık mukimlik hakkı bulunan esnaf, semtin canlı hafızasıydı."
  },
  {
    "id": "muktebesat",
    "kelime": "Muktebesat",
    "anlam": "Başka kaynaklardan yapılan alıntılar, iktibaslar.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muktebesāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muk-te-be-sat",
    "ornekCumle": "Kitabın sonuna eklenen muktebesat cedveli, eserin hangi kadim kaynaklardan beslendiğini gösterir."
  },
  {
    "id": "mukavemetli",
    "kelime": "Mukavemetli",
    "anlam": "Dirençli, dayanıklı yapıya sahip.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kâ-ve-met-li",
    "ornekCumle": "Geleneksel ahşap yapılar, deprem sarsıntılarına karşı son derece mukavemetli bir mimariye sahiptir."
  },
  {
    "id": "mukaddemat",
    "kelime": "Mukaddemat",
    "anlam": "Giriş kısımları, ön hazırlıklar ve mukaddimeler.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳaddimāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kad-de-mat",
    "ornekCumle": "Kitabın asıl konusuna geçmeden evvel mukaddemat kabilinden bir giriş yapmayı lüzumlu gördü."
  },
  {
    "id": "mukaddesat",
    "kelime": "Mukaddesat",
    "anlam": "Uğruna can verilecek kutsal değerler, inançlar.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳaddesāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kad-de-sat",
    "ornekCumle": "Milletimizin mukaddesatına uzanan kirli eller, tarihin her devrinde hezimete uğramıştır."
  },
  {
    "id": "muktezat",
    "kelime": "Muktezat",
    "anlam": "Gerekler, icaplar, lüzumlu hususlar.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḳteżayāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muk-te-zat",
    "ornekCumle": "Çağın muktezatına uygun eğitim modelleri geliştirmek için maarif şûrası toplandı."
  },
  {
    "id": "mukayeseli",
    "kelime": "Mukayeseli",
    "anlam": "Kıyaslamalı, karşılaştırmalı tetkik.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kâ-ye-se-li",
    "ornekCumle": "Türkçe ve Farsça divanların mukayeseli incelemesi, ortak edebi zevki gözler önüne serdi."
  },
  {
    "id": "mukadderatci",
    "kelime": "Mukadderatçı",
    "anlam": "Kaderci, her şeyi yazgıya bağlayan düşünce yapısı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kad-de-rat-çı",
    "ornekCumle": "Kendi ihmallerini görmezden gelip her şeyi kadere yıkan mukadderatçı anlayış ilimle bağdaşmaz."
  },
  {
    "id": "mukabilinde",
    "kelime": "Mukabilinde",
    "anlam": "Karşılığı olarak, o niyetle.",
    "turu": "Zarf",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-kâ-bi-lin-de",
    "ornekCumle": "Gösterilen bu büyük hüsnüniyetin mukabilinde o da dostlarına vefa ile sarıldı."
  },
  {
    "id": "muazzamlik",
    "kelime": "Muazzamlık",
    "anlam": "Görkemlilik, devasa olma vasfı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-az-zam-lık",
    "ornekCumle": "Mimar Sinan'ın eserlerindeki estetik muazzamlık, asırlar geçse de tazeliğini korumaktadır."
  },
  {
    "id": "muasirlasma",
    "kelime": "Muasırlaşma",
    "anlam": "Çağdaşlaşma, asrın seviyesine ulaşma çabası.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-â-sır-laş-ma",
    "ornekCumle": "Kendi öz kimliğimizi muhafaza ederek muasırlaşma yolunda ilerlemek en doğru siyasettir."
  },
  {
    "id": "muavenetci",
    "kelime": "Muavenetçi",
    "anlam": "Yardımlaşmayı ilke edinmiş kimse.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-â-ve-net-çi",
    "ornekCumle": "Her felakette halkın yardımına koşan muavenetçi cemiyetler toplumsal dayanışmayı güçlendirir."
  },
  {
    "id": "muhafazakarlik",
    "kelime": "Muhafazakarlık",
    "anlam": "Geleneksel değerleri koruma eğilimi.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-ha-fa-za-kâr-lık",
    "ornekCumle": "Kültürel mirası ve kadim dili gelecek nesillere aktarmak şuurlu bir muhafazakârlık gerektirir."
  },
  {
    "id": "muallaklik",
    "kelime": "Muallaklık",
    "anlam": "Belirsizlik, karara bağlanmama durumu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-al-lak-lık",
    "ornekCumle": "Miras meselesindeki muallaklık yüzünden aile fertleri arasındaki huzursuzluk aylarca devam etti."
  },
  {
    "id": "muhataplik",
    "kelime": "Muhataplık",
    "anlam": "Sorumluluk taşıyan veya karşı taraf olma durumu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hâ-tap-lık",
    "ornekCumle": "Ortada resmi bir muhataplık bulunmadığı için heyet görüşmeleri başlatamadı."
  },
  {
    "id": "muhteviyat",
    "kelime": "Muhteviyat",
    "anlam": "Bir şeyin içindekilerin tamamı, ayrıntılı içerik.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muḥteviyāt)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "muh-te-vi-yat",
    "ornekCumle": "Sandığın muhteviyatında asırlık el yazmaları, mühürler ve tarihi fermanlar mevcuttu."
  },
  {
    "id": "muazziplik",
    "kelime": "Muazziplik",
    "anlam": "Eziyet çekme, sıkıntı içinde kıvranma.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-az-zip-lik",
    "ornekCumle": "İçinde bulunduğu çaresizlik ve yalnızlık, onu günden güne derin bir muazziplik içine itiyordu."
  },
  {
    "id": "muhayyileli",
    "kelime": "Muhayyileli",
    "anlam": "Güçlü bir hayal dünyasına sahip olan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hay-yi-le-li",
    "ornekCumle": "Zengin bir muhayyileli yazar, sıradan bir sokak manzarasından bile sürükleyici bir roman çıkarabilir."
  },
  {
    "id": "muhakemeli",
    "kelime": "Muhakemeli",
    "anlam": "Sağlıklı akıl yürütebilen, mantıklı değerlendirme yapan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hâ-ke-me-li",
    "ornekCumle": "Hâkimin muhakemeli yaklaşımı, karmaşık deliller arasındaki tenakuzları tek tek aydınlattı."
  },
  {
    "id": "muhalefet-etmek",
    "kelime": "Muhalefet etmek",
    "anlam": "Alınan kararlara veya görüşlere karşı çıkmak.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça / Türkçe Deyim",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hâ-le-fet et-mek",
    "ornekCumle": "Sırf inat olsun diye doğru projelere muhalefet etmek yerine yapıcı tenkitlerde bulunmak gerekir."
  },
  {
    "id": "muallimlik",
    "kelime": "Muallimlik",
    "anlam": "Öğretmenlik mesleği, rehberlik görevi.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-al-lim-lik",
    "ornekCumle": "Muallimlik, yalnızca bilgi aktaran bir meslek değil, talebenin ruhunu nakşeden kutlu bir sanattır."
  },
  {
    "id": "muhabbetname",
    "kelime": "Muhabbetname",
    "anlam": "Sevgi ve dostluk dolu mektup.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça Terkip",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hab-bet-nâ-me",
    "ornekCumle": "Gurbetteki dostundan gelen o samimi muhabbetname, yüreğindeki hasret ateşine bir nebze su serpti."
  },
  {
    "id": "muhacirlik",
    "kelime": "Muhacirlik",
    "anlam": "Yersiz yurtsuz kalma, göçmenlik durumu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-hâ-cir-lik",
    "ornekCumle": "Kafkasya'dan göçen dedelerimizin çektiği muhacirlik çilesi hatıralarda hüzünle anlatılır."
  },
  {
    "id": "muzafferiyet",
    "kelime": "Muzafferiyet",
    "anlam": "Zaferle sonuçlanma, başarı kazanma.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (muẓafferiyyet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mu-zaf-fe-ri-yet",
    "ornekCumle": "Çanakkale Boğazı'nda kazanılan muzafferiyet, milletimizin bağımsızlık azminin abideleştiği gündür."
  },
  {
    "id": "mustear-isim",
    "kelime": "Müstear isim",
    "anlam": "Gerçek adı gizlemek için kullanılan takma ad, mahlas.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça Terkip",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "müs-te-âr i-sim",
    "ornekCumle": "Pek çok edip, gazetelerdeki polemik yazılarını müstear isim kullanarak neşrederdi."
  },
  {
    "id": "mursitlik",
    "kelime": "Mürşitlik",
    "anlam": "Doğru yolu gösteren kılavuzluk, aydınlatıcılık.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "mür-şit-lik",
    "ornekCumle": "Mürşitlik makamı, nefsini terbiye etmiş ve başkalarına doğru yolu gösteren ariflere yakışır."
  },
  {
    "id": "mecradan-cikmak",
    "kelime": "Mecradan çıkmak",
    "anlam": "Normal akışını kaybetmek, kontrolden çıkmak.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça / Türkçe Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "mec-ra-dan çık-mak",
    "ornekCumle": "Münazara kontrolden çıkıp kişisel hakaretlere dökülünce konu tamamen tabii mecrasından çıktı."
  },
  {
    "id": "akli-basinda-olmak",
    "kelime": "Aklı başında olmak",
    "anlam": "Sağlıklı düşünebilmek, olgun ve dengeli hareket etmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ak-lı ba-şın-da ol-mak",
    "ornekCumle": "Böylesine fırtınalı bir zamanda aklı başında olmak ve fevri kararlardan kaçınmak elzemdir."
  },
  {
    "id": "akla-karayi-secmek",
    "kelime": "Akla karayı seçmek",
    "anlam": "Bir işi başarmak için çok büyük zorluklar ve zahmetler çekmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ak-la ka-ra-yı seç-mek",
    "ornekCumle": "Geciken sevkiyatı yetiştirebilmek için bütün atölye akla karayı seçti."
  },
  {
    "id": "alin-teri",
    "kelime": "Alın teri",
    "anlam": "Emek verilerek, dürüstçe kazanılan kazanç.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "a-lın te-ri",
    "ornekCumle": "Alın teri dökülmeden kazanılan gayrimeşru lokmadan kimseye bir hayır gelmez."
  },
  {
    "id": "ates-puskurmek",
    "kelime": "Ateş püskürmek",
    "anlam": "Çok büyük bir öfkeyle sert sözler söylemek, köpürmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "a-teş püs-kür-mek",
    "ornekCumle": "Hain planları öğrenen kumandan karargahta adeta ateş püskürüyordu."
  },
  {
    "id": "bagrina-tas-basmak",
    "kelime": "Bağrına taş basmak",
    "anlam": "Büyük bir acıya, üzüntüye sabretmeye çalışmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "bağ-rı-na taş bas-mak",
    "ornekCumle": "Evladını şehit veren metanetli baba bağrına taş basarak 'Vatan sağ olsun' dedi."
  },
  {
    "id": "camur-atmak",
    "kelime": "Çamur atmak",
    "anlam": "Birine haksız yere suçlamada bulunmak, leke sürmeye çalışmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ça-mur at-mak",
    "ornekCumle": "Başarısını kıskandıkları dürüst idareciye çamur atmak için iftira kampanyası başlattılar."
  },
  {
    "id": "cile-doldurmak",
    "kelime": "Çile doldurmak",
    "anlam": "Uzun süren zorluklu, sıkıntılı bir dönemi tamamlamak.",
    "turu": "Deyim / Tabir",
    "koken": "Farsça / Türkçe Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "çi-le dol-dur-mak",
    "ornekCumle": "Dergâhta hizmet edip çile dolduran derviş, nefsini yenerek kâmil bir insan mertebesine ulaştı."
  },
  {
    "id": "dag-basini-duman-almak",
    "kelime": "Dağ başını duman almak",
    "anlam": "Zorlukların, sorunların artması ve işlerin sarpa sarması.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "dağ ba-şı-nı du-man",
    "ornekCumle": "Ekonomik buhran derinleşip borçlar birikince ortalığı resmen dağ başını duman aldı."
  },
  {
    "id": "dis-bilemek",
    "kelime": "Diş bilemek",
    "anlam": "Birine karşı gizli bir kin beslemek, intikam arzusu taşımak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "diş bi-le-mek",
    "ornekCumle": "Yıllar önce haksız yere kovulduğu fabrikaya karşı gizliden gizliye diş biliyordu."
  },
  {
    "id": "etekleri-zil-calmak-2",
    "kelime": "Etekleri zil çalmak",
    "anlam": "Beklenmedik bir sevinçle taşkın bir neşe duymak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "e-tek-le-ri zil çal-mak",
    "ornekCumle": "Torpil beklemeden kendi bileğinin hakkıyla sınavı kazandığını öğrenince sevinçten etekleri zil çaldı."
  },
  {
    "id": "gozden-gecirmek",
    "kelime": "Gözden geçirmek",
    "anlam": "Bir metni, durumu veya eşyayı dikkatlice inceleyip kontrol etmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "göz-den ge-çir-mek",
    "ornekCumle": "Kitabın son provasını matbaaya vermeden evvel imla hatalarını bir kez daha dikkatle gözden geçirdi."
  },
  {
    "id": "gozunu-kirpmadan",
    "kelime": "Gözünü kırpmadan",
    "anlam": "Hiç tereddüt etmeden, korkusuzca ve tehlikeyi göze alarak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "gö-zü-nü kırp-ma-dan",
    "ornekCumle": "Vatan müdafaası söz konusu olunca Türk askeri gözünü kırpmadan canını siper eder."
  },
  {
    "id": "hakkindan-gelmek",
    "kelime": "Hakkından gelmek",
    "anlam": "Bir işin üstesinden başarıyla gelmek ya da birine hakkını bildirmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "hak-kın-dan gel-mek",
    "ornekCumle": "Hiç kimsenin çözemediği bu teknik arızanın ancak ihtiyar mühendis hakkından gelebilir."
  },
  {
    "id": "i-cine-kurt-dusmek",
    "kelime": "İçine kurt düşmek",
    "anlam": "Bir şey hakkında şüpheye, endişeye kapılmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "i-çi-ne kurt düş-mek",
    "ornekCumle": "Gece yarısı telefonun acı acı çalmasıyla ihtiyar kadının içine bir kurt düştü."
  },
  {
    "id": "kas-goz-isaret-etmek",
    "kelime": "Kaş göz işaret etmek",
    "anlam": "Gizli anlaşmak veya bir konuda sessizce uyarıda bulunmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "kaş göz i-şa-ret et-mek",
    "ornekCumle": "Pot kırmakta olan arkadaşını susturmak için masanın altından bacağını dürtüp kaş göz işaret etti."
  },
  {
    "id": "kili-kirk-yarmak-2",
    "kelime": "Kılı kırk yarmak",
    "anlam": "Detaylar üzerinde aşırı derecede titizlenmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "kı-lı kırk yar-mak",
    "ornekCumle": "Tarihi vesikaları incelerken kelimelerin imlası üzerinde kılı kırk yararak tahlil yapardı."
  },
  {
    "id": "lafi-agzina-tikayincaya-kadar",
    "kelime": "Lafı ağzına tıkayıncaya kadar",
    "anlam": "Konuşmasına fırsat vermemek, susturmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "la-fı ağ-zı-na tık-mak",
    "ornekCumle": "Müfteri tam yalanlarını sıralıyordu ki vesikaları ortaya koyup lafı ağzına tıktı."
  },
  {
    "id": "merakini-gidermek",
    "kelime": "Merakını gidermek",
    "anlam": "Bilinmeyen bir şeyi öğrenerek kafadaki soru işaretlerini silmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "me-ra-kı-nı gi-der-mek",
    "ornekCumle": "Haritanın gizlediği definenin sırrını çözerek yıllardır süren derin merakını giderdi."
  },
  {
    "id": "nefes-aldirmamak",
    "kelime": "Nefes aldırmamak",
    "anlam": "Birine sürekli baskı yapmak, rahat bırakmamak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ne-fes al-dır-ma-mak",
    "ornekCumle": "Rakip savunmaya pres uygulayan forvet, maç boyunca karşı takıma nefes aldırmadı."
  },
  {
    "id": "pabucu-dama-atilmak",
    "kelime": "Pabucu dama atılmak",
    "anlam": "Eskisi kadar ilgi görmemek, gözden düşmek, kıymeti azalmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Kültürel Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "pa-bu-cu da-ma a-tıl-mak",
    "ornekCumle": "Yeni torun doğunca evin eski gözdesi olan ilk çocuğun pabucu adeta dama atıldı."
  },
  {
    "id": "ruzgara-gore-yon-degistirmek",
    "kelime": "Rüzgara göre yön değiştirmek",
    "anlam": "Çıkarcı bir tavırla güç odaklarının peşinden gitmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "rüz-gâ-ra gö-re yön",
    "ornekCumle": "Kendi omurgası olmayan çıkarcı adamlar rüzgâra göre yön değiştirmeyi marifet sayarlar."
  },
  {
    "id": "saman-alevi-gibi-parlamak",
    "kelime": "Saman alevi gibi parlamak",
    "anlam": "Birdenbire çok öfkelenmek ama bu öfkenin çabucak sönmesi.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "sa-man a-le-vi gi-bi",
    "ornekCumle": "Öfkesi saman alevi gibi parlar, beş dakika sonra hiçbir şey olmamış gibi şakalaşırdı."
  },
  {
    "id": "simsekleri-uzerine-cekmek",
    "kelime": "Şimşekleri üzerine çekmek",
    "anlam": "Eleştirilerin ve tepkilerin odağında kalmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "şim-şek-le-ri ü-ze-ri-ne",
    "ornekCumle": "Mecliste yaptığı zamansız ve yersiz konuşmayla bütün şimşekleri üzerine çekti."
  },
  {
    "id": "tabanlari-yaglamak",
    "kelime": "Tabanları yağlamak",
    "anlam": "Tehlikeli bir durumdan ya da oradan hızla uzaklaşmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ta-ban-la-rı yağ-la-mak",
    "ornekCumle": "Bekçinin düdük sesini duyan hırsızlar çaldıkları çuvalları bırakıp tabanları yağladılar."
  },
  {
    "id": "tuzlukla-kosmak",
    "kelime": "Tuzlukla koşmak",
    "anlam": "Her söylenen şeye hemen inanmak veya başkalarına körü körüne uymak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "tuz-luk-la koş-mak",
    "ornekCumle": "Her duyduğu asılsız rivayete tuzlukla koşanlar er ya da geç aldatılmaya mahkumdur."
  },
  {
    "id": "ununu-eleyip-elegini-asmak",
    "kelime": "Ununu eleyip eleğini asmak",
    "anlam": "Hayatındaki asıl büyük işleri tamamlayıp köşesine çekilmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "u-nu-nu e-le-yip",
    "ornekCumle": "Yıllarca ticaretle uğraşıp evlatlarını yetiştiren dedem artık ununu eleyip eleğini asmıştı."
  },
  {
    "id": "uzerine-dusmek",
    "kelime": "Üzerine düşmek",
    "anlam": "Bir konuyla veya kişiyle çok yakından ve titizlikle ilgilenmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ü-ze-ri-ne düş-mek",
    "ornekCumle": "Hocası, yetenekli gördüğü bu talebenin üzerine titizlikle düşerek onu bir deha olarak yetiştirdi."
  },
  {
    "id": "vakit-oldurmek",
    "kelime": "Vakit öldürmek",
    "anlam": "Boş işlerle zaman harcamak, zamanı değerlendirememek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "va-kit öl-dür-mek",
    "ornekCumle": "Kıymetli gençlik çağını kahve köşelerinde vakit öldürerek ziyan edenlere acıyordu."
  },
  {
    "id": "yorgan-gitti-kavga-bitti",
    "kelime": "Yorgan gitti, kavga bitti",
    "anlam": "Ortadaki temel anlaşmazlık kaynağı ortadan kalktığı için çekişmenin sona ermesi.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Kültürel Deyim",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "yor-gan git-ti kav-ga bit-ti",
    "ornekCumle": "Ortadaki tartışmalı arsa satılıp parası paylaştırılınca yorgan gitti kavga bitti."
  },
  {
    "id": "zihni-bulandirmak",
    "kelime": "Zihni bulandırmak",
    "anlam": "Aklını karıştırmak, doğru düşünmeyi engellemek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "zih-ni bu-lan-dır-mak",
    "ornekCumle": "Ortaya atılan asılsız dedikodular mahkemenin zihnini bulandırmaktan başka bir işe yaramadı."
  },
  {
    "id": "akil-para-ile-satilmaz",
    "kelime": "Akıl para ile satılmaz",
    "anlam": "Herkes kendi aklını kullanmak zorundadır, akıl dışarıdan satın alınamaz.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "a-kıl pa-ra i-le",
    "ornekCumle": "Milyonları olsa da doğru karar veremeyen o gence dedesi 'Akıl para ile satılmaz evlat' dedi."
  },
  {
    "id": "birlikte-kuvvet-dogar",
    "kelime": "Birlikte kuvvet doğar",
    "anlam": "İnsanlar güçlerini birleştirirse en zor işleri bile başarabilirler.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "bir-lik-te kuv-vet",
    "ornekCumle": "İmece usulüyle bütün köy seferber olunca bent bir günde onarıldı; ne demişler, birlikte kuvvet doğar."
  },
  {
    "id": "carsambanin-gelisi-persembeden-bellidir",
    "kelime": "Çarşambanın gelişi perşembeden bellidir",
    "anlam": "Bir olayın nereye varacağı, önceden gösterdiği belirtilerden anlaşılır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "çar-şam-ba-nın ge-li-şi",
    "ornekCumle": "Daha ilk haftadan işleri savsaklamaya başlamıştı; çarşambanın gelişi perşembeden bellidir misali projenin batacağı açıktı."
  },
  {
    "id": "dost-kara-gunde-belli-olur",
    "kelime": "Dost kara günde belli olur",
    "anlam": "Gerçek dost, insan sıkıntıdayken ve yardıma muhtaçken yanındaandır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "dost ka-ra gün-de",
    "ornekCumle": "İflas ettiğinde yanında yalnızca vefalı kadim arkadaşları kaldı; meğer dost kara günde belli olurmuş."
  },
  {
    "id": "erken-kalkan-yol-alir",
    "kelime": "Erken kalkan yol alır",
    "anlam": "İşine erken başlayan ve zamanında davranan kimse başarılı olur.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "er-ken kal-kan yol",
    "ornekCumle": "Sabahın seherinde tezgâhını açan demirci ustası bereket bulurdu; zira erken kalkan yol alır."
  },
  {
    "id": "gulu-seven-dikenine-katlanir",
    "kelime": "Gülü seven dikenine katlanır",
    "anlam": "Sevilen bir şeyin veya kişinin getirdiği sıkıntılara sabredilir.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "gü-lü se-ven di-ke-ni-ne",
    "ornekCumle": "Sanatta zirveye ulaşmak geceler boyu uykusuz kalmayı gerektirir; ne de olsa gülü seven dikenine katlanır."
  },
  {
    "id": "hazira-dag-dayanmaz",
    "kelime": "Hazıra dağ dayanmaz",
    "anlam": "Çalışmadan, sadece var olanı harcayarak yaşayanların serveti tükenir.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "ha-zı-ra dağ da-yan-maz",
    "ornekCumle": "Babadan kalan mirası çalışmadan hesapsızca harcayan mirasyediye büyükler 'Hazıra dağ dayanmaz' diye nasihat ederdi."
  },
  {
    "id": "i-yilik-eden-iyilik-bulur",
    "kelime": "İyilik eden iyilik bulur",
    "anlam": "Karşılıksız yapılan iyilikler bir gün mutlaka sahibine döner.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "i-yi-lik e-den i-yi-lik",
    "ornekCumle": "Yolda gördüğü garibe ekmeğini bölen köylü, yıllar sonra darda kaldığında onun ikramıyla karşılaştı; iyilik eden iyilik bulur."
  },
  {
    "id": "korle-yatan-sasi-kalkar",
    "kelime": "Körle yatan şaşı kalkar",
    "anlam": "Kötü huylu veya bilgisiz insanlarla arkadaşlık edenler onların kötü alışkanlıklarını kaparlar.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "kör-le ya-tan şa-şı",
    "ornekCumle": "Kötü alışkanlıkları olan arkadaşlarla düşüp kalkan o genç zamanla onlara benzedi; çünkü körle yatan şaşı kalkar."
  },
  {
    "id": "ne-ekersen-onu-bicersin",
    "kelime": "Ne ekersen onu biçersin",
    "anlam": "Dünyada nasıl davranırsanız, karşılığında da aynısını görürsünüz.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "ne e-ker-sen o-nu",
    "ornekCumle": "Talebesine sevgi ve bilgi aşılayan hoca, yıllar sonra onların başarılarıyla gururlandı; ne ekersen onu biçersin."
  },
  {
    "id": "sakinandan-gozu-cop-batar",
    "kelime": "Sakınandan gözü çöp batar",
    "anlam": "Bir şeyden aşırı derecede sakınan ve korkan kişinin başına tam da o korktuğu gelir.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "sa-kı-nan-dan gö-zü",
    "ornekCumle": "Yeni aldığı arabayı çizilmesin diye garajdan çıkarmayan adamın tavanına dolu yağdı; sakınandan gözü çöp batar."
  },
  {
    "id": "tas-yerinde-agirdir",
    "kelime": "Taş yerinde ağırdır",
    "anlam": "Her insan kendi memleketinde veya kendi yerinde saygı görür ve değerlidir.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "taş ye-rin-de a-ğır-dır",
    "ornekCumle": "Kendi memleketinde hürmet gören alim gurbete gidince kıymeti bilinmedi; zira taş yerinde ağırdır."
  },
  {
    "id": "ac-koyun-kurt-gibi-saldirir",
    "kelime": "Aç koyun kurt gibi saldırır",
    "anlam": "Uzun süre mahrumiyet yaşayan kimse fırsat bulduğunda hırsla saldırır.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "aç ko-yun kurt gi-bi",
    "ornekCumle": "Yıllarca mahrumiyet çeken açgözlü kimseler fırsat bulunca aç koyun kurt gibi saldırır misali davranırlar."
  },
  {
    "id": "dertsiz-bas-hamamda-bellidir",
    "kelime": "Dertsiz baş hamamda bellidir",
    "anlam": "İnsanın derdi tasası olmadığını huzurlu halinden anlamak mümkündür.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "dert-siz baş ha-mam-da",
    "ornekCumle": "Gündelik telaşlardan arınmış huzurlu bir gönlü ancak sakinliğinden tanırsınız; dertsiz baş hamamda bellidir."
  },
  {
    "id": "goz-gordugunu-ister",
    "kelime": "Göz gördüğünü ister",
    "anlam": "İnsan hoşuna giden, gördüğü ve beğendiği şeylere sahip olmak ister.",
    "turu": "Atasözü",
    "koken": "Türk Atasözü (Kadim Sav)",
    "donem": "Divânü Lügati't-Türk & Karahanlı Dönemi",
    "telaffuz": "göz gör-dü-ğü-nü is-ter",
    "ornekCumle": "Çarşıdaki rengârenk oyuncakları gören küçük çocuk vitrinin önünden ayrılamadı; ne demişler göz gördüğünü ister."
  },
  {
    "id": "afitap",
    "kelime": "Afitap",
    "anlam": "Güneş gibi parlayan, çok güzel kadın.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (āftāb)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "â-fi-tap",
    "ornekCumle": "Doğan afitap ufukları kızıla boyarken, sevgilinin yüzündeki nur karanlık gecemi aydınlattı."
  },
  {
    "id": "bicare",
    "kelime": "Bîçare",
    "anlam": "Çaresiz, zavallı, kimsesiz.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (bī-çāre)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "bî-çâ-re",
    "ornekCumle": "Kışın ayazında sığınacak bir saçak altı arayan bîçare yolcu, köy odasının sıcaklığıyla teselli buldu."
  },
  {
    "id": "cumle",
    "kelime": "Cümle",
    "anlam": "Hepsi, bütün, tamamı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (cümle)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "cüm-le",
    "ornekCumle": "Cümle cihan bir araya gelse, hakkın ve adaletin karşısında durmaya güç yetiremez."
  },
  {
    "id": "cin",
    "kelime": "Çın",
    "anlam": "Doğru, hakiki, gerçek.",
    "turu": "Kadim Kelime",
    "koken": "Eski Türkçe (çın)",
    "donem": "Göktürkçe İzleri ve Eski Türkçe",
    "telaffuz": "çın",
    "ornekCumle": "Dedem söze başladığında her kelimesi çın, her nasihati bir inci gibi kıymetli ve hakikiydi."
  },
  {
    "id": "dilfigar",
    "kelime": "Dilfigâr",
    "anlam": "Yüreği yaralı, gönlü yaralı kimse.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (dil-figār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "dil-fi-gâr",
    "ornekCumle": "Gurbet elde hasretle yanan dilfigâr âşık, sazının tellerine vurdukça yanık türküler söylerdi."
  },
  {
    "id": "efsun",
    "kelime": "Efsun",
    "anlam": "Büyü, sihir, tılsım.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (afsūn)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ef-sun",
    "ornekCumle": "Tarihi şehrin kubbelere vuran akşam sisinde insanı büyüleyen tarif edilmez bir efsun vardı."
  },
  {
    "id": "fecr",
    "kelime": "Fecr",
    "anlam": "Tan vakti, sabah aydınlığı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (fecr)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "fecr",
    "ornekCumle": "Fecr vaktinin serin rüzgârı esmeye başladığında bülbüller seher şarkılarına durmuştu."
  },
  {
    "id": "gubari",
    "kelime": "Gubarî",
    "anlam": "Çok küçük, ince yazı türü (hat sanatında).",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ġubārī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "gu-bâ-rî",
    "ornekCumle": "Üstat hattat, bir pirinç tanesi üzerine gubarî hatla ayet-el kürsiyi nakşederek hünerini gösterdi."
  },
  {
    "id": "havas",
    "kelime": "Havas",
    "anlam": "Seçkinler sınıfı, bilginler ve devlet ileri gelenleri.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ḫavāṣṣ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ha-vâs",
    "ornekCumle": "Devlet meclisinde sadece havas değil, halkın her kesiminden bilgeler istişareye katılırdı."
  },
  {
    "id": "itri",
    "kelime": "Itrî",
    "anlam": "Güzel kokuyla ilgili, mis kokulu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ʿiṭrī)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ıt-rî",
    "ornekCumle": "Baharın gelişiyle açan güller ve lavantalar bahçeyi ıtrî ve mest edici bir kokuyla doldurdu."
  },
  {
    "id": "jale",
    "kelime": "Jale",
    "anlam": "Çiy tanesi, kırağı.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (žāle)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "jâ-le",
    "ornekCumle": "Sabah güneşinin ilk ışıkları, gül yaprakları üzerinde parıldayan jaleleri birer yakuta dönüştürüyordu."
  },
  {
    "id": "kande",
    "kelime": "Kande",
    "anlam": "Nerede, nereye (eski Türkçe soru zamiri).",
    "turu": "Kadim Kelime",
    "koken": "Eski Türkçe (kande/kanda)",
    "donem": "Göktürkçe İzleri ve Eski Türkçe",
    "telaffuz": "kan-de",
    "ornekCumle": "Yunus Emre gibi 'Kande bulam seni yâ Rab?' diyerek ömrünü hakikat arayışına vakfetti."
  },
  {
    "id": "lal-u-guher",
    "kelime": "Lal-ü güher",
    "anlam": "İnci ve mücevherler, değerli sözler.",
    "turu": "Deyim / Tabir",
    "koken": "Farsça Terkip (laʿl ü gevher)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "lâl-ü gü-her",
    "ornekCumle": "Ariflerin sohbetinde dudaklardan dökülen her kelam, lal-ü güher misali kıymetli birer cevherdir."
  },
  {
    "id": "nihan",
    "kelime": "Nihan",
    "anlam": "Gizli, saklı, gözle görülmeyen.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (nihān)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ni-hân",
    "ornekCumle": "Gönlünün derinliklerinde nihan olan kederi, tebessüm eden gözlerinin ardına ustalıkla gizledi."
  },
  {
    "id": "otag",
    "kelime": "Otağ",
    "anlam": "Büyük ve süslü çadır, padişah çadırı.",
    "turu": "Kadim Kelime",
    "koken": "Eski Türkçe (otaġ)",
    "donem": "Göktürkçe İzleri ve Eski Türkçe",
    "telaffuz": "o-tağ",
    "ornekCumle": "Ulu hakan, zafer kurultayı için yaylanın en yüksek tepesinde ak keçeden görkemli bir otağ kurdurdu."
  },
  {
    "id": "purnur",
    "kelime": "Pürnur",
    "anlam": "Işık dolu, baştan başa aydınlık.",
    "turu": "Kadim Kelime",
    "koken": "Farsça / Arapça (pur-nūr)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "pür-nur",
    "ornekCumle": "Mihraptan yayılan kandil ışıklarıyla caminin kubbesi pürnur bir semayı andırıyordu."
  },
  {
    "id": "rucu",
    "kelime": "Rücu",
    "anlam": "Geri dönme, sözünden veya kararından vazgeçme.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (rucüʿ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "rü-cû",
    "ornekCumle": "Hakikat apaçık ortaya çıkınca yanlış hükmünden rücu edip özür dilemek yüksek bir erdemdir."
  },
  {
    "id": "selsebil",
    "kelime": "Selsebil",
    "anlam": "Cennette olduğuna inanılan tatlı ve akarsu, kolayca akan.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (selsebīl)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "sel-se-bîl",
    "ornekCumle": "Konağın avlusundaki mermer şadırvandan selsebil gibi akan suyun şırıltısı ruha sükûnet veriyordu."
  },
  {
    "id": "suh",
    "kelime": "Şûh",
    "anlam": "Neşeli, serbest hareket eden, cilveli.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (şūḫ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "şûh",
    "ornekCumle": "Bahar dalları arasında şûh edalarla şakıyan bülbül, seher vaktinin neşesi olmuştu."
  },
  {
    "id": "tazim",
    "kelime": "Tazim",
    "anlam": "Saygı sunma, ululama.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (taʿẓīm)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ta-zîm",
    "ornekCumle": "Huzura kabul edilen yabancı elçiler hükümdarın karşısında hürmet ve tazim ile eğildiler."
  },
  {
    "id": "uryan",
    "kelime": "Uryan",
    "anlam": "Çıplak, soyunuk.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ʿuryān)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ur-yân",
    "ornekCumle": "Derviş, dünyanın şatafatından sıyrılmış, uryan bir gönülle hak kapısına yönelmişti."
  },
  {
    "id": "uftade",
    "kelime": "Üftade",
    "anlam": "Düşkün, tutkun, aşık.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (uftāde)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "üf-tâ-de",
    "ornekCumle": "Aşk ateşine düşen üftade bülbül, gülün dikeni karşısında feryat etmekten vazgeçmedi."
  },
  {
    "id": "vaveyla",
    "kelime": "Vaveyla",
    "anlam": "Koprulan çığlık, feryat, kopan gürültü.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (vāveylā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "vâ-vey-lâ",
    "ornekCumle": "Gece yarısı ansızın başlayan yangınla birlikte mahallede büyük bir vaveyla koptu."
  },
  {
    "id": "yegane",
    "kelime": "Yegâne",
    "anlam": "Bir tanecik, eşsiz, benzeri olmayan.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (yegāne)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ye-gâ-ne",
    "ornekCumle": "İnsanın fani ömründe arkasında bırakabileceği yegâne ebedi servet, güzel bir ahlak ve faydalı ilimdir."
  },
  {
    "id": "zahir",
    "kelime": "Zahir",
    "anlam": "Açık, ortada görünen, bellibaşlı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ẓāhir)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "zâ-hir",
    "ornekCumle": "Görünüşte zahir olan kusurlara değil, kalpte gizlenen samimi niyetin güzelliğine bakmak gerekir."
  },
  {
    "id": "zulal",
    "kelime": "Zülâl",
    "anlam": "Saf, berrak, tatlı su.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (zulāl)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "zü-lâl",
    "ornekCumle": "Dağların doruklarındaki karlar eriyince pınarlardan köye doğru zülâl gibi berrak sular çağladı."
  },
  {
    "id": "eshab",
    "kelime": "Eshab",
    "anlam": "Arkadaşlar, yarenler.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (aṣḥāb)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "es-hab",
    "ornekCumle": "Medine sokaklarında toplanan eshab, hayırda yarışmak için canla başla gayret gösterirdi."
  },
  {
    "id": "fusun",
    "kelime": "Füsun",
    "anlam": "Büyü, büyüleyici güzellik.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (fusūn)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "fü-sun",
    "ornekCumle": "Boğaziçi mehtabının sulara vuran füsunu, şairin mısralarında ölümsüz bir tabloya dönüştü."
  },
  {
    "id": "gul",
    "kelime": "Gûl",
    "anlam": "Gül çiçeği, efsanevi yaratık (gul).",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ġūl)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "gûl",
    "ornekCumle": "Eski halk masallarında yolcuların karşısına çıkan devasa gûl, korku dolu serüvenlerin simgesiydi."
  },
  {
    "id": "heveskar",
    "kelime": "Heveskar",
    "anlam": "Hevesli, istekli kimse.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça (heves-kār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "he-ves-kâr",
    "ornekCumle": "Eski musiki makamlarını öğrenmeye pek heveskâr olan genç, tambur derslerini hiç aksatmazdı."
  },
  {
    "id": "i-ltimas",
    "kelime": "İltimas",
    "anlam": "Kayırma, tutma, ayrıcalık tanıma.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (iltimās)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "il-ti-mas",
    "ornekCumle": "Adalet dağıtan kadının huzurunda hiçbir zengine veya mevkidaşa iltimas geçilmezdi."
  },
  {
    "id": "kevkeb",
    "kelime": "Kevkeb",
    "anlam": "Yıldız, gezegen.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (kevkeb)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "kev-keb",
    "ornekCumle": "Çöl gecelerinde semada parıldayan her bir kevkeb, kervanlara yön gösteren bir kılavuzdu."
  },
  {
    "id": "letafet",
    "kelime": "Letafet",
    "anlam": "Güzellik, hoşluk, incelik.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (leṭāfet)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "le-tâ-fet",
    "ornekCumle": "Genç kızın tavırlarındaki nezaket ve letafet, konağa gelen her misafirin takdirini toplardı."
  },
  {
    "id": "nigarhane",
    "kelime": "Nigarhane",
    "anlam": "Resim galerisi, güzel yüzlülerin bulunduğu yer.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (nigārhāne)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ni-gâr-hâ-ne",
    "ornekCumle": "Sarayın nakkaşları, padişahın zaferlerini minyatürlerle ebedileştirmek üzere nigarhanede toplandı."
  },
  {
    "id": "payidar",
    "kelime": "Payidar",
    "anlam": "Sonsuza dek yaşayacak olan, kalıcı.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (pāyidār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "pâ-yi-dar",
    "ornekCumle": "Türkiye Cumhuriyeti, milletimizin azmi ve fedakârlığıyla ilelebet payidar kalacaktır."
  },
  {
    "id": "rehnuma",
    "kelime": "Rehnüma",
    "anlam": "Yol gösteren, kılavuz, rehber.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (rahnumā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "reh-nü-mâ",
    "ornekCumle": "Karanlık ve fırtınalı denizde deniz feneri ne ise, cemiyet için bilge muallimler de öyle bir rehnümadır."
  },
  {
    "id": "serap",
    "kelime": "Serap",
    "anlam": "Çölde görülen yanılsama, serap.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (serāb)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "se-rap",
    "ornekCumle": "Kızgın kumlar üzerinde susuzluktan takati tükenen kervan, uzakta gördüğü serapla avundu."
  },
  {
    "id": "sebnem",
    "kelime": "Şebnem",
    "anlam": "Çiy, yapraklar üzerindeki su damlası.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (şeb-nem)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "şeb-nem",
    "ornekCumle": "Gül goncalarının üzerine düşen şebnem taneleri, sabah rüzgârında elmas gibi ışıldıyordu."
  },
  {
    "id": "tahayyul",
    "kelime": "Tahayyül",
    "anlam": "Hayal etme, zihinde canlandırma.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (taḫayyul)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ta-hay-yül",
    "ornekCumle": "Yazarın kurduğu tahayyül dünyası, okuyucuyu asırlar öncesinin İstanbul sokaklarında gezdiriyordu."
  },
  {
    "id": "ukde",
    "kelime": "Ukde",
    "anlam": "Düğüm, içte kalan çözülmemiş gam veya sorun.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ʿuḳde)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "uk-de",
    "ornekCumle": "Gençliğinde yarım bıraktığı tahsilini tamamlayamamak içinde ömür boyu çözülmeyen bir ukde olarak kaldı."
  },
  {
    "id": "ahd-u-misak",
    "kelime": "Ahd ü misak",
    "anlam": "Yemin ve sözleşme, ant.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça Terkip (ʿahd ü mīŝāḳ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ahd-ü mi-sâk",
    "ornekCumle": "İki devlet hükümdarı hudut boylarında barışın sürmesi için ahd ü misak imzaladılar."
  },
  {
    "id": "bihus",
    "kelime": "Bihuş",
    "anlam": "Kendinden geçmiş, şaşkın, baygın.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (bī-hūş)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "bî-hûş",
    "ornekCumle": "Beklenmedik acı haberi işitince dizlerinin bağı çözüldü ve oracıkta bîhuş halde yere yığıldı."
  },
  {
    "id": "abidevi",
    "kelime": "Abidevi",
    "anlam": "Anıt niteliğinde, çok büyük ve kalıcı.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "â-bi-de-vî",
    "ornekCumle": "Sultanahmet Camii, altı minaresi ve görkemli kubbesiyle Türk-İslam mimarisinin abidevi bir örneğidir."
  },
  {
    "id": "bedbin",
    "kelime": "Bedbin",
    "anlam": "Kötümser, her şeyi karanlık gören.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (bed-bīn)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "bed-bîn",
    "ornekCumle": "Her hadisenin daima kötü tarafını gören bedbin insanlarla çalışmak ekibin neşesini kaçırıyordu."
  },
  {
    "id": "cihannuma",
    "kelime": "Cihannüma",
    "anlam": "Dünyayı gösteren yer, yüksek seyir terası.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (cihān-numā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ci-hân-nü-mâ",
    "ornekCumle": "Konağın tepesindeki cihannüma köşküne çıkıp tüm şehri ve denizi kuşbakışı seyrettik."
  },
  {
    "id": "cerag",
    "kelime": "Çerağ",
    "anlam": "Işık, kandil, mum.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (çerāġ)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "çe-rağ",
    "ornekCumle": "Mevlevi dergâhında seher vakti niyazla uyandırılan çerağ, karanlık odayı nurla doldurdu."
  },
  {
    "id": "efrad",
    "kelime": "Efrad",
    "anlam": "Fertler, bireyler, üyeler.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (afrād)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ef-rad",
    "ornekCumle": "Vatan müdafaasında milletin bütün efradı kadın erkek demeden cepheye mühimmat taşıdı."
  },
  {
    "id": "fusunkar",
    "kelime": "Füsunkar",
    "anlam": "Büyüleyici, sihirli.",
    "turu": "Kadim Kelime",
    "koken": "Farsça (fusūn-kār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "fü-sun-kâr",
    "ornekCumle": "Tamburinin parmaklarından dökülen füsunkâr nağmeler salondaki dinleyicileri mest etti."
  },
  {
    "id": "hakir",
    "kelime": "Hakir",
    "anlam": "Değersiz, hor görülen.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ḥaḳīr)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ha-kîr",
    "ornekCumle": "Hiçbir insanı mevkisine veya yoksulluğuna bakarak hakir görmemeli, herkese hürmetle muamele etmelidir."
  },
  {
    "id": "itristan",
    "kelime": "Itristan",
    "anlam": "Güzel kokulu bahçe.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça Terkip",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ıt-ris-tan",
    "ornekCumle": "Konağın arka bahçesi, rengarenk çiçekleri ve mis kokularıyla adeta bir ıtristanı andırıyordu."
  },
  {
    "id": "i-stisare",
    "kelime": "İstişare",
    "anlam": "Danışma, fikir alışverişinde bulunma.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (istişāre)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "is-ti-şâ-re",
    "ornekCumle": "Mühim bir karara varmadan evvel tecrübeli dostlarla istişare etmek insanı pişmanlıktan korur."
  },
  {
    "id": "jurnalci",
    "kelime": "Jurnalci",
    "anlam": "İhbarcı, gizli bilgi taşıyan.",
    "turu": "Kadim Kelime",
    "koken": "Fransızca Kökenli / Osmanlıca",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "jur-nal-ci",
    "ornekCumle": "İstibdat döneminde masum insanları asılsız ihbarlarla lekeleyen jurnalci tipler toplumda lanetlenirdi."
  },
  {
    "id": "kulliye",
    "kelime": "Külliye",
    "anlam": "Bir cami etrafında kurulmuş binalar topluluğu.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (külliyye)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "kül-li-ye",
    "ornekCumle": "Cami, medrese, kütüphane ve darüşşifadan mürekkep külliye, şehrin kalbinde bir ilim ve şifa yuvasıydı."
  },
  {
    "id": "lisan-i-munasip",
    "kelime": "Lisan-ı münasip",
    "anlam": "Uygun ve kırıcı olmayan bir dil.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça Terkip (lisān-ı münāsib)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "li-sâ-nı mü-nâ-sip",
    "ornekCumle": "Karşı tarafı incitmeden hakikati anlatmak için lisan-ı münasip ile söze başlamak icap eder."
  },
  {
    "id": "nefisperest",
    "kelime": "Nefisperest",
    "anlam": "Nefsine düşkün, zevk düşkünü kimse.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça (nefs-perest)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ne-fis-pe-rest",
    "ornekCumle": "Yalnızca dünya zevklerinin peşinde koşan nefisperest kimseler manevi huzurun tadına varamazlar."
  },
  {
    "id": "odalik",
    "kelime": "Odalık",
    "anlam": "Eski saraylarda cariye.",
    "turu": "Kadim Kelime",
    "koken": "Eski Türkçe (oda + lık)",
    "donem": "Göktürkçe İzleri ve Eski Türkçe",
    "telaffuz": "o-da-lık",
    "ornekCumle": "Eski saray teşrifatında hanedan dairesinde hizmet gören odalık kızlar terbiye ve adabıyla seçilirdi."
  },
  {
    "id": "pervasiz",
    "kelime": "Pervasız",
    "anlam": "Korkusuz, çekinmeden hareket eden.",
    "turu": "Kadim Kelime",
    "koken": "Farsça / Türkçe (pervā + sız)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "per-va-sız",
    "ornekCumle": "Düşmanın üzerimize gelen topçu ateşine karşı pervasız bir cesaretle siperden fırladı."
  },
  {
    "id": "rumuz",
    "kelime": "Rumuz",
    "anlam": "Gizli simge, mahlas, işaret.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (rumūz)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ru-muz",
    "ornekCumle": "Şair, gazelindeki ince mazmunların ardına sakladığı manevi hakikatleri rumuzlarla dile getirmiştir."
  },
  {
    "id": "sulelenmek",
    "kelime": "Şulelenmek",
    "anlam": "Alevlenmek, parlamak.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Türkçe",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "şu-le-len-mek",
    "ornekCumle": "Kandilin fitili rüzgâr aldıkça şulelenip karanlık sofayı altın sarısı bir ışıkla doldurdu."
  },
  {
    "id": "tarihselci",
    "kelime": "Tarihselci",
    "anlam": "Olayları kendi dönemi içinde değerlendiren.",
    "turu": "Kadim Kelime",
    "koken": "Türkçe / Terim",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ta-rih-sel-ci",
    "ornekCumle": "Edebi metinleri yazıldıkları çağın şartları ve zihniyetiyle değerlendiren tarihselci bir tenkit uyguladı."
  },
  {
    "id": "ulema",
    "kelime": "Ulema",
    "anlam": "Alimler, din ve fen bilginleri.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ʿulemā)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "u-le-mâ",
    "ornekCumle": "Osmanlı ilmiye sınıfının başında yer alan ulema heyeti, kanunların şeriata ve adalete uygunluğunu denetlerdi."
  },
  {
    "id": "uryan-bu-an",
    "kelime": "Üryan bu an",
    "anlam": "Çıplak gerçeklik anı.",
    "turu": "Deyim / Tabir",
    "koken": "Arapça / Türkçe Terkip",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ur-yân bu an",
    "ornekCumle": "Bütün süs ve yalanlardan sıyrılıp hakikatle baş başa kaldığımız o uryan bu an, en samimi yüzleşmeydi."
  },
  {
    "id": "vefaakar",
    "kelime": "Vefaakar",
    "anlam": "Vefalı, sözünün eri.",
    "turu": "Kadim Kelime",
    "koken": "Arapça / Farsça (vefā-kār)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "ve-fâ-kâr",
    "ornekCumle": "En sıkıntılı günlerimizde bile yardıma koşan vefakâr dostlarımız hayatımızın en kıymetli hazinesidir."
  },
  {
    "id": "yadigar-i-cihan",
    "kelime": "Yadigar-ı cihan",
    "anlam": "Dünyaya bırakılan hatıra.",
    "turu": "Deyim / Tabir",
    "koken": "Farsça Terkip (yādigār-ı cihān)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "yâ-di-gâ-rı ci-hân",
    "ornekCumle": "Mimar Sinan'ın asırlara meydan okuyan Selimiye Camii, Türk milletinin dünyaya bıraktığı yadigar-ı cihandır."
  },
  {
    "id": "zaruret",
    "kelime": "Zaruret",
    "anlam": "Zorunluluk, yoksulluk hali.",
    "turu": "Kadim Kelime",
    "koken": "Arapça (ḍarūret)",
    "donem": "Divan Edebiyatı ve Tasavvuf",
    "telaffuz": "za-rû-ret",
    "ornekCumle": "Kış bastırınca yakacak temin etmek aile için kaçınılmaz bir zaruret haline gelmişti."
  },
  {
    "id": "ayak-diremek",
    "kelime": "Ayak diremek",
    "anlam": "Bir konuda ısrarcı olmak, geri adım atmamak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "a-yak di-re-mek",
    "ornekCumle": "Herkes uzlaşmaya vardığı halde haksız taleplerinde ayak diremekten vazgeçmedi."
  },
  {
    "id": "can-atmak",
    "kelime": "Can atmak",
    "anlam": "Bir şeyi yapmayı çok istemek, sabırsızlanmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "can at-mak",
    "ornekCumle": "Okullar tatile girince dedesinin köyüne gidip at binmek için can atıyordu."
  },
  {
    "id": "corbada-tuzu-olmak",
    "kelime": "Çorbada tuzu olmak",
    "anlam": "Küçük de olsa bir işe katkı sağlamak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "çor-ba-da tu-zu ol-mak",
    "ornekCumle": "Köy meydanındaki çeşmenin yapımında bizim de çorbada tuzumuz olsun diyerek harç taşıdılar."
  },
  {
    "id": "disinden-tirnagindan-artirmak",
    "kelime": "Dişinden tırnağından artırmak",
    "anlam": "Büyük fedakarlıklar yaparak kıt kanaat birikim yapmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "di-şin-den tır-na-ğın-dan",
    "ornekCumle": "Yıllarca dişinden tırnağından artırdığı üç beş kuruşla evladını üniversitede okuttu."
  },
  {
    "id": "gozu-donmek",
    "kelime": "Gözü dönmek",
    "anlam": "Öfkeden veya hırstan ne yaptığını bilmez hale gelmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "gö-zü dön-mek",
    "ornekCumle": "Öfkeden gözü dönen adam çevresindekilerin ikazlarına aldırmadan kapıyı vurup çıktı."
  },
  {
    "id": "hafife-almak",
    "kelime": "Hafife almak",
    "anlam": "Bir durumu veya kişiyi önemsiz saymak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ha-fi-fe al-mak",
    "ornekCumle": "Rakip takımın direncini hafife aldıkları için maçın son dakikalarında beklemedikleri bir mağlubiyet aldılar."
  },
  {
    "id": "tuz-biber-ekmek",
    "kelime": "Tuz biber ekmek",
    "anlam": "Kötü durumu daha da kötüleştirmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "tuz bi-ber ek-mek",
    "ornekCumle": "Zaten bozuk olan morallerin üzerine bir de kötü haber gelince üzüntüye tuz biber ekti."
  },
  {
    "id": "ufku-acilmak",
    "kelime": "Ufku açılmak",
    "anlam": "Vizyonu genişlemek, dünyayı daha iyi kavramak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "uf-ku a-çıl-mak",
    "ornekCumle": "Farklı memleketleri gezip yeni kültürleri tanıdıkça gencin hayata bakışı değişti ve ufku açıldı."
  },
  {
    "id": "yolu-acilmak",
    "kelime": "Yolu açılmak",
    "anlam": "Önündeki engellerin kalkması, işlerinin kolaylaşması.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "yo-lu a-çıl-mak",
    "ornekCumle": "Bakanlıktan gerekli izin belgesi çıkınca firmanın önündeki engeller kalktı ve yolu açıldı."
  },
  {
    "id": "zihni-acilmak",
    "kelime": "Zihni açılmak",
    "anlam": "Anlama ve kavrama yeteneğinin artması.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "zih-ni a-çıl-mak",
    "ornekCumle": "Sabahın serin havasında yaptığı yürüyüşün ardından zihni açıldı ve zor denklemi kolayca çözdü."
  },
  {
    "id": "acik-kapi-birakmak",
    "kelime": "Açık kapı bırakmak",
    "anlam": "İleride uzlaşabilmek veya geri dönebilmek için bir imkan tanımak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "a-çık ka-pı bı-rak-mak",
    "ornekCumle": "Müzakereler tıkansa da diplomaside her zaman uzlaşabilmek için açık bir kapı bırakmak gerekir."
  },
  {
    "id": "basi-goge-ermek",
    "kelime": "Başı göğe ermek",
    "anlam": "Çok büyük bir sevinç yaşamak, gururlanmak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ba-şı gö-ğe er-mek",
    "ornekCumle": "Yarışmada birincilik madalyasını boynuna taktığında mutluluktan başı göğe erdi."
  },
  {
    "id": "cana-minnet-bilmek",
    "kelime": "Cana minnet bilmek",
    "anlam": "Sunulan zoraki bir durumu veya fırsatı memnuniyetle kabul etmek.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "ca-na min-net bil-mek",
    "ornekCumle": "Yorgun argın hana vardıklarında kendilerine sunulan sıcak tarhana çorbasını cana minnet bildiler."
  },
  {
    "id": "i-cine-sinmemek",
    "kelime": "İçine sinmemek",
    "anlam": "Bir durumdan tam anlamıyla tatmin olmamak, şüphe duymak.",
    "turu": "Deyim / Tabir",
    "koken": "Türkçe Halk Deyimi",
    "donem": "Anadolu Ağzı ve Halk Deyimleri",
    "telaffuz": "i-çi-ne sin-me-mek",
    "ornekCumle": "Kumaşın rengi istediği gibi olmayınca terzinin diktiği elbise bir türlü içine sinmedi."
  }
];
