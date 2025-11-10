import { expect } from '@playwright/test';

export class BasePage {
    page;
    constructor(page) {
        this.page = page
    }

    get cookieModal() {
        return {
            acceptAllButton: this.page.locator('//div//button[@class="cookiebanner__button__all"]'),
            acceptNeccessaryButton: this.page.locator('//div//button[@class="cookiebanner__button__necessary"]'),
        }
    }

    get tab() {
        return this.page.locator('//nav[contains(@class, "nav-tabs")]//div');
    }

    get header() {
        return {
            logo: this.page.getByTestId('header-logo-link'),
            navigation: {
                faceSDKDropdown: this.page.getByTestId('navigation'),
                devHubButton: this.page.getByTestId('navigation-link-developer-hub'),
                helpCenterButton: this.page.getByTestId('navigation-link-help-center'),
                blogButton: this.page.getByTestId('navigation-link-blog'),
            },
            getInTouchButton: this.page.getByTestId('button-get-in-touch'),
        }
    }

    async openStartPage() {
        await this.page.goto('');
        expect(this.page.url()).toBe(process.env.URL);
    }
    tabs = {
        livenessTab: 'Liveness detection',
        detectionTab: 'Face detection',
        matchingTab: 'Face matching',
        qualityTab: 'Face image quality',
    }

    async openTab(tabName) {
        const allowedValues = Object.keys(this.tabs);

        if (!allowedValues.includes(tabName)) {
            throw new Error(
                `Invalid tab refference "${tabName}". tab names: ${allowedValues.join(', ')}`
            );
        }

        await this.tab.getByText(this.tabs[tabName]).click();
        await this.page.waitForLoadState('networkidle');
    }
}