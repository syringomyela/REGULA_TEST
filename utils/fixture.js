import { test as base } from '@playwright/test';
import { PageFactory } from '../modules/PageFactory.js';
import { TabFactory } from '../modules/TabFactory.js';


export const test = base.extend({
  pages: async ({ page }, use) => {
    const pages = new PageFactory(page);
    await use(pages);
  },
  tabs: async({ page }, use) => {
    const tabs = new TabFactory(page);
    await use(tabs);
  }
});