import React from 'react';
import { Moon, Sun, Sparkles, Gamepad2, BookOpen, Grid3X3 } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onSurpriseMe: () => void;
  activeTab: 'dictionary' | 'wordle' | 'quiz' | 'about';
  onSelectTab: (tab: 'dictionary' | 'wordle' | 'quiz' | 'about') => void;
  onOpenExportModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  onSurpriseMe,
  activeTab,
  onSelectTab,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E3DDCF] bg-[#FAF8F3]/90 backdrop-blur-md transition-colors duration-200 dark:border-[#2C3831] dark:bg-[#151D18]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Sol Bölüm: Logo & Okul İmzası */}
        <button
          onClick={() => onSelectTab('dictionary')}
          className="group flex flex-col items-start text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] rounded-md"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E3B2E] transition-colors group-hover:text-[#2D6A4F] dark:text-[#E2EBE5] dark:group-hover:text-[#74C69D]">
            Kadim Kelimeler Sözlüğü
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-[#52796F] dark:text-[#8AA39B]">
            Tevfik Serdar Anadolu Lisesi · Dilimizin Zenginlikleri
          </span>
        </button>

        {/* Orta Bölüm: Navigasyon Sekmeleri */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-[#E3DDCF] bg-[#F3EFE6] p-1 dark:border-[#2C3831] dark:bg-[#1C2620]">
          <button
            onClick={() => onSelectTab('dictionary')}
            className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeTab === 'dictionary'
                ? 'bg-[#2D6A4F] text-[#FAF8F3] shadow-sm dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                : 'text-[#3E5246] hover:text-[#1E3B2E] dark:text-[#A7B9AF] dark:hover:text-[#E2EBE5]'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Sözlük</span>
          </button>
          <button
            onClick={() => onSelectTab('wordle')}
            className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeTab === 'wordle'
                ? 'bg-[#2D6A4F] text-[#FAF8F3] shadow-sm dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                : 'text-[#3E5246] hover:text-[#1E3B2E] dark:text-[#A7B9AF] dark:hover:text-[#E2EBE5]'
            }`}
          >
            <Grid3X3 className="h-3.5 w-3.5" />
            <span>Kelime Avı (5 Harf)</span>
          </button>
          <button
            onClick={() => onSelectTab('quiz')}
            className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeTab === 'quiz'
                ? 'bg-[#2D6A4F] text-[#FAF8F3] shadow-sm dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                : 'text-[#3E5246] hover:text-[#1E3B2E] dark:text-[#A7B9AF] dark:hover:text-[#E2EBE5]'
            }`}
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>Kelime Testi</span>
          </button>
          <button
            onClick={() => onSelectTab('about')}
            className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeTab === 'about'
                ? 'bg-[#2D6A4F] text-[#FAF8F3] shadow-sm dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                : 'text-[#3E5246] hover:text-[#1E3B2E] dark:text-[#A7B9AF] dark:hover:text-[#E2EBE5]'
            }`}
          >
            <span>Proje Hakkında</span>
          </button>
        </nav>

        {/* Sağ Bölüm: Beni Şaşırt ve Karanlık Mod Butonları */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onSurpriseMe}
            className="group flex items-center gap-1.5 rounded-full border border-[#B7D5C4] bg-[#E8F2EC] px-3.5 py-1.5 text-xs font-semibold text-[#1E4E38] transition-all hover:bg-[#D7E9DE] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] dark:border-[#2E533F] dark:bg-[#1A3125] dark:text-[#95D5B2] dark:hover:bg-[#224131]"
            title="Rastgele bir kadim kelimeyi keşfet"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#2D6A4F] transition-transform duration-300 group-hover:rotate-12 dark:text-[#74C69D]" />
            <span className="whitespace-nowrap">Beni Şaşırt</span>
          </button>

          <button
            onClick={onToggleDarkMode}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3DDCF] bg-[#FAF8F3] text-[#3E5246] transition-all hover:border-[#CBD5C0] hover:bg-[#F3EFE6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] dark:border-[#2C3831] dark:bg-[#19231D] dark:text-[#E2EBE5] dark:hover:bg-[#223028]"
            aria-label={darkMode ? 'Aydınlık moda geç' : 'Karanlık moda geç'}
            title={darkMode ? 'Aydınlık moda geç' : 'Karanlık moda geç'}
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-[#F3C64F] transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-[#2D6A4F] transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>
      </div>

      {/* Mobil Navigasyon Şeridi */}
      <div className="flex md:hidden border-t border-[#EAE4D7] bg-[#F6F3EB] px-2 py-2 dark:border-[#27332B] dark:bg-[#18211B] overflow-x-auto">
        <div className="flex w-full items-center justify-around gap-1 text-xs min-w-max">
          <button
            onClick={() => onSelectTab('dictionary')}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-colors ${
              activeTab === 'dictionary'
                ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                : 'text-[#3E5246] dark:text-[#A7B9AF]'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Sözlük</span>
          </button>
          <button
            onClick={() => onSelectTab('wordle')}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-colors ${
              activeTab === 'wordle'
                ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                : 'text-[#3E5246] dark:text-[#A7B9AF]'
            }`}
          >
            <Grid3X3 className="h-3.5 w-3.5" />
            <span>Kelime Avı</span>
          </button>
          <button
            onClick={() => onSelectTab('quiz')}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-colors ${
              activeTab === 'quiz'
                ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                : 'text-[#3E5246] dark:text-[#A7B9AF]'
            }`}
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>Test</span>
          </button>
          <button
            onClick={() => onSelectTab('about')}
            className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
              activeTab === 'about'
                ? 'bg-[#2D6A4F] text-[#FAF8F3] dark:bg-[#3E8E6B] dark:text-[#0F1712]'
                : 'text-[#3E5246] dark:text-[#A7B9AF]'
            }`}
          >
            <span>Hakkında</span>
          </button>
        </div>
      </div>
    </header>
  );
};
