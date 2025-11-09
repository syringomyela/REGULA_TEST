import { expect } from '@playwright/test';

export class BaseTab {
    page;
    constructor(page) {
        this.page = page
    }

    get imageTab() {
        return this.page.getByTestId('face-tab');
    }

    async assertTabContentPresence() {
        if (!this.elements.window) {
            throw new Error(
                `${this.constructor.name}: elements.window is not defined.`
            );
        }

        await expect(this.elements.window).toBeVisible();
    }
}