import { BaseTab } from "./BaseTab";

export class FaceMatchingTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "Matching_matching")]')
        }
    }
}