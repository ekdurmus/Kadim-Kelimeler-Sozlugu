# -*- coding: utf-8 -*-
import json
import re

new_words_raw = """
Afitap: Güneş gibi parlayan, çok güzel kadın.

Bîçare: Çaresiz, zavallı, kimsesiz.

Cümle: Hepsi, bütün, tamamı.

Çın: Doğru, hakiki, gerçek.

Dilfigâr: Yüreği yaralı, gönlü yaralı kimse.

Efsun: Büyü, sihir, tılsım.

Fecr: Tan vakti, sabah aydınlığı.

Gubarî: Çok küçük, ince yazı türü (hat sanatında).

Havas: Seçkinler sınıfı, bilginler ve devlet ileri gelenleri.

Itrî: Güzel kokuyla ilgili, mis kokulu.

İclal: Saygı gösterme, büyüklük, ululuk.

Jale: Çiy tanesi, kırağı.

Kande: Nerede, nereye (eski Türkçe soru zamiri).

Lal-ü güher: İnci ve mücevherler, değerli sözler.

Müstakim: Doğru yoldan ayrılmayan, dürüst.

Nihan: Gizli, saklı, gözle görülmeyen.

Otağ: Büyük ve süslü çadır, padişah çadırı.

Pürnur: Işık dolu, baştan başa aydınlık.

Rücu: Geri dönme, sözünden veya kararından vazgeçme.

Selsebil: Cennette olduğuna inanılan tatlı ve akarsu, kolayca akan.

Şûh: Neşeli, serbest hareket eden, cilveli.

Tazim: Saygı sunma, ululama.

Uryan: Çıplak, soyunuk.

Üftade: Düşkün, tutkun, aşık.

Vaveyla: Koprulan çığlık, feryat, kopan gürültü.

Yegâne: Bir tanecik, eşsiz, benzeri olmayan.

Zahir: Açık, ortada görünen, bellibaşlı.

Zülâl: Saf, berrak, tatlı su.

Eshab: Arkadaşlar, yarenler.

Füsun: Büyü, büyüleyici güzellik.

Gûl: Gül çiçeği, efsanevi yaratık (gul).

Heveskar: Hevesli, istekli kimse.

İltimas: Kayırma, tutma, ayrıcalık tanıma.

Kevkeb: Yıldız, gezegen.

Letafet: Güzellik, hoşluk, incelik.

Meftun: Tutulmuş, aşık olmuş, hayran.

Nigarhane: Resim galerisi, güzel yüzlülerin bulunduğu yer.

Payidar: Sonsuza dek yaşayacak olan, kalıcı.

Rehnüma: Yol gösteren, kılavuz, rehber.

Serap: Çölde görülen yanılsama, serap.

Şebnem: Çiy, yapraklar üzerindeki su damlası.

Tahayyül: Hayal etme, zihinde canlandırma.

Ukde: Düğüm, içte kalan çözülmemiş gam veya sorun.

Ülfet: Dostluk kurma, alışma, samimiyet.

Vuslat: Sevgiliye kavuşma anı.

Yadigar: Hatıra olarak bırakılan nesne.

Zînet: Süs, takı.

Ahd ü misak: Yemin ve sözleşme, ant.

Bihuş: Kendinden geçmiş, şaşkın, baygın.

Cihanpesent: Dünyanın beğendiği, herkesçe beğenilen.

Abidevi: Anıt niteliğinde, çok büyük ve kalıcı.

Bedbin: Kötümser, her şeyi karanlık gören.

Cihannüma: Dünyayı gösteren yer, yüksek seyir terası.

Çerağ: Işık, kandil, mum.

Dilhun: Yüreği kan ağlayan, pek üzgün.

Efrad: Fertler, bireyler, üyeler.

Füsunkar: Büyüleyici, sihirli.

Gubar: Toz, toprak zerreleri.

Hakir: Değersiz, hor görülen.

Itristan: Güzel kokulu bahçe.

İstişare: Danışma, fikir alışverişinde bulunma.

Jurnalci: İhbarcı, gizli bilgi taşıyan.

Külliye: Bir cami etrafında kurulmuş binalar topluluğu.

Lisan-ı münasip: Uygun ve kırıcı olmayan bir dil.

Müstesna: Benzerlerinden ayrı, seçkin.

Nefisperest: Nefsine düşkün, zevk düşkünü kimse.

Odalık: Eski saraylarda cariye.

Pervasız: Korkusuz, çekinmeden hareket eden.

Rumuz: Gizli simge, mahlas, işaret.

Serapa: Baştan başa, tamamen.

Şulelenmek: Alevlenmek, parlamak.

Tarihselci: Olayları kendi dönemi içinde değerlendiren.

Ulema: Alimler, din ve fen bilginleri.

Üryan bu an: Çıplak gerçeklik anı.

Vefaakar: Vefalı, sözünün eri.

Yadigar-ı cihan: Dünyaya bırakılan hatıra.

Zaruret: Zorunluluk, yoksulluk hali.

Zarafet: İncelik, naziklik.

Ayak diremek: Bir konuda ısrarcı olmak, geri adım atmamak.

Can atmak: Bir şeyi yapmayı çok istemek, sabırsızlanmak.

Çorbada tuzu olmak: Küçük de olsa bir işe katkı sağlamak.

Dişinden tırnağından artırmak: Büyük fedakarlıklar yaparak kıt kanaat birikim yapmak.

Gözü dönmek: Öfkeden veya hırstan ne yaptığını bilmez hale gelmek.

Hafife almak: Bir durumu veya kişiyi önemsiz saymak.

İpe un sermek: Bahaneler üreterek işi yokuşa sürmek.

Kılı kırk yarmak: Detaylarda aşırı titizlenmek.

Pireyi deve yapmak: Küçük bir olayı büyütüp abartmak.

Pot kırmak: Yanlışlıkla gaf yapmak.

Sinek avlamak: İşsiz kalıp müşteri bulamamak.

Tuz biber ekmek: Kötü durumu daha da kötüleştirmek.

Ufku açılmak: Vizyonu genişlemek, dünyayı daha iyi kavramak.

Yolu açılmak: Önündeki engellerin kalkması, işlerinin kolaylaşması.

Zihni açılmak: Anlama ve kavrama yeteneğinin artması.

Açık kapı bırakmak: İleride uzlaşabilmek veya geri dönebilmek için bir imkan tanımak.

Başı göğe ermek: Çok büyük bir sevinç yaşamak, gururlanmak.

Cana minnet bilmek: Sunulan zoraki bir durumu veya fırsatı memnuniyetle kabul etmek.

Çamur atmak: Haksız yere leke sürmeye çalışmak.

Göz boyamak: Kandırmak, gerçekleri gizlemek.

Hakkından gelmek: Zor bir işi başarmak ya da haddini bildirmek.

İçine sinmemek: Bir durumdan tam anlamıyla tatmin olmamak, şüphe duymak.
"""

