import { chromium } from '@playwright/test';
import { BasePage } from '../modules/pages/BasePage';

export default async function globalSetup() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('');

    await BasePage.cookieModal.acceptAllButton.click();

    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();
}