import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, BookMarked, Copy, Check } from 'lucide-react';
import { KadimKelime } from '../data/words';
import { seslendirMetin, seslendirmeyiDurdur } from '../utils/speech';

interface GununKelimesiCardProps {
  kelime: KadimKelime;
  onOpenDetail: (kelime: KadimKelime) => void;
}

export const GununKelimesiCard: React.FC<GununKelimesiCardProps> = ({ kelime, onOpenDetail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      seslendirmeyiDurdur();
      setIsPlaying(false);
      return;
    }

    const textToRead = `${kelime.kelime}. Anlamı: ${kelime.anlam} Örnek cümle: ${kelime.ornekCumle}`;
    seslendirMetin(
      textToRead,
      () => setIsPlaying(true),
      () => setIsPlaying(false),
      () => setIsPlaying(false)
    );
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${kelime.kelime}: ${kelime.anlam}\nÖrnek: "${kelime.ornekCumle}"`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#D8D0BF] bg-gradient-to-br from-[#F5F1E8] via-[#F8F5EE] to-[#EFEAE0] p-6 sm:p-8 shadow-sm transition-all dark:border-[#2E3C33] dark:from-[#17221B] dark:via-[#1A261F] dark:to-[#141C17]">
      {/* Arka plan zarif hat deseni motifi */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#2D6A4F]/5 blur-3xl dark:bg-[#74C69D]/5" 
      />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Üst Başlık Şeridi */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E3DDCF]/80 pb-4 dark:border-[#2C3B31]">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] dark:bg-[#74C69D]/15 dark:text-[#74C69D]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase dark:text-[#88D4AB]">
              Günün Kadim Kelimesi
            </span>
          </div>

          {/* Unboxed Temiz Üstveri */}
          <div className="flex items-center gap-2 text-xs text-[#5C6E64] dark:text-[#95A89E]">
            <span>{kelime.turu}</span>
            <span aria-hidden="true">·</span>
            <span>{kelime.koken}</span>
          </div>
        </div>

        {/* Kelime ve Telaffuz Alanı */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]">
              {kelime.kelime}
            </h2>
            {kelime.telaffuz && (
              <span className="font-serif text-sm sm:text-base italic text-[#52796F] dark:text-[#8AA39B]">
                [{kelime.telaffuz}]
              </span>
            )}
          </div>

          {/* Hızlı Eylemler: Dinle, Kopyala */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleSpeak}
              className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                isPlaying
                  ? 'border-[#2D6A4F] bg-[#2D6A4F] text-[#FAF8F3] ring-2 ring-[#2D6A4F]/30 dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                  : 'border-[#CBD5C0] bg-[#FAF8F3] text-[#2D6A4F] hover:bg-[#EBF2ED] dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#95D5B2] dark:hover:bg-[#25352C]'
              }`}
              title={isPlaying ? 'Seslendirmeyi durdur' : 'Kelimeyi ve anlamını Türkçe dinle'}
            >
              {isPlaying ? (
                <>
                  <VolumeX className="h-4 w-4 animate-pulse" />
                  <span>Durdur</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4" />
                  <span>Seslendir</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopy}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D5CEBF] bg-[#FAF8F3] text-[#4A5D52] transition-colors hover:bg-[#EFEAE0] dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#A7B9AF] dark:hover:bg-[#25352C]"
              title="Kelimeyi ve anlamını panoya kopyala"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-[#2D6A4F] dark:text-[#74C69D]" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Anlam Alanı */}
        <div className="rounded-xl border border-[#E1DACB] bg-[#FAF8F3]/80 p-4 sm:p-5 dark:border-[#28382F] dark:bg-[#141E18]/70">
          <p className="text-base sm:text-lg leading-relaxed text-[#24352D] font-medium dark:text-[#D5E2DA]">
            {kelime.anlam}
          </p>

          {kelime.ekBilgi && (
            <p className="mt-2 text-xs sm:text-sm text-[#5C6E64] dark:text-[#8E9F96]">
              {kelime.ekBilgi}
            </p>
          )}
        </div>

        {/* Edebi Örnek Cümle */}
        <div className="flex flex-col gap-1 border-t border-[#E3DDCF]/70 pt-4 dark:border-[#2C3B31]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B]">
            Edebi Kullanım Örneği
          </span>
          <blockquote className="font-serif text-base sm:text-lg italic leading-relaxed text-[#33463C] dark:text-[#C5D5CC]">
            "{kelime.ornekCumle}"
          </blockquote>
        </div>

        {/* Alt Bilgi & Detay Açma */}
        <div className="flex items-center justify-between pt-1 text-xs">
          <span className="text-[#6C8074] dark:text-[#82968B]">
            Dilimizin Zenginlikleri Projesi Özel Seçkisi
          </span>
          <button
            onClick={() => onOpenDetail(kelime)}
            className="flex items-center gap-1 font-semibold text-[#2D6A4F] hover:underline dark:text-[#74C69D]"
          >
            <span>Ayrıntılı İncele</span>
            <BookMarked className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
