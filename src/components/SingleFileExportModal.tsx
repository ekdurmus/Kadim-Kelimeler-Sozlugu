import React, { useState } from 'react';
import { X, Download, Copy, Check, FileCode, ExternalLink } from 'lucide-react';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const res = await fetch('/kadim-kelimeler-sozlugu.html');
      const htmlText = await res.text();
      
      const blob = new Blob([htmlText], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'kadim-kelimeler-sozlugu.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('İndirme hatası:', e);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyCode = async () => {
    try {
      const res = await fetch('/kadim-kelimeler-sozlugu.html');
      const htmlText = await res.text();
      await navigator.clipboard.writeText(htmlText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Kopyalama hatası:', e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Karartma */}
      <div onClick={onClose} className="fixed inset-0 bg-[#141C17]/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 sm:p-8 shadow-2xl dark:border-[#2C3B31] dark:bg-[#16221A]">
        <div className="flex items-center justify-between border-b border-[#E3DDCF] pb-4 dark:border-[#27382D]">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] dark:bg-[#74C69D]/15 dark:text-[#74C69D]">
              <FileCode className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase dark:text-[#88D4AB]">
              Tek Dosya (HTML + CSS + JS) Dışa Aktarma
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#5C6E64] hover:bg-[#EFEAE0] hover:text-[#162D23] transition-colors dark:text-[#8AA39B] dark:hover:bg-[#223028] dark:hover:text-[#E8F1EC]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="my-5">
          <h3 className="font-serif text-2xl font-bold text-[#162D23] dark:text-[#E8F1EC]">
            Bağımsız Tek Dosya Olarak Çalıştırın
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#4A5E53] dark:text-[#B1C3B9]">
            Talebine uygun olarak tüm HTML yapısı, modern CSS stilleri, 389 kadim kelimelik veritabanı, Dönem / Köken filtresi (Zaman Tüneli), Kadim Kelime Avı (5 Harfli Wordle oyunu), 10 soruluk test modülü ve Türkçe seslendirme tek bir <code className="rounded bg-[#EAE4D7] px-1.5 py-0.5 text-xs font-mono text-[#1E3B2E] dark:bg-[#223028] dark:text-[#95D5B2]">.html</code> dosyasında toplanmıştır.
          </p>

          <div className="mt-4 rounded-xl border border-[#E3DDCF] bg-[#F5F1E8] p-4 text-xs text-[#5C6E64] space-y-2 dark:border-[#2A3B30] dark:bg-[#1C2820] dark:text-[#95A89E]">
            <p className="flex items-center gap-2 font-semibold text-[#162D23] dark:text-[#E8F1EC]">
              <span>✓</span> Kurulum veya Node.js gerektirmez
            </p>
            <p className="flex items-center gap-2 font-semibold text-[#162D23] dark:text-[#E8F1EC]">
              <span>✓</span> Herhangi bir tarayıcıda (Chrome, Safari, Edge) çift tıklayarak hemen açılır
            </p>
            <p className="flex items-center gap-2 font-semibold text-[#162D23] dark:text-[#E8F1EC]">
              <span>✓</span> Çevrimdışı (offline) ve okul akıllı tahtalarında sorunsuz çalışır
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E3DDCF] dark:border-[#27382D]">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex w-full sm:w-auto flex-1 items-center justify-center gap-2 rounded-full bg-[#2D6A4F] px-5 py-2.5 text-xs font-semibold text-[#FAF8F3] shadow-sm transition-all hover:bg-[#24543E] dark:bg-[#3E8E6B] dark:text-[#0F1712] dark:hover:bg-[#4EA57E]"
          >
            <Download className="h-4 w-4" />
            <span>{isDownloading ? 'İndiriliyor...' : 'HTML Dosyasını İndir (.html)'}</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-5 py-2.5 text-xs font-semibold text-[#2F4237] hover:bg-[#EFEAE0] transition-colors dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC] dark:hover:bg-[#233229]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-[#2D6A4F] dark:text-[#74C69D]" />
                <span className="text-[#2D6A4F] dark:text-[#74C69D]">Kod Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Tüm Kodu Kopyala</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
