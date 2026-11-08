import React, { useState } from 'react';
import { Volume2, VolumeX, Bookmark, Copy, Check, ArrowUpRight } from 'lucide-react';
import { KadimKelime } from '../data/words';
import { seslendirMetin, seslendirmeyiDurdur } from '../utils/speech';

interface WordCardProps {
  kelime: KadimKelime;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenDetail: (kelime: KadimKelime) => void;
}

export const WordCard: React.FC<WordCardProps> = ({
  kelime,
  isFavorite,
  onToggleFavorite,
  onOpenDetail,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      seslendirmeyiDurdur();
      setIsPlaying(false);
      return;
    }

    const textToRead = `${kelime.kelime}. Anlamı: ${kelime.anlam}`;
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
    <article
      onClick={() => onOpenDetail(kelime)}
      className="group relative flex flex-col justify-between rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CBD5C0] hover:shadow-md cursor-pointer dark:border-[#28382F] dark:bg-[#18231C] dark:hover:border-[#3E5C49] dark:hover:shadow-none"
    >
      <div>
        {/* Üst Kısım: Tür / Köken / Dönem & Favori / Kopyala */}
        <div className="flex items-center justify-between gap-2 text-xs text-[#5C6E64] dark:text-[#8E9F96] mb-3">
          <div className="flex flex-wrap items-center gap-1.5 font-medium">
            <span>{kelime.turu}</span>
            <span aria-hidden="true">·</span>
            <span>{kelime.koken}</span>
            {kelime.donem && (
              <>
                <span aria-hidden="true">·</span>
                <span className="rounded-md bg-[#E8F0EB] px-1.5 py-0.5 text-[10px] font-medium text-[#204E39] dark:bg-[#1E2E24] dark:text-[#8CD0AE]">
                  {kelime.donem}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(kelime.id);
              }}
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                isFavorite
                  ? 'text-[#C95A3F] hover:bg-[#C95A3F]/10'
                  : 'text-[#8A9B91] hover:bg-[#EFEAE0] hover:text-[#33463C] dark:text-[#64786E] dark:hover:bg-[#223028] dark:hover:text-[#C5D5CC]'
              }`}
              title={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleCopy}
              className="flex h-7 w-7 items-center justify-center rounded-full text-[#8A9B91] hover:bg-[#EFEAE0] hover:text-[#33463C] transition-colors dark:text-[#64786E] dark:hover:bg-[#223028] dark:hover:text-[#C5D5CC]"
              title="Kelimeyi ve anlamı kopyala"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-[#2D6A4F] dark:text-[#74C69D]" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Kelime Başlığı & Telaffuz */}
        <div className="mb-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#162D23] transition-colors group-hover:text-[#2D6A4F] dark:text-[#E8F1EC] dark:group-hover:text-[#88D4AB]">
              {kelime.kelime}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-[#8A9B91] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-[#64786E]" />
          </div>

          {kelime.telaffuz && (
            <p className="font-serif text-xs italic text-[#52796F] dark:text-[#8AA39B] mt-0.5">
              [{kelime.telaffuz}]
            </p>
          )}
        </div>

        {/* Anlam */}
        <p className="text-sm leading-relaxed text-[#2C3F34] font-medium dark:text-[#D1DFD7] line-clamp-3">
          {kelime.anlam}
        </p>

        {/* Örnek Cümle */}
        <div className="mt-4 border-t border-[#EAE4D7] pt-3 dark:border-[#27352D]">
          <p className="font-serif text-xs italic leading-relaxed text-[#4F6357] dark:text-[#A7B9AF] line-clamp-2">
            "{kelime.ornekCumle}"
          </p>
        </div>
      </div>

      {/* Alt Eylemler: Seslendirme */}
      <div className="mt-4 flex items-center justify-between pt-2 border-t border-transparent text-xs">
        <button
          onClick={handleSpeak}
          className={`flex items-center gap-1.5 rounded-full border px-3 py-1 font-medium transition-all ${
            isPlaying
              ? 'border-[#2D6A4F] bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
              : 'border-[#CBD5C0] bg-[#FAF8F3] text-[#2D6A4F] hover:bg-[#EBF2ED] dark:border-[#334639] dark:bg-[#1D2921] dark:text-[#88D4AB] dark:hover:bg-[#25352A]'
          }`}
          title={isPlaying ? 'Seslendirmeyi durdur' : 'Türkçe telaffuzu ve anlamı dinle'}
        >
          {isPlaying ? (
            <>
              <VolumeX className="h-3.5 w-3.5 animate-pulse" />
              <span>Durdur</span>
            </>
          ) : (
            <>
              <Volume2 className="h-3.5 w-3.5" />
              <span>Dinle</span>
            </>
          )}
        </button>

        <span className="text-[11px] text-[#7A8E83] dark:text-[#6F8377] group-hover:text-[#2D6A4F] dark:group-hover:text-[#88D4AB] transition-colors">
          Ayrıntılar &rarr;
        </span>
      </div>
    </article>
  );
};
