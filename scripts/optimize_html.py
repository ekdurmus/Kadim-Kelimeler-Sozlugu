# -*- coding: utf-8 -*-
with open("kadim-kelimeler-sozlugu.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update quiz generation in HTML to slice 10 questions:
old_quiz = "const karisik = [...KELIMELER].sort(() => Math.random() - 0.5);"
new_quiz = "const karisik = [...KELIMELER].sort(() => Math.random() - 0.5).slice(0, 10);"
html = html.replace(old_quiz, new_quiz)

# 2. Add progressive loading in kartlariListele
old_kartlari = """    // KARTLARI LİSTELEME
    function kartlariListele(liste) {
      const container = document.getElementById('kelime-listesi');
      const bosSonuc = document.getElementById('bos-sonuc');
      const sayac = document.getElementById('kelime-sayisi');
      
      container.innerHTML = '';
      sayac.textContent = liste.length;

      if (liste.length === 0) {
        bosSonuc.classList.remove('hidden');
        return;
      }
      bosSonuc.classList.add('hidden');

      liste.forEach(item => {"""

new_kartlari = """    // KARTLARI LİSTELEME
    let gorunenKartLimiti = 24;
    let aktifFiltreliListe = [];

    function kartlariListele(liste, limitArtir = false) {
      const container = document.getElementById('kelime-listesi');
      const bosSonuc = document.getElementById('bos-sonuc');
      const sayac = document.getElementById('kelime-sayisi');
      
      aktifFiltreliListe = liste;
      if (!limitArtir) {
        gorunenKartLimiti = 24;
        container.innerHTML = '';
      }

      sayac.textContent = liste.length;

      if (liste.length === 0) {
        bosSonuc.classList.remove('hidden');
        const dahaFazlaBtn = document.getElementById('daha-fazla-alani');
        if (dahaFazlaBtn) dahaFazlaBtn.remove();
        return;
      }
      bosSonuc.classList.add('hidden');

      container.innerHTML = '';
      const gosterilecek = liste.slice(0, gorunenKartLimiti);

      gosterilecek.forEach(item => {"""

html = html.replace(old_kartlari, new_kartlari)

# Update after forEach:
old_after_forEach = """        container.appendChild(card);
      });
    }"""

new_after_forEach = """        container.appendChild(card);
      });

      // Daha fazla yükle butonu
      let dahaFazlaAlani = document.getElementById('daha-fazla-alani');
      if (dahaFazlaAlani) dahaFazlaAlani.remove();

      if (gorunenKartLimiti < liste.length) {
        dahaFazlaAlani = document.createElement('div');
        dahaFazlaAlani.id = 'daha-fazla-alani';
        dahaFazlaAlani.className = 'col-span-full py-6 flex flex-wrap items-center justify-center gap-3';
        dahaFazlaAlani.innerHTML = `
          <button onclick="dahaFazlaYukle()" class="rounded-full bg-[#2D6A4F] px-6 py-2.5 text-xs font-semibold text-[#FAF8F3] hover:bg-[#24543E] transition-all dark:bg-[#3E8E6B] dark:text-[#0F1712]">
            Daha Fazla Göster (+24)
          </button>
          <button onclick="tumunuYukle()" class="rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-5 py-2.5 text-xs font-medium text-[#2F4237] hover:bg-[#EFEAE0] transition-colors dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC]">
            Tümünü Göster (${liste.length})
          </button>
        `;
        container.parentNode.appendChild(dahaFazlaAlani);
      }
    }

    function dahaFazlaYukle() {
      gorunenKartLimiti += 24;
      kartlariListele(aktifFiltreliListe, true);
    }

    function tumunuYukle() {
      gorunenKartLimiti = aktifFiltreliListe.length;
      kartlariListele(aktifFiltreliListe, true);
    }"""

html = html.replace(old_after_forEach, new_after_forEach)

with open("kadim-kelimeler-sozlugu.html", "w", encoding="utf-8") as f:
    f.write(html)
with open("public/kadim-kelimeler-sozlugu.html", "w", encoding="utf-8") as f:
    f.write(html)

print("HTML progressive loading updated.")
