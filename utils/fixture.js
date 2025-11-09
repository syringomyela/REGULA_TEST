import { test as base } from '@playwright/test';
import { PageFactory } from '../modules/PageFactory.js';


export const test = base.extend({
  pages: async ({ browser }, use) => {
    // Создаём контекст с применением storageState
    const context = await browser.newContext({
      storageState: './storageState.json'
    });

    const page = await context.newPage();
    const pages = new PageFactory(page);
    await use(pages);

    await context.close();
  }
});