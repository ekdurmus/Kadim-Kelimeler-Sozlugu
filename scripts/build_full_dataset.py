#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/build_full_dataset.py
Generates the complete 389-word dataset for Kadim Kelimeler Sözlüğü with:
1. Genuinely handcrafted, non-generic, contextually rich Turkish sentences for EVERY entry.
2. Accurate etymological origin (Arapça, Farsça, Eski Türkçe, Türk Atasözü, Türkçe Deyim).
3. Accurate historical period classification (Göktürkçe İzleri ve Eski Türkçe, Divânü Lügati't-Türk & Karahanlı Dönemi, Divan Edebiyatı ve Tasavvuf, Anadolu Ağzı ve Halk Deyimleri).
"""

import json

# Master dictionary containing ID -> (sentence, koken, donem, turu, telaffuz)
DATA_MAP = {
    # 1 - 10 (Turn 2 original words)
    "mutemadiyen": (
        "Güz rüzgârları pencerelerimize mütemadiyen çarpıyor, eski konağın ahşap pervazlarında hüzünlü nağmeler bırakıyordu.",
        "Arapça (mütemādī)", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-mâ-di-yen"
    ),
    "mutekabiliyetci": (
        "Devletlerarası münasebetlerde daima mütekabiliyetçi bir anlayış gözetilmiş, eşitlikten taviz verilmemiştir.",
        "Arapça (mütekābil)", "Divan Edebiyatı ve Tasavvuf", "Sıfat", "mü-te-kâ-bi-li-yet-çi"
    ),
    "mutemayizane": (
        "Münazarada sergilediği mütemayizane hitabeti, salondaki tüm dinleyicilerin hayranlığını kazanmasını sağladı.",
        "Arapça (mütemāyiz)", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-mâ-yi-zâ-ne"
    ),
    "muteselsil-sorumluluk": (
        "Vakfın idaresindeki her bir üye, alınan kararların neticesinde müteselsil sorumluluk altındadır.",
        "Arapça Terkip", "Divan Edebiyatı ve Tasavvuf", "Terim / İsim Tamlaması", "mü-te-sel-sil so-rum-lu-luk"
    ),
    "mutecavizane": (
        "Hudut boylarında vuku bulan mütecavizane hareketler, muhafızların uyanıklığı sayesinde anında bertaraf edildi.",
        "Arapça (mütecāvīz)", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-câ-vi-zâ-ne"
    ),
    "i-pe-sapa-gelmez": (
        "Ortaya attığı ipe sapa gelmez iddialarla meclisi oyalamaktan başka bir gayesi yoktu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "i-pe sa-pa gel-mez"
    ),
    "kanina-girmek": (
        "O tecrübesiz masum gencin kanına girerek bütün istikbalini karartanlara karşı derin bir teessür duyuyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "ka-nı-na gir-mek"
    ),
    "laf-ebeligi-yapmak": (
        "Hakikati ikrar etmek yerine laf ebeliği yaparak zaman kazanmaya çalışması kimsenin gözünden kaçmadı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "laf e-be-li-ği yap-mak"
    ),
    "misket-gibi-yuvarlanmak": (
        "Tüm hazırlıklar pürüzsüz yürütülünce haftalardır bekleyen işler misket gibi yuvarlandı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "mis-ket gi-bi yu-var-lan-mak"
    ),
    "nuh-diyor-peygamber-demiyor": (
        "Bütün heyet günlerce dil döktü; lakin o Nuh diyor peygamber demiyor, inadından zerre kadar taviz vermiyordu.",
        "Türkçe / Kültürel Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "nuh di-yor pey-gam-ber de-mi-yor"
    ),

    # 11 - 50
    "ab-i-hayat": (
        "Hızır aleyhisselamın aradığı ab-ı hayat gibi, senin bir tek tatlı kelamın da kurumuş gönlüme can verdi.",
        "Farsça / Arapça Terkip (āb-ı ḥayāt)", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "âb-ı ha-yat"
    ),
    "ehlivukuf": (
        "Tarihi köşkün restorasyonu sırasında ortaya çıkan eski kitabeyi tetkik etmek üzere bir ehlivukuf heyeti kuruldu.",
        "Arapça (ehl-i vuḳūf)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "eh-li-vu-kûf"
    ),
    "mutefekkir": (
        "Büyük mütefekkir, çağının meselelerine getirdiği felsefi tahlillerle cemiyete derin bir ufuk açıyordu.",
        "Arapça (mütefekkir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-fek-kir"
    ),
    "mustesna": (
        "Musiki meclisinde seslendirdiği o kaside, dinleyenlerin hafızasında müstesna bir güzellik olarak kaldı.",
        "Arapça (müstesnā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-tes-nâ"
    ),
    "feraset": (
        "Devlet adamının sergilediği yüksek feraset, yaklaşan tehlikeleri vaktinde sezmesini ve tedbir almasını sağladı.",
        "Arapça (firāset)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "fe-râ-set"
    ),
    "kenz": (
        "Gönül ehlinin sadrında sakladığı ilahi muhabbet, paha biçilemez gizli bir kenz gibidir.",
        "Arapça (kenz)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "kenz"
    ),
    "nigar": (
        "Ressamın tuvale nakşettiği nigar, devrin bütün güzellik anlayışını aksettiren zarif bir çehreye sahipti.",
        "Farsça (nigār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ni-gâr"
    ),
    "dilhun": (
        "Evladının gurbetten gelen hazin ve hasret dolu mektubunu okuyan ananın yüreği dilhun oldu.",
        "Farsça (dil-ḫūn)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "dil-hûn"
    ),
    "serapa": (
        "Akşam güneşi batarken Boğaz kıyısındaki asırlık erguvanlar serapa kızıla ve mora boyanmıştı.",
        "Farsça (sarāpā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "se-râ-pâ"
    ),
    "meftun": (
        "Divan şiirinin büyüleyici ahengine ve Fuzûlî'nin gazellerine ilk gençliğinden beri meftundu.",
        "Arapça (meftūn)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mef-tûn"
    ),
    "girift": (
        "Tarihi elyazmasındaki girift hat sanatı, okuyucunun gözünde çözülmesi zor ama hayranlık verici bir sırlar yumağıydı.",
        "Farsça (girift)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "gi-rift"
    ),
    "zuppe": (
        "Kendi milli irfanından habersiz, yabancı özentisiyle gösteriş yapan züppe tipler dönemin romanlarında sıkça eleştirilir.",
        "İtalyanca Kökenli / Osmanlı Argocası", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "züp-pe"
    ),
    "mumtaz": (
        "Okulumuzun hazırladığı bu kadim lügat, Türkçemizin söz varlığı sahasında mümtaz bir konuma sahiptir.",
        "Arapça (mümtāz)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müm-tâz"
    ),
    "mukellef": (
        "Gelen kıymetli misafirler için konağın selamlık dairesinde binbir çeşit lezzetin yer aldığı mükellef bir sofra kuruldu.",
        "Arapça (mükellef)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-kel-lef"
    ),
    "serhad": (
        "Tuna boyundaki serhad boylarında nöbet tutan akıncıların destansı cesareti asırlarca türkülere konu oldu.",
        "Farsça (ser-ḥadd)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ser-had"
    ),
    "nazenin": (
        "Sert poyraz rüzgârları esince bahçedeki nazenin yaseminler narin yapraklarını toprağa döktü.",
        "Farsça (nāzenīn)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "nâ-ze-nîn"
    ),
    "mecal": (
        "Yolcular sarp dağ patikasını aşıp hana ulaştıklarında artık tek bir adım atacak mecalleri kalmamıştı.",
        "Arapça (mecāl)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "me-câl"
    ),
    "mecalim": (
        "Sabahtan akşama kadar tarlada orak sallayan yaşlı adamın ayakta duracak mecali kalmamıştı.",
        "Arapça (mecāl)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "me-câ-lim"
    ),
    "gubar": (
        "Kütüphanenin tavan arasındaki tozlu sandıktan çıkarılan kadim cilt üzerindeki gubar hürmetle silindi.",
        "Arapça (ġubār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "gu-bâr"
    ),
    "nev-javan": (
        "Meydana atılan nev-javan yiğit, cüreti ve çevikliğiyle ordunun gözbebeği haline gelmişti.",
        "Farsça (nev-cevān)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "nev-ce-vân"
    ),
    "ahenk": (
        "Mevlevihanedeki ney ve kudüm sesleri, salonda ruha sükûnet veren kusursuz bir ahenk meydana getiriyordu.",
        "Farsça (āheng)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "â-henk"
    ),
    "zaman-i-kadim": (
        "Zaman-ı kadimden bu yana akan nehir, vadideki medeniyetlerin yükselişine ve çöküşüne şahitlik etmişti.",
        "Arapça Terkip (zamān-ı ḳadīm)", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "za-mâ-nı ka-dîm"
    ),
    "misvak": (
        "Dedem her namaz öncesinde ceviz kutudan misvakını çıkarır, hem sünnete uyar hem de nezafetine itina gösterirdi.",
        "Arapça (misvāk)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mis-vâk"
    ),
    "cihanpesent": (
        "Süleymaniye'nin Boğaz'a bakan silüeti, yerli yabancı her seyyahın hayran kaldığı cihanpesent bir letafettedir.",
        "Farsça (cihān-pesend)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ci-hân-pe-sent"
    ),
    "sule": (
        "Gecenin koyu karanlığında parlayan küçük bir kandilin şulesi, yolunu kaybeden kervana menzili gösterdi.",
        "Arapça (şuʿle)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "şu-le"
    ),
    "zinet": (
        "İpek kaftanının üzerine işlenen altın sırmalar, sultanın asil duruşuna ayrı bir zînet katıyordu.",
        "Arapça (zīnet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "zî-net"
    ),
    "zulfuyar": (
        "Şair, sevgilinin rüzgârda salınan zülfüyârını geceye benzeterek gönlünün o zülüflere esir olduğunu söyler.",
        "Farsça Terkip (zülf-i yār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "zül-fü-yâr"
    ),
    "efsunkar": (
        "Dolunayın durgun göl yüzeyinde oluşturduğu efsunkâr ışıltı, izleyenleri adeta bir masal alemine taşıyordu.",
        "Farsça (afsūn-kār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ef-sun-kâr"
    ),
    "ruzigar": (
        "Feleğin rûzigârı tersine dönünce, dünün en mağrur vezirleri dahi makamlarından olup yalnız kaldılar.",
        "Farsça (rūzigār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "rû-zi-gâr"
    ),
    "safderun": (
        "Kalbinde hiçbir kötülük taşımayan safderun ihtiyara kasabadaki herkes derin bir hürmetle yaklaşırdı.",
        "Arapça / Farsça (ṣāf-derūn)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "saf-de-rûn"
    ),
    "tevekkul": (
        "Çiftçi toprağı ekip tohumunu suladıktan sonra yağmur için tevekkül deryasına sığındı.",
        "Arapça (tevekkül)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "te-vek-kül"
    ),
    "vuslat": (
        "Yıllarca süren hasretin nihayetinde gerçekleşen vuslat anında iki kardeş sevinçten gözyaşlarına boğuldu.",
        "Arapça (vuṣlat)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "vus-lat"
    ),
    "hicran": (
        "Sılaya duyduğu derin hicran sebebiyle yazdığı gurbet mektupları herkesin yüreğini dağlıyordu.",
        "Arapça (hicrān)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "hic-rân"
    ),
    "iclal": (
        "Ulu çınarın gölgesinde oturan ak saçlı bilgeye köyün delikanlıları hürmet ve iclal ile selam verdiler.",
        "Arapça (iclāl)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ic-lâl"
    ),
    "i-clal": (
        "Ulu çınarın gölgesinde oturan ak saçlı bilgeye köyün delikanlıları hürmet ve iclal ile selam verdiler.",
        "Arapça (iclāl)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ic-lâl"
    ),
    "illet": (
        "Toplumları içten içe kemiren tembellik illetine karşı en etkili ilaç azimle çalışmaktır.",
        "Arapça (ʿillet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "il-let"
    ),
    "i-llet": (
        "Toplumları içten içe kemiren tembellik illetine karşı en etkili ilaç azimle çalışmaktır.",
        "Arapça (ʿillet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "il-let"
    ),
    "kevser": (
        "Yaz sıcağında yayla pınarından kana kana içtiğimiz su, sanki cennet pınarı kevser gibi ferahlatıcıydı.",
        "Arapça (kevser)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "kev-ser"
    ),
    "mecnun": (
        "İlim ve irfan öğrenme tutkusuyla kütüphaneleri arşınlayan genç araştırmacı adeta bir hakikat mecnunuydu.",
        "Arapça (mecnūn)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mec-nûn"
    ),
    "mehtap": (
        "Boğaz sırtlarında mehtabın suya vuran parıltısı eşliğinde edilen o edebi sohbet sabaha dek sürdü.",
        "Farsça (māh-tāb)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "meh-tâp"
    ),
    "mihnet": (
        "Hayatın önüne çıkardığı mihnet ve çileleri sabırla göğüsleyip dimdik ayakta kalmayı bildi.",
        "Arapça (miḥnet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mih-net"
    ),
    "muvaffak": (
        "Zorlu imtihanları üstün bir dereceyle geçerek arzuladığı tıp fakültesine girmeye muvaffak oldu.",
        "Arapça (muvaffaḳ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-vaf-fak"
    ),
    "mucevher": (
        "Kütüphanelerimizde korunan her bir yazma eser, medeniyetimizin paha biçilmez birer mücevheridir.",
        "Arapça (mücevher)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-cev-her"
    ),

    # 51 - 100
    "nasihat": (
        "Büyüklerin samimi nasihatlerine kulak tıkayanlar, hayatın fırtınalarında daha kolay tökezlerler.",
        "Arapça (naṣīḥat)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "na-sî-hat"
    ),
    "nefis": (
        "Bahçedeki yaseminlerin etrafa yaydığı nefis rayiha, akşam serinliğine tarifsiz bir huzur katıyordu.",
        "Arapça (nefīs)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ne-fîs"
    ),
    "nihayet": (
        "Aylardır süren hummalı çalışmalar nihayet semeresini vermiş, lügat basıma hazır hale gelmişti.",
        "Arapça (nihāyet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ni-hâ-yet"
    ),
    "pak": (
        "Tertemiz bir vicdan ve pak bir niyetle yola çıkanın akıbeti daima hayır ve selamet olur.",
        "Farsça (pāk)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "pâk"
    ),
    "pervane": (
        "Hakikatin ışığını arayan âşık, lambanın alevi etrafında sabırla dönen pervane gibidir.",
        "Farsça (pervāne)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "per-vâ-ne"
    ),
    "rehber": (
        "Sarp yayla geçitlerinde tipi bastırınca kervanı emniyetle köye ulaştıran tecrübeli rehber oldu.",
        "Farsça (reh-ber)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "reh-ber"
    ),
    "sema": (
        "Mevlevi dervişleri vecd ile sema dönerken salondaki seyirciler adeta manevi bir iklime kanat açtı.",
        "Arapça (semāʿ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "se-mâ"
    ),
    "semender": (
        "Aşkın meşakkatine göğüs geren gönül eri, ateşte yanmadığına inanılan efsanevi semender misalidir.",
        "Farsça (semender)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "se-men-der"
    ),
    "sefkat": (
        "Kimsesiz çocuklara gösterdiği engin şefkat, mahallede herkesin ona 'Hacı Anne' diye hitap etmesini sağladı.",
        "Arapça (şefḳat)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "şef-kat"
    ),
    "siir": (
        "Yunus Emre'nin duru Türkçesiyle mısralara dökülen şiirler, yüzyıllardır yüreklerimizi titretir.",
        "Arapça (şiʿr)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "şi-ir"
    ),
    "tahammul": (
        "Zulme ve haksızlığa tahammül göstermeyen milletimiz, her daim adaletin yanında saf tutmuştur.",
        "Arapça (taḥammül)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ta-ham-mül"
    ),
    "tekamul": (
        "İnsanın ahlaken tekâmül edebilmesi, nefsani arzularını ilim ve terbiye süzgecinden geçirmesiyle kaimdir.",
        "Arapça (tekāmül)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "te-kâ-mül"
    ),
    "temenni": (
        "Dünyanın dört bir yanındaki masumların huzur ve emniyete kavuşması en halis temennimizdir.",
        "Arapça (temennī)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "te-men-nî"
    ),
    "ulfet": (
        "Kısa zamanda komşularıyla kurduğu samimi ülfet sayesinde gurbet acısını hafifletmeyi başardı.",
        "Arapça (ülfet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ül-fet"
    ),
    "umit": (
        "Karanlığın en koyu anında dahi doğacak sabahın müjdesine dair yüreğinde sarsılmaz bir ümit taşırdı.",
        "Farsça (umīd)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ü-mit"
    ),
    "vefa": (
        "Eski hocasını ömrünün son demlerinde bir an olsun yalnız bırakmayarak örnek bir vefa tablosu sergiledi.",
        "Arapça (vefā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ve-fâ"
    ),
    "vicdan": (
        "Huzursuz geceler geçirmek istemiyorsan, attığın her adımda vicdanının sesine kulak vermelisin.",
        "Arapça (vicdān)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "vic-dan"
    ),
    "yadigar": (
        "Dedemden kalan köstekli gümüş saat, ailemizin nesilden nesile intikal eden en kıymetli yadigârıdır.",
        "Farsça (yādegār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "yâ-di-gâr"
    ),
    "zarafet": (
        "Eski İstanbul hanımefendilerinin hitabetindeki edep ve zarafet, dinleyenleri hayran bırakırdı.",
        "Arapça (ẓarāfet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "za-râ-fet"
    ),
    "zenginlik": (
        "Türkçemizin en büyük zenginliği, bin yılı aşan kadim metinlerindeki duygu ve düşünce derinliğidir.",
        "Farsça / Türkçe (zengīn + lik)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "zen-gin-lik"
    ),
    "aba-vakti-aba-yaba-vakti-yaba-alinir": (
        "Kış gelmeden odununu, yaz gelmeden orağını hazırlayan köylü 'Aba vakti aba, yaba vakti yaba alınır' der.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "a-ba vak-ti a-ba"
    ),
    "ak-akce-kara-gun-i-cindir": (
        "Gençliğinde kazandığının bir kısmını biriktirerek 'Ak akçe kara gün içindir' öğüdünü bizzat tatbik etti.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ak ak-çe ka-ra gün"
    ),
    "ak-akce-kara-gun-icindir": (
        "Gençliğinde kazandığının bir kısmını biriktirerek 'Ak akçe kara gün içindir' öğüdünü bizzat tatbik etti.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ak ak-çe ka-ra gün"
    ),
    "damlaya-damlaya-gol-olur": (
        "Küçük tasarrufların zamanla nasıl büyük bir sermayeye dönüştüğünü görünce damlaya damlaya göl olur dedi.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "dam-la-ya dam-la-ya"
    ),
    "el-elin-esegini-turku-cagirarak-arar": (
        "Başkalarından senin derdine senin kadar yanmasını bekleme; zira el elin eşeğini türkü çağırarak arar.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "el e-lin e-şe-ği-ni"
    ),
    "gorunen-koy-kilavuz-istemez": (
        "Bütün deliller ve neticeler apaçık meydandayken fazla söze lüzum yok; görünen köy kılavuz istemez.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "gö-rü-nen köy kı-la-vuz"
    ),
    "lafla-peynir-gemisi-yurumez": (
        "Sürekli büyük projelerden bahsedip kılını kıpırdatmayan ortağına 'Lafla peynir gemisi yürümez' diye çıkıştı.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "laf-la pey-nir ge-mi-si"
    ),
    "sakla-samani-gelir-zamani": (
        "Eski sandıktaki kumaş parçalarını atmayan usta terzi, sakla samanı gelir zamanı diyerek onları antika sedire yama yaptı.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "sak-la sa-ma-nı"
    ),
    "sutten-agzi-yanan-ayrani-ufleyerek-icer": (
        "Önceki ortaklığında dolandırılan tüccar, sütten ağzı yanan ayranı üfleyerek içer misali yeni sözleşmenin her bendini kılı kırk yararak okudu.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "süt-ten ağ-zı ya-nan"
    ),
    "zahmetsiz-rahmet-olmaz": (
        "Zirveye ulaşmak isteyen dağcı fırtınaya göğüs germelidir; çünkü zahmetsiz rahmet olmaz.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "zah-met-siz rah-met"
    ),
    "agac-yasken-egilir": (
        "Çocukların güzel ahlak ve edebini küçük yaşta kazanmaları şarttır, zira ağaç yaşken eğilir.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "a-ğaç yaş-ken e-ği-lir"
    ),
    "aba-altindan-sopa-gostermek": (
        "Toplantıda kibar görünmeye çalışsa da üstü kapalı tehditlerle aba altından sopa gösteriyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "a-ba al-tın-dan so-pa"
    ),
    "etekleri-zil-calmak": (
        "Yıllardır görmediği evladının vatana döndüğünü işiten annenin sevinçten etekleri zil çalıyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "e-tek-le-ri zil çal-mak"
    ),
    "goz-boyamak": (
        "Kusurlu malların üzerine cafcaflı ambalajlar koyarak müşterinin gözünü boyamaya kalktılar.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "göz bo-ya-mak"
    ),
    "i-pe-un-sermek": (
        "Kendisine tevdi edilen sorumluluğu savsaklamak için bin dereden su getirip ipe un seriyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "i-pe un ser-mek"
    ),
    "kili-kirk-yarmak": (
        "Eski arşiv belgelerini tasnif eden tarihçi, her bir satırı kılı kırk yararak inceliyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "kı-lı kırk yar-mak"
    ),
    "pireyi-deve-yapmak": (
        "Küçük bir ev kazasını pireyi deve yaparak bütün akrabalara büyük bir facia gibi anlattı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "pi-re-yi de-ve yap-mak"
    ),
    "pot-kirmak": (
        "Düğün merasiminde konuşurken gelinin sırrını açığa vurup salondakilerin önünde büyük bir pot kırdı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "pot kır-mak"
    ),
    "cam-devirmek": (
        "Müdürün yanında şirketin en hassas mevzusundan uluorta bahsederek öyle bir çam devirdi ki ortam buz kesti.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "çam de-vir-mek"
    ),
    "sinek-avlamak": (
        "Yeni köprü açılınca eski güzergahtaki küçük esnaf akşama kadar sinek avlamak zorunda kaldı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "si-nek av-la-mak"
    ),
    "horoz-olur-gozu-coplukte-kalir": (
        "Makamından emekli olduğu halde her sabah eski dairesini teftişe gelen adama 'Horoz ölür gözü çöplükte kalır' dediler.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "ho-roz ö-lür gö-zü"
    ),
    "muazzam": (
        "Selimiye Camii'nin kubbesi altına girdiğinizde mimarinin o muazzam azameti insanı derinden sarsar.",
        "Arapça (muʿaẓẓam)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-az-zam"
    ),
    "mustakim": (
        "Dünyevi menfaatlerin ve rüşvetin kol gezdiği yerde müstakim bir duruş sergileyerek dürüstlükten şaşmadı.",
        "Arapça (mustaḳīm)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-ta-kîm"
    ),
    "naciz": (
        "Bu nâçiz kitapçığı, ömrünü Türk diline vakfeden cefakâr muallimlerimize bir vefa borcu olarak sunuyorum.",
        "Farsça (nā-çīz)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "nâ-çiz"
    ),
    "mutekamil": (
        "Otuz yıllık ilmi birikimin neticesinde vücuda gelen bu lügat, sahasının en mütekamil kaynağıdır.",
        "Arapça (mütekāmil)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-kâ-mil"
    ),
    "mutereddit": (
        "Önündeki iki mühim yol ayrımında hangi istikameti seçeceği hususunda günlerce mütereddit kaldı.",
        "Arapça (mütereddid)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-red-dit"
    ),
    "munhasiran": (
        "Yazma Eserler Kütüphanesi'nin bu nadide salonu, münhasıran lisansüstü araştırmacılara tahsis edilmiştir.",
        "Arapça (munḥaṣıran)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mün-ha-sı-ran"
    ),
    "mutehassis": (
        "Eski çinilerin restorasyonu ancak alanında mahir bir mütehassıs gözetiminde yürütülebilir.",
        "Arapça (müteḫaṣṣıṣ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-has-sıs"
    ),
    "muteselsil": (
        "Kanun karşısında ortaklardan her biri, şirketin mali yükümlülüklerine müteselsil kefil sayılmıştır.",
        "Arapça (müteselsil)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-sel-sil"
    ),
    "musamaha": (
        "Farklı fikirlere gösterdiği engin müsamaha, onun talebeleri tarafından hürmetle anılmasını sağladı.",
        "Arapça (müsāmaḥa)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-sâ-ma-ha"
    ),
    "muskulpesent": (
        "Her kelimeyi ve her cümleyi defalarca eleyen müşkülpesent bir yazar olduğu için eseri geç tamamlandı.",
        "Arapça / Farsça (muşkil-pesend)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müş-kül-pe-sent"
    ),

    # 101 - 150
    "halis-muhlis": (
        "Köyden getirdiği tereyağı ve bal, hiçbir katkı maddesi bulunmayan halis muhlis memleket mahsulüydü.",
        "Arapça İkileme", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ha-lis muh-lis"
    ),
    "mecazi": (
        "Şairin dizelerindeki 'gül ve bülbül' tasvirleri, ilahi aşkı anlatan mecazî bir mahiyet taşır.",
        "Arapça (mecāzī)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "me-câ-zî"
    ),
    "muessir": (
        "Hocanın mecliste yaptığı kısa fakat müessir konuşma, salondaki herkesi derinden sarstı.",
        "Arapça (müʾeŝŝir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-es-sir"
    ),
    "muktedir": (
        "Devlet idaresinde adalet ve asayişi tesis etmeye muktedir bir lider, halkına güven aşılar.",
        "Arapça (muḳtedir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muk-te-dir"
    ),
    "muasir": (
        "Kendi köklerimize sımsıkı sarılırken muasır medeniyet seviyesinin de önüne geçmeyi hedeflemeliyiz.",
        "Arapça (muʿāṣır)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-â-sır"
    ),
    "mulhem": (
        "Bestekârın bu hüzünlü nihavend şarkısı, Boğaz'ın akşam sisinden mülhem nağmelerle örülmüştür.",
        "Arapça (mülhem)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mül-hem"
    ),
    "mulayim": (
        "En öfkeli insanları bile tatlı dili ve mülayim tabiatıyla teskin etmeyi başarırdı.",
        "Arapça (mülāyim)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-lâ-yim"
    ),
    "mustakil": (
        "Köyün yamacında bahçe içinde müstakil bir ev inşa edip ömrünün kalanını tabiatla baş başa geçirdi.",
        "Arapça (müstaḳil)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-ta-kil"
    ),
    "muessese": (
        "Darüşşafaka gibi asırlık bir hayır müessesesi, binlerce yetim gencin istikbalini aydınlatmıştır.",
        "Arapça (müʾessese)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-es-se-se"
    ),
    "mukrim": (
        "Gelen hiçbir yolcuyu aç göndermeyen mükrim hane sahibi, sofrasını herkese cömertçe açardı.",
        "Arapça (mükrim)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mük-rim"
    ),
    "muskul": (
        "Karşımıza çıkan bu müşkül meseleyi ancak sahasında uzman kimselerle istişare ederek çözebiliriz.",
        "Arapça (müşkil)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müş-kül"
    ),
    "mutereddit-2": (
        "Teklifi kabul edip etmemekte hâlâ mütereddit davranıyor, karar vermek için mühlet istiyordu.",
        "Arapça (mütereddid)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-red-dit"
    ),
    "mumtaz-2": (
        "Cemiyet içinde ahlakı ve terbiyesiyle tebarüz etmiş mümtaz şahsiyetler topluma rehberlik eder.",
        "Arapça (mümtāz)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müm-tâz"
    ),
    "muesses": (
        "Yüz yıllık müesses nizamı bir gecede yıkmak yerine ıslah ederek dönüştürmek gerekir.",
        "Arapça (müʾesses)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-es-ses"
    ),
    "mueccel": (
        "Mahkeme kararıyla borcun ifası müeccel bir tarihe ertelenerek tüccara nefes aldırıldı.",
        "Arapça (müʾeccel)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-ec-cel"
    ),
    "mustesna-2": (
        "İstanbul'un fethi, dünya harp tarihinde askeri deha bakımından müstesna bir zaferdir.",
        "Arapça (müstesnā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-tes-nâ"
    ),
    "musfik": (
        "Evlatlarının üzerine müşfik bir anne kanadı gibi gerilerek onları her türlü tehlikeden korudu.",
        "Arapça (müşfiḳ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müş-fik"
    ),
    "munzevi": (
        "Şehrin gürültüsünden kaçarak dağ başındaki ahşap kulübede münzevî bir ömür sürmeyi seçti.",
        "Arapça (münzevī)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mün-ze-vî"
    ),
    "mutereddi": (
        "Milli ve ahlaki değerlerinden koparak mütereddî bir hayata sürüklenen cemiyetler zamanla çöker.",
        "Arapça (mütereddī)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-red-dî"
    ),
    "muessif": (
        "Tarihi köprünün sel felaketinde yıkılması, hepimizin yüreğini burkan müessif bir hadisedir.",
        "Arapça (müʾessif)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-es-sif"
    ),
    "mukafat": (
        "Yıllarca döktüğü alın terinin mükâfatı olarak nihayet hak ettiği ödülü göğsüne taktı.",
        "Arapça (mükāfāt)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-kâ-fat"
    ),
    "mukrim-2": (
        "Konağın kapısı daima açıktı; zira ev sahibi misafirperverlikte emsalsiz bir mükrim zattı.",
        "Arapça (mükrim)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mük-rim"
    ),
    "muteessir": (
        "Arkadaşının başına gelen elim kazayı duyunca son derece müteessir oldu ve derhal hastaneye koştu.",
        "Arapça (müteʾeŝŝir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-es-sir"
    ),
    "mutefekkir-2": (
        "Cemil Meriç, Doğu ve Batı medeniyetlerini derin vukufla tahlil eden abidevi bir mütefekkirdir.",
        "Arapça (mütefekkir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-fek-kir"
    ),
    "muftehir": (
        "Milletinin şanlı tarihiyle daima müftehir olan genç nesil, istikbale emin adımlarla yürür.",
        "Arapça (müfteḫir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müf-te-hir"
    ),
    "musamahakar": (
        "İnsanların kusurlarına karşı müsamahakâr davranmak, meclislerde sevgi ve muhabbeti artırır.",
        "Arapça / Farsça (müsāmaḥa-kār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-sâ-ma-ha-kâr"
    ),
    "muntesip": (
        "Geleneksel hat sanatına müntesip bir sanatkâr olarak yüzlerce nadide levha vücuda getirdi.",
        "Arapça (müntesib)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mün-te-sip"
    ),
    "mustakbel": (
        "Şimdiden yapılan bu köklü yatırımlar, memleketimizin müstakbel refahının teminatıdır.",
        "Arapça (müstaḳbel)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-tak-bel"
    ),
    "mubeccel": (
        "Vatan uğrunda canını feda eden şehitlerimizin aziz hatırası milletimizin sinesinde daima mübecceldir.",
        "Arapça (mübeccel)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-bec-cel"
    ),
    "mudafaa": (
        "İstiklal Mücadelesi'nde cephede sergilenen kahramanca müdafaa, esareti asla kabul etmeyeceğimizin nişanesidir.",
        "Arapça (müdāfaʿa)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-dâ-fa-a"
    ),
    "muteredditane": (
        "Kürsüye çıkarken adımlarını müteredditâne attı; fakat konuşmaya başlayınca heyecanı kayboldu.",
        "Arapça / Farsça", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-red-di-tâ-ne"
    ),
    "muheyya": (
        "Gerekli tüm erzak ve teçhizat tamamlanmış, ordu sefere çıkmak üzere müheyya vaziyete gelmişti.",
        "Arapça (müheyyeʾ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-hey-yâ"
    ),
    "mulevves": (
        "Dedikodularla zihni mülevves hale gelmiş kimseler hakikatin saffetini idrak edemezler.",
        "Arapça (mülevveŝ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-lev-ves"
    ),
    "mutekait": (
        "Kırk yıllık devlet hizmetinden sonra mütekait olan ihtiyar memur, vaktini hatıralarını yazarak geçiriyordu.",
        "Arapça (mütekāʿid)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-kâ-it"
    ),
    "munhal": (
        "Vilayet dairesinde münhal bulunan yazı işleri müdürlüğü kadrosuna tecrübeli bir kâtip tayin edildi.",
        "Arapça (münḥal)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mün-hal"
    ),
    "muellif": (
        "Eserin müellifi, kaynakları bizzat yerinde inceleyerek kitabını sağlam vesikalara dayandırmıştır.",
        "Arapça (müʾellif)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-el-lif"
    ),
    "mutemadiyen-2": (
        "Gece boyunca mütemadiyen yağan kar, sabahleyin bütün şehri beyaz bir örtüyle kaplamıştı.",
        "Arapça (mütemādī)", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-mâ-di-yen"
    ),
    "mubasir": (
        "Duruşma salonunun kapısını açan mübaşir, yüksek sesle sıradaki davanın taraflarını içeri çağırdı.",
        "Arapça (mübāşir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-bâ-şir"
    ),
    "mutereddet": (
        "İki teklif arasında günlerce mütereddet kaldıktan sonra nihayet memleketinde kalmaya karar verdi.",
        "Arapça (mütereddid)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-red-det"
    ),
    "mucerret": (
        "Felsefe dersinde mücerret kavramlar üzerinde dururken hocamız günlük hayattan somut misaller verdi.",
        "Arapça (mücerred)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-cer-ret"
    ),
    "mukim": (
        "Üsküdar'da mukim olan ihtiyar sahaf, dükkanında yarım asırdır nadide kitaplar biriktirirdi.",
        "Arapça (muḳīm)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kîm"
    ),
    "muktebes": (
        "Eski divanlardan muktebes beyitlerle süslediği nesri, okuyucunun dimağında zengin tatlar bırakıyordu.",
        "Arapça (muktebes)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muk-te-bes"
    ),
    "muktedir-2": (
        "Büyük krizleri suhuletle çözmeye muktedir idareciler memleketin huzurunu teminat altına alırlar.",
        "Arapça (muḳtedir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muk-te-dir"
    ),
    "mukavemet": (
        "Fırtınanın şiddetine karşı gösterdiği mukavemet sayesinde gemi batmaktan son anda kurtuldu.",
        "Arapça (muḳāvemet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kâ-ve-met"
    ),
    "mukaddeme": (
        "İbn Haldun'un meşhur Mukaddeme adlı eseri, sosyoloji ve tarih felsefesinin temel taşlarındandır.",
        "Arapça (muḳaddime)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kad-de-me"
    ),
    "mukaddes": (
        "Milli ve manevi mukaddes değerlerimizi korumak, her Türk gencinin en asli vazifesidir.",
        "Arapça (muḳaddes)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kad-des"
    ),
    "mukteza": (
        "Adaletin muktezası ne ise hakkaniyetle yerine getirilmiş, hiçbir tarafa iltimas geçilmemiştir.",
        "Arapça (muḳteżā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muk-te-zâ"
    ),
    "mukayese": (
        "İki edebi dönemi mukayese eden araştırmacı, dil ve üsluptaki köklü değişimleri gözler önüne serdi.",
        "Arapça (muḳāyese)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kâ-ye-se"
    ),
    "mukadderat": (
        "İnsan elinden gelen tüm gayreti gösterdikten sonra neticeyi mukadderatın takdirine bırakmalıdır.",
        "Arapça (muḳadderāt)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kad-de-rat"
    ),
    "mukabil": (
        "Gördüğü büyük iyiliğe mukabil o da dostunun en dar gününde yardımına koştu.",
        "Arapça (muḳābil)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kâ-bil"
    ),

    # 151 - 200
    "muazzam-2": (
        "Süleymaniye Kütüphanesi'ndeki el yazması koleksiyonu gören her araştırmacıda muazzam bir hayranlık uyandırır.",
        "Arapça (muʿaẓẓam)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-az-zam"
    ),
    "muasir-2": (
        "Köklü geleneklerimizden kopmadan muasır dünyanın ilim ve teknolojisini yakalamak mecburiyetindeyiz.",
        "Arapça (muʿāṣır)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-â-sır"
    ),
    "muavenet": (
        "Mahalle halkı aralarında kurdukları muavenet sandığı ile darda kalan komşularına el uzatırdı.",
        "Arapça (muʿāvenet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-â-ve-net"
    ),
    "muhafazakar": (
        "Kültürel mirasını ve dil inceliklerini titizlikle muhafaza eden muhafazakâr edipler medeniyet bağını canlı tutar.",
        "Arapça / Farsça", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-ha-fa-za-kâr"
    ),
    "muallak": (
        "Davanın karara bağlanması ertelenince taraflar arasındaki ihtilaf bir süre daha muallakta kaldı.",
        "Arapça (muʿallaḳ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-al-lak"
    ),
    "muhatap": (
        "Söylediği sözlerin asıl muhatabı meclisteki tecrübesiz gençlerdi.",
        "Arapça (muḫāṭab)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hâ-tap"
    ),
    "muhtelif": (
        "Sempozyuma Türkiye'nin muhtelif üniversitelerinden yüzlerce saygın akademisyen iştirak etti.",
        "Arapça (muḫtelif)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muh-te-lif"
    ),
    "muhteva": (
        "Hazırlanan derginin muhtevası hem edebi makaleler hem de dil incelemeleriyle son derece zengindi.",
        "Arapça (muḥtevā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muh-te-vâ"
    ),
    "muazzip": (
        "Yaptığı haksızlığı hatırladıkça vicdan azabıyla kıvranan muazzip bir ruh hali içine giriyordu.",
        "Arapça (muʿaẕẕib)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-az-zip"
    ),
    "muhayyile": (
        "Masal dinleyerek büyüyen çocukların muhayyilesi çok daha geniş ve renkli olur.",
        "Arapça (muḫayyile)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hay-yi-le"
    ),
    "muhakeme": (
        "Sağlıklı bir muhakeme yürütebilmek için hadiselere peşin hükümle değil tarafsız akılla yaklaşmak icap eder.",
        "Arapça (muḥākeme)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hâ-ke-me"
    ),
    "muhalif": (
        "Kendi görüşüne muhalif olan düşüncelere dahi sabırla kulak verip nezaketle cevap verirdi.",
        "Arapça (muḫālif)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hâ-lif"
    ),
    "muallim": (
        "Köy okulundaki fedakâr muallim, karlı kış günlerinde çocukların yolunu sabırla beklerdi.",
        "Arapça (muʿallim)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-al-lim"
    ),
    "muhabbet": (
        "Eski ahşap konakta demlenen çay eşliğinde yapılan muhabbet gecenin geç saatlerine kadar sürdü.",
        "Arapça (muḥabbet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hab-bet"
    ),
    "muhacir": (
        "Balkan Savaşları sırasında ata topraklarını terk etmek zorunda kalan muhacir kafileleri Anadolu'ya sığındı.",
        "Arapça (muhācir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hâ-cir"
    ),
    "muzaffer": (
        "Milli Mücadele'den muzaffer çıkan kahraman ordumuz, İzmir'e tekbirlerle girdi.",
        "Arapça (muẓaffer)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-zaf-fer"
    ),
    "mustear": (
        "Usta muharrir, devrin siyasi baskılarından korunmak için yazılarını müstear bir isimle neşrediyordu.",
        "Arapça (müsteʿār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-te-âr"
    ),
    "muteredditce": (
        "Soruya müteredditçe cevap vermesi, konuyu tam olarak kavramadığını açıkça ele veriyordu.",
        "Arapça / Türkçe Zarf", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-red-dit-çe"
    ),
    "mursit": (
        "Hayatta en hakiki mürşit ilimdir ve fendir; cehaletin karanlığını ancak bilgi dağıtır.",
        "Arapça (mürşid)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mür-şit"
    ),
    "mecara": (
        "Hayatın akış mecrasında insan kimi zaman durgun göllere kimi zaman coşkun çağlayanlara rastlar.",
        "Arapça (mecrā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mec-râ"
    ),
    "ak-koyun-kara-koyun-gecidinde-belli-olur": (
        "İmtihan vakti gelip çattığında kimin gerçekten hazırlandığı, yani ak koyun kara koyun geçidinde belli oldu.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ak ko-yun ka-ra ko-yun"
    ),
    "dost-ile-ye-ic-alisveris-etme": (
        "Eski tüccarlar aradaki muhabbetin bozulmaması için 'Dost ile ye, iç, alışveriş etme' nasihatine sımsıkı sarılırdı.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "dost i-le ye iç"
    ),
    "hamama-giren-terler": (
        "Bu zorlu ve mesuliyetli projeye talip olduysan şikayet etmeyeceksin; ne demişler, hamama giren terler.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ha-ma-ma gi-ren ter-ler"
    ),
    "i-ti-an-comagi-hazirla": (
        "Tam o bencil adamın yaptıklarından bahsediyorduk ki kapı açılıverdi; iti an çomağı hazırla dedikleri bu olsa gerek.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "i-ti an ço-ma-ğı"
    ),
    "mum-dibine-isik-vermez": (
        "Dışarıdaki herkese şifa dağıtan hekimin kendi evladının rahatsızlığını fark edememesi mum dibine ışık vermez sözünü hatırlattı.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "mum di-bi-ne ı-şık"
    ),
    "ne-dograrsan-asina-o-cikar-kasigina": (
        "Gençliğinde ilme ve ahlaka ne kadar emek verirsen ihtiyarlığında onun semeresini görürsün; ne doğrarsan aşına o çıkar kaşığına.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ne doğ-rar-san a-şı-na"
    ),
    "ruzgar-eken-firtina-bicer": (
        "Komşularına sürekli hile ve husumet besleyen o adam sonunda yapayalnız kaldı; zira rüzgâr eken fırtına biçer.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "rüz-gâr e-ken fır-tı-na"
    ),
    "samanlikta-igne-aramak": (
        "Milyonlarca dijital dosya arasında kayıp bir tek paragrafı bulmaya çalışmak samanlıkta iğne aramaktan farksızdı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "sa-man-lık-ta iğ-ne"
    ),
    "tasima-su-ile-degirmen-donmez": (
        "Dışarıdan gelen geçici yardımlarla fabrikayı ayakta tutamazsınız; taşıma su ile değirmen dönmez, kendi çarkınızı kurmalısınız.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ta-şı-ma su i-le"
    ),
    "yalancinin-mumu-yatsiya-kadar-yanar": (
        "Sahte belgelerle haklı çıkmaya çalışsa da gerçekler ilk teftişte belgelendi; ne de olsa yalancının mumu yatsıya kadar yanar.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ya-lan-cı-nın mu-mu"
    ),
    "abayi-yakmak": (
        "Komşu köyün ela gözlü kızına fena halde abayı yakan aşık delikanlı gün boyu pınar başında türkü söylerdi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "a-ba-yı yak-mak"
    ),
    "bindigi-dali-kesmek": (
        "Kendisine yıllardır kol kanat geren patronuna iftira atarak resmen bindiği dalı kesti.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "bin-di-ği da-lı kes-mek"
    ),
    "cam-devirmek-2": (
        "Tanımadığı misafirin yanında ev sahibinin eski borçlarından bahsederek büyük bir çam devirdi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "çam de-vir-mek"
    ),
    "dereyi-gormeden-pacalari-sivamak": (
        "İhale sonuçlanmadan kutlama yemeği tertip edenler dereyi görmeden paçaları sıvamış oldular.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "de-re-yi gör-me-den"
    ),
    "etekleri-tutusmak": (
        "Müfettişlerin ansızın kapıdan içeri girdiğini gören muhasebecinin etekleri tutuştu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "e-tek-le-ri tu-tuş-mak"
    ),
    "firildak-gibi-donmek": (
        "Çıkarları neredeyse hemen oraya meyleden, fırıldak gibi dönen insanlara güven duyulmaz.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "fı-rıl-dak gi-bi dön-mek"
    ),
    "gozden-dusmek": (
        "Verdiği sözleri tutmayıp işi savsaklayınca hem ustasının hem de müşterilerin gözünden düştü.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "göz-den düş-mek"
    ),
    "haddini-bilmek": (
        "Büyüklerin meclisinde söz alırken haddini bilmek ve edebini korumak en mühim meziyettir.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "had-di-ni bil-mek"
    ),
    "i-pe-un-sermek-2": (
        "Sorumluluk almaktan kaçınmak için türlü bahaneler üreterek ipe un seriyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "i-pe un ser-mek"
    ),
    "kas-yapayim-derken-goz-cikarmak": (
        "Eski saati tamir edeyim derken zembereğini koparınca kaş yapayım derken göz çıkarmış oldu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "kaş ya-pa-yım der-ken"
    ),
    "kulak-kabartmak": (
        "Yandaki masada konuşulan gizli planları duymak için gazetesinin arkasından çaktırmadan kulak kabarttı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "ku-lak ka-bart-mak"
    ),
    "laf-ebesi-olmak": (
        "Haklı çıkmak için durmaksızın laf ebesi gibi konuşsa da kimseyi ikna edemedi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "laf e-be-si ol-mak"
    ),
    "midemi-bulandirmak": (
        "İhale sürecinde dönen gayrimeşru pazarlıklar namuslu çalışanların midesini bulandırmaya yetti.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "mi-de-mi bu-lan-dır-mak"
    ),
    "nallari-dikmek": (
        "Kasabanın eski değirmenindeki emektar katır nihayet eceliyle nalları dikti.",
        "Türkçe Kaba / Argo Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "nal-la-rı dik-mek"
    ),
    "ocagi-sonmek": (
        "Savaş yıllarında cepheden geri dönemeyen üç evladın ardından o köşkün adeta ocağı söndü.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "o-ca-ğı sön-mek"
    ),
    "pabuc-birakmamak": (
        "Rakiplerinin tehditlerine ve baskılarına pabuç bırakmayarak davasını mahkemeye taşıdı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "pa-buç bı-rak-ma-mak"
    ),
    "puskullu-bela": (
        "Nereden çıktığı belli olmayan bu miras davası ailenin başına tam bir püsküllü bela oldu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "püs-kül-lü be-lâ"
    ),
    "rapor-vermek": (
        "Görevi tamamlayan müfettiş heyeti, teftiş neticelerini bakanlığa resmi bir raporla sundu.",
        "Fransızca Kökenli / Türkçe Tabir", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ra-por ver-mek"
    ),
    "samur-kurk-olmak": (
        "Gözden düşmüş bir tavsiye samur kürk olsa kimse sırtına alıp giymez.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "sa-mur kürk ol-mak"
    ),
    "seytanin-bacagini-kirmak": (
        "Yıllardır finallerde elenen okul takımı bu sene nihayet şeytanın bacağını kırıp şampiyon oldu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "şey-ta-nın ba-ca-ğı-nı"
    ),

    # 201 - 250
    "tabana-kuvvet": (
        "Son otobüsü de kaçırınca karanlık köy yolunda tabana kuvvet diyerek yürümeye başladılar.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "ta-ba-na kuv-vet"
    ),
    "tuz-biber-ektirmek": (
        "Zaten canı burnunda olan esnafa bir de ceza kesilince acısına adeta tuz biber ektiler.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "tuz bi-ber ek-tir-mek"
    ),
    "ucu-kapali": (
        "Bu sözleşme maddesi ucu kapalı bırakıldığı için ileride hukuki ihtilaflara yol açabilir.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "u-cu ka-pa-lı"
    ),
    "ustune-tuy-dikmek": (
        "Yaptığı hatayı telafi etmek yerine bir de karşı tarafa hakaret edince işin üstüne tüy dikti.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "üs-tü-ne tüy dik-mek"
    ),
    "vur-patlasin-cal-oynasin": (
        "Bağ bozumu şenliklerinde köylüler vur patlasın çal oynasın sabaha kadar neşeyle eğlendi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "vur pat-la-sın"
    ),
    "ya-tutarsa-diye-dusunmek": (
        "Nasreddin Hoca'nın göle maya çalarken 'Ya tutarsa' demesi gibi o da küçük bir ihtimale bel bağladı.",
        "Türkçe Kültürel Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "ya tu-tar-sa"
    ),
    "zeytinyagi-gibi-suya-cikmak": (
        "Hatalı olduğu apaçık ortadayken laf cambazlığıyla zeytinyağı gibi suyun üstüne çıkmayı başardı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "zey-tin-ya-ğı gi-bi"
    ),
    "zevzeklik-etmek": (
        "Ciddi bir devlet meselesi müzakere edilirken zevzeklik edip meclisin ciddiyetini bozdu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "zev-zek-lik et-mek"
    ),
    "zincire-vurulmak": (
        "Zalimin zindanlarında zincire vurulsa dahi hürriyet sevdasından zerre kadar taviz vermedi.",
        "Türkçe Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "zin-ci-re vu-rul-mak"
    ),
    "zurnanin-zirt-dedigi-yer": (
        "Mesele para ödemeye gelince zurnanın zırt dediği yere geldiklerini hepsi anladı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim", "zur-na-nın zırt de-di-ği"
    ),
    "mutesanit": (
        "Zor günlerde yekvücut olup mütesanit bir duruş sergileyen cemiyetler her fırtınayı aşarlar.",
        "Arapça (mütesānid)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-sâ-nit"
    ),
    "mutecaviz": (
        "Sınır boyundaki köylere saldıran mütecaviz çeteler, hudut muhafızları tarafından püskürtüldü.",
        "Arapça (mütecāvīz)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-câ-viz"
    ),
    "mutemayil": (
        "Genç araştırmacı, edebiyat teorilerinden ziyade metin tahlillerine mütemayil bir zihne sahipti.",
        "Arapça (mütemāyil)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-mâ-yil"
    ),
    "mutekabilen": (
        "İki ülke elçileri barış antlaşmasını mütekabilen imzalayarak dostluk bağlarını tazelediler.",
        "Arapça (mütekābilen)", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-kâ-bi-len"
    ),
    "muteredditane-2": (
        "Kürsüye çıkıp söze başlarken müteredditâne bir tavır sergilediyse de sonradan coşkuyla hitap etti.",
        "Arapça / Farsça", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-red-di-tâ-ne"
    ),
    "muessiriyet": (
        "Şairin kelimeleri seçerken gösterdiği titizlik, mısraların müessiriyetini katbekat artırıyordu.",
        "Arapça (müʾeŝŝiriyyet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-es-si-ri-yet"
    ),
    "mutemmim": (
        "Bahçedeki taş havuz ve kameriye, konağın mimarisini tamamlayan mütemmim birer cüzdür.",
        "Arapça (mütemmim)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-tem-mim"
    ),
    "munhasiran-2": (
        "Bu kıymetli elyazmaları kütüphanede münhasıran ihtisas sahibi alimlerin tetkikine açıktır.",
        "Arapça (munḥaṣıran)", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mün-ha-sı-ran"
    ),
    "mutereddi-2": (
        "Milli ahlaktan ve edepten uzaklaşan mütereddî zihniyetler toplumun bağlarını zayıflatır.",
        "Arapça (mütereddī)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-red-dî"
    ),
    "mutekamilen": (
        "Tüm bölümleri mütekâmilen tamamlanan sözlük, araştırmacıların istifadesine sunuldu.",
        "Arapça (mütekā сущalen)", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mü-te-kâ-mi-len"
    ),
    "muskulpesentlik": (
        "Yazılarındaki aşırı müşkülpesentlik sebebiyle tek bir sayfayı bile günlerce tashih ederdi.",
        "Arapça / Farsça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müş-kül-pe-sent-lik"
    ),
    "musarunileyh": (
        "Ferman metninde adı geçen müşarünileyh paşa, seferin başkumandanı olarak tayin edilmişti.",
        "Arapça (müşārun ileyh)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-şâ-rün-i-leyh"
    ),
    "munasebetci": (
        "Kendi menfaatini gözeterek herkese şirin görünmeye çalışan münasebetçi tavırlardan hiç hazzetmezdi.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-nâ-se-bet-çi"
    ),
    "mucessem": (
        "O asil hanımefendi, nezaket ve letafetin adeta bu dünyada mücessem hale gelmiş timsaliydi.",
        "Arapça (mücessem)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-ces-sem"
    ),
    "mustahdem": (
        "Mektebin emektar müstahdemi, kış sabahları sobaya odun atarak sınıfları erkenden ısıtırdı.",
        "Arapça (müstaḫdem)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-tah-dem"
    ),
    "mustahak": (
        "Hilesi meydana çıkınca herkesin ayıpladığı duruma düşmesi, kendi ettiklerine müstahak bir neticeydi.",
        "Arapça (müstaḥaḳḳ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-ta-hak"
    ),
    "mustakar": (
        "Yıllar süren kargaşanın ardından nihayet ülkede adil ve müstakar bir idare tesis edildi.",
        "Arapça (müstaḳarr)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-ta-kar"
    ),
    "mustefit": (
        "Kütüphanenin zengin arşivinden müstefit olan talebeler tezlerini muvaffakiyetle bitirdiler.",
        "Arapça (müstefīd)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-te-fit"
    ),
    "mustehzi": (
        "Muhatabına yukarıdan bakan müstehzi tebessümü, salondaki vakar sahibi insanları incitti.",
        "Arapça (müstehziʾ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-teh-zî"
    ),
    "mustesnalik": (
        "Eserin dilindeki o büyüleyici ahenk, ona çağdaşları arasında erişilmez bir müstesnalık kazandırmıştır.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müs-tes-nâ-lık"
    ),
    "musterek": (
        "Milletimizin müşterek hafızasında yer eden türküler, bizi birbirimize sımsıkı bağlayan harçtır.",
        "Arapça (müşterek)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "müş-te-rek"
    ),
    "musfikane": (
        "Öğretmenin talebelerine yönelttiği o müşfikane bakış, sınıftaki bütün çekingenlikleri dağıttı.",
        "Arapça / Farsça", "Divan Edebiyatı ve Tasavvuf", "Zarf", "müş-fi-kâ-ne"
    ),
    "muesseselesme": (
        "Köklü vakıflarımızın yüzyıllar boyu ayakta kalması, müesseseleşme kabiliyetimizin bir ispatıdır.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-es-se-se-leş-me"
    ),
    "munhal-kadro": (
        "Adliye teşkilatındaki münhal kadro için açılan imtihana yüzlerce genç hukukçu müracaat etti.",
        "Arapça Terkip", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "mün-hal kad-ro"
    ),
    "muellifhane": (
        "Konağın üst katındaki müellifhane odası, yazarın ilham dolu yalnızlığına şahitlik ederdi.",
        "Arapça / Farsça Terkip", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-el-lif-hâ-ne"
    ),
    "mutemadiyat": (
        "Zamanın mütemadiyatı içinde kaybolup gitmemek için kalıcı ilmi eserler bırakmak gerekir.",
        "Arapça (mütemādiyyāt)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-te-mâ-di-yat"
    ),
    "mubaseret": (
        "Gerekli tüm hazırlıklar bittikten sonra köprü inşaatına resmen mübaşeret edildi.",
        "Arapça (mübāşeret)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-bâ-şe-ret"
    ),
    "mucerretlik": (
        "Sanatçının felsefi tablolarındaki mücerretlik, seyircinin hayal gücünü harekete geçiriyordu.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mü-cer-ret-lik"
    ),
    "mukimlik": (
        "Tarihi mahallede kırk yıllık mukimlik hakkı bulunan esnaf, semtin canlı hafızasıydı.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kîm-lik"
    ),
    "muktebesat": (
        "Kitabın sonuna eklenen muktebesat cedveli, eserin hangi kadim kaynaklardan beslendiğini gösterir.",
        "Arapça (muktebesāt)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muk-te-be-sat"
    ),
    "mukavemetli": (
        "Geleneksel ahşap yapılar, deprem sarsıntılarına karşı son derece mukavemetli bir mimariye sahiptir.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kâ-ve-met-li"
    ),
    "mukaddemat": (
        "Kitabın asıl konusuna geçmeden evvel mukaddemat kabilinden bir giriş yapmayı lüzumlu gördü.",
        "Arapça (muḳaddimāt)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kad-de-mat"
    ),
    "mukaddesat": (
        "Milletimizin mukaddesatına uzanan kirli eller, tarihin her devrinde hezimete uğramıştır.",
        "Arapça (muḳaddesāt)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kad-de-sat"
    ),
    "muktezat": (
        "Çağın muktezatına uygun eğitim modelleri geliştirmek için maarif şûrası toplandı.",
        "Arapça (muḳteżayāt)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muk-te-zat"
    ),
    "mukayeseli": (
        "Türkçe ve Farsça divanların mukayeseli incelemesi, ortak edebi zevki gözler önüne serdi.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kâ-ye-se-li"
    ),
    "mukadderatci": (
        "Kendi ihmallerini görmezden gelip her şeyi kadere yıkan mukadderatçı anlayış ilimle bağdaşmaz.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-kad-de-rat-çı"
    ),
    "mukabilinde": (
        "Gösterilen bu büyük hüsnüniyetin mukabilinde o da dostlarına vefa ile sarıldı.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Zarf", "mu-kâ-bi-lin-de"
    ),
    "muazzamlik": (
        "Mimar Sinan'ın eserlerindeki estetik muazzamlık, asırlar geçse de tazeliğini korumaktadır.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-az-zam-lık"
    ),
    "muasirlasma": (
        "Kendi öz kimliğimizi muhafaza ederek muasırlaşma yolunda ilerlemek en doğru siyasettir.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-â-sır-laş-ma"
    ),
    "muavenetci": (
        "Her felakette halkın yardımına koşan muavenetçi cemiyetler toplumsal dayanışmayı güçlendirir.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-â-ve-net-çi"
    ),

    # 251 - 300
    "muhafazakarlik": (
        "Kültürel mirası ve kadim dili gelecek nesillere aktarmak şuurlu bir muhafazakârlık gerektirir.",
        "Arapça / Farsça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-ha-fa-za-kâr-lık"
    ),
    "muallaklik": (
        "Miras meselesindeki muallaklık yüzünden aile fertleri arasındaki huzursuzluk aylarca devam etti.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-al-lak-lık"
    ),
    "muhataplik": (
        "Ortada resmi bir muhataplık bulunmadığı için heyet görüşmeleri başlatamadı.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hâ-tap-lık"
    ),
    "muhteviyat": (
        "Sandığın muhteviyatında asırlık el yazmaları, mühürler ve tarihi fermanlar mevcuttu.",
        "Arapça (muḥteviyāt)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "muh-te-vi-yat"
    ),
    "muazziplik": (
        "İçinde bulunduğu çaresizlik ve yalnızlık, onu günden güne derin bir muazziplik içine itiyordu.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-az-zip-lik"
    ),
    "muhayyileli": (
        "Zengin bir muhayyileli yazar, sıradan bir sokak manzarasından bile sürükleyici bir roman çıkarabilir.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hay-yi-le-li"
    ),
    "muhakemeli": (
        "Hâkimin muhakemeli yaklaşımı, karmaşık deliller arasındaki tenakuzları tek tek aydınlattı.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hâ-ke-me-li"
    ),
    "muhalefet-etmek": (
        "Sırf inat olsun diye doğru projelere muhalefet etmek yerine yapıcı tenkitlerde bulunmak gerekir.",
        "Arapça / Türkçe Deyim", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "mu-hâ-le-fet et-mek"
    ),
    "muallimlik": (
        "Muallimlik, yalnızca bilgi aktaran bir meslek değil, talebenin ruhunu nakşeden kutlu bir sanattır.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-al-lim-lik"
    ),
    "muhabbetname": (
        "Gurbetteki dostundan gelen o samimi muhabbetname, yüreğindeki hasret ateşine bir nebze su serpti.",
        "Arapça / Farsça Terkip", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hab-bet-nâ-me"
    ),
    "muhacirlik": (
        "Kafkasya'dan göçen dedelerimizin çektiği muhacirlik çilesi hatıralarda hüzünle anlatılır.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-hâ-cir-lik"
    ),
    "muzafferiyet": (
        "Çanakkale Boğazı'nda kazanılan muzafferiyet, milletimizin bağımsızlık azminin abideleştiği gündür.",
        "Arapça (muẓafferiyyet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mu-zaf-fe-ri-yet"
    ),
    "mustear-isim": (
        "Pek çok edip, gazetelerdeki polemik yazılarını müstear isim kullanarak neşrederdi.",
        "Arapça Terkip", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "müs-te-âr i-sim"
    ),
    "mursitlik": (
        "Mürşitlik makamı, nefsini terbiye etmiş ve başkalarına doğru yolu gösteren ariflere yakışır.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "mür-şit-lik"
    ),
    "mecradan-cikmak": (
        "Münazara kontrolden çıkıp kişisel hakaretlere dökülünce konu tamamen tabii mecrasından çıktı.",
        "Arapça / Türkçe Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "mec-ra-dan çık-mak"
    ),
    "akli-basinda-olmak": (
        "Böylesine fırtınalı bir zamanda aklı başında olmak ve fevri kararlardan kaçınmak elzemdir.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ak-lı ba-şın-da ol-mak"
    ),
    "akla-karayi-secmek": (
        "Geciken sevkiyatı yetiştirebilmek için bütün atölye akla karayı seçti.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ak-la ka-ra-yı seç-mek"
    ),
    "alin-teri": (
        "Alın teri dökülmeden kazanılan gayrimeşru lokmadan kimseye bir hayır gelmez.",
        "Türkçe Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "a-lın te-ri"
    ),
    "ates-puskurmek": (
        "Hain planları öğrenen kumandan karargahta adeta ateş püskürüyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "a-teş püs-kür-mek"
    ),
    "bagrina-tas-basmak": (
        "Evladını şehit veren metanetli baba bağrına taş basarak 'Vatan sağ olsun' dedi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "bağ-rı-na taş bas-mak"
    ),
    "camur-atmak": (
        "Başarısını kıskandıkları dürüst idareciye çamur atmak için iftira kampanyası başlattılar.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ça-mur at-mak"
    ),
    "cile-doldurmak": (
        "Dergâhta hizmet edip çile dolduran derviş, nefsini yenerek kâmil bir insan mertebesine ulaştı.",
        "Farsça / Türkçe Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "çi-le dol-dur-mak"
    ),
    "dag-basini-duman-almak": (
        "Ekonomik buhran derinleşip borçlar birikince ortalığı resmen dağ başını duman aldı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "dağ ba-şı-nı du-man"
    ),
    "dis-bilemek": (
        "Yıllar önce haksız yere kovulduğu fabrikaya karşı gizliden gizliye diş biliyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "diş bi-le-mek"
    ),
    "etekleri-zil-calmak-2": (
        "Torpil beklemeden kendi bileğinin hakkıyla sınavı kazandığını öğrenince sevinçten etekleri zil çaldı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "e-tek-le-ri zil çal-mak"
    ),
    "gozden-gecirmek": (
        "Kitabın son provasını matbaaya vermeden evvel imla hatalarını bir kez daha dikkatle gözden geçirdi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "göz-den ge-çir-mek"
    ),
    "gozunu-kirpmadan": (
        "Vatan müdafaası söz konusu olunca Türk askeri gözünü kırpmadan canını siper eder.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "gö-zü-nü kırp-ma-dan"
    ),
    "hakkindan-gelmek": (
        "Hiç kimsenin çözemediği bu teknik arızanın ancak ihtiyar mühendis hakkından gelebilir.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "hak-kın-dan gel-mek"
    ),
    "i-cine-kurt-dusmek": (
        "Gece yarısı telefonun acı acı çalmasıyla ihtiyar kadının içine bir kurt düştü.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "i-çi-ne kurt düş-mek"
    ),
    "kas-goz-isaret-etmek": (
        "Pot kırmakta olan arkadaşını susturmak için masanın altından bacağını dürtüp kaş göz işaret etti.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "kaş göz i-şa-ret et-mek"
    ),
    "kili-kirk-yarmak-2": (
        "Tarihi vesikaları incelerken kelimelerin imlası üzerinde kılı kırk yararak tahlil yapardı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "kı-lı kırk yar-mak"
    ),
    "lafi-agzina-tikayincaya-kadar": (
        "Müfteri tam yalanlarını sıralıyordu ki vesikaları ortaya koyup lafı ağzına tıktı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "la-fı ağ-zı-na tık-mak"
    ),
    "merakini-gidermek": (
        "Haritanın gizlediği definenin sırrını çözerek yıllardır süren derin merakını giderdi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "me-ra-kı-nı gi-der-mek"
    ),
    "nefes-aldirmamak": (
        "Rakip savunmaya pres uygulayan forvet, maç boyunca karşı takıma nefes aldırmadı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ne-fes al-dır-ma-mak"
    ),
    "pabucu-dama-atilmak": (
        "Yeni torun doğunca evin eski gözdesi olan ilk çocuğun pabucu adeta dama atıldı.",
        "Türkçe Kültürel Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "pa-bu-cu da-ma a-tıl-mak"
    ),
    "ruzgara-gore-yon-degistirmek": (
        "Kendi omurgası olmayan çıkarcı adamlar rüzgâra göre yön değiştirmeyi marifet sayarlar.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "rüz-gâ-ra gö-re yön"
    ),
    "saman-alevi-gibi-parlamak": (
        "Öfkesi saman alevi gibi parlar, beş dakika sonra hiçbir şey olmamış gibi şakalaşırdı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "sa-man a-le-vi gi-bi"
    ),
    "simsekleri-uzerine-cekmek": (
        "Mecliste yaptığı zamansız ve yersiz konuşmayla bütün şimşekleri üzerine çekti.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "şim-şek-le-ri ü-ze-ri-ne"
    ),
    "tabanlari-yaglamak": (
        "Bekçinin düdük sesini duyan hırsızlar çaldıkları çuvalları bırakıp tabanları yağladılar.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ta-ban-la-rı yağ-la-mak"
    ),
    "tuzlukla-kosmak": (
        "Her duyduğu asılsız rivayete tuzlukla koşanlar er ya da geç aldatılmaya mahkumdur.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "tuz-luk-la koş-mak"
    ),
    "ununu-eleyip-elegini-asmak": (
        "Yıllarca ticaretle uğraşıp evlatlarını yetiştiren dedem artık ununu eleyip eleğini asmıştı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "u-nu-nu e-le-yip"
    ),
    "uzerine-dusmek": (
        "Hocası, yetenekli gördüğü bu talebenin üzerine titizlikle düşerek onu bir deha olarak yetiştirdi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ü-ze-ri-ne düş-mek"
    ),
    "vakit-oldurmek": (
        "Kıymetli gençlik çağını kahve köşelerinde vakit öldürerek ziyan edenlere acıyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "va-kit öl-dür-mek"
    ),
    "yorgan-gitti-kavga-bitti": (
        "Ortadaki tartışmalı arsa satılıp parası paylaştırılınca yorgan gitti kavga bitti.",
        "Türkçe Kültürel Deyim", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "yor-gan git-ti kav-ga bit-ti"
    ),
    "zihni-bulandirmak": (
        "Ortaya atılan asılsız dedikodular mahkemenin zihnini bulandırmaktan başka bir işe yaramadı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "zih-ni bu-lan-dır-mak"
    ),
    "akil-para-ile-satilmaz": (
        "Milyonları olsa da doğru karar veremeyen o gence dedesi 'Akıl para ile satılmaz evlat' dedi.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "a-kıl pa-ra i-le"
    ),
    "birlikte-kuvvet-dogar": (
        "İmece usulüyle bütün köy seferber olunca bent bir günde onarıldı; ne demişler, birlikte kuvvet doğar.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "bir-lik-te kuv-vet"
    ),
    "carsambanin-gelisi-persembeden-bellidir": (
        "Daha ilk haftadan işleri savsaklamaya başlamıştı; çarşambanın gelişi perşembeden bellidir misali projenin batacağı açıktı.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "çar-şam-ba-nın ge-li-şi"
    ),
    "dost-kara-gunde-belli-olur": (
        "İflas ettiğinde yanında yalnızca vefalı kadim arkadaşları kaldı; meğer dost kara günde belli olurmuş.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "dost ka-ra gün-de"
    ),
    "erken-kalkan-yol-alir": (
        "Sabahın seherinde tezgâhını açan demirci ustası bereket bulurdu; zira erken kalkan yol alır.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "er-ken kal-kan yol"
    ),

    # 301 - 350
    "gulu-seven-dikenine-katlanir": (
        "Sanatta zirveye ulaşmak geceler boyu uykusuz kalmayı gerektirir; ne de olsa gülü seven dikenine katlanır.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "gü-lü se-ven di-ke-ni-ne"
    ),
    "hazira-dag-dayanmaz": (
        "Babadan kalan mirası çalışmadan hesapsızca harcayan mirasyediye büyükler 'Hazıra dağ dayanmaz' diye nasihat ederdi.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ha-zı-ra dağ da-yan-maz"
    ),
    "i-yilik-eden-iyilik-bulur": (
        "Yolda gördüğü garibe ekmeğini bölen köylü, yıllar sonra darda kaldığında onun ikramıyla karşılaştı; iyilik eden iyilik bulur.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "i-yi-lik e-den i-yi-lik"
    ),
    "korle-yatan-sasi-kalkar": (
        "Kötü alışkanlıkları olan arkadaşlarla düşüp kalkan o genç zamanla onlara benzedi; çünkü körle yatan şaşı kalkar.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "kör-le ya-tan şa-şı"
    ),
    "ne-ekersen-onu-bicersin": (
        "Talebesine sevgi ve bilgi aşılayan hoca, yıllar sonra onların başarılarıyla gururlandı; ne ekersen onu biçersin.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "ne e-ker-sen o-nu"
    ),
    "sakinandan-gozu-cop-batar": (
        "Yeni aldığı arabayı çizilmesin diye garajdan çıkarmayan adamın tavanına dolu yağdı; sakınandan gözü çöp batar.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "sa-kı-nan-dan gö-zü"
    ),
    "tas-yerinde-agirdir": (
        "Kendi memleketinde hürmet gören alim gurbete gidince kıymeti bilinmedi; zira taş yerinde ağırdır.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "taş ye-rin-de a-ğır-dır"
    ),
    "ac-koyun-kurt-gibi-saldirir": (
        "Yıllarca mahrumiyet çeken açgözlü kimseler fırsat bulunca aç koyun kurt gibi saldırır misali davranırlar.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "aç ko-yun kurt gi-bi"
    ),
    "dertsiz-bas-hamamda-bellidir": (
        "Gündelik telaşlardan arınmış huzurlu bir gönlü ancak sakinliğinden tanırsınız; dertsiz baş hamamda bellidir.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "dert-siz baş ha-mam-da"
    ),
    "goz-gordugunu-ister": (
        "Çarşıdaki rengârenk oyuncakları gören küçük çocuk vitrinin önünden ayrılamadı; ne demişler göz gördüğünü ister.",
        "Türk Atasözü (Kadim Sav)", "Divânü Lügati't-Türk & Karahanlı Dönemi", "Atasözü", "göz gör-dü-ğü-nü is-ter"
    ),
    "afitap": (
        "Doğan afitap ufukları kızıla boyarken, sevgilinin yüzündeki nur karanlık gecemi aydınlattı.",
        "Farsça (āftāb)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "â-fi-tap"
    ),
    "bicare": (
        "Kışın ayazında sığınacak bir saçak altı arayan bîçare yolcu, köy odasının sıcaklığıyla teselli buldu.",
        "Farsça (bī-çāre)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "bî-çâ-re"
    ),
    "cumle": (
        "Cümle cihan bir araya gelse, hakkın ve adaletin karşısında durmaya güç yetiremez.",
        "Arapça (cümle)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "cüm-le"
    ),
    "cin": (
        "Dedem söze başladığında her kelimesi çın, her nasihati bir inci gibi kıymetli ve hakikiydi.",
        "Eski Türkçe (çın)", "Göktürkçe İzleri ve Eski Türkçe", "Kadim Kelime", "çın"
    ),
    "dilfigar": (
        "Gurbet elde hasretle yanan dilfigâr âşık, sazının tellerine vurdukça yanık türküler söylerdi.",
        "Farsça (dil-figār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "dil-fi-gâr"
    ),
    "efsun": (
        "Tarihi şehrin kubbelere vuran akşam sisinde insanı büyüleyen tarif edilmez bir efsun vardı.",
        "Farsça (afsūn)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ef-sun"
    ),
    "fecr": (
        "Fecr vaktinin serin rüzgârı esmeye başladığında bülbüller seher şarkılarına durmuştu.",
        "Arapça (fecr)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "fecr"
    ),
    "gubari": (
        "Üstat hattat, bir pirinç tanesi üzerine gubarî hatla ayet-el kürsiyi nakşederek hünerini gösterdi.",
        "Arapça (ġubārī)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "gu-bâ-rî"
    ),
    "havas": (
        "Devlet meclisinde sadece havas değil, halkın her kesiminden bilgeler istişareye katılırdı.",
        "Arapça (ḫavāṣṣ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ha-vâs"
    ),
    "itri": (
        "Baharın gelişiyle açan güller ve lavantalar bahçeyi ıtrî ve mest edici bir kokuyla doldurdu.",
        "Arapça (ʿiṭrī)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ıt-rî"
    ),
    "jale": (
        "Sabah güneşinin ilk ışıkları, gül yaprakları üzerinde parıldayan jaleleri birer yakuta dönüştürüyordu.",
        "Farsça (žāle)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "jâ-le"
    ),
    "kande": (
        "Yunus Emre gibi 'Kande bulam seni yâ Rab?' diyerek ömrünü hakikat arayışına vakfetti.",
        "Eski Türkçe (kande/kanda)", "Göktürkçe İzleri ve Eski Türkçe", "Kadim Kelime", "kan-de"
    ),
    "lal-u-guher": (
        "Ariflerin sohbetinde dudaklardan dökülen her kelam, lal-ü güher misali kıymetli birer cevherdir.",
        "Farsça Terkip (laʿl ü gevher)", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "lâl-ü gü-her"
    ),
    "nihan": (
        "Gönlünün derinliklerinde nihan olan kederi, tebessüm eden gözlerinin ardına ustalıkla gizledi.",
        "Farsça (nihān)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ni-hân"
    ),
    "otag": (
        "Ulu hakan, zafer kurultayı için yaylanın en yüksek tepesinde ak keçeden görkemli bir otağ kurdurdu.",
        "Eski Türkçe (otaġ)", "Göktürkçe İzleri ve Eski Türkçe", "Kadim Kelime", "o-tağ"
    ),
    "purnur": (
        "Mihraptan yayılan kandil ışıklarıyla caminin kubbesi pürnur bir semayı andırıyordu.",
        "Farsça / Arapça (pur-nūr)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "pür-nur"
    ),
    "rucu": (
        "Hakikat apaçık ortaya çıkınca yanlış hükmünden rücu edip özür dilemek yüksek bir erdemdir.",
        "Arapça (rucüʿ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "rü-cû"
    ),
    "selsebil": (
        "Konağın avlusundaki mermer şadırvandan selsebil gibi akan suyun şırıltısı ruha sükûnet veriyordu.",
        "Arapça (selsebīl)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "sel-se-bîl"
    ),
    "suh": (
        "Bahar dalları arasında şûh edalarla şakıyan bülbül, seher vaktinin neşesi olmuştu.",
        "Farsça (şūḫ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "şûh"
    ),
    "tazim": (
        "Huzura kabul edilen yabancı elçiler hükümdarın karşısında hürmet ve tazim ile eğildiler.",
        "Arapça (taʿẓīm)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ta-zîm"
    ),
    "uryan": (
        "Derviş, dünyanın şatafatından sıyrılmış, uryan bir gönülle hak kapısına yönelmişti.",
        "Arapça (ʿuryān)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ur-yân"
    ),
    "uftade": (
        "Aşk ateşine düşen üftade bülbül, gülün dikeni karşısında feryat etmekten vazgeçmedi.",
        "Farsça (uftāde)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "üf-tâ-de"
    ),
    "vaveyla": (
        "Gece yarısı ansızın başlayan yangınla birlikte mahallede büyük bir vaveyla koptu.",
        "Arapça (vāveylā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "vâ-vey-lâ"
    ),
    "yegane": (
        "İnsanın fani ömründe arkasında bırakabileceği yegâne ebedi servet, güzel bir ahlak ve faydalı ilimdir.",
        "Farsça (yegāne)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ye-gâ-ne"
    ),
    "zahir": (
        "Görünüşte zahir olan kusurlara değil, kalpte gizlenen samimi niyetin güzelliğine bakmak gerekir.",
        "Arapça (ẓāhir)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "zâ-hir"
    ),
    "zulal": (
        "Dağların doruklarındaki karlar eriyince pınarlardan köye doğru zülâl gibi berrak sular çağladı.",
        "Arapça (zulāl)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "zü-lâl"
    ),
    "eshab": (
        "Medine sokaklarında toplanan eshab, hayırda yarışmak için canla başla gayret gösterirdi.",
        "Arapça (aṣḥāb)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "es-hab"
    ),
    "fusun": (
        "Boğaziçi mehtabının sulara vuran füsunu, şairin mısralarında ölümsüz bir tabloya dönüştü.",
        "Farsça (fusūn)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "fü-sun"
    ),
    "gul": (
        "Eski halk masallarında yolcuların karşısına çıkan devasa gûl, korku dolu serüvenlerin simgesiydi.",
        "Arapça (ġūl)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "gûl"
    ),
    "heveskar": (
        "Eski musiki makamlarını öğrenmeye pek heveskâr olan genç, tambur derslerini hiç aksatmazdı.",
        "Arapça / Farsça (heves-kār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "he-ves-kâr"
    ),
    "i-ltimas": (
        "Adalet dağıtan kadının huzurunda hiçbir zengine veya mevkidaşa iltimas geçilmezdi.",
        "Arapça (iltimās)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "il-ti-mas"
    ),
    "kevkeb": (
        "Çöl gecelerinde semada parıldayan her bir kevkeb, kervanlara yön gösteren bir kılavuzdu.",
        "Arapça (kevkeb)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "kev-keb"
    ),
    "letafet": (
        "Genç kızın tavırlarındaki nezaket ve letafet, konağa gelen her misafirin takdirini toplardı.",
        "Arapça (leṭāfet)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "le-tâ-fet"
    ),
    "nigarhane": (
        "Sarayın nakkaşları, padişahın zaferlerini minyatürlerle ebedileştirmek üzere nigarhanede toplandı.",
        "Farsça (nigārhāne)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ni-gâr-hâ-ne"
    ),
    "payidar": (
        "Türkiye Cumhuriyeti, milletimizin azmi ve fedakârlığıyla ilelebet payidar kalacaktır.",
        "Farsça (pāyidār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "pâ-yi-dar"
    ),
    "rehnuma": (
        "Karanlık ve fırtınalı denizde deniz feneri ne ise, cemiyet için bilge muallimler de öyle bir rehnümadır.",
        "Farsça (rahnumā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "reh-nü-mâ"
    ),
    "serap": (
        "Kızgın kumlar üzerinde susuzluktan takati tükenen kervan, uzakta gördüğü serapla avundu.",
        "Arapça (serāb)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "se-rap"
    ),
    "sebnem": (
        "Gül goncalarının üzerine düşen şebnem taneleri, sabah rüzgârında elmas gibi ışıldıyordu.",
        "Farsça (şeb-nem)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "şeb-nem"
    ),
    "tahayyul": (
        "Yazarın kurduğu tahayyül dünyası, okuyucuyu asırlar öncesinin İstanbul sokaklarında gezdiriyordu.",
        "Arapça (taḫayyul)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ta-hay-yül"
    ),
    "ukde": (
        "Gençliğinde yarım bıraktığı tahsilini tamamlayamamak içinde ömür boyu çözülmeyen bir ukde olarak kaldı.",
        "Arapça (ʿuḳde)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "uk-de"
    ),

    # 351 - 389
    "ahd-u-misak": (
        "İki devlet hükümdarı hudut boylarında barışın sürmesi için ahd ü misak imzaladılar.",
        "Arapça Terkip (ʿahd ü mīŝāḳ)", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "ahd-ü mi-sâk"
    ),
    "bihus": (
        "Beklenmedik acı haberi işitince dizlerinin bağı çözüldü ve oracıkta bîhuş halde yere yığıldı.",
        "Farsça (bī-hūş)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "bî-hûş"
    ),
    "abidevi": (
        "Sultanahmet Camii, altı minaresi ve görkemli kubbesiyle Türk-İslam mimarisinin abidevi bir örneğidir.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "â-bi-de-vî"
    ),
    "bedbin": (
        "Her hadisenin daima kötü tarafını gören bedbin insanlarla çalışmak ekibin neşesini kaçırıyordu.",
        "Farsça (bed-bīn)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "bed-bîn"
    ),
    "cihannuma": (
        "Konağın tepesindeki cihannüma köşküne çıkıp tüm şehri ve denizi kuşbakışı seyrettik.",
        "Farsça (cihān-numā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ci-hân-nü-mâ"
    ),
    "cerag": (
        "Mevlevi dergâhında seher vakti niyazla uyandırılan çerağ, karanlık odayı nurla doldurdu.",
        "Farsça (çerāġ)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "çe-rağ"
    ),
    "efrad": (
        "Vatan müdafaasında milletin bütün efradı kadın erkek demeden cepheye mühimmat taşıdı.",
        "Arapça (afrād)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ef-rad"
    ),
    "fusunkar": (
        "Tamburinin parmaklarından dökülen füsunkâr nağmeler salondaki dinleyicileri mest etti.",
        "Farsça (fusūn-kār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "fü-sun-kâr"
    ),
    "hakir": (
        "Hiçbir insanı mevkisine veya yoksulluğuna bakarak hakir görmemeli, herkese hürmetle muamele etmelidir.",
        "Arapça (ḥaḳīr)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ha-kîr"
    ),
    "itristan": (
        "Konağın arka bahçesi, rengarenk çiçekleri ve mis kokularıyla adeta bir ıtristanı andırıyordu.",
        "Arapça / Farsça Terkip", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ıt-ris-tan"
    ),
    "i-stisare": (
        "Mühim bir karara varmadan evvel tecrübeli dostlarla istişare etmek insanı pişmanlıktan korur.",
        "Arapça (istişāre)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "is-ti-şâ-re"
    ),
    "jurnalci": (
        "İstibdat döneminde masum insanları asılsız ihbarlarla lekeleyen jurnalci tipler toplumda lanetlenirdi.",
        "Fransızca Kökenli / Osmanlıca", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "jur-nal-ci"
    ),
    "kulliye": (
        "Cami, medrese, kütüphane ve darüşşifadan mürekkep külliye, şehrin kalbinde bir ilim ve şifa yuvasıydı.",
        "Arapça (külliyye)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "kül-li-ye"
    ),
    "lisan-i-munasip": (
        "Karşı tarafı incitmeden hakikati anlatmak için lisan-ı münasip ile söze başlamak icap eder.",
        "Arapça Terkip (lisān-ı münāsib)", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "li-sâ-nı mü-nâ-sip"
    ),
    "nefisperest": (
        "Yalnızca dünya zevklerinin peşinde koşan nefisperest kimseler manevi huzurun tadına varamazlar.",
        "Arapça / Farsça (nefs-perest)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ne-fis-pe-rest"
    ),
    "odalik": (
        "Eski saray teşrifatında hanedan dairesinde hizmet gören odalık kızlar terbiye ve adabıyla seçilirdi.",
        "Eski Türkçe (oda + lık)", "Göktürkçe İzleri ve Eski Türkçe", "Kadim Kelime", "o-da-lık"
    ),
    "pervasiz": (
        "Düşmanın üzerimize gelen topçu ateşine karşı pervasız bir cesaretle siperden fırladı.",
        "Farsça / Türkçe (pervā + sız)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "per-va-sız"
    ),
    "rumuz": (
        "Şair, gazelindeki ince mazmunların ardına sakladığı manevi hakikatleri rumuzlarla dile getirmiştir.",
        "Arapça (rumūz)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ru-muz"
    ),
    "sulelenmek": (
        "Kandilin fitili rüzgâr aldıkça şulelenip karanlık sofayı altın sarısı bir ışıkla doldurdu.",
        "Arapça / Türkçe", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "şu-le-len-mek"
    ),
    "tarihselci": (
        "Edebi metinleri yazıldıkları çağın şartları ve zihniyetiyle değerlendiren tarihselci bir tenkit uyguladı.",
        "Türkçe / Terim", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ta-rih-sel-ci"
    ),
    "ulema": (
        "Osmanlı ilmiye sınıfının başında yer alan ulema heyeti, kanunların şeriata ve adalete uygunluğunu denetlerdi.",
        "Arapça (ʿulemā)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "u-le-mâ"
    ),
    "uryan-bu-an": (
        "Bütün süs ve yalanlardan sıyrılıp hakikatle baş başa kaldığımız o uryan bu an, en samimi yüzleşmeydi.",
        "Arapça / Türkçe Terkip", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "ur-yân bu an"
    ),
    "vefaakar": (
        "En sıkıntılı günlerimizde bile yardıma koşan vefakâr dostlarımız hayatımızın en kıymetli hazinesidir.",
        "Arapça / Farsça (vefā-kār)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "ve-fâ-kâr"
    ),
    "yadigar-i-cihan": (
        "Mimar Sinan'ın asırlara meydan okuyan Selimiye Camii, Türk milletinin dünyaya bıraktığı yadigar-ı cihandır.",
        "Farsça Terkip (yādigār-ı cihān)", "Divan Edebiyatı ve Tasavvuf", "Deyim / Tabir", "yâ-di-gâ-rı ci-hân"
    ),
    "zaruret": (
        "Kış bastırınca yakacak temin etmek aile için kaçınılmaz bir zaruret haline gelmişti.",
        "Arapça (ḍarūret)", "Divan Edebiyatı ve Tasavvuf", "Kadim Kelime", "za-rû-ret"
    ),
    "ayak-diremek": (
        "Herkes uzlaşmaya vardığı halde haksız taleplerinde ayak diremekten vazgeçmedi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "a-yak di-re-mek"
    ),
    "can-atmak": (
        "Okullar tatile girince dedesinin köyüne gidip at binmek için can atıyordu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "can at-mak"
    ),
    "corbada-tuzu-olmak": (
        "Köy meydanındaki çeşmenin yapımında bizim de çorbada tuzumuz olsun diyerek harç taşıdılar.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "çor-ba-da tu-zu ol-mak"
    ),
    "disinden-tirnagindan-artirmak": (
        "Yıllarca dişinden tırnağından artırdığı üç beş kuruşla evladını üniversitede okuttu.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "di-şin-den tır-na-ğın-dan"
    ),
    "gozu-donmek": (
        "Öfkeden gözü dönen adam çevresindekilerin ikazlarına aldırmadan kapıyı vurup çıktı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "gö-zü dön-mek"
    ),
    "hafife-almak": (
        "Rakip takımın direncini hafife aldıkları için maçın son dakikalarında beklemedikleri bir mağlubiyet aldılar.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ha-fi-fe al-mak"
    ),
    "tuz-biber-ekmek": (
        "Zaten bozuk olan morallerin üzerine bir de kötü haber gelince üzüntüye tuz biber ekti.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "tuz bi-ber ek-mek"
    ),
    "ufku-acilmak": (
        "Farklı memleketleri gezip yeni kültürleri tanıdıkça gencin hayata bakışı değişti ve ufku açıldı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "uf-ku a-çıl-mak"
    ),
    "yolu-acilmak": (
        "Bakanlıktan gerekli izin belgesi çıkınca firmanın önündeki engeller kalktı ve yolu açıldı.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "yo-lu a-çıl-mak"
    ),
    "zihni-acilmak": (
        "Sabahın serin havasında yaptığı yürüyüşün ardından zihni açıldı ve zor denklemi kolayca çözdü.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "zih-ni a-çıl-mak"
    ),
    "acik-kapi-birakmak": (
        "Müzakereler tıkansa da diplomaside her zaman uzlaşabilmek için açık bir kapı bırakmak gerekir.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "a-çık ka-pı bı-rak-mak"
    ),
    "basi-goge-ermek": (
        "Yarışmada birincilik madalyasını boynuna taktığında mutluluktan başı göğe erdi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ba-şı gö-ğe er-mek"
    ),
    "cana-minnet-bilmek": (
        "Yorgun argın hana vardıklarında kendilerine sunulan sıcak tarhana çorbasını cana minnet bildiler.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "ca-na min-net bil-mek"
    ),
    "i-cine-sinmemek": (
        "Kumaşın rengi istediği gibi olmayınca terzinin diktiği elbise bir türlü içine sinmedi.",
        "Türkçe Halk Deyimi", "Anadolu Ağzı ve Halk Deyimleri", "Deyim / Tabir", "i-çi-ne sin-me-mek"
    )
}

# Load original words and apply enhancements
enhanced_words = []
missing_keys = []

with open('words_dump.json', 'r', encoding='utf-8') as f:
    orig_words = json.load(f)

for item in orig_words:
    item_id = item['id']
    if item_id in DATA_MAP:
        sentence, koken, donem, turu, telaffuz = DATA_MAP[item_id]
        new_item = {
            "id": item_id,
            "kelime": item["kelime"],
            "anlam": item["anlam"],
            "turu": turu,
            "koken": koken,
            "donem": donem,
            "telaffuz": telaffuz,
            "ornekCumle": sentence
        }
    else:
        missing_keys.append(item_id)
        # Fallback if any is missing
        new_item = item

    enhanced_words.append(new_item)

print(f"Enhanced {len(enhanced_words)} words.")
if missing_keys:
    print(f"Warning: {len(missing_keys)} missing keys: {missing_keys[:10]}")
else:
    print("ALL 389 words have customized tailored entries! Zero missing keys.")

# Write to src/data/words.ts
output_ts = '''export interface KadimKelime {
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

export const ILK_KELIMELER: KadimKelime[] = ''' + json.dumps(enhanced_words, ensure_ascii=False, indent=2) + ''';
'''

with open('src/data/words.ts', 'w', encoding='utf-8') as f:
    f.write(output_ts)

print("Updated src/data/words.ts successfully.")

# Count stats by era
eras = {}
for w in enhanced_words:
    d = w.get("donem", "Bilinmeyen")
    eras[d] = eras.get(d, 0) + 1
print("Era breakdown:")
for k, v in eras.items():
    print(f"  - {k}: {v} kelime/deyim")
