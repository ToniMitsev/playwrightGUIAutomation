import { expect } from '@playwright/test'

exports.HeaderPage = class HeaderPage {
    constructor(page) {
        this.page = page
        this.signUpLogin = page.getByRole('link', { name: "Signup / Login" })
        this.contactUs = page.getByRole('link', { name: "Contact us" })
        this.logout = page.getByRole('link', { name: "Logout" })
        this.deleteAccount = page.getByRole('link', { name: "Delete Account" })
        this.testCases = page.getByRole('link', { name: "Test Cases", exact: true })
        this.productsPage = page.getByRole('link', { name: "Products" })
    }

    async clickOnsignUpLogin() {
        await this.signUpLogin.waitFor({ state: "visible" })
        await expect (this.signUpLogin).toBeVisible()
        await this.signUpLogin.click()
    }

    async clickOncontactUs() {
        await this.contactUs.waitFor({ state: "visible" })
        await expect (this.contactUs).toBeVisible()
        await this.contactUs.click()
    }

    async clickOnlogout() {
        await this.logout.waitFor({ state: "visible" })
        await expect (this.logout).toBeVisible()
        await this.logout.click()
    }

    async clickOndeleteAccount() {
        await this.deleteAccount.waitFor({ state: "visible" })
        await expect (this.deleteAccount).toBeVisible()
        await this.deleteAccount.click()
    }

    async clickOnTestCases() {
        await this.testCases.waitFor({ state: "visible" })
        await expect(this.testCases).toBeVisible()
        await this.testCases.click()
    }

    async clickOnProductsPage() {
        await this.productsPage.waitFor({ state: "visible" })
        await expect(this.productsPage).toBeVisible()
        await this.productsPage.click()
    }
}