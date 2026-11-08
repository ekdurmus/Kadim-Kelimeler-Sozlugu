# -*- coding: utf-8 -*-
import json
import re

with open("words_parsed.json", "r", encoding="utf-8") as f:
    words = json.load(f)

# Assign appropriate Dönem to all words
for w in words:
    kelime = w["kelime"]
    turu = w.get("turu", "")
    koken = w.get("koken", "")
    
    # Check if period already set
    if "donem" in w and w["donem"]:
        continue

    # 1. Atasözleri -> Karahanlı / Divânü Lügati't-Türk veya Halk Hikmeti
    if "Atasözü" in turu:
        # Eski Türkçe köklü olanlar
        if any(x in kelime for x in ["Aba", "Ak akçe", "Ağaç", "Damlaya", "Görünen", "Sakla", "Sütten", "Kurt", "Taş yerinde"]):
            w["donem"] = "Divânü Lügati't-Türk & Karahanlı Dönemi"
        else:
            w["donem"] = "Anadolu Ağzı ve Halk Deyimleri"
    # 2. Deyimler -> Anadolu Ağzı ve Halk Deyimleri
    elif "Deyim" in turu or "Tabir" in turu:
        w["donem"] = "Anadolu Ağzı ve Halk Deyimleri"
    # 3. Eski Türkçe / Göktürkçe kökenli kadim kelimeler
    elif kelime in ["Çın", "Otağ", "Çerağ", "Kande", "Uryan", "Yegâne", "Yadigar", "Yadigar-ı cihan", "Gubarî", "Ahenk", "Nev-javan"]:
        w["donem"] = "Göktürkçe İzleri ve Eski Türkçe"
    # 4. Divan Edebiyatı / Tasavvuf
    else:
        w["donem"] = "Divan Edebiyatı ve Tasavvuf"

print("Dönemler atandı.")

# Ensure unique IDs
ids = set()
for w in words:
    if w["id"] in ids:
        count = 2
        new_id = f"{w['id']}-{count}"
        while new_id in ids:
            count += 1
            new_id = f"{w['id']}-{count}"
        w["id"] = new_id
    ids.add(w["id"])

# Save updated words_parsed.json
with open("words_parsed.json", "w", encoding="utf-8") as f:
    json.dump(words, f, ensure_ascii=False, indent=2)

# Write to src/data/words.ts
ts_content = """export interface KadimKelime {
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
  "Tüm Dönemler",
  "Göktürkçe İzleri ve Eski Türkçe",
  "Divânü Lügati't-Türk & Karahanlı Dönemi",
  "Divan Edebiyatı ve Tasavvuf",
  "Anadolu Ağzı ve Halk Deyimleri"
] as const;

export const ILK_KELIMELER: KadimKelime[] = """ + json.dumps(words, ensure_ascii=False, indent=2) + ";\n"

with open("src/data/words.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("src/data/words.ts başarıyla güncellendi.")
