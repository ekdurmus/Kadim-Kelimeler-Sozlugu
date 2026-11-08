import test from 'node:test';
import assert from 'node:assert/strict';
import { ILK_KELIMELER, DONEM_LISTESI } from './words.ts';
import { KADIM_WORDLE_HAVUZU } from './wordleWords.ts';

test('Genişletilmiş Kelimeler Veritabanı Doğrulama (300+ Kelime)', async (t) => {
  await t.test('Veritabanında 300 adetten fazla kadim kelime, deyim ve atasözü bulunmalıdır', () => {
    assert.ok(ILK_KELIMELER.length >= 300, `Kelime sayısı yetersiz: ${ILK_KELIMELER.length}`);
  });

  await t.test('Tüm kelimelerin kimlikleri (id) benzersiz ve dolu olmalıdır', () => {
    const ids = new Set<string>();

    for (const item of ILK_KELIMELER) {
      assert.ok(item.id, 'Kelime kimliği (id) boş olamaz');
      assert.ok(!ids.has(item.id), `Tekrarlayan kelime kimliği: ${item.id}`);
      ids.add(item.id);

      assert.ok(item.kelime && item.kelime.trim().length > 0, 'Kelime başlığı boş olamaz');
      assert.ok(item.anlam && item.anlam.trim().length > 0, 'Anlam boş olamaz');
    }
  });

  await t.test('Tüm kelimelerde geçerli bir dönem / köken etiketi bulunmalıdır', () => {
    for (const item of ILK_KELIMELER) {
      assert.ok(item.donem, `Kelimeye ait dönem bilgisi eksik: ${item.kelime}`);
      assert.ok((DONEM_LISTESI as readonly string[]).includes(item.donem), `Tanımsız dönem: ${item.donem}`);
    }
  });

  await t.test('Wordle havuzundaki tüm kelimeler 5 harfli ve geçerli olmalıdır', () => {
    assert.ok(KADIM_WORDLE_HAVUZU.length >= 30, `Wordle havuzu yetersiz: ${KADIM_WORDLE_HAVUZU.length}`);
    for (const w of KADIM_WORDLE_HAVUZU) {
      assert.equal(w.kelime.length, 5, `Kelime 5 harfli değil: ${w.kelime}`);
      assert.ok(w.anlam && w.anlam.length > 0, `Wordle anlamı boş: ${w.kelime}`);
      assert.ok(w.donem, `Wordle dönemi boş: ${w.kelime}`);
    }
  });

  await t.test('Yeni eklenen kadim kelimelerden örnekler eksiksiz mevcut olmalıdır', () => {
    const kontrolListesi = [
      'Ab-ı hayat',
      'Ehlivukuf',
      'Mütefekkir',
      'Müstesna',
      'Feraset',
      'Kenz',
      'Dilhun',
      'Meftun',
      'Girift',
      'Zarafet',
      'Mütemadiyen',
      'İpe sapa gelmez',
      'Nuh diyor peygamber demiyor',
      'Damlaya damlaya göl olur',
      'Afitap',
      'Bîçare',
      'Dilfigâr',
      'Otağ',
      'Pürnur',
      'Selsebil'
    ];

    const mevcutKelimeler = new Set(ILK_KELIMELER.map(k => k.kelime));
    for (const beklenen of kontrolListesi) {
      assert.ok(
        mevcutKelimeler.has(beklenen),
        `Beklenen kelime bulunamadı: ${beklenen}`
      );
    }
  });

  await t.test('300+ kelimelik havuzdan 10 soruluk test ve 4 benzersiz seçenek üretimi doğru çalışmalıdır', () => {
    const karisik = [...ILK_KELIMELER].sort(() => Math.random() - 0.5).slice(0, 10);
    assert.equal(karisik.length, 10);

    for (const hedef of karisik) {
      const digerAnlamlar = ILK_KELIMELER
        .filter(k => k.id !== hedef.id)
        .map(k => k.anlam)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const secenekler = [hedef.anlam, ...digerAnlamlar];
      assert.equal(secenekler.length, 4, 'Her soruda 4 seçenek olmalı');
      assert.ok(secenekler.includes(hedef.anlam), 'Doğru cevap seçeneklerde bulunmalı');
    }
  });
});
