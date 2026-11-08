import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Check, X, Trophy, RotateCcw, Volume2, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { KadimKelime } from '../data/words';
import { seslendirMetin, seslendirmeyiDurdur } from '../utils/speech';

interface KelimeTestiProps {
  kelimeler: KadimKelime[];
  onBackToDictionary: () => void;
}

interface Soru {
  id: string;
  kelime: KadimKelime;
  secenekler: string[]; // 4 anlam
  dogruCevap: string;
}

export const KelimeTesti: React.FC<KelimeTestiProps> = ({ kelimeler, onBackToDictionary }) => {
  const [sorular, setSorular] = useState<Soru[]>([]);
  const [aktifSoruIndex, setAktifSoruIndex] = useState(0);
  const [secilenCevap, setSecilenCevap] = useState<string | null>(null);
  const [dogruSayisi, setDogruSayisi] = useState(0);
  const [yanlisSayisi, setYanlisSayisi] = useState(0);
  const [testBitti, setTestBitti] = useState(false);
  const [cevapGecmisi, setCevapGecmisi] = useState<
    Array<{ soru: Soru; secilen: string; dogruMu: boolean }>
  >([]);

  // Soruları oluştur ve karıştır
  const testiHazirla = useCallback(() => {
    if (kelimeler.length === 0) return;

    // Kelimeleri karıştır
    const karisikKelimeler = [...kelimeler].sort(() => Math.random() - 0.5);
    // 10 soru (veya mevcut kelime sayısı kadar)
    const seciliKelimeler = karisikKelimeler.slice(0, Math.min(10, karisikKelimeler.length));

    const yeniSorular: Soru[] = seciliKelimeler.map((k) => {
      // Diğer kelimelerin anlamlarından 3 adet çeldirici seç
      const digerAnlamlar = kelimeler
        .filter((item) => item.id !== k.id)
        .map((item) => item.anlam)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const tumSecenekler = [k.anlam, ...digerAnlamlar].sort(() => Math.random() - 0.5);

      return {
        id: k.id,
        kelime: k,
        secenekler: tumSecenekler,
        dogruCevap: k.anlam,
      };
    });

    setSorular(yeniSorular);
    setAktifSoruIndex(0);
    setSecilenCevap(null);
    setDogruSayisi(0);
    setYanlisSayisi(0);
    setTestBitti(false);
    setCevapGecmisi([]);
  }, [kelimeler]);

  useEffect(() => {
    testiHazirla();
  }, [testiHazirla]);

  const aktifSoru = sorular[aktifSoruIndex];

  const handleCevapSec = (secenek: string) => {
    if (secilenCevap !== null || !aktifSoru) return;

    setSecilenCevap(secenek);
    const dogruMu = secenek === aktifSoru.dogruCevap;

    if (dogruMu) {
      setDogruSayisi((prev) => prev + 1);
    } else {
      setYanlisSayisi((prev) => prev + 1);
    }

    setCevapGecmisi((prev) => [
      ...prev,
      {
        soru: aktifSoru,
        secilen: secenek,
        dogruMu,
      },
    ]);
  };

  const handleSonrakiSoru = () => {
    seslendirmeyiDurdur();
    if (aktifSoruIndex + 1 < sorular.length) {
      setAktifSoruIndex((prev) => prev + 1);
      setSecilenCevap(null);
    } else {
      setTestBitti(true);
    }
  };

  const handleKelimeSeslendir = (kelime: string) => {
    seslendirMetin(kelime);
  };

  const basariYuzdesi = useMemo(() => {
    if (sorular.length === 0) return 0;
    return Math.round((dogruSayisi / sorular.length) * 100);
  }, [dogruSayisi, sorular.length]);

  if (sorular.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-[#5C6E64] dark:text-[#95A89E]">Test hazırlanıyor...</p>
      </div>
    );
  }

  // TEST SONUÇ EKRANI
  if (testBitti) {
    return (
      <div className="mx-auto max-w-3xl py-8">
        <div className="overflow-hidden rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 sm:p-10 shadow-sm dark:border-[#2C3B31] dark:bg-[#16221A]">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] dark:bg-[#74C69D]/15 dark:text-[#74C69D]">
              <Trophy className="h-8 w-8" />
            </div>

            <span className="text-xs font-semibold tracking-wider text-[#52796F] uppercase dark:text-[#8AA39B]">
              Tevfik Serdar Anadolu Lisesi · Dilimizin Zenginlikleri
            </span>

            <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-bold text-[#162D23] dark:text-[#E8F1EC]">
              Kelime Testi Tamamlandı
            </h2>

            <p className="mt-3 text-base text-[#4A5E53] dark:text-[#B1C3B9] max-w-xl mx-auto">
              {basariYuzdesi === 100
                ? 'Harikulade bir başarı! Kadim kelimelerimizin derin manalarına ve Türkçemizin zenginliğine bütünüyle hâkimsiniz.'
                : basariYuzdesi >= 70
                ? 'Tebrikler! Dilimizin zenginliklerine olan ilginiz ve kadim kelime dağarcığınız takdire şayan.'
                : 'Güzel bir gayret! Sözlükteki kadim kelimeleri dinleyerek ve inceleyerek bilginizi daha da pekiştirebilirsiniz.'}
            </p>

            {/* Skor Kartları */}
            <div className="my-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto">
              <div className="rounded-xl border border-[#E3DDCF] bg-[#F4EFE5] p-4 dark:border-[#27382D] dark:bg-[#1C2820]">
                <span className="block text-xs text-[#5C6E64] dark:text-[#8AA39B]">Doğru</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2D6A4F] dark:text-[#74C69D]">
                  {dogruSayisi}
                </span>
              </div>
              <div className="rounded-xl border border-[#E3DDCF] bg-[#F4EFE5] p-4 dark:border-[#27382D] dark:bg-[#1C2820]">
                <span className="block text-xs text-[#5C6E64] dark:text-[#8AA39B]">Yanlış</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B94A32] dark:text-[#E07A5F]">
                  {yanlisSayisi}
                </span>
              </div>
              <div className="rounded-xl border border-[#E3DDCF] bg-[#F4EFE5] p-4 dark:border-[#27382D] dark:bg-[#1C2820]">
                <span className="block text-xs text-[#5C6E64] dark:text-[#8AA39B]">Başarı</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#162D23] dark:text-[#E8F1EC]">
                  %{basariYuzdesi}
                </span>
              </div>
            </div>

            {/* Eylem Butonları */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={testiHazirla}
                className="flex items-center gap-2 rounded-full bg-[#2D6A4F] px-6 py-2.5 text-sm font-semibold text-[#FAF8F3] shadow-sm transition-all hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712] dark:hover:bg-[#4EA57E]"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Testi Yeniden Başlat</span>
              </button>

              <button
                onClick={onBackToDictionary}
                className="flex items-center gap-2 rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-6 py-2.5 text-sm font-medium text-[#2F4237] transition-colors hover:bg-[#EFEAE0] dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC] dark:hover:bg-[#233229]"
              >
                <BookOpen className="h-4 w-4" />
                <span>Sözlüğe Göz At</span>
              </button>
            </div>
          </div>

          {/* Soru İnceleme Listesi */}
          <div className="mt-10 border-t border-[#E3DDCF] pt-6 dark:border-[#2C3B31]">
            <h3 className="font-serif text-lg font-bold text-[#162D23] dark:text-[#E8F1EC] mb-4">
              Cevaplarınızın Özeti
            </h3>

            <div className="space-y-3">
              {cevapGecmisi.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-1 rounded-xl border p-4 text-xs transition-colors ${
                    item.dogruMu
                      ? 'border-[#C2DFC9] bg-[#F1F8F3] dark:border-[#2A4833] dark:bg-[#152319]'
                      : 'border-[#EBCFC8] bg-[#FDF5F3] dark:border-[#4D2821] dark:bg-[#241715]'
                  }`}
                >
                  <div className="flex items-center justify-between font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[#5C6E64] dark:text-[#8AA39B]">{idx + 1}.</span>
                      <span className="font-serif text-sm font-bold text-[#162D23] dark:text-[#E8F1EC]">
                        {item.soru.kelime.kelime}
                      </span>
                    </div>

                    <span
                      className={`flex items-center gap-1 font-medium ${
                        item.dogruMu ? 'text-[#2D6A4F] dark:text-[#74C69D]' : 'text-[#B94A32] dark:text-[#E07A5F]'
                      }`}
                    >
                      {item.dogruMu ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Doğru</span>
                        </>
                      ) : (
                        <>
                          <X className="h-3.5 w-3.5" />
                          <span>Yanlış</span>
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-[#3E5246] dark:text-[#A7B9AF]">
                    <strong className="text-[#1E3B2E] dark:text-[#D1DFD7]">Doğru Anlam:</strong> {item.soru.dogruCevap}
                  </p>

                  {!item.dogruMu && (
                    <p className="text-[#B94A32] dark:text-[#E07A5F]">
                      <strong>Sizin Seçiminiz:</strong> {item.secilen}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AKTİF TEST SORU EKRANI
  return (
    <div className="mx-auto max-w-3xl py-4 sm:py-8">
      {/* İlerleme ve Başlık Şeridi */}
      <div className="mb-6 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-[#5C6E64] dark:text-[#95A89E]">
          <span className="font-medium">
            Soru <span className="font-mono font-bold text-[#162D23] dark:text-[#E8F1EC]">{aktifSoruIndex + 1}</span> / {sorular.length}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#2D6A4F] dark:text-[#74C69D] font-medium">
              Doğru: {dogruSayisi}
            </span>
            <span className="text-[#B94A32] dark:text-[#E07A5F] font-medium">
              Yanlış: {yanlisSayisi}
            </span>
          </div>
        </div>

        {/* İlerleme Çubuğu */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E5DFD3] dark:bg-[#25332A]">
          <div
            className="h-full bg-[#2D6A4F] transition-all duration-300 dark:bg-[#3E8E6B]"
            style={{ width: `${((aktifSoruIndex + 1) / sorular.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Soru Kartı */}
      <div className="rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 sm:p-8 shadow-sm dark:border-[#2C3B31] dark:bg-[#16221A]">
        {/* Üst Kısım: Soru Türü & Seslendirme */}
        <div className="flex items-center justify-between border-b border-[#E3DDCF] pb-4 dark:border-[#27382D]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B]">
            Bu kadim kelimenin doğru anlamı hangisidir?
          </span>

          <button
            onClick={() => handleKelimeSeslendir(aktifSoru.kelime.kelime)}
            className="flex items-center gap-1.5 rounded-full border border-[#CBD5C0] bg-[#FAF8F3] px-3 py-1 text-xs font-medium text-[#2D6A4F] hover:bg-[#EBF2ED] transition-colors dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#95D5B2] dark:hover:bg-[#25352C]"
            title="Kelimeyi sesli dinle"
          >
            <Volume2 className="h-3.5 w-3.5" />
            <span>Dinle</span>
          </button>
        </div>

        {/* Hedef Kelime */}
        <div className="my-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]">
            {aktifSoru.kelime.kelime}
          </h2>
          {aktifSoru.kelime.telaffuz && (
            <p className="mt-1 font-serif text-sm italic text-[#52796F] dark:text-[#8AA39B]">
              [{aktifSoru.kelime.telaffuz}]
            </p>
          )}
          <div className="mt-2 text-xs text-[#5C6E64] dark:text-[#8E9F96]">
            <span>{aktifSoru.kelime.turu}</span>
            <span className="mx-1.5">·</span>
            <span>{aktifSoru.kelime.koken}</span>
          </div>
        </div>

        {/* 4 Seçenek Şıkları */}
        <div className="space-y-3">
          {aktifSoru.secenekler.map((secenek, index) => {
            const harf = ['A', 'B', 'C', 'D'][index];
            const secildi = secilenCevap === secenek;
            const dogruCevapMi = secenek === aktifSoru.dogruCevap;
            const cevapVerildi = secilenCevap !== null;

            let stil = 'border-[#E0D9CB] bg-[#F7F4EC] text-[#24352D] hover:border-[#2D6A4F] hover:bg-[#EFEAE0] dark:border-[#2B3B30] dark:bg-[#1B271F] dark:text-[#D5E2DA] dark:hover:border-[#3E8E6B] dark:hover:bg-[#223127]';

            if (cevapVerildi) {
              if (dogruCevapMi) {
                // Doğru şık her zaman yeşil vurgulanır
                stil = 'border-[#2D6A4F] bg-[#E8F5ED] text-[#14472F] font-semibold dark:border-[#3E8E6B] dark:bg-[#1A3324] dark:text-[#A6E3C0] ring-1 ring-[#2D6A4F]/20';
              } else if (secildi && !dogruCevapMi) {
                // Kullanıcının seçtiği yanlış şık kırmızı vurgulanır
                stil = 'border-[#B94A32] bg-[#FDF0ED] text-[#7A2818] dark:border-[#E07A5F] dark:bg-[#341C17] dark:text-[#F3B0A0] ring-1 ring-[#B94A32]/20';
              } else {
                // Seçilmeyen diğer şıklar sönükleşir
                stil = 'opacity-50 border-[#E0D9CB] bg-[#F7F4EC] text-[#5C6E64] dark:border-[#2B3B30] dark:bg-[#1B271F] dark:text-[#7A8E83]';
              }
            }

            return (
              <button
                key={index}
                disabled={cevapVerildi}
                onClick={() => handleCevapSec(secenek)}
                className={`group flex w-full items-start gap-3.5 rounded-xl border p-4 text-left transition-all text-sm leading-relaxed ${stil}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current font-mono text-xs font-bold">
                  {harf}
                </span>

                <span className="flex-1 pt-0.5">{secenek}</span>

                {cevapVerildi && dogruCevapMi && (
                  <Check className="h-5 w-5 shrink-0 text-[#2D6A4F] dark:text-[#74C69D]" />
                )}
                {cevapVerildi && secildi && !dogruCevapMi && (
                  <X className="h-5 w-5 shrink-0 text-[#B94A32] dark:text-[#E07A5F]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Cevap Sonrası Açıklama ve Sonraki Butonu */}
        {secilenCevap !== null && (
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E3DDCF] pt-4 dark:border-[#27382D]">
            <div className="text-xs text-[#5C6E64] dark:text-[#95A89E]">
              {secilenCevap === aktifSoru.dogruCevap ? (
                <span className="font-semibold text-[#2D6A4F] dark:text-[#74C69D] flex items-center gap-1">
                  <Check className="h-4 w-4" /> Doğru cevap! Tebrikler.
                </span>
              ) : (
                <span className="font-semibold text-[#B94A32] dark:text-[#E07A5F] flex items-center gap-1">
                  <X className="h-4 w-4" /> Yanlış! Doğru cevap yukarıda yeşille işaretlendi.
                </span>
              )}
            </div>

            <button
              onClick={handleSonrakiSoru}
              className="flex items-center gap-2 rounded-full bg-[#2D6A4F] px-5 py-2 text-xs font-semibold text-[#FAF8F3] shadow-sm transition-all hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712] dark:hover:bg-[#4EA57E]"
            >
              <span>{aktifSoruIndex + 1 === sorular.length ? 'Sonuçları Gör' : 'Sonraki Soru'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
