import { BasePage } from "./BasePage"

export class RegulaPage extends BasePage {
    constructor(page) {
        super(page)
    }

    get tab() {
        return this.page.locator('//nav[contains(@class, "nav-tabs")]//div');
    }

    get header() {
        return {
            logo: this.page.locator('svg[class*="LinkIcon"]'),
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
        await this.page.goto(baseUrl);
    }
}