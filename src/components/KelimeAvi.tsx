import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { RotateCcw, Volume2, Sparkles, Trophy, Lightbulb, ArrowLeft, Check, HelpCircle } from 'lucide-react';
import { KADIM_WORDLE_HAVUZU, WordleKelime } from '../data/wordleWords';
import { seslendirMetin } from '../utils/speech';

interface KelimeAviProps {
  onBackToDictionary: () => void;
}

type HarfDurumu = 'correct' | 'present' | 'absent' | 'empty';

export const KelimeAvi: React.FC<KelimeAviProps> = ({ onBackToDictionary }) => {
  const [hedefKelimeObj, setHedefKelimeObj] = useState<WordleKelime>(() => {
    return KADIM_WORDLE_HAVUZU[Math.floor(Math.random() * KADIM_WORDLE_HAVUZU.length)];
  });

  const [tahminler, setTahminler] = useState<string[]>([]);
  const [mevcutTahmin, setMevcutTahmin] = useState<string>('');
  const [oyunDurumu, setOyunDurumu] = useState<'devam' | 'kazandi' | 'kaybetti'>('devam');
  const [uyariMesaji, setUyariMesaji] = useState<string | null>(null);
  const [ipucuAcik, setIpucuAcik] = useState<boolean>(false);

  const mevcutTahminRef = useRef(mevcutTahmin);
  mevcutTahminRef.current = mevcutTahmin;

  const hedefKelime = hedefKelimeObj.kelime; // 5 harfli uppercase

  // Oyunu Sıfırla
  const yeniOyunBaslat = useCallback(() => {
    let yeni: WordleKelime;
    do {
      yeni = KADIM_WORDLE_HAVUZU[Math.floor(Math.random() * KADIM_WORDLE_HAVUZU.length)];
    } while (KADIM_WORDLE_HAVUZU.length > 1 && yeni.kelime === hedefKelimeObj.kelime);

    setHedefKelimeObj(yeni);
    setTahminler([]);
    setMevcutTahmin('');
    setOyunDurumu('devam');
    setUyariMesaji(null);
    setIpucuAcik(false);
  }, [hedefKelimeObj]);

  const bildirimGoster = (mesaj: string) => {
    setUyariMesaji(mesaj);
    setTimeout(() => {
      setUyariMesaji(null);
    }, 2000);
  };

  // Harf Ekleme
  const handleHarfEkle = useCallback((harf: string) => {
    if (oyunDurumu !== 'devam') return;
    setMevcutTahmin(prev => (prev.length < 5 ? prev + harf : prev));
  }, [oyunDurumu]);

  // Harf Silme
  const handleHarfSil = useCallback(() => {
    if (oyunDurumu !== 'devam') return;
    setMevcutTahmin(prev => prev.slice(0, -1));
  }, [oyunDurumu]);

  // Tahmini Onaylama (Enter)
  const handleTahminGonder = useCallback(() => {
    if (oyunDurumu !== 'devam') return;
    const tahmin = mevcutTahminRef.current;

    if (tahmin.length < 5) {
      bildirimGoster('Lütfen 5 harfi tamamlayınız!');
      return;
    }

    const yeniTahminler = [...tahminler, tahmin];
    setTahminler(yeniTahminler);
    setMevcutTahmin('');

    // Kazanma kontrolü
    if (tahmin === hedefKelime) {
      setOyunDurumu('kazandi');
      return;
    }

    // Hak tükenme kontrolü (6 deneme)
    if (yeniTahminler.length >= 6) {
      setOyunDurumu('kaybetti');
    }
  }, [oyunDurumu, tahminler, hedefKelime]);

  // Fiziksel Klavye Dinleyicisi
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (oyunDurumu !== 'devam') return;

      const key = e.key;

      if (key === 'Enter') {
        e.preventDefault();
        handleTahminGonder();
      } else if (key === 'Backspace') {
        e.preventDefault();
        handleHarfSil();
      } else {
        // Türkçe karakter destekli harf eşleme
        const char = key.toLocaleUpperCase('tr-TR');
        const gecerliHarfler = 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ';
        if (char.length === 1 && gecerliHarfler.includes(char)) {
          e.preventDefault();
          handleHarfEkle(char);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [oyunDurumu, handleHarfEkle, handleHarfSil, handleTahminGonder]);

  // Harf Durumu Hesaplayıcı (Wordle Kuralları)
  const harfDurumuHesapla = (tahmin: string, harfIndex: number): HarfDurumu => {
    const hedefDizi = hedefKelime.split('');
    const tahminDizi = tahmin.split('');
    const harf = tahminDizi[harfIndex];

    // 1. Tam doğru konumda mı?
    if (hedefDizi[harfIndex] === harf) {
      return 'correct';
    }

    // 2. Kelimede var mı? (Çoklu harf sayısını doğru yönetme)
    const hedeftekiAdet = hedefDizi.filter(h => h === harf).length;
    const tamDogruOlanlar = tahminDizi.filter((h, idx) => h === harf && hedefDizi[idx] === harf).length;

    // Şu ana kadar bu harften kaç tanesi sarı veya yeşil olarak değerlendirildi?
    let suAnaKadar = 0;
    for (let i = 0; i < harfIndex; i++) {
      if (tahminDizi[i] === harf && hedefDizi[i] !== harf) {
        suAnaKadar++;
      }
    }

    if (suAnaKadar + tamDogruOlanlar < hedeftekiAdet) {
      return 'present';
    }

    return 'absent';
  };

  // Ekran Klavyesi için Harf Durumları
  const klavyeHarfDurumlari = useMemo(() => {
    const durumlar: Record<string, HarfDurumu> = {};

    tahminler.forEach(tahmin => {
      tahmin.split('').forEach((harf, idx) => {
        const durum = harfDurumuHesapla(tahmin, idx);
        const mevcut = durumlar[harf];

        if (durum === 'correct') {
          durumlar[harf] = 'correct';
        } else if (durum === 'present' && mevcut !== 'correct') {
          durumlar[harf] = 'present';
        } else if (durum === 'absent' && !mevcut) {
          durumlar[harf] = 'absent';
        }
      });
    });

    return durumlar;
  }, [tahminler, hedefKelime]);

  // Klavye Tuş Satırları (Türkçe Q Düzeni)
  const klavyeSatirlari = [
    ['E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ'],
    ['GİRİŞ', 'Z', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç', '⌫']
  ];

  // Renk Sınıfları
  const getKutuStili = (durum: HarfDurumu, aktifMi: boolean = false) => {
    switch (durum) {
      case 'correct':
        return 'bg-[#2D6A4F] text-[#FAF8F3] border-[#2D6A4F] shadow-sm';
      case 'present':
        return 'bg-[#C68A4C] text-[#FAF8F3] border-[#C68A4C] shadow-sm';
      case 'absent':
        return 'bg-[#E5DFD3] text-[#5C6E64] border-[#D5CEBF] dark:bg-[#25332A] dark:text-[#8AA39B] dark:border-[#2F4235]';
      default:
        return aktifMi
          ? 'border-[#2D6A4F] text-[#162D23] bg-[#FAF8F3] dark:border-[#74C69D] dark:text-[#E8F1EC] dark:bg-[#16221A] scale-[1.02]'
          : 'border-[#D5CEBF] text-[#162D23] bg-[#FAF8F3] dark:border-[#2A3B30] dark:text-[#E8F1EC] dark:bg-[#16221A]';
    }
  };

  const getTusStili = (harf: string) => {
    const durum = klavyeHarfDurumlari[harf];
    switch (durum) {
      case 'correct':
        return 'bg-[#2D6A4F] text-[#FAF8F3] border-[#2D6A4F]';
      case 'present':
        return 'bg-[#C68A4C] text-[#FAF8F3] border-[#C68A4C]';
      case 'absent':
        return 'bg-[#D5CEBF]/60 text-[#7A8E83] border-transparent opacity-60 dark:bg-[#25332A] dark:text-[#5E7267]';
      default:
        return 'bg-[#EBE5D8] text-[#1E3B2E] border-[#D8D0BF] hover:bg-[#DDD5C4] active:scale-95 dark:bg-[#223028] dark:text-[#E2EBE5] dark:border-[#2D3E34] dark:hover:bg-[#2A3B31]';
    }
  };

  const seslendirKelime = () => {
    seslendirMetin(`${hedefKelimeObj.orijinal}. Anlamı: ${hedefKelimeObj.anlam} Örnek: ${hedefKelimeObj.ornekCumle}`);
  };

  return (
    <div className="mx-auto max-w-2xl py-2 sm:py-4 space-y-4 sm:space-y-5">
      
      {/* Üst Bilgi ve Başlık */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[#E3DDCF] pb-3 dark:border-[#27382D]">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] dark:bg-[#74C69D]/15 dark:text-[#74C69D]">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#162D23] dark:text-[#E8F1EC]">
              Kadim Kelime Avı
            </h2>
            <p className="text-xs text-[#52796F] dark:text-[#8AA39B]">
              5 Harfli Kadim Sözcüğü 6 Denemede Keşfedin
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIpucuAcik(!ipucuAcik)}
            className="flex items-center gap-1.5 rounded-full border border-[#D5CEBF] bg-[#FAF8F3] px-3.5 py-1.5 text-xs font-medium text-[#4A5E53] hover:bg-[#EFEAE0] transition-colors dark:border-[#384B3F] dark:bg-[#1A251E] dark:text-[#C5D5CC]"
            title="Kelime hakkında ipucu gör"
          >
            <Lightbulb className="h-3.5 w-3.5 text-[#C68A4C]" />
            <span>{ipucuAcik ? 'İpucunu Gizle' : 'İpucu Al'}</span>
          </button>

          <button
            onClick={yeniOyunBaslat}
            className="flex items-center gap-1.5 rounded-full border border-[#CBD5C0] bg-[#FAF8F3] px-3.5 py-1.5 text-xs font-semibold text-[#2D6A4F] hover:bg-[#EBF2ED] transition-colors dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#95D5B2]"
            title="Yeni bir 5 harfli kadim kelime seç"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Yeni Kelime</span>
          </button>
        </div>
      </div>

      {/* İpucu Kutusu */}
      {ipucuAcik && (
        <div className="rounded-xl border border-[#D8D0BF] bg-[#F7F4EC] p-3.5 text-xs leading-relaxed text-[#3B4E44] dark:border-[#2C3B31] dark:bg-[#1A261F] dark:text-[#C5D5CC]">
          <div className="flex items-center gap-1.5 font-bold text-[#C68A4C] mb-1">
            <Lightbulb className="h-4 w-4" />
            <span>Dönem & Anlam İpucu:</span>
          </div>
          <p><strong>Dönem:</strong> {hedefKelimeObj.donem}</p>
          <p className="mt-1"><strong>Tanım:</strong> {hedefKelimeObj.anlam}</p>
        </div>
      )}

      {/* Uyarı Mesajı Toast */}
      {uyariMesaji && (
        <div className="mx-auto max-w-xs text-center rounded-full bg-[#162D23] px-4 py-1.5 text-xs font-semibold text-[#FAF8F3] shadow-lg animate-bounce dark:bg-[#74C69D] dark:text-[#0F1712]">
          {uyariMesaji}
        </div>
      )}

      {/* WORDLE TABLOSU (6 Satır x 5 Harf) */}
      <div className="flex flex-col items-center justify-center gap-1.5 py-1">
        {Array.from({ length: 6 }).map((_, satirIdx) => {
          const tahminMetni = tahminler[satirIdx];
          const suAnkiSatirMi = satirIdx === tahminler.length;

          return (
            <div key={satirIdx} className="flex gap-1.5 sm:gap-2">
              {Array.from({ length: 5 }).map((_, sutunIdx) => {
                let harf = '';
                let durum: HarfDurumu = 'empty';
                let aktifMi = false;

                if (tahminMetni) {
                  harf = tahminMetni[sutunIdx] || '';
                  durum = harfDurumuHesapla(tahminMetni, sutunIdx);
                } else if (suAnkiSatirMi) {
                  harf = mevcutTahmin[sutunIdx] || '';
                  aktifMi = !!harf;
                }

                return (
                  <div
                    key={sutunIdx}
                    className={`flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-lg border-2 font-serif text-lg sm:text-2xl font-bold transition-all duration-300 select-none ${getKutuStili(durum, aktifMi)}`}
                  >
                    {harf}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Renk Kılavuzu (Discreet Guide) */}
      <div className="flex items-center justify-center gap-4 text-[11px] text-[#5C6E64] dark:text-[#8E9F96] pt-1">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#2D6A4F]"></span>
          <span>Doğru yer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#C68A4C]"></span>
          <span>Kelamda var (yanlış yer)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#D5CEBF] dark:bg-[#25332A]"></span>
          <span>Kelamda yok</span>
        </div>
      </div>

      {/* OYUN BİTTİ KARTI (Kazanma veya Kaybetme) */}
      {oyunDurumu !== 'devam' && (
        <div className="rounded-2xl border border-[#D5CEBF] bg-[#FAF8F3] p-6 shadow-sm dark:border-[#2C3B31] dark:bg-[#16221A] text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] dark:bg-[#74C69D]/15 dark:text-[#74C69D]">
            {oyunDurumu === 'kazandi' ? (
              <Trophy className="h-6 w-6 text-[#2D6A4F] dark:text-[#74C69D]" />
            ) : (
              <HelpCircle className="h-6 w-6 text-[#B94A32] dark:text-[#E07A5F]" />
            )}
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-[#162D23] dark:text-[#E8F1EC]">
              {oyunDurumu === 'kazandi'
                ? `Tebrikler! ${tahminler.length}/6 Denemede Bildiniz.`
                : '6 Deneme Tamamlandı! Aranan Kadim Kelime:'}
            </h3>
            <p className="mt-1 font-serif text-3xl font-bold text-[#2D6A4F] dark:text-[#74C69D]">
              {hedefKelimeObj.orijinal}
            </p>
            <p className="text-xs text-[#52796F] dark:text-[#8AA39B] mt-0.5">
              {hedefKelimeObj.donem}
            </p>
          </div>

          <div className="rounded-xl border border-[#E3DDCF] bg-[#F4EFE5] p-4 text-xs sm:text-sm text-left leading-relaxed dark:border-[#28382E] dark:bg-[#1A261F]">
            <p className="font-semibold text-[#162D23] dark:text-[#E8F1EC]">
              Anlamı: {hedefKelimeObj.anlam}
            </p>
            <p className="mt-2 font-serif italic text-[#3B4E44] dark:text-[#C5D5CC]">
              "{hedefKelimeObj.ornekCumle}"
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={seslendirKelime}
              className="flex items-center gap-1.5 rounded-full border border-[#CBD5C0] bg-[#FAF8F3] px-4 py-2 text-xs font-semibold text-[#2D6A4F] hover:bg-[#EBF2ED] transition-colors dark:border-[#384A3F] dark:bg-[#1E2922] dark:text-[#95D5B2]"
            >
              <Volume2 className="h-4 w-4" />
              <span>Kelimeyi Dinle</span>
            </button>

            <button
              onClick={yeniOyunBaslat}
              className="flex items-center gap-1.5 rounded-full bg-[#2D6A4F] px-5 py-2 text-xs font-semibold text-[#FAF8F3] hover:bg-[#24543E] transition-all dark:bg-[#3E8E6B] dark:text-[#0F1712]"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Yeni Kelime Avı Başlat</span>
            </button>
          </div>
        </div>
      )}

      {/* EKRAN KLAVYESİ */}
      <div className="space-y-1.5 pt-2 select-none">
        {klavyeSatirlari.map((satir, sIdx) => (
          <div key={sIdx} className="flex justify-center gap-1 sm:gap-1.5">
            {satir.map(harf => {
              const ozelTusMu = harf === 'GİRİŞ' || harf === '⌫';

              return (
                <button
                  key={harf}
                  onClick={() => {
                    if (harf === 'GİRİŞ') {
                      handleTahminGonder();
                    } else if (harf === '⌫') {
                      handleHarfSil();
                    } else {
                      handleHarfEkle(harf);
                    }
                  }}
                  className={`flex h-11 sm:h-12 items-center justify-center rounded-lg border font-semibold transition-all text-xs sm:text-sm ${
                    ozelTusMu ? 'px-2.5 sm:px-4 text-[11px] sm:text-xs' : 'w-7 sm:w-10'
                  } ${getTusStili(harf)}`}
                >
                  {harf}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Sözlüğe Dön */}
      <div className="text-center pt-2">
        <button
          onClick={onBackToDictionary}
          className="inline-flex items-center gap-1 text-xs font-medium text-[#52796F] hover:text-[#2D6A4F] dark:text-[#8AA39B] dark:hover:text-[#74C69D] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Sözlük Dizinine Geri Dön</span>
        </button>
      </div>
    </div>
  );
};
