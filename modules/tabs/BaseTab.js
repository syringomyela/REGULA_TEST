import { expect } from '@playwright/test';

export class BaseTab {
    page;
    constructor(page) {
        this.page = page
    }

    get imageTab() {
        return this.page.getByTestId('face-tab');
    }

    get dragndropInput() {
        return this.page.locator('input[type="file"]');
    }

    get carousel() {
        return this.page.locator('//div[contains(@class, "Carousel_scrollbar")]')
    }

    async assertTabContentPresence() {
        const targetWindow = this.elements.window;
        if (!targetWindow) {
            throw new Error(
                `${this.constructor.name}: elements.window is not defined.`
            );
        }
        await targetWindow.scrollIntoViewIfNeeded({ timeout: 10000 })
        await expect(this.elements.window).toBeVisible();
    }

    async dragNDropAction() {
        await this.dragndropInput.setInputFiles('./testData/matchingPic.jpg'); 
    };

    async carouselChangeAssert() {
        
    }
}