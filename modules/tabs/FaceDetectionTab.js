import { BaseTab } from "./BaseTab";

export class FaceDetectionTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "Detection_detection")]')
        }
    }
}