/**
 * Türkçe seslendirme (Web Speech API) yardımcısı
 */

let currentUtterance: SpeechSynthesisUtterance | null = null;

export function seslendirMetin(
  metin: string,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: () => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onError?.();
    return false;
  }

  try {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(metin);
    utterance.lang = 'tr-TR';
    utterance.rate = 0.92; // Kadim kelimelerin vakarına uygun, berrak ve tane tane tempo
    utterance.pitch = 1.0;

    // Türkçe ses tercihi
    const voices = window.speechSynthesis.getVoices();
    const turkishVoice = voices.find(v => v.lang.startsWith('tr') || v.lang.includes('TR'));
    if (turkishVoice) {
      utterance.voice = turkishVoice;
    }

    utterance.onstart = () => {
      onStart?.();
    };

    utterance.onend = () => {
      currentUtterance = null;
      onEnd?.();
    };

    utterance.onerror = () => {
      currentUtterance = null;
      onError?.();
    };

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Seslendirme başlatılamadı:', err);
    onError?.();
    return false;
  }
}

export function seslendirmeyiDurdur(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;
}
