
export class BasePage {
    page;
    constructor(page) {
        this.page = page
    }

    static get cookieModal() {
        return {
            acceptAllButton: this.page.locator('//div//button[@class="cookiebanner__button__all"]'),
            acceptNeccessaryButton: this.page.locator('//div//button[@class="cookiebanner__button__necessary"]')
        }
    }
}