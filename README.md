# Demir Catering — Next.js

Mevcut bordo/krem tasarım korunarak Next.js App Router ve TypeScript ile yeniden oluşturulmuş tek sayfa tema.

## Başlatma

Node.js 20.9 veya üzeri gerekir. Node.js 24 LTS önerilir.

```sh
npm ci
npm run dev
```

Geliştirme adresi: http://localhost:3000

```sh
npm run build
npm run typecheck
npm run preview
```

Üretim için `out/` klasörü oluşur; herhangi bir statik sunucuya yüklenebilir. Bu proje gerçek Next.js kullanır. Sunucu API'si gerektirmeyen bu tanıtım sayfası statik çıktı verir.

## Dosya düzeni

- `src/app/`: ana sayfa, genel yerleşim ve SEO bilgileri.
- `src/components/`: Header, Hero, Ticker, Services, Approach, Menus, Contact, Faq, Closing, Footer; ayrıca Reveal ve PlateMark ortak bileşenleri.
- `src/data/`: iletişim, gezinme, menüler, hizmetler ve sık sorulan sorular.
- `src/styles/`: temel tema ve bölüm bazında ayrılmış CSS.
- `scripts/`: geliştirme ve üretim çıktısını önizleme komutları.
- `public/assets/`: logo ve mevcut fotoğraflar.

Telefon ve WhatsApp bilgileri `src/data/site.ts` dosyasından değiştirilir. Menüler `src/data/menus.ts`, hizmetler `src/data/services.ts`, SSS `src/data/faqs.ts` dosyalarından düzenlenir. Mevcut tasarımın yazı tipleri `public/fonts/` içinde yerel olarak sunulur. Google Fonts bağlantısına ihtiyaç duyulmaz; lisans metinleri aynı klasördedir. Georgia ve sans-serif yedekleri korunmuştur.

## Tek sayfa davranışı

Tüm bölümler aynı `/` sayfasındadır. `#hizmetler`, `#yaklasim`, `#menuler`, `#teklif` bağlantıları korunur. Sabit başlık için kaydırma payı, aktif bölüm vurgusu, mobil menü kapatma, Escape ve dışarı tıklama desteği bulunur. Menü sekmeleri ok tuşları, Home/End ve Tab ile kullanılabilir. Kaydırma animasyonları azaltılmış hareket tercihini dikkate alır. JavaScript çalışmasa da statik içerik görünür kalır.

## İletişim

Arama ve WhatsApp bağlantıları `0530 556 32 61` numarasına yönelir. WhatsApp mesajı kullanıcı onayıyla gönderilir; sayfada form veya rezervasyon veritabanı bulunmaz.

## Fotoğraflar

Fotoğraflar önceki siteden korunmuştur; Demir Catering'e ait çekimler değildir. Kaynak bağlantıları Footer bileşenindedir. Kendi çekimlerinizle değiştirmek için `public/assets/` ve ilgili veri kaydını güncelleyin. Görsel kullanım hakları için kaynak sahipleriyle lisans durumunu teyit edin.

## Doğrulama

Üretim derlemesi ve TypeScript kontrolü başarıyla tamamlandı. Tarayıcıda masaüstü ve 390 piksel mobil görünüm incelendi. Mobil menünün açılması ve Escape ile kapanması; menü sekmelerinin tıklama ve End tuşuyla değişmesi; seçilen menüye göre WhatsApp mesaj bağlantısının güncellenmesi kontrol edildi. Telefon bağlantıları mevcut iş numarasına yönelir. Gerçek telefon araması veya WhatsApp mesajı gönderilmedi.
