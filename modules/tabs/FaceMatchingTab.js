import { BaseTab } from "./BaseTab";
import { expect } from '@playwright/test';

export class FaceMatchingTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "Matching_matching")]')
        }
    }

    async assertTabContentPresence() {
        await expect(this.elements.window).toBeVisible();
    }
}