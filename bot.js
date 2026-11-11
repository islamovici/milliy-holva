/**
 * Milliy Holva - Rasmiy Telegram Bot Kodi
 *
 * Ishga tushirish:
 * 1. .env fayliga yoki ushbu faylga BOT_TOKEN ni yozing
 * 2. node bot.js buyrug'ini bering
 */

import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

// Telegram BotFather dan olingan token
const BOT_TOKEN = process.env.BOT_TOKEN || 'SIZNING_BOT_TOKENINGIZ';

// Mini App havolasi (Ngrok, Vercel yoki Cloud Run URL)
const WEBAPP_URL = process.env.WEBAPP_URL || 'http://localhost:3000';

if (!BOT_TOKEN || BOT_TOKEN === 'SIZNING_BOT_TOKENINGIZ') {
  console.log('DIQQAT: .env faylida yoki bot.js da BOT_TOKEN kiritilmagan!');
  console.log('Iltimos @BotFather dan token olib, BOT_TOKEN="123456:ABC..." ko\'rinishida yozing.\n');
}

const bot = new Telegraf(BOT_TOKEN);

// /start buyrug'i
bot.start((ctx) => {
  const firstName = ctx.from?.first_name || 'Kuryer';

  ctx.replyWithHTML(
    `Assalomu alaykum, <b>${firstName}</b>! 🍯\n\n` +
    `<b>Milliy Holva</b> rasmiy B2B yetkazib berish va ombor boshqaruv tizimiga xush kelibsiz.\n\n` +
    `Quyidagi tugma orqali <b>Telegram Mini App</b> interfeysini ochishingiz va savdo nuqtalariga yetkazmalarni kiritishingiz mumkin:`,
    Markup.inlineKeyboard([
      [
        Markup.button.webApp('📱 Mini Appni Ochish (Barcha funksiyalar)', WEBAPP_URL),
      ],
      [
        Markup.button.callback('🏭 Ombor Zaxirasi', 'cmd_stock'),
        Markup.button.callback('📊 Bugungi Hisobot', 'cmd_report'),
      ],
      [
        Markup.button.callback('🏪 Nuqtalar Ro\'yxati', 'cmd_points'),
      ],
    ])
  );
});

// Ombor holati buyrug'i
bot.action('cmd_stock', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.replyWithHTML(
    `📦 <b>Ombordagi Zaxira Holati:</b>\n\n` +
    `1️⃣ <b>Milliy holva premium</b> (Moviy naqshli, kaju & pista): 465 dona\n` +
    `2️⃣ <b>Milliy holva an'anaviy</b> (Oltin gumbaz, bodom & pista): 415 dona\n\n` +
    `<i>Batafsil ma'lumotlar va yangi kirim/chiqim amaliyotlari uchun Mini Appdan foydalaning.</i>`,
    Markup.inlineKeyboard([
      [Markup.button.webApp('📱 Omborxona Mini App', WEBAPP_URL)],
    ])
  );
});

// Bugungi hisobot buyrug'i
bot.action('cmd_report', async (ctx) => {
  await ctx.answerCbQuery();
  const today = new Date().toISOString().slice(0, 10);
  await ctx.replyWithHTML(
    `📊 <b>Bugungi Yetkazmalar Hisoboti (${today}):</b>\n\n` +
    `Barcha kofe xonalar va do'konlarga topshirilgan mahsulotlar ` +
    `va tushumlar hisoboti Mini Appda avtomatik jamlangan.`,
    Markup.inlineKeyboard([
      [Markup.button.webApp('📊 To\'liq Hisobotni Ko\'rish', WEBAPP_URL)],
    ])
  );
});

// Nuqtalar ro'yxati
bot.action('cmd_points', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.replyWithHTML(
    `🏪 <b>Savdo Nuqtalari:</b>\n\n` +
    `• Navro'z Coffee Roasters (Chilonzor)\n` +
    `• The Sweet Haven Confectionery (Mirobod)\n` +
    `• Urban Coffee Hub (Yunusobod)\n` +
    `• Baraka Gourmet Market (Shayxontohur)\n\n` +
    `Xarita va lokatsiyalar bilan ishlash uchun Mini Appni oching:`,
    Markup.inlineKeyboard([
      [Markup.button.webApp('🗺 Xaritada Ko\'rish', WEBAPP_URL)],
    ])
  );
});

// Kuryerdan lokatsiya qabul qilish
bot.on('location', (ctx) => {
  const { latitude, longitude } = ctx.message.location;
  ctx.replyWithHTML(
    `📍 <b>Geolokatsiya qabul qilindi:</b>\n` +
    `Kenglik (Lat): <code>${latitude}</code>\n` +
    `Uzunlik (Lng): <code>${longitude}</code>\n\n` +
    `Ushbu lokatsiyadagi do'kon yoki kofe xonaga yangi yetkazmani rasmiylashtirish uchun:`,
    Markup.inlineKeyboard([
      [Markup.button.webApp('➕ Yetkazmani Biriktirish', `${WEBAPP_URL}?lat=${latitude}&lng=${longitude}`)],
    ])
  );
});

// Botni ishga tushirish
bot.launch().then(() => {
  console.log('✅ Milliy Holva Telegram Boti muvaffaqiyatli ishga tushdi!');
  console.log(`🔗 Mini App URL: ${WEBAPP_URL}`);
}).catch((err) => {
  console.error('❌ Botni ishga tushirishda xatolik:', err);
});

// To'xtatish signallari
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
