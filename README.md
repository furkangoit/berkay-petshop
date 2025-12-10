# Berkay Petshop

Modern bir petshop web sitesi projesi. React, TypeScript, Vite ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- 🛍️ Ürün kataloğu ve detay sayfaları
- 🛒 Alışveriş sepeti
- 💳 Ödeme formu
- 🤖 AI destekli chatbot (Google Gemini)
- 📱 Responsive tasarım
- 🎨 Modern UI/UX

## Kurulum

**Prerequisites:** Node.js 20+

1. Repoyu klonlayın
2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyası oluşturun ve Gemini API anahtarınızı ekleyin:
```bash
GEMINI_API_KEY=your_api_key_here
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Netlify'a Deploy Etme

1. Netlify hesabınıza giriş yapın
2. "New site from Git" seçeneğini tıklayın
3. Repository'nizi seçin
4. Build ayarları otomatik olarak `netlify.toml` dosyasından alınacaktır
5. Environment Variables bölümünde `GEMINI_API_KEY` ekleyin
6. "Deploy site" butonuna tıklayın

## Teknolojiler

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Google Gemini AI

## Lisans

MIT
