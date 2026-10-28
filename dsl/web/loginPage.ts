import {Page, Locator} from '@playwright/test'

class LoginPage {
    page: Page
    
    constructor(page: Page) {
        this.page = page
    }

    async goto() {
        await this.page.goto("https://courses.ultimateqa.com/users/sign_in")
    }
}

export {LoginPage}