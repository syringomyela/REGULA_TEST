import { BaseTab } from "./BaseTab";
import { expect } from '@playwright/test';

export class FaceDetectionTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "Detection_detection")]')
        }
    }

    async assertTabContentPresence() {
        await expect(this.elements.window).toBeVisible();
    }
}