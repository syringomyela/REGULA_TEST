import { expect } from "@playwright/test";
import { BaseTab } from "./BaseTab.js";
import { testData } from "../../testData/testData.js";

export class FaceDetectionTab extends BaseTab {
    constructor(page) {
        super(page)
    }

    get elements() {
        return {
            window: this.page.locator('//div[contains(@class, "Detection_detection")]')
        }
    }

    async assertResponseDetails(response) {
        const responseJSON = await response.json();
        const responseOptions = responseJSON.results.detections[0].attributes.details.map(obj => obj.name);
        const expectedOptions = testData.bodies.detectBody('stub').processParam.attributes.config.map(obj => obj.name)
        expect(new Set(responseOptions), 'Response contains all requested options').toEqual(new Set(expectedOptions));
    }
}