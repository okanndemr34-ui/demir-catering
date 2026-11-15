# Demir Catering — Next.js kaynak kodu

Mevcut siyah/kırmızı tasarım ve tüm kampanya/iletişim bilgileri korunarak Next.js App Router ile hazırlanmıştır. Sunucuya ihtiyaç duymayan statik çıktı üretir.

## Çalıştırma

Node.js 22.9+ (önerilen: 24 LTS).

```sh
npm ci
npm run dev
npm test
npm run build
```

Üretim çıktısı `out/` klasörüdür. İstediğiniz statik sunucuda yayımlanabilir. Geliştirme sunucusu `http://localhost:3000` adresindedir.

## Dosya yapısı

- `app/`: sayfa, ana layout, metadata, robots, sitemap ve 404.
- `components/`: başlık, hizmetler, menü sekmeleri, fiyat kartları, teklif formu, galeri ve alt bilgi.
- `lib/catalog.js`: menü fiyatları ve iletişim bilgileri.
- `lib/pricing.js`: kişi aralıkları, tanışma/normal tarife ve tasarruf hesabı.
- `lib/whatsapp.js`: mesaj oluşturma ve güvenli hedef numarası seçimi.
- `lib/seo.js`: doğrulanmış işletme bilgileriyle Organization, Service ve FAQ yapılandırılmış verileri.
- `styles/site.css`: korunmuş mevcut tasarım.
- `styles/mobile.css`: dar ekran, form, tablo ve güvenli alan düzeltmeleri.
- `public/assets/`: özgün logo, afişler ve örnek yemek sunumları.
- `tests/`: tarife sınırları ve WhatsApp mesaj testleri.

## İçerik ve SEO

Alan adı değişirse `lib/site.js` içindeki `url` alanını güncelleyin; canonical, sitemap ve sosyal paylaşım adresleri buradan türetilir. SEO meta verileri ve tüm menüler ilk HTML yanıtında yer alır. Schema FAQ verileri arama sonuçlarında zengin görünüm garantisi vermez. Dizine eklenme ve sıralama arama motoruna bağlıdır.

Fiyatlar `lib/catalog.js` içindedir; fiyat kartları ve hesaplayıcı bu tek kaynaktan beslenir. SSS metinleri ve SSS şeması `lib/faq.js` kaynağını paylaşır. Form veri saklamaz; WhatsApp mesajını hazırlar, son gönderimi ziyaretçi yapar.

## Tasarımın korunması

Masaüstü düzeni, renkler, fontlar, görseller, bölüm sırası ve çapalar korunmuştur. Mobilde form elemanlarının minimum genişliği, 320–380 px düzen, sabit alt çubuğun iOS güvenli alanı ve galeri penceresinin ekran sınırları iyileştirilmiştir.

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
