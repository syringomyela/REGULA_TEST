import { chromium } from '@playwright/test';

export default async function globalSetup() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await context.addInitScript(() => {
    try {
      document.cookie = 'CookieConsent=allow; path=/;';
      if (!window.Cookiebot || typeof window.Cookiebot !== 'object') {
        window.Cookiebot = {
          consent: { stamp: '1' },
          submitConsent: () => {}
        };
      } else {
        window.Cookiebot.consent = window.Cookiebot.consent || {};
        window.Cookiebot.consent.stamp = window.Cookiebot.consent.stamp || '1';
        window.Cookiebot.submitConsent = window.Cookiebot.submitConsent || (() => {});
      }
    } catch (e) {}
  });

  const page = await context.newPage();
  await page.goto(process.env.URL, { waitUntil: 'networkidle' });
  try {
    await page.waitForFunction(() => {
      return !!window.Cookiebot;
    }, { timeout: 3000 }).catch(() => null);
    await page.evaluate(() => {
      try {
        window.Cookiebot = window.Cookiebot || {};
        window.Cookiebot.consent = window.Cookiebot.consent || {};
        window.Cookiebot.consent.stamp = '1';
        if (typeof window.Cookiebot.submitConsent === 'function') {
          try { window.Cookiebot.submitConsent(); } catch (e) {}
        }
        document.cookie = 'CookieConsent=allow; path=/;';
      } catch (e) {}
    });
  } catch (e) {}
  await page.waitForTimeout(300);
  await context.storageState({ path: 'storageState.json' });
  await browser.close();
}
