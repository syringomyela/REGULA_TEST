import { BaseTab } from "./BaseTab.js";

export class ImageQualityTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "ImageQuality_quality")]')
        }
    }
}