import { BaseTab } from "./BaseTab";
import { expect } from '@playwright/test';

export class LivenessTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "Liveness_instruction")]')
        }
    }

    async assertTabContentPresence() {
        await expect(this.elements.window).toBeVisible();
    }
}