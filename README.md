# Milliy Holva — Telegram Bot & Mini App

Milliy Holva brendi mahsulotlarini kofe xonalar va do'konlarga yetkazib berish, lokatsiyalar, omborxona zaxirasi va tushumlarni boshqaruvchi B2B Telegram WebApp & Bot tizimi.

---

## 🛠 Kompyuterda Ishga Tushirish Bo'yicha Qo'llanma

### 0-Talab: Node.js o'rnatilgan bo'lishi kerak
Agar kompyuteringizda Node.js bo'lmasa:
- [https://nodejs.org](https://nodejs.org) saytidan **LTS versiyasini** (masalan Node.js 20 yoki 22) yuklab olib o'rnating.

---

### 1-Qadam: Zip faylni ochish
1. Yuklab olingan `.zip` arxivini sichqonchaning o'ng tugmasi bilan bosing va **"Extract Here"** (yoki **"Izvlech v papku"**) qiling.
2. Hosil bo'lgan papka ichiga kiring.

---

### 2-Qadam: Terminal (Buyruqlar satri)ni ochish
- **Windows**: Papka ichida turib, sichqonchaning o'ng tugmasini bosing va **"Open in Terminal"** (yoki klaviaturada `Shift`ni bosib turib `Open PowerShell window here`) ni tanlang.
- **Mac / Linux**: Terminalni oching va `cd /papka/manzili` buyrug'i bilan loyihaga o'ting.

---

### 3-Qadam: Kerakli kutubxonalarni o'rnatish
Terminalda quyidagi buyruqni yozing va Enter bosing:

```bash
npm install
```
*(Bu buyruq loyihadagi barcha kutubxonalarni (React, Vite, Telegraf, Tailwind) avtomatik yuklab oladi).*

---

### 4-Qadam: Mini App (Veb Ilova)ni Ishga Tushirish
Kutubxonalar o'rnatilgach, veb-dasturni ishga tushirish uchun:

```bash
npm run dev
```

Terminalda quyidagicha yozuv chiqadi:
```text
  VITE v8.x.x  ready in 300 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

Brauzeringizda **http://localhost:3000** manzilini oching. Barcha savdo nuqtalari, omborxona, yetkazmalar ro'yxati va bot simulyatori ochiladi!

---

### 5-Qadam: Telegram Botni Ishga Tushirish (Haqiqiy Bot)

1. Telegramda **@BotFather** botiga kiring.
2. `/newbot` buyrug'ini yuboring.
3. Botingizga nom bering (masalan: `Milliy Holva Bot`).
4. Username bering (masalan: `MilliyHolva_Distribution_Bot`).
5. `@BotFather` sizga **HTTP API token** beradi (masalan: `789123456:AAFlk...`).
6. Loyihada `.env` nomli fayl oching va quyidagicha yozing:
   ```env
   BOT_TOKEN="sizning_bot_tokeningiz"
   WEBAPP_URL="http://localhost:3000"
   ```
7. Yangi terminal oynasida botni ishga tushiring:
   ```bash
   node bot.js
   ```

---

### 6-Qadam: Mini Appni Telegram Bot menyusiga ulash
Telegram ilovasi ichida Mini App ochilishi uchun HTTPS havola kerak bo'ladi.

1. **Mahalliy sinash uchun (Ngrok orqali)**:
   - Boshqa terminalda: `npx ngrok http 3000` buyrug'ini bering.
   - Sizga `https://abc-123.ngrok-free.app` ko'rinishida havola beradi.
2. **@BotFather ga kiring**:
   - `/setmenubutton` buyrug'ini yuboring;
   - O'z botingizni tanlang;
   - Yuqoridagi HTTPS havolani yuboring;
   - Tugma nomini kiriting: `📱 Mini App`.

Endi Telegramda botingizga kirib `/start` bosganingizda yoki pastdagi **Mini App** tugmasini bosganingizda to'liq dastur Telegram ichida ochiladi!

---

### 📁 Asosiy Fayllar Tuzilishi:
- `src/App.tsx` — Dasturning asosiy boshqaruv kodi;
- `src/data/seedData.ts` — Logo, mahsulotlar va kofe xonalar ma'lumotlari;
- `src/components/` — Modullar (Yetkazmalar, Nuqtalar, Omborxona, Tahlil xaritasi, Kvitansiya cheki);
- `bot.js` — Telegram bot kodi;
- `public/assets/` — Rasmiy logotip va qadoq rasmlari.
