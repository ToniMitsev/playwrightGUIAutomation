import { expect } from "@playwright/test";

exports.ContactUsPage = class ContactUsPage {
    constructor(page) {
        this.nameField = page.getByPlaceholder("Name", { exact: true })
        this.emailField = page.getByPlaceholder("Email", { exact: true })
        this.subjectField = page.getByPlaceholder("Subject", { exact: true })
        this.messageField = page.getByPlaceholder("Your Message Here", { exact: true })
        this.choseFileButton = page.locator('input[name="upload_file"]')
        this.submitButton = page.getByRole("button", { name: "Submit" })
        this.homeButton = page.getByRole('link', { name: " Home" })
    }

    async fillName(name) {
        await this.nameField.waitFor({ state: "visible" })
        await expect(this.nameField).toBeVisible()
        await this.nameField.fill(name)
    }

    async fillEmail(email) {
        await this.emailField.waitFor({ state: "visible" })
        await expect(this.emailField).toBeVisible()
        await this.emailField.fill(email)
    }
    async fillSubject(subject) {
        await this.subjectField.waitFor({ state: "visible" })
        await expect(this.subjectField).toBeVisible()
        await this.subjectField.fill(subject)
    }

    async fillMessage(message) {
        await this.messageField.waitFor({ state: "visible" })
        await expect(this.messageField).toBeVisible()
        await this.messageField.fill(message)
    }
    async uploadFile(filePath) {
        await this.choseFileButton.waitFor({ state: "visible" })
        await expect(this.choseFileButton).toBeVisible()
        await this.choseFileButton.setInputFiles(filePath)
      }
      async clickOnSubmit() {
        await this.submitButton.waitFor({ state: "visible" })
        await expect(this.submitButton).toBeVisible()
        await this.submitButton.click()
      }

      async clickOnHome() {
        await this.homeButton.waitFor({ state: "visible" })
        await expect(this.homeButton).toBeVisible()
        await this.homeButton.click()
      }
}