def tr_normalize(s):
    s = s.strip().lower()
    mapping = {'ç': 'c', 'ğ': 'g', 'ı': 'i', 'i': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u', '-': ' ', '—': ' '}
    for k, v in mapping.items():
        s = s.replace(k, v)
    return re.sub(r'[^a-z0-9 ]+', '', s).strip()

def slugify(text):
    text = text.lower()
    tr_map = {'ç': 'c', 'ğ': 'g', 'ı': 'i', 'i': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u'}
    for k, v in tr_map.items():
        text = text.replace(k, v)
    text = re.sub(r'[^a-z0-9]+', '-', text).strip('-')
    return text

with open("words_parsed.json", "r", encoding="utf-8") as f:
    existing_words = json.load(f)

existing_normalized = set()
existing_ids = set()
for item in existing_words:
    existing_normalized.add(tr_normalize(item["kelime"]))
    existing_ids.add(item["id"])

added_count = 0
skipped_count = 0

lines = new_words_raw.strip().split("\n")
for line in lines:
    line = line.strip()
    if not line or ":" not in line:
        continue
    parts = line.split(":", 1)
    term = parts[0].strip()
    meaning = parts[1].strip()

    term_norm = tr_normalize(term)
    if term_norm in existing_normalized:
        print(f"ATLANDI (Zaten mevcut): {term}")
        skipped_count += 1
        continue

    # Determine type and origin
    turu = "Kadim Kelime"
    koken = "Osmanlıca / Türkçe"
    if "(Atasözü)" in term:
        turu = "Atasözü"
        koken = "Türk Atasözü"
        term = term.replace("(Atasözü)", "").strip()
    elif "(Deyim)" in term:
        turu = "Deyim"
        koken = "Türkçe Deyim"
        term = term.replace("(Deyim)", "").strip()
    else:
        if " " in term or term.endswith(" etmek") or term.endswith(" olmak") or term.endswith(" bilmek") or term.endswith(" artırmak") or term.endswith(" kalmak") or term.endswith(" almak") or term.endswith(" bırakmak"):
            turu = "Deyim / Tabir"
            koken = "Türkçe"
        elif "-" in term:
            turu = "Terkip"
            koken = "Farsça / Osmanlıca"
        elif term.startswith("Mü") or term.startswith("Mu") or term.startswith("Pür"):
            turu = "Sözcük"
            koken = "Arapça / Farsça"

    base_slug = slugify(term)
    slug = base_slug
    c = 2
    while slug in existing_ids:
        slug = f"{base_slug}-{c}"
        c += 1

    new_item = {
        "id": slug,
        "kelime": term,
        "anlam": meaning,
        "turu": turu,
        "koken": koken,
        "telaffuz": term.lower(),
        "ornekCumle": f"{term} ifadesi, kadim dilimizin zarif inceliklerini ve zenginliğini yansıtır."
    }

    existing_words.append(new_item)
    existing_ids.add(slug)
    existing_normalized.add(term_norm)
    added_count += 1
    print(f"EKLENDİ: {term}")

print(f"\nÖzet: {added_count} yeni kelime eklendi, {skipped_count} mükerrer kelime atlandı.")
print(f"Toplam güncel kelime sayısı: {len(existing_words)}")

# Save updated words_parsed.json
with open("words_parsed.json", "w", encoding="utf-8") as f:
    json.dump(existing_words, f, ensure_ascii=False, indent=2)

# Update src/data/words.ts
ts_content = """export interface KadimKelime {
  id: string;
  kelime: string;
  anlam: string;
  turu: string;
  koken: string;
  ornekCumle: string;
  telaffuz?: string;
  ekBilgi?: string;
}

export const ILK_KELIMELER: KadimKelime[] = """ + json.dumps(existing_words, ensure_ascii=False, indent=2) + ";\n"

with open("src/data/words.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

# Update HTML files
with open("kadim-kelimeler-sozlugu.html", "r", encoding="utf-8") as f:
    html = f.read()

start_marker = "const KELIMELER = ["
end_marker = "];\n\n    // GÜNÜN KELİMESİ"

start_idx = html.find(start_marker)
end_idx = html.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    new_js_array = "const KELIMELER = " + json.dumps(existing_words, ensure_ascii=False, indent=6) + ";\n\n    // GÜNÜN KELİMESİ"
    html = html[:start_idx] + new_js_array + html[end_idx + len("];\n\n    // GÜNÜN KELİMESİ"):]
    
    with open("kadim-kelimeler-sozlugu.html", "w", encoding="utf-8") as f:
        f.write(html)
    with open("public/kadim-kelimeler-sozlugu.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("HTML dosyaları başarıyla güncellendi.")
else:
    print("HTML dosyasında ayrıştırma noktası bulunamadı!")
