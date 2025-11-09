export class BaseTab {
    page;
    constructor(page) {
        this.page = page
    }

    get imageTab() {
        return this.page.getByTestId('face-tab');
    }
}