import { RegulaPage } from "./pages/RegulaPage.js";

export class PageFactory {
    constructor(page) {
        this.page = page;
        this.regulaPage = new RegulaPage(this.page);
    }
}