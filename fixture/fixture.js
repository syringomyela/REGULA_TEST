import {test as base} from '@playwright/test';
import { PageFactory } from '../modules/PageFactory.js';

export const test = base.extend<pages> {
    pages: async({ page }, use) => {
        const pages = new PageFactory(page);
        await use(pages);
    }
}