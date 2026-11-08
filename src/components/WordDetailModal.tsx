import React, { useState } from 'react';
import { X, Volume2, VolumeX, Bookmark, Copy, Check } from 'lucide-react';
import { KadimKelime } from '../data/words';
import { seslendirMetin, seslendirmeyiDurdur } from '../utils/speech';

interface WordDetailModalProps {
  kelime: KadimKelime | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const WordDetailModal: React.FC<WordDetailModalProps> = ({
  kelime,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !kelime) return null;

  const handleSpeak = () => {
    if (isPlaying) {
      seslendirmeyiDurdur();
      setIsPlaying(false);
      return;
    }

    const metin = `${kelime.kelime}. Anlamı: ${kelime.anlam} Örnek cümle: ${kelime.ornekCumle}`;
    seslendirMetin(
      metin,
      () => setIsPlaying(true),
      () => setIsPlaying(false),
      () => setIsPlaying(false)
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${kelime.kelime}: ${kelime.anlam}\nÖrnek: "${kelime.ornekCumle}"`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCloseModal = () => {
    seslendirmeyiDurdur();
    setIsPlaying(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Karartma */}
      <div
        onClick={handleCloseModal}
        className="fixed inset-0 bg-[#141C17]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal İçeriği */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 sm:p-8 shadow-2xl transition-all dark:border-[#2E3C33] dark:bg-[#16221A]">
        {/* Üst Kısım */}
        <div className="flex items-center justify-between border-b border-[#E3DDCF] pb-4 dark:border-[#27382D]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#52796F] dark:text-[#8AA39B]">
            <span>{kelime.turu}</span>
            <span>·</span>
            <span>{kelime.koken}</span>
            {kelime.donem && (
              <>
                <span>·</span>
                <span className="rounded-full bg-[#E5ECE7] px-2.5 py-0.5 text-[11px] font-medium text-[#24533E] dark:bg-[#1E3025] dark:text-[#86CEAA]">
                  {kelime.donem}
                </span>
              </>
            )}
          </div>

          <button
            onClick={handleCloseModal}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#5C6E64] hover:bg-[#EFEAE0] hover:text-[#162D23] transition-colors dark:text-[#8AA39B] dark:hover:bg-[#223028] dark:hover:text-[#E8F1EC]"
            aria-label="Kapat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Başlık ve Telaffuz */}
        <div className="my-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]">
            {kelime.kelime}
          </h2>

          {kelime.telaffuz && (
            <p className="mt-1 font-serif text-base italic text-[#52796F] dark:text-[#8AA39B]">
              [{kelime.telaffuz}]
            </p>
          )}
        </div>

        {/* Anlam Alanı */}
        <div className="rounded-xl border border-[#E3DDCF] bg-[#F5F1E8] p-5 text-base leading-relaxed text-[#24352D] font-medium dark:border-[#2A3B30] dark:bg-[#1C2820] dark:text-[#D5E2DA]">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B] mb-1">
            Sözlük Anlamı
          </h4>
          <p>{kelime.anlam}</p>

          {kelime.ekBilgi && (
            <p className="mt-3 text-xs leading-relaxed text-[#5C6E64] dark:text-[#95A89E] border-t border-[#E3DDCF] pt-2 dark:border-[#28382F]">
              <strong className="text-[#32453A] dark:text-[#B6C8BF]">Açıklama:</strong> {kelime.ekBilgi}
            </p>
          )}
        </div>

        {/* Örnek Cümle */}
        <div className="mt-5 border-t border-[#E3DDCF] pt-4 dark:border-[#27382D]">
          <span className="block text-xs font-semibold uppercase tracking-wider text-[#52796F] dark:text-[#8AA39B] mb-1">
            Edebi Cümle İçinde Kullanımı
          </span>
          <blockquote className="font-serif text-base sm:text-lg italic leading-relaxed text-[#33463C] dark:text-[#C5D5CC]">
            "{kelime.ornekCumle}"
          </blockquote>
        </div>

        {/* Alt Eylemler */}
        <div className="mt-6 flex items-center justify-between border-t border-[#E3DDCF] pt-4 dark:border-[#27382D]">
          <div className="flex items-center gap-2">
            <button
              onClick={handleSpeak}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                isPlaying
                  ? 'border-[#2D6A4F] bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                  : 'border-[#CBD5C0] bg-[#FAF8F3] text-[#2D6A4F] hover:bg-[#EBF2ED] dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#95D5B2] dark:hover:bg-[#25352C]'
              }`}
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
              onClick={() => onToggleFavorite(kelime.id)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                isFavorite
                  ? 'border-[#C95A3F] bg-[#C95A3F]/10 text-[#C95A3F]'
                  : 'border-[#D5CEBF] bg-[#FAF8F3] text-[#5C6E64] hover:bg-[#EFEAE0] dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#8AA39B] dark:hover:bg-[#25352C]'
              }`}
              title={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            >
              <Bookmark className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleCopy}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5CEBF] bg-[#FAF8F3] text-[#5C6E64] hover:bg-[#EFEAE0] transition-colors dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#8AA39B] dark:hover:bg-[#25352C]"
              title="Kopyala"
            >
              {copied ? (
                <Check className="h-4 w-4 text-[#2D6A4F] dark:text-[#74C69D]" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>

          <button
            onClick={handleCloseModal}
            className="rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-4 py-2 text-xs font-semibold text-[#2F4237] hover:bg-[#EFEAE0] transition-colors dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC] dark:hover:bg-[#233229]"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
