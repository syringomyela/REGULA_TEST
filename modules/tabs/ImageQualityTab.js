import { BaseTab } from "./BaseTab";
import { expect } from '@playwright/test';

export class ImageQualityTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "ImageQuality_quality")]')
        }
    }

    async assertTabContentPresence() {
        await expect(this.elements.window).toBeVisible();
    }
}