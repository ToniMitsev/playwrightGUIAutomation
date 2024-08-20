import { expect } from "@playwright/test";

exports.SignUpPage = class SignUpPage {
    constructor(page) {
        this.page = page
        this.signUpButton = page.getByRole("button", { name: "Signup" })
        this.loginButton = page.getByRole("button", { name: "Login" })
        this.signUpName = page.getByRole("textbox", { name: "Name" })
        this.signUpEmail = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.clickOnContinueButton = page.getByRole("link", { name: "Continue" })
        this.loginEmail = page.locator('[data-qa="login-email"]')
        this.loginPassword = page.getByRole("textbox", { name: "Password"})
    }

    async clickOnSignUpButton() {
        await this.signUpButton.waitFor({ state: "visible" })
        await expect (this.signUpButton).toBeVisible()
        await this.signUpButton.click()
    }


    async fillExistingName(name) {
        await this.signUpName.waitFor({ state: "visible" })
        await expect (this.signUpName).toBeVisible()
        await this.signUpName.fill(name)
    }

    async fillExistingEmail(email) {
        await this.signUpEmail.waitFor({ state: "visible" })
        await expect (this.signUpEmail).toBeVisible()
        await this.signUpEmail.fill(email)
    }

    async fillNewName(name) {
        await this.signUpName.waitFor({ state: "visible" })
        await expect (this.signUpName).toBeVisible()
        await this.signUpName.fill(name)
    }

    async fillNewEmail(email) {
        await this.signUpEmail.waitFor({ state: "visible" })
        await expect (this.signUpEmail).toBeVisible()
        await this.signUpEmail.fill(email)
    }

    async clickOnContinue(){
        await this.clickOnContinueButton.waitFor({ state: "visible" })
        await expect(this.clickOnContinueButton).toBeVisible()
        await this.clickOnContinueButton.click()
    }

    async fillLoginEmail(email) {
        await this.loginEmail.waitFor({ state: "visible" })
        await expect(this.loginEmail).toBeVisible()
        await this.loginEmail.fill(email)
    }

    async fillLoginPassword(password) {
        await this.loginPassword.waitFor({ state: "visible" })
        await expect(this.loginPassword).toBeVisible()
        await this.loginPassword.fill(password)
    }

    async clickOnLoginButton() {
        await this.loginButton.waitFor({ state: "visible" })
        await expect(this.loginButton).toBeVisible()
        await this.loginButton.click()
    }
}


