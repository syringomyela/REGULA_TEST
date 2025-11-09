import { RegulaPage } from "./pages/RegulaPage";

export class PageFactory {
    regulaPage;

    constructor(page) {
        this.page = page;
        this.regulaPage = new RegulaPage(this.page);
    }
}