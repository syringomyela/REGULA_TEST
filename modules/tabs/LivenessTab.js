import { BaseTab } from "./BaseTab";

export class LivenessTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "Liveness_instruction")]')
        }
    }
}