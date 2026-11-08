# -*- coding: utf-8 -*-
import json

with open("words_parsed.json", "r", encoding="utf-8") as f:
    all_words = json.load(f)

def clean_5_letter(s):
    # normalize accented characters for 5-letter comparison
    tr_map = {'î': 'i', 'â': 'a', 'û': 'u', 'Î': 'İ', 'Â': 'A', 'Û': 'U'}
    for k, v in tr_map.items():
        s = s.replace(k, v)
    return s.upper()

wordle_pool = []
seen_words = set()

# Curate from existing words
for w in all_words:
    k = w["kelime"].strip()
    if len(k) == 5 and " " not in k and "-" not in k:
        norm = clean_5_letter(k)
        if len(norm) == 5 and norm not in seen_words:
            seen_words.add(norm)
            wordle_pool.append({
                "kelime": norm,
                "orijinal": k,
                "anlam": w["anlam"],
                "donem": w.get("donem", "Divan Edebiyatı ve Tasavvuf"),
                "ornekCumle": w.get("ornekCumle", f"{k} sözcüğü kadim lisanımızın zarafetini taşır.")
            })

# Add iconic 5-letter antique words to enrich the pool
extra_5_words = [
    {"kelime": "LÜGAT", "orijinal": "Lügat", "anlam": "Sözlük, kelime hazinesi, lisan.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Eski lügatleri karıştırdıkça dilimizin asaletine bir kez daha hayran kalırdı."},
    {"kelime": "SABIR", "orijinal": "Sabır", "anlam": "Zorluklar karşısında metanet ve sükunet gösterme erdemi.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Sabır acıdır lakin meyvesi tatlıdır."},
    {"kelime": "FİKİR", "orijinal": "Fikir", "anlam": "Düşünce, mülahaza, zihinde doğan tasavvur.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Köklü bir fikir, çağları aşarak istikbale rehber olur."},
    {"kelime": "KEREM", "orijinal": "Kerem", "anlam": "Cömertlik, asalet, lütuf ve ihsan.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Kerem sahibi insanlar cemiyete daima huzur ve emniyet aşılar."},
    {"kelime": "KADER", "orijinal": "Kader", "anlam": "Yazgı, takdir, ezelî ölçü ve nizam.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Kaderin cilvesi onları yıllar sonra aynı kadim şehirde buluşturdu."},
    {"kelime": "CİHAN", "orijinal": "Cihan", "anlam": "Dünya, alem, kainat.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Bütün cihan bir araya gelse hakikatin ışığını söndüremez."},
    {"kelime": "SEVDA", "orijinal": "Sevda", "anlam": "Aşk, tutku, derin gönül bağlılığı.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Yüreğinde taşıdığı memleket sevdası ona her türlü meşakkati unutturuyordu."},
    {"kelime": "ERDEM", "orijinal": "Erdem", "anlam": "Fazilet, ahlaki üstünlük, doğruluk.", "donem": "Göktürkçe İzleri ve Eski Türkçe", "ornekCumle": "Kadim bilgeler insanı yücelten en yüce değerin erdem olduğunu söyler."},
    {"kelime": "KUTLU", "orijinal": "Kutlu", "anlam": "Uğurlu, bereketli, mübarek, kutsal.", "donem": "Göktürkçe İzleri ve Eski Türkçe", "ornekCumle": "Bu kutlu topraklarda bin yıldır kardeşlik ve barış hüküm sürmektedir."},
    {"kelime": "HAMUŞ", "orijinal": "Hâmûş", "anlam": "Suskun, sessiz, susmuş (Mevlevilikte dervişler için de kullanılır).", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Gönül gözü açılan arifler, lüzumsuz lakırdı yerine hâmûş kalmayı tercih ederler."},
    {"kelime": "BASAR", "orijinal": "Basar", "anlam": "Görme duyusu, basiret ve içsel kavrayış.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Sadece gözle değil basar ve basiretle bakmak hakikati aşikar eder."},
    {"kelime": "KAMER", "orijinal": "Kamer", "anlam": "Ay, gökyüzündeki mehtap.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Gecenin zifiri karanlığında kamer bir kandil gibi parıldıyordu."},
    {"kelime": "GÜZİN", "orijinal": "Güzin", "anlam": "Seçilmiş, seçkin, mümtaz.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Dönemin en güzin ediplerinin toplandığı bu edebi meclis adeta bir akademiydi."},
    {"kelime": "NESİL", "orijinal": "Nesil", "anlam": "Kuşak, zürriyet, çağdaş insan topluluğu.", "donem": "Divan Edebiyatı ve Tasavvuf", "ornekCumle": "Kadim kelimeleri yeni nesillere aktarmak lisanımızın bekası için elzemdir."}
]

for item in extra_5_words:
    if item["kelime"] not in seen_words:
        seen_words.add(item["kelime"])
        wordle_pool.append(item)

print(f"Toplam Wordle kelime havuzu: {len(wordle_pool)}")

ts_output = """export interface WordleKelime {
  kelime: string;
  orijinal: string;
  anlam: string;
  donem: string;
  ornekCumle: string;
}

export const KADIM_WORDLE_HAVUZU: WordleKelime[] = """ + json.dumps(wordle_pool, ensure_ascii=False, indent=2) + ";\n"

with open("src/data/wordleWords.ts", "w", encoding="utf-8") as f:
    f.write(ts_output)

print("src/data/wordleWords.ts oluşturuldu.")
