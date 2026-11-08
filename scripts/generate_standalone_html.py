# -*- coding: utf-8 -*-
import json

with open("words_parsed.json", "r", encoding="utf-8") as f:
    words = json.load(f)

# Load wordle words from src/data/wordleWords.ts or python
with open("src/data/wordleWords.ts", "r", encoding="utf-8") as f:
    ts_code = f.read()
    # extract JSON array after KADIM_WORDLE_HAVUZU: WordleKelime[] =
    start_str = "export const KADIM_WORDLE_HAVUZU: WordleKelime[] = "
    idx = ts_code.find(start_str)
    if idx != -1:
        json_str = ts_code[idx + len(start_str):].strip()
        if json_str.endswith(";"):
            json_str = json_str[:-1]
        wordle_words = json.loads(json_str)
    else:
        wordle_words = []

print(f"Loaded {len(words)} words, {len(wordle_words)} wordle words.")

html_template = """<!doctype html>
<html lang="tr" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kadim Kelimeler Sözlüğü · Dilimizin Zenginlikleri</title>
  <meta name="description" content="Tevfik Serdar Anadolu Lisesi Kadim Kelimeler Sözlüğü, Dönem/Köken Filtresi (Zaman Tüneli), Kadim Kelime Avı ve Mini Test uygulaması." />
  
  <!-- Fontlar -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
          },
          colors: {
            krem: {
              50: '#FAF8F3',
              100: '#F5F1E8',
              200: '#EAE4D7',
              300: '#D5CEBF',
            },
            zumrut: {
              700: '#2D6A4F',
              800: '#1E4E38',
              900: '#162D23',
            }
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #FAF8F3;
      color: #1F2922;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    .dark body {
      background-color: #131B16;
      color: #E2EBE5;
    }
    /* Wordle Tuş & Kutu Geçişleri */
    .wordle-tile {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.5rem;
      text-transform: uppercase;
      border-radius: 0.5rem;
      transition: all 0.25s ease-in-out;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col">

  <!-- ÜST MENÜ (HEADER) -->
  <header class="sticky top-0 z-40 w-full border-b border-[#E3DDCF] bg-[#FAF8F3]/90 backdrop-blur-md transition-colors dark:border-[#28382E] dark:bg-[#141C17]/90">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      
      <!-- Sol: İsim ve Okul İmzası -->
      <button onclick="sekmeyiDegistir('sozluk')" class="group flex flex-col items-start text-left focus:outline-none">
        <span class="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E3B2E] transition-colors group-hover:text-[#2D6A4F] dark:text-[#E2EBE5] dark:group-hover:text-[#74C69D]">
          Kadim Kelimeler Sözlüğü
        </span>
        <span class="text-[11px] sm:text-xs font-medium text-[#52796F] dark:text-[#8AA39B]">
          Tevfik Serdar Anadolu Lisesi · Dilimizin Zenginlikleri
        </span>
      </button>

      <!-- Orta: Sekmeler -->
      <nav class="hidden md:flex items-center gap-1 rounded-full border border-[#E3DDCF] bg-[#F4EFE5] p-1 dark:border-[#28382E] dark:bg-[#1B261F]">
        <button id="nav-btn-sozluk" onclick="sekmeyiDegistir('sozluk')" class="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712] transition-all">
          Sözlük
        </button>
        <button id="nav-btn-wordle" onclick="sekmeyiDegistir('wordle')" class="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-[#3E5246] hover:text-[#1E3B2E] dark:text-[#A7B9AF] dark:hover:text-[#E2EBE5] transition-all">
          Kelime Avı (5 Harf)
        </button>
        <button id="nav-btn-test" onclick="sekmeyiDegistir('test')" class="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-[#3E5246] hover:text-[#1E3B2E] dark:text-[#A7B9AF] dark:hover:text-[#E2EBE5] transition-all">
          Kelime Testi
        </button>
      </nav>

      <!-- Sağ: Eylemler -->
      <div class="flex items-center gap-2">
        <button onclick="beniSasirt()" class="group flex items-center gap-1.5 rounded-full border border-[#B7D5C4] bg-[#E8F2EC] px-3.5 py-1.5 text-xs font-semibold text-[#1E4E38] transition-all hover:bg-[#D7E9DE] dark:border-[#2E533F] dark:bg-[#1A3125] dark:text-[#95D5B2] dark:hover:bg-[#224131]">
          <svg class="h-3.5 w-3.5 text-[#2D6A4F] dark:text-[#74C69D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span class="whitespace-nowrap">Beni Şaşırt</span>
        </button>

        <button id="dark-toggle" onclick="karanlikModDegistir()" class="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3DDCF] bg-[#FAF8F3] text-[#3E5246] transition-all hover:bg-[#F4EFE5] dark:border-[#28382E] dark:bg-[#1B261F] dark:text-[#E2EBE5]" aria-label="Aydınlık / Karanlık Mod">
          <svg id="theme-icon" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobil Sekmeler -->
    <div class="flex md:hidden border-t border-[#EAE4D7] bg-[#F6F3EB] px-3 py-2 dark:border-[#27332B] dark:bg-[#18211B] justify-around text-xs">
      <button onclick="sekmeyiDegistir('sozluk')" id="mob-nav-sozluk" class="font-semibold text-[#2D6A4F] dark:text-[#74C69D]">
        Sözlük
      </button>
      <button onclick="sekmeyiDegistir('wordle')" id="mob-nav-wordle" class="font-medium text-[#4A5E53] dark:text-[#A7B9AF]">
        Kelime Avı
      </button>
      <button onclick="sekmeyiDegistir('test')" id="mob-nav-test" class="font-medium text-[#4A5E53] dark:text-[#A7B9AF]">
        Test
      </button>
    </div>
  </header>

  <!-- ANA İÇERİK -->
  <main class="flex-1 mx-auto max-w-6xl w-full px-4 sm:px-6 py-6 sm:py-10">

    <!-- SEKME 1: SÖZLÜK GÖRÜNÜMÜ -->
    <div id="section-sozluk" class="space-y-8">
      
      <!-- ARAMA ÇUBUĞU BÖLÜMÜ -->
      <section class="text-center max-w-2xl mx-auto space-y-4">
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]">
          Dilimizin Kadim Zenginlikleri
        </h1>
        <p class="text-sm text-[#4E6357] dark:text-[#A5B7AC]">
          Türkçemizin derin edebi hafızasını, köklü kelimelerini, deyim ve atasözlerini dönemleriyle keşfedin.
        </p>

        <!-- Arama Kutusu -->
        <div class="relative mt-2">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#6A8174]">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            id="arama-input"
            oninput="aramaYap(this.value)"
            placeholder="Kelime, anlam veya edebi örneklerde arayın... (Örn: mütemadiyen, zarafet, nuh)"
            class="w-full rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] py-3.5 pl-11 pr-10 text-sm placeholder-[#7E9387] focus:border-[#2D6A4F] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all dark:border-[#2C3B31] dark:bg-[#16221A] dark:text-[#E8F1EC]"
          />
          <button
            id="arama-temizle"
            onclick="aramaTemizle()"
            class="hidden absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#7E9387] hover:text-[#162D23] dark:hover:text-[#E8F1EC]"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Kategori Filtre Butonları -->
        <div class="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          <button id="filtre-btn-tumu" onclick="kategoriFiltrele('tumu')" class="rounded-full px-3.5 py-1 text-xs font-semibold bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712] transition-all">
            Tüm Kayıtlar (<span id="sayac-tumu">389</span>)
          </button>
          <button id="filtre-btn-kelimeler" onclick="kategoriFiltrele('kelimeler')" class="rounded-full px-3.5 py-1 text-xs font-medium border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all">
            Kadim Kelimeler
          </button>
          <button id="filtre-btn-deyimler" onclick="kategoriFiltrele('deyimler')" class="rounded-full px-3.5 py-1 text-xs font-medium border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all">
            Deyimler & Terkipler
          </button>
          <button id="filtre-btn-atasozleri" onclick="kategoriFiltrele('atasozleri')" class="rounded-full px-3.5 py-1 text-xs font-medium border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all">
            Atasözleri
          </button>
          <button id="filtre-btn-favoriler" onclick="kategoriFiltrele('favoriler')" class="rounded-full px-3.5 py-1 text-xs font-medium border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all">
            Favorilerim (<span id="sayac-favoriler">0</span>)
          </button>
        </div>

        <!-- 1. DÖNEM / KÖKEN FİLTRESİ (ZAMAN TÜNELİ MANTIĞI) -->
        <div class="pt-3 border-t border-[#EAE4D7] dark:border-[#27362E] flex flex-col items-center gap-2">
          <div class="flex items-center gap-1.5 text-[11px] font-semibold text-[#52796F] dark:text-[#8AA39B] uppercase tracking-wider">
            <svg class="h-3.5 w-3.5 text-[#2D6A4F] dark:text-[#74C69D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Zaman Tüneli · Dönem ve Köken Filtresi</span>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-1.5" id="donem-filtre-alani">
            <button onclick="donemFiltrele('Tüm Dönemler')" data-donem="Tüm Dönemler" class="donem-btn rounded-full px-3 py-1 text-xs font-medium bg-[#1E3B2E] text-[#FAF8F3] dark:bg-[#74C69D] dark:text-[#0F1712] shadow-sm transition-all">
              Tüm Dönemler
            </button>
            <button onclick="donemFiltrele('Göktürkçe İzleri ve Eski Türkçe')" data-donem="Göktürkçe İzleri ve Eski Türkçe" class="donem-btn rounded-full px-3 py-1 text-xs font-medium border border-[#DCD5C6] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all">
              Göktürkçe İzleri ve Eski Türkçe
            </button>
            <button onclick="donemFiltrele('Divânü Lügati\'t-Türk & Karahanlı Dönemi')" data-donem="Divânü Lügati't-Türk & Karahanlı Dönemi" class="donem-btn rounded-full px-3 py-1 text-xs font-medium border border-[#DCD5C6] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all">
              Divânü Lügati't-Türk & Karahanlı Dönemi
            </button>
            <button onclick="donemFiltrele('Divan Edebiyatı ve Tasavvuf')" data-donem="Divan Edebiyatı ve Tasavvuf" class="donem-btn rounded-full px-3 py-1 text-xs font-medium border border-[#DCD5C6] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all">
              Divan Edebiyatı ve Tasavvuf
            </button>
            <button onclick="donemFiltrele('Anadolu Ağzı ve Halk Deyimleri')" data-donem="Anadolu Ağzı ve Halk Deyimleri" class="donem-btn rounded-full px-3 py-1 text-xs font-medium border border-[#DCD5C6] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all">
              Anadolu Ağzı ve Halk Deyimleri
            </button>
          </div>
        </div>
      </section>

      <!-- GÜNÜN KELİMESİ KARTI -->
      <section id="gunun-kelimesi-alani" class="relative overflow-hidden rounded-2xl border border-[#D5CEBF] bg-gradient-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#EFEAE0] p-6 sm:p-8 shadow-sm dark:border-[#2C3B31] dark:from-[#17221B] dark:via-[#1A261F] dark:to-[#141C17]">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#E3DDCF] pb-3 dark:border-[#28382F]">
          <div class="flex items-center gap-2">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] dark:bg-[#74C69D]/15 dark:text-[#74C69D]">
              <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
            <span class="text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase dark:text-[#88D4AB]">
              Günün Kadim Kelimesi
            </span>
          </div>
          <div id="gk-meta" class="text-xs font-medium text-[#5C6E64] dark:text-[#95A89E]"></div>
        </div>

        <div class="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div class="flex items-baseline gap-3">
            <h2 id="gk-baslik" class="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]"></h2>
            <span id="gk-telaffuz" class="font-serif text-sm italic text-[#52796F] dark:text-[#8AA39B]"></span>
          </div>

          <button id="gk-ses-btn" onclick="gununKelimesiniSeslendir()" class="self-start sm:self-auto flex items-center gap-1.5 rounded-full border border-[#CBD5C0] bg-[#FAF8F3] px-3.5 py-1.5 text-xs font-medium text-[#2D6A4F] hover:bg-[#EBF2ED] transition-colors dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#95D5B2]">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <span>Seslendir</span>
          </button>
        </div>

        <div class="mt-4 rounded-xl border border-[#E3DDCF] bg-[#FAF8F3]/90 p-4 text-base leading-relaxed text-[#24352D] font-medium dark:border-[#27382D] dark:bg-[#152019]/80 dark:text-[#D5E2DA]">
          <p id="gk-anlam"></p>
        </div>

        <div class="mt-4 border-t border-[#E3DDCF] pt-3 dark:border-[#28382F]">
          <span class="block text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B] mb-1">
            Edebi Cümle Örneği
          </span>
          <blockquote id="gk-ornek" class="font-serif text-base italic leading-relaxed text-[#33463C] dark:text-[#C5D5CC]"></blockquote>
        </div>
      </section>

      <!-- KELİME KARTLARI LİSTESİ -->
      <section>
        <div class="flex items-center justify-between mb-4 border-b border-[#E3DDCF] pb-3 dark:border-[#28382E]">
          <div class="text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B]">
            Kadim Sözlük Dizini
          </div>
          <div id="liste-sayac" class="text-xs text-[#5C6E64] dark:text-[#8E9F96]"></div>
        </div>

        <!-- Kart Grid -->
        <div id="kelimeler-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"></div>

        <!-- Yükle / Daha Fazla Göster Butonu -->
        <div id="daha-fazla-alani" class="mt-8 text-center hidden">
          <button onclick="dahaFazlaGoster()" class="rounded-full bg-[#2D6A4F] px-6 py-2.5 text-xs font-semibold text-[#FAF8F3] shadow-sm hover:bg-[#24543E] transition-all dark:bg-[#3E8E6B] dark:text-[#0F1712]">
            Daha Fazla Kelime Göster (+24)
          </button>
        </div>

        <!-- Bulunamadı Durumu -->
        <div id="bos-durum" class="hidden text-center py-16 rounded-2xl border border-dashed border-[#D5CEBF] p-8 dark:border-[#2E3C33]">
          <p class="font-serif text-xl text-[#3A4E43] dark:text-[#B6C8BF]">
            Aradığınız kriterlere uygun kadim kelime bulunamadı.
          </p>
          <p class="mt-1 text-xs text-[#5C6E64] dark:text-[#8E9F96]">
            Arama metnini değiştirebilir veya dönem filtresini sıfırlayabilirsiniz.
          </p>
          <button onclick="filtreleriSifirla()" class="mt-4 rounded-full bg-[#2D6A4F] px-4 py-2 text-xs font-semibold text-[#FAF8F3] hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712]">
            Filtreleri Sıfırla
          </button>
        </div>
      </section>
    </div>

    <!-- SEKME 2: 2. KADİM KELİME AVI (WORDLE TARZI 5 HARFLİ OYUN) -->
    <div id="section-wordle" class="hidden space-y-6 max-w-2xl mx-auto py-2">
      <!-- Başlık ve Kurallar -->
      <div class="text-center space-y-2">
        <div class="inline-flex items-center gap-1.5 rounded-full bg-[#2D6A4F]/10 px-3 py-1 text-xs font-semibold text-[#2D6A4F] dark:bg-[#74C69D]/15 dark:text-[#74C69D]">
          <span>Kadim Kelime Avı · 5 Harf</span>
        </div>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]">
          6 Denemede Kadim Kelimeyi Bul
        </h2>
        <p class="text-xs sm:text-sm text-[#4E6357] dark:text-[#A5B7AC]">
          Her tahminden sonra kutucukların rengi tahmininizin doğruluğuna göre değişir.
        </p>
      </div>

      <!-- Renk İpuçları -->
      <div class="flex items-center justify-center gap-4 text-xs font-medium text-[#4E6357] dark:text-[#A5B7AC] py-1">
        <div class="flex items-center gap-1.5">
          <span class="w-3.5 h-3.5 rounded bg-[#2D6A4F]"></span>
          <span>Doğru yer</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3.5 h-3.5 rounded bg-[#D97706]"></span>
          <span>Yanlış yer</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3.5 h-3.5 rounded bg-[#4B5563]"></span>
          <span>Kelime yok</span>
        </div>
      </div>

      <!-- Oyun Kontrolleri: İpucu & Yeni Oyun -->
      <div class="flex items-center justify-between px-2">
        <button id="wordle-ipucu-btn" onclick="wordleIpucuVer()" class="flex items-center gap-1 text-xs font-semibold text-[#2D6A4F] hover:underline dark:text-[#74C69D]">
          💡 İpucu Al (Anlam/Dönem)
        </button>
        <span id="wordle-deneme-bilgi" class="text-xs text-[#5C6E64] dark:text-[#8E9F96]">Deneme 1 / 6</span>
        <button onclick="wordleBaslat()" class="text-xs font-medium rounded-full border border-[#D5CEBF] px-3 py-1 text-[#2F4237] hover:bg-[#EFEAE0] dark:border-[#384B3F] dark:text-[#C5D5CC]">
          Yeniden Başlat
        </button>
      </div>

      <!-- İpucu Kutusu (Açıldığında) -->
      <div id="wordle-ipucu-kutusu" class="hidden rounded-xl border border-[#D5CEBF] bg-[#F5F1E8] p-3 text-xs leading-relaxed text-[#24352D] dark:border-[#2C3B31] dark:bg-[#16221A] dark:text-[#D5E2DA]">
        <strong id="wordle-ipucu-donem" class="text-[#2D6A4F] dark:text-[#74C69D]"></strong>
        <p id="wordle-ipucu-metin" class="mt-1 italic"></p>
      </div>

      <!-- 6x5 Wordle Izgarası -->
      <div class="flex justify-center my-4">
        <div id="wordle-grid" class="grid grid-rows-6 gap-2 w-full max-w-[320px]">
          <!-- 6 satır JS tarafından doldurulacak -->
        </div>
      </div>

      <!-- Sanal Türkçe Klavye -->
      <div id="wordle-klavye" class="space-y-1.5 max-w-lg mx-auto select-none pt-2">
        <!-- Satır 1: E R T Y U I O P Ğ Ü -->
        <div class="flex justify-center gap-1 sm:gap-1.5" id="klavye-satir-1"></div>
        <!-- Satır 2: A S D F G H J K L Ş İ -->
        <div class="flex justify-center gap-1 sm:gap-1.5" id="klavye-satir-2"></div>
        <!-- Satır 3: GİRİŞ Z C V B N M Ö Ç ⌫ -->
        <div class="flex justify-center gap-1 sm:gap-1.5" id="klavye-satir-3"></div>
      </div>

      <!-- Oyun Sonu Kartı -->
      <div id="wordle-sonuc-kart" class="hidden rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 shadow-md dark:border-[#2C3B31] dark:bg-[#16221A] text-center space-y-4">
        <div id="wordle-sonuc-ikon" class="text-3xl">🎉</div>
        <h3 id="wordle-sonuc-baslik" class="font-serif text-2xl font-bold text-[#162D23] dark:text-[#E8F1EC]">Tebrikler!</h3>
        <p id="wordle-sonuc-mesaj" class="text-sm text-[#4E6357] dark:text-[#A5B7AC]"></p>
        
        <div class="rounded-xl border border-[#E3DDCF] bg-[#F5F1E8] p-4 text-left dark:border-[#28382F] dark:bg-[#1C2820]">
          <div class="flex items-baseline justify-between">
            <h4 id="wordle-kelime-reveal" class="font-serif text-2xl font-bold text-[#2D6A4F] dark:text-[#74C69D]"></h4>
            <span id="wordle-donem-reveal" class="text-xs text-[#52796F] dark:text-[#8AA39B]"></span>
          </div>
          <p id="wordle-anlam-reveal" class="mt-2 text-sm text-[#24352D] font-medium dark:text-[#D5E2DA]"></p>
          <p id="wordle-ornek-reveal" class="mt-2 text-xs italic text-[#5C6E64] dark:text-[#8E9F96]"></p>
        </div>

        <div class="flex justify-center gap-3 pt-2">
          <button onclick="wordleKelimesiniSeslendir()" class="rounded-full border border-[#CBD5C0] bg-[#FAF8F3] px-4 py-2 text-xs font-semibold text-[#2D6A4F] hover:bg-[#EBF2ED] dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#95D5B2]">
            🔊 Kelimeyi Dinle
          </button>
          <button onclick="wordleBaslat()" class="rounded-full bg-[#2D6A4F] px-5 py-2 text-xs font-semibold text-[#FAF8F3] shadow hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712]">
            Yeni Kelime Avı Oyna
          </button>
        </div>
      </div>
    </div>

    <!-- SEKME 3: MİNİ OYUN (KELİME TESTİ) -->
    <div id="section-test" class="hidden space-y-6 max-w-2xl mx-auto py-4">
      <div class="text-center space-y-2">
        <h2 class="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]">
          Kadim Kelimeler Bilgi Testi
        </h2>
        <p class="text-sm text-[#4E6357] dark:text-[#A5B7AC]">
          10 rastgele kadim kelimenin anlamını tahmin edin ve puanınızı görün.
        </p>
      </div>

      <!-- Test Kartı -->
      <div class="rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 sm:p-8 shadow-sm dark:border-[#2C3B31] dark:bg-[#16221A]">
        
        <!-- Başlama Öncesi Ekran -->
        <div id="test-baslangic" class="text-center py-8 space-y-5">
          <p class="text-sm leading-relaxed text-[#33463C] dark:text-[#C5D5CC]">
            Bu test, 389 kelimelik kadim sözlüğümüzden rastgele seçilen 10 soru ile kelime dağarcığınızı sınar.
          </p>
          <button onclick="testiBaslat()" class="rounded-full bg-[#2D6A4F] px-8 py-3 text-sm font-semibold text-[#FAF8F3] shadow-md hover:bg-[#24543E] transition-all dark:bg-[#3E8E6B] dark:text-[#0F1712]">
            Teste Başla
          </button>
        </div>

        <!-- Aktif Soru Alanı -->
        <div id="test-aktif-alani" class="hidden space-y-6">
          <div class="flex items-center justify-between border-b border-[#E3DDCF] pb-3 text-xs dark:border-[#27382D]">
            <span id="test-soru-sayac" class="font-semibold text-[#2D6A4F] dark:text-[#74C69D]">Soru 1 / 10</span>
            <div class="flex items-center gap-3">
              <span class="text-[#2D6A4F] dark:text-[#74C69D]">Doğru: <strong id="test-dogru-sayac">0</strong></span>
              <span class="text-[#B94A32] dark:text-[#E07A5F]">Yanlış: <strong id="test-yanlis-sayac">0</strong></span>
            </div>
          </div>

          <div class="w-full bg-[#EAE4D7] h-1.5 rounded-full overflow-hidden dark:bg-[#223028]">
            <div id="test-ilerleme-cubugu" class="bg-[#2D6A4F] h-full transition-all duration-300 dark:bg-[#3E8E6B]" style="width: 10%;"></div>
          </div>

          <div class="text-center py-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B]">Aşağıdaki kadim kelimenin anlamı nedir?</span>
            <h3 id="test-soru-kelime" class="font-serif text-3xl sm:text-4xl font-bold text-[#162D23] dark:text-[#E8F1EC] mt-2"></h3>
            <p id="test-soru-telaffuz" class="font-serif text-sm italic text-[#52796F] dark:text-[#8AA39B] mt-1"></p>
          </div>

          <div id="test-secenekler" class="space-y-3"></div>

          <div id="test-alt-cubuk" class="hidden flex items-center justify-between border-t border-[#E3DDCF] pt-4 dark:border-[#27382D]">
            <span id="test-geri-bildirim" class="text-xs font-semibold"></span>
            <button onclick="sonrakiTestSorusu()" class="rounded-full bg-[#2D6A4F] px-5 py-2 text-xs font-semibold text-[#FAF8F3] hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712]">
              <span id="test-btn-metin">Sonraki Soru &rarr;</span>
            </button>
          </div>
        </div>

        <!-- Test Sonuç Ekranı -->
        <div id="test-sonuc-alani" class="hidden text-center py-8 space-y-6">
          <h3 class="font-serif text-3xl font-bold text-[#162D23] dark:text-[#E8F1EC]">Test Tamamlandı!</h3>
          <div class="flex justify-center items-center gap-6">
            <div class="rounded-2xl bg-[#E8F5ED] p-4 min-w-[100px] dark:bg-[#1B3325]">
              <span class="block text-2xl font-bold text-[#2D6A4F] dark:text-[#74C69D]" id="sonuc-dogru">0</span>
              <span class="text-xs font-medium text-[#1E4E38] dark:text-[#95D5B2]">Doğru</span>
            </div>
            <div class="rounded-2xl bg-[#FDF0ED] p-4 min-w-[100px] dark:bg-[#331C18]">
              <span class="block text-2xl font-bold text-[#B94A32] dark:text-[#E07A5F]" id="sonuc-yanlis">0</span>
              <span class="text-xs font-medium text-[#7A2818] dark:text-[#F3B0A0]">Yanlış</span>
            </div>
            <div class="rounded-2xl bg-[#F4EFE5] p-4 min-w-[100px] dark:bg-[#1E2922]">
              <span class="block text-2xl font-bold text-[#1E3B2E] dark:text-[#E2EBE5]" id="sonuc-puan">%0</span>
              <span class="text-xs font-medium text-[#52796F] dark:text-[#8AA39B]">Başarı</span>
            </div>
          </div>
          <p id="test-sonuc-aciklama" class="text-sm text-[#4E6357] max-w-md mx-auto dark:text-[#A5B7AC]"></p>
          <button onclick="testiBaslat()" class="rounded-full bg-[#2D6A4F] px-6 py-2.5 text-xs font-semibold text-[#FAF8F3] hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712]">
            Testi Tekrar Çöz
          </button>
        </div>

      </div>
    </div>

  </main>

  <!-- ALT BİLGİ (FOOTER) -->
  <footer class="border-t border-[#E3DDCF] bg-[#FAF8F3] py-6 text-xs text-[#5C6E64] transition-colors dark:border-[#28382E] dark:bg-[#121A15] dark:text-[#8AA39B]">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
      <div>
        <p class="font-serif font-bold text-sm text-[#1E3B2E] dark:text-[#E2EBE5]">
          Kadim Kelimeler Sözlüğü
        </p>
        <p class="text-[11px] text-[#6A8174] dark:text-[#7A9386]">
          Tevfik Serdar Anadolu Lisesi · Dilimizin Zenginlikleri Projesi
        </p>
      </div>
      <div class="flex items-center gap-4 text-xs">
        <button onclick="sekmeyiDegistir('sozluk')" class="hover:text-[#2D6A4F] dark:hover:text-[#74C69D]">Sözlük</button>
        <span>·</span>
        <button onclick="sekmeyiDegistir('wordle')" class="hover:text-[#2D6A4F] dark:hover:text-[#74C69D]">Kelime Avı (5 Harf)</button>
        <span>·</span>
        <button onclick="sekmeyiDegistir('test')" class="hover:text-[#2D6A4F] dark:hover:text-[#74C69D]">Kelime Testi</button>
      </div>
    </div>
  </footer>

  <!-- MODAL: KELİME DETAY -->
  <div id="detay-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
    <div onclick="detayKapat()" class="fixed inset-0 bg-[#141C17]/60 backdrop-blur-sm"></div>
    <div class="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 sm:p-8 shadow-2xl dark:border-[#2E3C33] dark:bg-[#16221A]">
      <div class="flex items-center justify-between border-b border-[#E3DDCF] pb-4 dark:border-[#27382D]">
        <div class="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#52796F] dark:text-[#8AA39B]">
          <span id="modal-turu"></span>
          <span>·</span>
          <span id="modal-koken"></span>
          <span id="modal-donem-wrap" class="hidden">
            <span>·</span>
            <span id="modal-donem" class="rounded-full bg-[#E5ECE7] px-2 py-0.5 text-[10px] text-[#24533E] dark:bg-[#1E3025] dark:text-[#86CEAA]"></span>
          </span>
        </div>
        <button onclick="detayKapat()" class="flex h-8 w-8 items-center justify-center rounded-full text-[#5C6E64] hover:bg-[#EFEAE0] dark:text-[#8AA39B]">✕</button>
      </div>

      <div class="my-5">
        <h2 id="modal-kelime" class="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]"></h2>
        <p id="modal-telaffuz" class="mt-1 font-serif text-base italic text-[#52796F] dark:text-[#8AA39B]"></p>
      </div>

      <div class="rounded-xl border border-[#E3DDCF] bg-[#F5F1E8] p-5 text-base leading-relaxed text-[#24352D] font-medium dark:border-[#2A3B30] dark:bg-[#1C2820] dark:text-[#D5E2DA]">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B] mb-1">Sözlük Anlamı</h4>
        <p id="modal-anlam"></p>
        <p id="modal-ekbilgi" class="hidden mt-3 text-xs leading-relaxed text-[#5C6E64] dark:text-[#95A89E] border-t border-[#E3DDCF] pt-2 dark:border-[#28382F]"></p>
      </div>

      <div class="mt-5 border-t border-[#E3DDCF] pt-4 dark:border-[#27382D]">
        <span class="block text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B] mb-1">Edebi Cümle İçinde Kullanımı</span>
        <blockquote id="modal-ornek" class="font-serif text-base sm:text-lg italic leading-relaxed text-[#33463C] dark:text-[#C5D5CC]"></blockquote>
      </div>

      <div class="mt-6 flex items-center justify-between border-t border-[#E3DDCF] pt-4 dark:border-[#27382D]">
        <div class="flex items-center gap-2">
          <button id="modal-ses-btn" onclick="modalKelimesiniSeslendir()" class="flex items-center gap-1.5 rounded-full border border-[#CBD5C0] bg-[#FAF8F3] px-4 py-2 text-xs font-medium text-[#2D6A4F] hover:bg-[#EBF2ED] dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#95D5B2]">
            🔊 Seslendir
          </button>
          <button onclick="modalKopyala()" class="rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-3 py-2 text-xs font-medium text-[#5C6E64] hover:bg-[#EFEAE0] dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#8AA39B]">
            📋 Kopyala
          </button>
        </div>
        <button onclick="detayKapat()" class="rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-4 py-2 text-xs font-semibold text-[#2F4237] hover:bg-[#EFEAE0] dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC]">
          Kapat
        </button>
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT KODLARI -->
  <script>
    // 389 KELİMELİK VERİTABANI
    const KELIMELER = """ + json.dumps(words, ensure_ascii=False) + """;

    // 5 HARFLİ KELİME AVI HAVUZU
    const WORDLE_HAVUZU = """ + json.dumps(wordle_words, ensure_ascii=False) + """;

    // GÜNÜN KELİMESİ
    const GUNUN_KELIMESI = KELIMELER[0];

    // UYGULAMA DURUMU
    let aktifSekme = 'sozluk';
    let aramaMetni = '';
    let seciliKategori = 'tumu';
    let seciliDonem = 'Tüm Dönemler';
    let gorunenLimit = 24;
    let filtrelenmisKelimeler = [...KELIMELER];
    let favoriler = [];
    try {
      favoriler = JSON.parse(localStorage.getItem('kadim_favoriler') || '[]');
    } catch(e) { favoriler = []; }

    let aktifDetayKelime = null;

    // TÜRKÇE SESLENDİRME (Web Speech API)
    function seslendir(metin) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(metin);
      u.lang = 'tr-TR';
      u.rate = 0.9;
      u.pitch = 1.0;
      window.speechSynthesis.speak(u);
    }

    // SEKME DEĞİŞTİRME
    function sekmeyiDegistir(sekme) {
      aktifSekme = sekme;
      const sozlukSec = document.getElementById('section-sozluk');
      const wordleSec = document.getElementById('section-wordle');
      const testSec = document.getElementById('section-test');

      sozlukSec.classList.add('hidden');
      wordleSec.classList.add('hidden');
      testSec.classList.add('hidden');

      const btnSozluk = document.getElementById('nav-btn-sozluk');
      const btnWordle = document.getElementById('nav-btn-wordle');
      const btnTest = document.getElementById('nav-btn-test');

      [btnSozluk, btnWordle, btnTest].forEach(b => {
        b.className = "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-[#3E5246] hover:text-[#1E3B2E] dark:text-[#A7B9AF] dark:hover:text-[#E2EBE5] transition-all";
      });

      if (sekme === 'sozluk') {
        sozlukSec.classList.remove('hidden');
        btnSozluk.className = "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712] transition-all";
      } else if (sekme === 'wordle') {
        wordleSec.classList.remove('hidden');
        btnWordle.className = "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712] transition-all";
        if (!wordleHedef) wordleBaslat();
      } else if (sekme === 'test') {
        testSec.classList.remove('hidden');
        btnTest.className = "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712] transition-all";
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // SÖZLÜK FİLTRELEME & LİSTELEME
    function filtreUygula() {
      const q = aramaMetni.toLocaleLowerCase('tr-TR').trim();
      filtrelenmisKelimeler = KELIMELER.filter(k => {
        // Metin araması
        const eslesme = !q || 
          k.kelime.toLocaleLowerCase('tr-TR').includes(q) ||
          k.anlam.toLocaleLowerCase('tr-TR').includes(q) ||
          k.turu.toLocaleLowerCase('tr-TR').includes(q) ||
          (k.donem && k.donem.toLocaleLowerCase('tr-TR').includes(q));

        if (!eslesme) return false;

        // Kategori filtresi
        if (seciliKategori === 'favoriler' && !favoriler.includes(k.id)) return false;
        if (seciliKategori === 'atasozleri' && !k.turu.includes('Atasözü')) return false;
        if (seciliKategori === 'deyimler' && !(k.turu.includes('Deyim') || k.turu.includes('Tabir') || k.turu.includes('İfade') || k.turu.includes('Terim'))) return false;
        if (seciliKategori === 'kelimeler' && (k.turu.includes('Deyim') || k.turu.includes('Atasözü') || k.turu.includes('Tabir') || k.turu.includes('İfade'))) return false;

        // Dönem filtresi
        if (seciliDonem !== 'Tüm Dönemler' && k.donem !== seciliDonem) return false;

        return true;
      });

      // Günün kelimesi alanı gizleme/gösterme
      const gkAlani = document.getElementById('gunun-kelimesi-alani');
      if (aramaMetni || seciliKategori !== 'tumu' || seciliDonem !== 'Tüm Dönemler') {
        gkAlani.classList.add('hidden');
      } else {
        gkAlani.classList.remove('hidden');
      }

      kartlariListele();
    }

    function kartlariListele() {
      const grid = document.getElementById('kelimeler-grid');
      const bosDurum = document.getElementById('bos-durum');
      const dahaFazlaAlani = document.getElementById('daha-fazla-alani');
      const sayac = document.getElementById('liste-sayac');

      grid.innerHTML = '';
      sayac.textContent = `${filtrelenmisKelimeler.length} kayıt arasından ${Math.min(gorunenLimit, filtrelenmisKelimeler.length)} gösteriliyor`;

      if (filtrelenmisKelimeler.length === 0) {
        grid.classList.add('hidden');
        bosDurum.classList.remove('hidden');
        dahaFazlaAlani.classList.add('hidden');
        return;
      }

      grid.classList.remove('hidden');
      bosDurum.classList.add('hidden');

      const parca = filtrelenmisKelimeler.slice(0, gorunenLimit);
      parca.forEach(k => {
        const isFav = favoriler.includes(k.id);
        const card = document.createElement('article');
        card.className = "group relative flex flex-col justify-between rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CBD5C0] hover:shadow-md cursor-pointer dark:border-[#28382F] dark:bg-[#18231C] dark:hover:border-[#3E5C49]";
        card.onclick = () => detayAc(k);

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between gap-2 text-xs text-[#5C6E64] dark:text-[#8E9F96] mb-3">
              <div class="flex flex-wrap items-center gap-1.5 font-medium">
                <span>${k.turu}</span>
                <span>·</span>
                <span>${k.koken}</span>
                ${k.donem ? `<span class="rounded bg-[#E8F0EB] px-1.5 py-0.5 text-[10px] text-[#204E39] dark:bg-[#1E2E24] dark:text-[#8CD0AE]">${k.donem}</span>` : ''}
              </div>
              <button onclick="event.stopPropagation(); favoriTetikle('${k.id}')" class="text-sm p-1 hover:text-[#C95A3F] transition-colors" title="Favorilere ekle/çıkar">
                ${isFav ? '❤️' : '🤍'}
              </button>
            </div>
            <div class="mb-2">
              <h3 class="font-serif text-2xl font-bold tracking-tight text-[#162D23] group-hover:text-[#2D6A4F] dark:text-[#E8F1EC] dark:group-hover:text-[#88D4AB] transition-colors">
                ${k.kelime}
              </h3>
              ${k.telaffuz ? `<p class="font-serif text-xs italic text-[#52796F] dark:text-[#8AA39B]">[${k.telaffuz}]</p>` : ''}
            </div>
            <p class="text-sm leading-relaxed text-[#2C3F34] font-medium dark:text-[#D1DFD7] line-clamp-3">
              ${k.anlam}
            </p>
            <div class="mt-4 border-t border-[#EAE4D7] pt-3 dark:border-[#27352D]">
              <p class="font-serif text-xs italic text-[#4F6357] dark:text-[#A7B9AF] line-clamp-2">
                "${k.ornekCumle}"
              </p>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between pt-2 text-xs">
            <button onclick="event.stopPropagation(); seslendir('${k.kelime}. Anlamı: ${k.anlam.replace(/'/g, "\\\\'")}')" class="flex items-center gap-1.5 rounded-full border border-[#CBD5C0] bg-[#FAF8F3] px-3 py-1 font-medium text-[#2D6A4F] hover:bg-[#EBF2ED] transition-colors dark:border-[#334639] dark:bg-[#1D2921] dark:text-[#88D4AB]">
              🔊 Dinle
            </button>
            <span class="text-[11px] text-[#7A8E83] dark:text-[#6F8377] group-hover:text-[#2D6A4F]">Ayrıntılar &rarr;</span>
          </div>
        `;
        grid.appendChild(card);
      });

      if (gorunenLimit < filtrelenmisKelimeler.length) {
        dahaFazlaAlani.classList.remove('hidden');
      } else {
        dahaFazlaAlani.classList.add('hidden');
      }
    }

    function dahaFazlaGoster() {
      gorunenLimit += 24;
      kartlariListele();
    }

    function aramaYap(val) {
      aramaMetni = val;
      const temizleBtn = document.getElementById('arama-temizle');
      if (val) temizleBtn.classList.remove('hidden');
      else temizleBtn.classList.add('hidden');
      gorunenLimit = 24;
      filtreUygula();
    }

    function aramaTemizle() {
      document.getElementById('arama-input').value = '';
      aramaYap('');
    }

    function kategoriFiltrele(kat) {
      seciliKategori = kat;
      gorunenLimit = 24;
      ['tumu', 'kelimeler', 'deyimler', 'atasozleri', 'favoriler'].forEach(c => {
        const btn = document.getElementById('filtre-btn-' + c);
        if (c === kat) {
          btn.className = "rounded-full px-3.5 py-1 text-xs font-semibold bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712] transition-all";
        } else {
          btn.className = "rounded-full px-3.5 py-1 text-xs font-medium border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all";
        }
      });
      filtreUygula();
    }

    function donemFiltrele(donem) {
      seciliDonem = donem;
      gorunenLimit = 24;
      const butonlar = document.querySelectorAll('.donem-btn');
      butonlar.forEach(b => {
        if (b.getAttribute('data-donem') === donem) {
          b.className = "donem-btn rounded-full px-3 py-1 text-xs font-medium bg-[#1E3B2E] text-[#FAF8F3] dark:bg-[#74C69D] dark:text-[#0F1712] shadow-sm transition-all";
        } else {
          b.className = "donem-btn rounded-full px-3 py-1 text-xs font-medium border border-[#DCD5C6] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF] transition-all";
        }
      });
      filtreUygula();
    }

    function filtreleriSifirla() {
      aramaTemizle();
      kategoriFiltrele('tumu');
      donemFiltrele('Tüm Dönemler');
    }

    function favoriTetikle(id) {
      if (favoriler.includes(id)) {
        favoriler = favoriler.filter(f => f !== id);
      } else {
        favoriler.push(id);
      }
      try {
        localStorage.setItem('kadim_favoriler', JSON.stringify(favoriler));
      } catch(e) {}
      document.getElementById('sayac-favoriler').textContent = favoriler.length;
      kartlariListele();
    }

    // MODAL İŞLEMLERİ
    function detayAc(k) {
      aktifDetayKelime = k;
      document.getElementById('modal-kelime').textContent = k.kelime;
      document.getElementById('modal-telaffuz').textContent = k.telaffuz ? `[${k.telaffuz}]` : '';
      document.getElementById('modal-turu').textContent = k.turu;
      document.getElementById('modal-koken').textContent = k.koken;
      
      const donemWrap = document.getElementById('modal-donem-wrap');
      if (k.donem) {
        donemWrap.classList.remove('hidden');
        document.getElementById('modal-donem').textContent = k.donem;
      } else {
        donemWrap.classList.add('hidden');
      }

      document.getElementById('modal-anlam').textContent = k.anlam;
      const ekbilgiEl = document.getElementById('modal-ekbilgi');
      if (k.ekBilgi) {
        ekbilgiEl.textContent = 'Açıklama: ' + k.ekBilgi;
        ekbilgiEl.classList.remove('hidden');
      } else {
        ekbilgiEl.classList.add('hidden');
      }
      document.getElementById('modal-ornek').textContent = `"${k.ornekCumle}"`;

      document.getElementById('detay-modal').classList.remove('hidden');
    }

    function detayKapat() {
      document.getElementById('detay-modal').classList.add('hidden');
    }

    function modalKelimesiniSeslendir() {
      if (aktifDetayKelime) {
        seslendir(`${aktifDetayKelime.kelime}. Anlamı: ${aktifDetayKelime.anlam}. Örnek: ${aktifDetayKelime.ornekCumle}`);
      }
    }

    function modalKopyala() {
      if (aktifDetayKelime) {
        navigator.clipboard.writeText(`${aktifDetayKelime.kelime}: ${aktifDetayKelime.anlam}\\nÖrnek: "${aktifDetayKelime.ornekCumle}"`);
        alert("Kelime ve anlamı panoya kopyalandı.");
      }
    }

    function beniSasirt() {
      const rastgele = KELIMELER[Math.floor(Math.random() * KELIMELER.length)];
      detayAc(rastgele);
    }

    function gununKelimesiniSeslendir() {
      seslendir(`${GUNUN_KELIMESI.kelime}. Anlamı: ${GUNUN_KELIMESI.anlam}. Örnek: ${GUNUN_KELIMESI.ornekCumle}`);
    }

    // ==========================================
    // 2. KADİM KELİME AVI (WORDLE TARZI 5 HARF)
    // ==========================================
    let wordleHedef = null;
    let wordleSatir = 0;
    let wordleSutun = 0;
    let wordleGrid = Array(6).fill('').map(() => Array(5).fill(''));
    let wordleOyunBitti = false;

    const KLAVYE_S1 = ['E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü'];
    const KLAVYE_S2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ'];
    const KLAVYE_S3 = ['GİRİŞ', 'Z', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç', '⌫'];

    function wordleBaslat() {
      wordleHedef = WORDLE_HAVUZU[Math.floor(Math.random() * WORDLE_HAVUZU.length)];
      wordleSatir = 0;
      wordleSutun = 0;
      wordleGrid = Array(6).fill('').map(() => Array(5).fill(''));
      wordleOyunBitti = false;

      document.getElementById('wordle-ipucu-kutusu').classList.add('hidden');
      document.getElementById('wordle-sonuc-kart').classList.add('hidden');
      document.getElementById('wordle-deneme-bilgi').textContent = "Deneme 1 / 6";

      // Grid HTML Oluştur
      const gridEl = document.getElementById('wordle-grid');
      gridEl.innerHTML = '';
      for (let r = 0; r < 6; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = "grid grid-cols-5 gap-2";
        for (let c = 0; c < 5; c++) {
          const tile = document.createElement('div');
          tile.id = `tile-${r}-${c}`;
          tile.className = "wordle-tile h-12 sm:h-14 border-2 border-[#D5CEBF] bg-[#FAF8F3] text-[#162D23] dark:border-[#2C3B31] dark:bg-[#16221A] dark:text-[#E8F1EC]";
          rowDiv.appendChild(tile);
        }
        gridEl.appendChild(rowDiv);
      }

      // Klavye HTML Oluştur
      klavyeCiz();
    }

    function klavyeCiz() {
      const ciz = (satirId, harfler) => {
        const container = document.getElementById(satirId);
        container.innerHTML = '';
        harfler.forEach(h => {
          const btn = document.createElement('button');
          btn.id = `key-${h}`;
          btn.setAttribute('data-key', h);
          const isSpecial = h === 'GİRİŞ' || h === '⌫';
          btn.className = `${isSpecial ? 'px-2.5 sm:px-3 text-xs' : 'w-8 sm:w-10 text-xs sm:text-sm'} h-10 sm:h-11 rounded font-bold border border-[#D5CEBF] bg-[#F4EFE5] text-[#24352D] hover:bg-[#EAE4D7] active:scale-95 transition-all dark:border-[#2C3B31] dark:bg-[#1C2820] dark:text-[#E8F1EC] dark:hover:bg-[#25352C]`;
          btn.textContent = h;
          btn.onclick = () => wordleHarfTiklandi(h);
          container.appendChild(btn);
        });
      };
      ciz('klavye-satir-1', KLAVYE_S1);
      ciz('klavye-satir-2', KLAVYE_S2);
      ciz('klavye-satir-3', KLAVYE_S3);
    }

    function wordleHarfTiklandi(harf) {
      if (wordleOyunBitti) return;

      if (harf === 'GİRİŞ') {
        wordleTahminKontrol();
      } else if (harf === '⌫') {
        if (wordleSutun > 0) {
          wordleSutun--;
          wordleGrid[wordleSatir][wordleSutun] = '';
          const tile = document.getElementById(`tile-${wordleSatir}-${wordleSutun}`);
          tile.textContent = '';
          tile.classList.remove('border-[#2D6A4F]', 'scale-105');
        }
      } else {
        if (wordleSutun < 5) {
          wordleGrid[wordleSatir][wordleSutun] = harf;
          const tile = document.getElementById(`tile-${wordleSatir}-${wordleSutun}`);
          tile.textContent = harf;
          tile.classList.add('border-[#2D6A4F]');
          wordleSutun++;
        }
      }
    }

    function wordleTahminKontrol() {
      if (wordleSutun < 5) {
        alert("Lütfen 5 harfi tamamlayın.");
        return;
      }

      const tahmin = wordleGrid[wordleSatir].join('');
      const hedef = wordleHedef.kelime;
      const durumlar = Array(5).fill('absent');
      const hedefKalan = hedef.split('');

      // 1. Geçiş: Tam doğru (Yeşil)
      for (let i = 0; i < 5; i++) {
        if (tahmin[i] === hedef[i]) {
          durumlar[i] = 'correct';
          hedefKalan[i] = null;
        }
      }

      // 2. Geçiş: Yanlış yer (Kehribar/Sarı)
      for (let i = 0; i < 5; i++) {
        if (durumlar[i] !== 'correct') {
          const idx = hedefKalan.indexOf(tahmin[i]);
          if (idx !== -1) {
            durumlar[i] = 'present';
            hedefKalan[idx] = null;
          }
        }
      }

      // Kutuları renklendir
      for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${wordleSatir}-${i}`);
        const harf = tahmin[i];
        const d = durumlar[i];

        if (d === 'correct') {
          tile.className = "wordle-tile h-12 sm:h-14 bg-[#2D6A4F] text-[#FAF8F3] border-2 border-[#2D6A4F] shadow-sm";
          klavyeRengiGuncelle(harf, 'correct');
        } else if (d === 'present') {
          tile.className = "wordle-tile h-12 sm:h-14 bg-[#D97706] text-[#FAF8F3] border-2 border-[#D97706] shadow-sm";
          klavyeRengiGuncelle(harf, 'present');
        } else {
          tile.className = "wordle-tile h-12 sm:h-14 bg-[#4B5563] text-[#FAF8F3] border-2 border-[#4B5563] shadow-sm";
          klavyeRengiGuncelle(harf, 'absent');
        }
      }

      // Kazanma Kontrolü
      if (tahmin === hedef) {
        wordleOyunBitti = true;
        wordleBittiGoster(true);
        return;
      }

      wordleSatir++;
      wordleSutun = 0;

      if (wordleSatir === 6) {
        wordleOyunBitti = true;
        wordleBittiGoster(false);
      } else {
        document.getElementById('wordle-deneme-bilgi').textContent = `Deneme ${wordleSatir + 1} / 6`;
      }
    }

    function klavyeRengiGuncelle(harf, durum) {
      const btn = document.getElementById(`key-${harf}`);
      if (!btn) return;
      if (btn.classList.contains('bg-[#2D6A4F]')) return; // Zaten yeşilse değiştirme

      if (durum === 'correct') {
        btn.className = "w-8 sm:w-10 h-10 sm:h-11 rounded font-bold text-xs sm:text-sm bg-[#2D6A4F] text-white border border-[#2D6A4F]";
      } else if (durum === 'present' && !btn.classList.contains('bg-[#2D6A4F]')) {
        btn.className = "w-8 sm:w-10 h-10 sm:h-11 rounded font-bold text-xs sm:text-sm bg-[#D97706] text-white border border-[#D97706]";
      } else if (durum === 'absent' && !btn.classList.contains('bg-[#2D6A4F]') && !btn.classList.contains('bg-[#D97706]')) {
        btn.className = "w-8 sm:w-10 h-10 sm:h-11 rounded font-bold text-xs sm:text-sm bg-[#4B5563] text-white border border-[#4B5563] opacity-60";
      }
    }

    function wordleIpucuVer() {
      const kutu = document.getElementById('wordle-ipucu-kutusu');
      document.getElementById('wordle-ipucu-donem').textContent = `Dönem: ${wordleHedef.donem}`;
      document.getElementById('wordle-ipucu-metin').textContent = `İpucu (Anlam Özeti): ${wordleHedef.anlam}`;
      kutu.classList.toggle('hidden');
    }

    function wordleBittiGoster(kazandiMi) {
      const kart = document.getElementById('wordle-sonuc-kart');
      const ikon = document.getElementById('wordle-sonuc-ikon');
      const baslik = document.getElementById('wordle-sonuc-baslik');
      const mesaj = document.getElementById('wordle-sonuc-mesaj');

      if (kazandiMi) {
        ikon.textContent = '🎉';
        baslik.textContent = 'Mükemmel! Tebrik Ederiz';
        mesaj.textContent = `${wordleSatir + 1}. denemede kadim kelimeyi başarıyla keşfettiniz!`;
      } else {
        ikon.textContent = '📜';
        baslik.textContent = 'Bir Dahaki Sefere!';
        mesaj.textContent = '6 denemeniz tamamlandı. Aranan kadim kelime aşağıda açıklanmıştır:';
      }

      document.getElementById('wordle-kelime-reveal').textContent = wordleHedef.orijinal;
      document.getElementById('wordle-donem-reveal').textContent = wordleHedef.donem;
      document.getElementById('wordle-anlam-reveal').textContent = wordleHedef.anlam;
      document.getElementById('wordle-ornek-reveal').textContent = `"${wordleHedef.ornekCumle}"`;

      kart.classList.remove('hidden');
    }

    function wordleKelimesiniSeslendir() {
      if (wordleHedef) {
        seslendir(`${wordleHedef.orijinal}. Anlamı: ${wordleHedef.anlam}`);
      }
    }

    // Klavye Tuş Dinleyicisi
    window.addEventListener('keydown', (e) => {
      if (aktifSekme !== 'wordle') return;
      if (e.key === 'Enter') {
        wordleHarfTiklandi('GİRİŞ');
      } else if (e.key === 'Backspace') {
        wordleHarfTiklandi('⌫');
      } else {
        const trKey = e.key.toLocaleUpperCase('tr-TR');
        if (/^[A-ZĞÜŞİÖÇI]$/.test(trKey)) {
          wordleHarfTiklandi(trKey);
        }
      }
    });

    // ==========================================
    // 3. KELİME TESTİ (MİNİ OYUN)
    // ==========================================
    let testSorulari = [];
    let aktifSoruIdx = 0;
    let dogruPuan = 0;
    let yanlisPuan = 0;
    let soruCevaplandi = false;

    function testiBaslat() {
      document.getElementById('test-baslangic').classList.add('hidden');
      document.getElementById('test-sonuc-alani').classList.add('hidden');
      document.getElementById('test-aktif-alani').classList.remove('hidden');

      // Rastgele 10 soru üret
      const karisik = [...KELIMELER].sort(() => Math.random() - 0.5);
      const secilenler = karisik.slice(0, 10);

      testSorulari = secilenler.map(soruK => {
        const yanlislar = KELIMELER.filter(k => k.id !== soruK.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(k => k.anlam);

        const secenekler = [...yanlislar, soruK.anlam].sort(() => Math.random() - 0.5);

        return {
          kelime: soruK,
          dogruCevap: soruK.anlam,
          secenekler
        };
      });

      aktifSoruIdx = 0;
      dogruPuan = 0;
      yanlisPuan = 0;
      testSorusunuYukle();
    }

    function testSorusunuYukle() {
      soruCevaplandi = false;
      const soru = testSorulari[aktifSoruIdx];
      document.getElementById('test-soru-sayac').textContent = `Soru ${aktifSoruIdx + 1} / 10`;
      document.getElementById('test-dogru-sayac').textContent = dogruPuan;
      document.getElementById('test-yanlis-sayac').textContent = yanlisPuan;
      document.getElementById('test-ilerleme-cubugu').style.width = ((aktifSoruIdx + 1) / 10 * 100) + '%';

      document.getElementById('test-soru-kelime').textContent = soru.kelime.kelime;
      document.getElementById('test-soru-telaffuz').textContent = `[${soru.kelime.telaffuz || ''}] · ${soru.kelime.turu}`;
      document.getElementById('test-alt-cubuk').classList.add('hidden');

      const seceneklerDiv = document.getElementById('test-secenekler');
      seceneklerDiv.innerHTML = '';

      soru.secenekler.forEach((sec, idx) => {
        const harf = ['A', 'B', 'C', 'D'][idx];
        const btn = document.createElement('button');
        btn.className = "flex w-full items-start gap-3 rounded-xl border border-[#E0D9CB] bg-[#F7F4EC] p-4 text-left text-sm leading-relaxed text-[#24352D] hover:border-[#2D6A4F] hover:bg-[#EFEAE0] transition-all dark:border-[#2B3B30] dark:bg-[#1B271F] dark:text-[#D5E2DA]";
        btn.innerHTML = `<span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current font-mono text-xs font-bold">${harf}</span><span>${sec}</span>`;
        btn.onclick = () => testCevapVer(sec, btn);
        seceneklerDiv.appendChild(btn);
      });
    }

    function testCevapVer(secilen, btnEl) {
      if (soruCevaplandi) return;
      soruCevaplandi = true;
      const soru = testSorulari[aktifSoruIdx];
      const dogruMu = secilen === soru.dogruCevap;

      const butonlar = document.getElementById('test-secenekler').querySelectorAll('button');
      butonlar.forEach(btn => {
        btn.disabled = true;
        const metin = btn.querySelector('span:last-child').textContent;
        if (metin === soru.dogruCevap) {
          btn.className = "flex w-full items-start gap-3 rounded-xl border border-[#2D6A4F] bg-[#E8F5ED] p-4 text-left text-sm font-semibold text-[#14472F] dark:border-[#3E8E6B] dark:bg-[#1A3324] dark:text-[#A6E3C0]";
        } else if (metin === secilen && !dogruMu) {
          btn.className = "flex w-full items-start gap-3 rounded-xl border border-[#B94A32] bg-[#FDF0ED] p-4 text-left text-sm text-[#7A2818] dark:border-[#E07A5F] dark:bg-[#341C17] dark:text-[#F3B0A0]";
        } else {
          btn.classList.add('opacity-40');
        }
      });

      const geriBildirim = document.getElementById('test-geri-bildirim');
      if (dogruMu) {
        dogruPuan++;
        geriBildirim.textContent = "✓ Doğru cevap! Harika.";
        geriBildirim.className = "text-xs font-semibold text-[#2D6A4F] dark:text-[#74C69D]";
      } else {
        yanlisPuan++;
        geriBildirim.textContent = "✗ Yanlış! Doğru cevap yeşil renkle vurgulandı.";
        geriBildirim.className = "text-xs font-semibold text-[#B94A32] dark:text-[#E07A5F]";
      }

      document.getElementById('test-dogru-sayac').textContent = dogruPuan;
      document.getElementById('test-yanlis-sayac').textContent = yanlisPuan;
      document.getElementById('test-btn-metin').textContent = (aktifSoruIdx + 1 === 10) ? 'Sonuçları Gör' : 'Sonraki Soru';
      document.getElementById('test-alt-cubuk').classList.remove('hidden');
    }

    function sonrakiTestSorusu() {
      if (aktifSoruIdx + 1 < 10) {
        aktifSoruIdx++;
        testSorusunuYukle();
      } else {
        testSonucunuGoster();
      }
    }

    function testSonucunuGoster() {
      document.getElementById('test-aktif-alani').classList.add('hidden');
      document.getElementById('test-sonuc-alani').classList.remove('hidden');
      const basari = Math.round((dogruPuan / 10) * 100);
      document.getElementById('sonuc-dogru').textContent = dogruPuan;
      document.getElementById('sonuc-yanlis').textContent = yanlisPuan;
      document.getElementById('sonuc-puan').textContent = '%' + basari;
      const aciklama = document.getElementById('test-sonuc-aciklama');
      if (basari === 100) {
        aciklama.textContent = "Kusursuz başarı! Kadim kelimelerimizin derin manalarına ve Türkçemizin zenginliğine bütünüyle hâkimsiniz.";
      } else if (basari >= 70) {
        aciklama.textContent = "Tebrikler! Dilimizin zenginliklerine olan ilginiz ve kelime dağarcığınız takdire şayan.";
      } else {
        aciklama.textContent = "Güzel bir gayret! Sözlükteki kadim kelimeleri dinleyerek bilginizi daha da pekiştirebilirsiniz.";
      }
    }

    // AYDINLIK / KARANLIK MOD
    function karanlikModDegistir() {
      const html = document.documentElement;
      html.classList.toggle('dark');
      const icon = document.getElementById('theme-icon');
      if (html.classList.contains('dark')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
      }
    }

    // BAŞLANGIÇ YÜKLEMESİ
    window.addEventListener('DOMContentLoaded', () => {
      // Günün kelimesi
      document.getElementById('gk-baslik').textContent = GUNUN_KELIMESI.kelime;
      document.getElementById('gk-telaffuz').textContent = '[' + (GUNUN_KELIMESI.telaffuz || '') + ']';
      document.getElementById('gk-meta').textContent = GUNUN_KELIMESI.turu + ' · ' + GUNUN_KELIMESI.koken + (GUNUN_KELIMESI.donem ? ' · ' + GUNUN_KELIMESI.donem : '');
      document.getElementById('gk-anlam').textContent = GUNUN_KELIMESI.anlam;
      document.getElementById('gk-ornek').textContent = '"' + GUNUN_KELIMESI.ornekCumle + '"';
      
      document.getElementById('sayac-tumu').textContent = KELIMELER.length;
      document.getElementById('sayac-favoriler').textContent = favoriler.length;

      kartlariListele();
    });
  </script>
</body>
</html>
"""

with open("kadim-kelimeler-sozlugu.html", "w", encoding="utf-8") as f:
    f.write(html_template)

with open("public/kadim-kelimeler-sozlugu.html", "w", encoding="utf-8") as f:
    f.write(html_template)

print("kadim-kelimeler-sozlugu.html & public/kadim-kelimeler-sozlugu.html successfully generated!")
