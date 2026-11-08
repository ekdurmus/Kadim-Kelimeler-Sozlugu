# -*- coding: utf-8 -*-
import json

with open("words_parsed.json", "r", encoding="utf-8") as f:
    words = json.load(f)

# 1. Generate src/data/words.ts
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

export const ILK_KELIMELER: KadimKelime[] = """ + json.dumps(words, ensure_ascii=False, indent=2) + ";\n"

with open("src/data/words.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("src/data/words.ts updated.")

# 2. Update kadim-kelimeler-sozlugu.html and public/kadim-kelimeler-sozlugu.html
with open("kadim-kelimeler-sozlugu.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace const KELIMELER = [ ... ];
# Find start of const KELIMELER = [
start_marker = "const KELIMELER = ["
end_marker = "];\n\n    // GÜNÜN KELİMESİ"

start_idx = html.find(start_marker)
end_idx = html.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    new_js_array = "const KELIMELER = " + json.dumps(words, ensure_ascii=False, indent=6) + ";\n\n    // GÜNÜN KELİMESİ"
    html = html[:start_idx] + new_js_array + html[end_idx + len("];\n\n    // GÜNÜN KELİMESİ"):]
    
    with open("kadim-kelimeler-sozlugu.html", "w", encoding="utf-8") as f:
        f.write(html)
    with open("public/kadim-kelimeler-sozlugu.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("HTML files updated successfully.")
else:
    print("Markers not found in HTML:", start_idx, end_idx)
