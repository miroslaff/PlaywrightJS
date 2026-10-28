import { Page } from "@playwright/test";
import { LoginPage } from "../dsl/web/loginPage";

class Gateway {
    pageObjects: WebRegister
    
    constructor(page: Page) {
        this.pageObjects = new WebRegister(page)
    }
}

class WebRegister {
    #loginPage: LoginPage
    #page: Page

    constructor(page: Page) {
        this.#page = page
    }

    get loginPage() { // lazy loading
        if (!this.#loginPage) {
            this.#loginPage = new LoginPage(this.#page)
        }
        return this.#loginPage
    }
}

export {Gateway}