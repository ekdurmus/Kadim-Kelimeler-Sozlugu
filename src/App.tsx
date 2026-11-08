import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Sparkles, Bookmark, BookOpen, Gamepad2, Info, GraduationCap, Check, ArrowRight, History, Grid3X3 } from 'lucide-react';
import { ILK_KELIMELER, KadimKelime, DONEM_LISTESI } from './data/words';
import { Header } from './components/Header';
import { GununKelimesiCard } from './components/GununKelimesiCard';
import { WordCard } from './components/WordCard';
import { KelimeTesti } from './components/KelimeTesti';
import { KelimeAvi } from './components/KelimeAvi';
import { SurpriseModal } from './components/SurpriseModal';
import { WordDetailModal } from './components/WordDetailModal';
import { SingleFileExportModal } from './components/SingleFileExportModal';

export default function App() {
  const [kelimeler] = useState<KadimKelime[]>(ILK_KELIMELER);
  const [aramaMetni, setAramaMetni] = useState('');
  const [seciliFiltre, setSeciliFiltre] = useState<'tumu' | 'kelimeler' | 'deyimler' | 'atasozleri' | 'favoriler'>('tumu');
  const [seciliDonem, setSeciliDonem] = useState<string>('Tüm Dönemler');
  const [gorunenLimit, setGorunenLimit] = useState(24);
  const [favoriler, setFavoriler] = useState<string[]>(() => {
    try {
      const kayitli = localStorage.getItem('kadim_kelimeler_favoriler');
      return kayitli ? JSON.parse(kayitli) : [];
    } catch {
      return [];
    }
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeTab, setActiveTab] = useState<'dictionary' | 'wordle' | 'quiz' | 'about'>('dictionary');
  
  // Modallar
  const [surpriseModalOpen, setSurpriseModalOpen] = useState(false);
  const [surpriseKelime, setSurpriseKelime] = useState<KadimKelime | null>(null);
  
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState<KadimKelime | null>(null);

  const [exportModalOpen, setExportModalOpen] = useState(false);

  // Arama veya filtre değiştiğinde görünür limitini sıfırla
  useEffect(() => {
    setGorunenLimit(24);
  }, [aramaMetni, seciliFiltre, seciliDonem]);

  // Karanlık mod sınıfını güncelle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Favorileri yerel depolamada sakla
  useEffect(() => {
    try {
      localStorage.setItem('kadim_kelimeler_favoriler', JSON.stringify(favoriler));
    } catch {
      // Depolama hatası yoksayılır
    }
  }, [favoriler]);

  // Favori Aç/Kapat
  const toggleFavorite = (id: string) => {
    setFavoriler(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Beni Şaşırt
  const handleSurpriseMe = () => {
    const rastgele = kelimeler[Math.floor(Math.random() * kelimeler.length)];
    setSurpriseKelime(rastgele);
    setSurpriseModalOpen(true);
  };

  const handleNextSurprise = () => {
    let sonraki: KadimKelime;
    do {
      sonraki = kelimeler[Math.floor(Math.random() * kelimeler.length)];
    } while (kelimeler.length > 1 && surpriseKelime && sonraki.id === surpriseKelime.id);

    setSurpriseKelime(sonraki);
  };

  // Detay Aç
  const handleOpenDetail = (kelime: KadimKelime) => {
    setSelectedWord(kelime);
    setDetailModalOpen(true);
  };

  // Günün kelimesi (Mütemadiyen sabit veya günün seçkisi)
  const gununKelimesi = useMemo(() => {
    return kelimeler[0];
  }, [kelimeler]);

  // Arama ve Filtreleme
  const filtrelenmisKelimeler = useMemo(() => {
    const q = aramaMetni.toLocaleLowerCase('tr-TR').trim();

    return kelimeler.filter(k => {
      // Metin araması
      const eslesme = 
        k.kelime.toLocaleLowerCase('tr-TR').includes(q) ||
        k.anlam.toLocaleLowerCase('tr-TR').includes(q) ||
        k.turu.toLocaleLowerCase('tr-TR').includes(q) ||
        k.ornekCumle.toLocaleLowerCase('tr-TR').includes(q);

      if (!eslesme) return false;

      // Kategori filtresi
      if (seciliFiltre === 'favoriler' && !favoriler.includes(k.id)) {
        return false;
      }
      if (seciliFiltre === 'atasozleri' && !k.turu.includes('Atasözü')) {
        return false;
      }
      if (seciliFiltre === 'deyimler' && !(k.turu.includes('Deyim') || k.turu.includes('Tabir') || k.turu.includes('İfade') || k.turu.includes('Terim'))) {
        return false;
      }
      if (seciliFiltre === 'kelimeler' && (k.turu.includes('Deyim') || k.turu.includes('Atasözü') || k.turu.includes('Tabir') || k.turu.includes('İfade'))) {
        return false;
      }

      // Dönem filtresi
      if (seciliDonem !== 'Tüm Dönemler' && k.donem !== seciliDonem) {
        return false;
      }

      return true;
    });
  }, [kelimeler, aramaMetni, seciliFiltre, seciliDonem, favoriler]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#1F2922] transition-colors duration-200 dark:bg-[#131B16] dark:text-[#E2EBE5]">
      
      {/* Üst Menü */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onSurpriseMe={handleSurpriseMe}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenExportModal={() => setExportModalOpen(true)}
      />

      {/* Ana Gövde */}
      <main className="flex-1 mx-auto max-w-6xl w-full px-4 sm:px-6 py-6 sm:py-10">
        
        {/* SEKME 1: SÖZLÜK */}
        {activeTab === 'dictionary' && (
          <div className="space-y-8 sm:space-y-10">
            
            {/* Arama Alanı ve Başlık */}
            <section className="text-center max-w-2xl mx-auto space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] dark:text-[#74C69D]">
                <GraduationCap className="h-4 w-4" />
                <span>Dilimizin Zenginlikleri Projesi</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]">
                Kadim Kelimeler Sözlüğü
              </h1>
              
              <p className="text-sm sm:text-base leading-relaxed text-[#4E6357] dark:text-[#A5B7AC]">
                Türkçemizin derin edebi hafızasını, incelikli ifadelerini ve yüzyılları aşan kadim söz varlığını keşfedin, dinleyin ve öğrenin.
              </p>

              {/* Arama Çubuğu */}
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#6A8174]">
                  <Search className="h-4 w-4" />
                </div>
                
                <input
                  type="text"
                  value={aramaMetni}
                  onChange={(e) => setAramaMetni(e.target.value)}
                  placeholder="Kelime, anlam veya edebi örneklerde arayın... (Örn: mütemadiyen, sorumluluk, nuh)"
                  className="w-full rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] py-3.5 pl-11 pr-10 text-sm placeholder-[#7E9387] focus:border-[#2D6A4F] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all dark:border-[#2C3B31] dark:bg-[#16221A] dark:text-[#E8F1EC]"
                />

                {aramaMetni && (
                  <button
                    onClick={() => setAramaMetni('')}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#7E9387] hover:text-[#162D23] transition-colors dark:hover:text-[#E8F1EC]"
                    title="Aramayı temizle"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Kategori Filtre Butonları */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                <button
                  onClick={() => setSeciliFiltre('tumu')}
                  className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                    seciliFiltre === 'tumu'
                      ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                      : 'border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF]'
                  }`}
                >
                  Tüm Kayıtlar ({kelimeler.length})
                </button>

                <button
                  onClick={() => setSeciliFiltre('kelimeler')}
                  className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                    seciliFiltre === 'kelimeler'
                      ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                      : 'border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF]'
                  }`}
                >
                  Kadim Kelimeler
                </button>

                <button
                  onClick={() => setSeciliFiltre('deyimler')}
                  className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                    seciliFiltre === 'deyimler'
                      ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                      : 'border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF]'
                  }`}
                >
                  Deyimler & Terkipler
                </button>

                <button
                  onClick={() => setSeciliFiltre('atasozleri')}
                  className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                    seciliFiltre === 'atasozleri'
                      ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                      : 'border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF]'
                  }`}
                >
                  Atasözleri
                </button>

                <button
                  onClick={() => setSeciliFiltre('favoriler')}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                    seciliFiltre === 'favoriler'
                      ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                      : 'border border-[#E3DDCF] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF]'
                  }`}
                >
                  <Bookmark className="h-3 w-3" />
                  <span>Favorilerim ({favoriler.length})</span>
                </button>
              </div>

              {/* Zaman Tüneli · Dönem ve Köken Filtresi */}
              <div className="pt-3 border-t border-[#EAE4D7] dark:border-[#27362E] flex flex-col items-center gap-2">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#52796F] dark:text-[#8AA39B] uppercase tracking-wider">
                  <History className="h-3.5 w-3.5 text-[#2D6A4F] dark:text-[#74C69D]" />
                  <span>Zaman Tüneli · Dönem / Köken Filtresi</span>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  <button
                    onClick={() => setSeciliDonem('Tüm Dönemler')}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      seciliDonem === 'Tüm Dönemler'
                        ? 'bg-[#1E3B2E] text-[#FAF8F3] shadow-sm dark:bg-[#74C69D] dark:text-[#0F1712]'
                        : 'border border-[#DCD5C6] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF]'
                    }`}
                  >
                    Tüm Dönemler ({kelimeler.length})
                  </button>
                  {DONEM_LISTESI.map(donem => {
                    const count = kelimeler.filter(k => k.donem === donem).length;
                    return (
                      <button
                        key={donem}
                        onClick={() => setSeciliDonem(donem)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                          seciliDonem === donem
                            ? 'bg-[#1E3B2E] text-[#FAF8F3] shadow-sm dark:bg-[#74C69D] dark:text-[#0F1712]'
                            : 'border border-[#DCD5C6] bg-[#FAF8F3] text-[#4E6357] hover:bg-[#F3EFE6] dark:border-[#27382D] dark:bg-[#17231C] dark:text-[#A7B9AF]'
                        }`}
                      >
                        <span>{donem}</span>
                        <span className="ml-1 text-[10px] opacity-80">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Günün Kelimesi Kartı (Arama yapılmıyorken ve tüm dönemler seçiliyken göster) */}
            {!aramaMetni && seciliFiltre === 'tumu' && seciliDonem === 'Tüm Dönemler' && (
              <GununKelimesiCard
                kelime={gununKelimesi}
                onOpenDetail={handleOpenDetail}
              />
            )}

            {/* Kelime Listesi Başlığı & Sayaç */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E3DDCF] pb-3 dark:border-[#28382E]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B]">
                  Sözlük Dizini
                </h3>
                <span className="text-xs text-[#5C6E64] dark:text-[#8E9F96]">
                  {filtrelenmisKelimeler.length} kayıt arasından {Math.min(gorunenLimit, filtrelenmisKelimeler.length)} gösteriliyor
                </span>
              </div>

              {/* Kelime Kartları Grid */}
              {filtrelenmisKelimeler.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filtrelenmisKelimeler.slice(0, gorunenLimit).map(item => (
                      <WordCard
                        key={item.id}
                        kelime={item}
                        isFavorite={favoriler.includes(item.id)}
                        onToggleFavorite={toggleFavorite}
                        onOpenDetail={handleOpenDetail}
                      />
                    ))}
                  </div>

                  {/* Daha Fazla Göster Butonu */}
                  {gorunenLimit < filtrelenmisKelimeler.length && (
                    <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setGorunenLimit(prev => prev + 24)}
                        className="rounded-full bg-[#2D6A4F] px-6 py-2.5 text-xs font-semibold text-[#FAF8F3] shadow-sm hover:bg-[#24543E] transition-all dark:bg-[#3E8E6B] dark:text-[#0F1712]"
                      >
                        Daha Fazla Kelime Göster (+24)
                      </button>
                      <button
                        onClick={() => setGorunenLimit(filtrelenmisKelimeler.length)}
                        className="rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-5 py-2.5 text-xs font-medium text-[#2F4237] hover:bg-[#EFEAE0] transition-colors dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC]"
                      >
                        Tümünü Göster ({filtrelenmisKelimeler.length})
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 rounded-2xl border border-dashed border-[#D5CEBF] p-8 dark:border-[#2E3C33]">
                  <p className="font-serif text-xl text-[#3A4E43] dark:text-[#B6C8BF]">
                    Aradığınız kriterlere uygun kadim kelime bulunamadı.
                  </p>
                  <p className="mt-1 text-xs text-[#5C6E64] dark:text-[#8E9F96]">
                    Farklı bir kelime arayabilir veya filtreleri sıfırlayabilirsiniz.
                  </p>
                  <button
                    onClick={() => {
                      setAramaMetni('');
                      setSeciliFiltre('tumu');
                      setSeciliDonem('Tüm Dönemler');
                    }}
                    className="mt-4 rounded-full bg-[#2D6A4F] px-4 py-2 text-xs font-semibold text-[#FAF8F3] hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712]"
                  >
                    Tüm Kelimeleri Göster
                  </button>
                </div>
              )}
            </section>
          </div>
        )}

        {/* SEKME 2: KADİM KELİME AVI (5 HARFLİ WORDLE OYUNU) */}
        {activeTab === 'wordle' && (
          <KelimeAvi
            onBackToDictionary={() => setActiveTab('dictionary')}
          />
        )}

        {/* SEKME 3: MİNİ OYUN (KELİME TESTİ) */}
        {activeTab === 'quiz' && (
          <KelimeTesti
            kelimeler={kelimeler}
            onBackToDictionary={() => setActiveTab('dictionary')}
          />
        )}

        {/* SEKME 4: HAKKINDA BÖLÜMÜ */}
        {activeTab === 'about' && (
          <div className="mx-auto max-w-3xl py-6 space-y-6">
            <div className="rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 sm:p-10 shadow-sm dark:border-[#2C3B31] dark:bg-[#16221A] space-y-6">
              
              <div className="flex items-center gap-3 border-b border-[#E3DDCF] pb-4 dark:border-[#27382D]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] dark:bg-[#74C69D]/15 dark:text-[#74C69D]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#162D23] dark:text-[#E8F1EC]">
                    Dilimizin Zenginlikleri Projesi
                  </h2>
                  <p className="text-xs text-[#52796F] dark:text-[#8AA39B]">
                    Tevfik Serdar Anadolu Lisesi · Türk Dili ve Edebiyatı Zümresi
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-[#33463C] dark:text-[#C5D5CC]">
                <p>
                  <strong>Kadim Kelimeler Sözlüğü</strong>, Millî Eğitim Bakanlığı tarafından yürütülen <em>"Dilimizin Zenginlikleri"</em> projesi kapsamında öğrencilerimizin söz varlığını zenginleştirmek, dilimizin kadim edebi birikimini ve kavramsal derinliğini kavratmak amacıyla hazırlanmıştır.
                </p>

                <p>
                  Sözlükte yer alan her bir kelime, köken bilgisi, telaffuz rehberi, edebi kullanım örneği ve <strong>Türkçe sesli okuma desteği (Web Speech API)</strong> ile donatılmıştır.
                </p>

                <div className="my-6 rounded-xl border border-[#E3DDCF] bg-[#F4EFE5] p-5 dark:border-[#28382E] dark:bg-[#1B271F] space-y-3">
                  <h4 className="font-serif text-lg font-bold text-[#162D23] dark:text-[#E8F1EC]">
                    Uygulamanın Öne Çıkan Özellikleri
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4E6357] dark:text-[#A5B7AC]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D6A4F] font-bold">·</span>
                      <span><strong>Dönem / Köken Filtresi (Zaman Tüneli):</strong> Göktürkçe izlerinden Karahanlı dönemi ve Divan edebiyatına kadar kelimeleri kronolojik dönemlerine göre keşfetme imkânı.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D6A4F] font-bold">·</span>
                      <span><strong>Kadim Kelime Avı (5 Harf):</strong> 6 denemede 5 harfli kadim kelimeyi bulma, renkli harf geri bildirimleri ve Türkçe klavye desteği (Wordle konsepti).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D6A4F] font-bold">·</span>
                      <span><strong>Anlık Arama:</strong> Harf girdikçe canlı kelime ve anlam filtreleme.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D6A4F] font-bold">·</span>
                      <span><strong>Sesli Telaffuz:</strong> Tarayıcı tabanlı yüksek kaliteli Türkçe ses sentezi (`tr-TR`).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D6A4F] font-bold">·</span>
                      <span><strong>Beni Şaşırt:</strong> Rastgele bir kadim kelimeyi keşfetme mekanizması.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D6A4F] font-bold">·</span>
                      <span><strong>10 Soruluk Mini Oyun (Kelime Testi):</strong> Çoktan seçmeli interaktif quiz ve anlık geri bildirim.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D6A4F] font-bold">·</span>
                      <span><strong>Tek Bağımsız HTML Desteği:</strong> İnternetsiz akıllı tahtalarda tek dosya halinde çalışabilme.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Kelimeler veritabanı düzenli olarak genişletilebilir ve yeni kadim sözcükler eklenebilir.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E3DDCF] dark:border-[#27382D]">
                <button
                  onClick={() => setActiveTab('wordle')}
                  className="flex items-center gap-1.5 rounded-full bg-[#2D6A4F] px-5 py-2 text-xs font-semibold text-[#FAF8F3] hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712]"
                >
                  <Grid3X3 className="h-3.5 w-3.5" />
                  <span>Kelime Avı Oyna</span>
                </button>

                <button
                  onClick={() => setActiveTab('quiz')}
                  className="flex items-center gap-1.5 rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-5 py-2 text-xs font-medium text-[#2F4237] hover:bg-[#EFEAE0] dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC]"
                >
                  <Gamepad2 className="h-3.5 w-3.5" />
                  <span>Kelime Testine Başla</span>
                </button>

                <button
                  onClick={() => setActiveTab('dictionary')}
                  className="flex items-center gap-1.5 rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-5 py-2 text-xs font-medium text-[#2F4237] hover:bg-[#EFEAE0] dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC]"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Sözlüğe Göz At</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Alt Bilgi (Footer) */}
      <footer className="border-t border-[#E3DDCF] bg-[#FAF8F3] py-6 text-xs text-[#5C6E64] transition-colors dark:border-[#28382E] dark:bg-[#121A15] dark:text-[#8AA39B]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="font-serif font-bold text-sm text-[#1E3B2E] dark:text-[#E2EBE5]">
              Kadim Kelimeler Sözlüğü
            </p>
            <p className="text-[11px] text-[#6A8174] dark:text-[#7A9386]">
              Tevfik Serdar Anadolu Lisesi · Dilimizin Zenginlikleri Projesi
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setActiveTab('about')}
              className="hover:text-[#2D6A4F] transition-colors dark:hover:text-[#74C69D]"
            >
              Hakkında
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('wordle')}
              className="hover:text-[#2D6A4F] transition-colors dark:hover:text-[#74C69D]"
            >
              Kelime Avı
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('quiz')}
              className="hover:text-[#2D6A4F] transition-colors dark:hover:text-[#74C69D]"
            >
              Kelime Testi
            </button>
            <span>·</span>
            <button
              onClick={() => setExportModalOpen(true)}
              className="hover:text-[#2D6A4F] transition-colors dark:hover:text-[#74C69D]"
            >
              Tek Dosya İndir
            </button>
          </div>
        </div>
      </footer>

      {/* MODALLAR */}
      <SurpriseModal
        kelime={surpriseKelime}
        isOpen={surpriseModalOpen}
        onClose={() => setSurpriseModalOpen(false)}
        onNextSurprise={handleNextSurprise}
        isFavorite={surpriseKelime ? favoriler.includes(surpriseKelime.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      <WordDetailModal
        kelime={selectedWord}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        isFavorite={selectedWord ? favoriler.includes(selectedWord.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      <SingleFileExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />
    </div>
  );
}
