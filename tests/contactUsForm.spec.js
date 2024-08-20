import { test, expect } from "@playwright/test"
import { HomePage } from "../page-objects/homePage"
import { HeaderPage } from "../page-objects/headerPage"
import { ContactUsPage } from "../page-objects/contactUsPage"

const contactUsDetails = JSON.parse(JSON.stringify(require("../test-data/contactFormData.json")))

test.beforeEach("Navigate to home page", async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.goToHomePage()
})

test("Test Case 6: Contact Us Form", async ({ page }) => {
    const headerPage = new HeaderPage(page)
    const contactUsPage = new ContactUsPage(page)

    await headerPage.clickOncontactUs()

    await expect(page.getByText("Get In Touch")).toBeVisible()

    await contactUsPage.fillName(contactUsDetails.name)
    await contactUsPage.fillEmail(contactUsDetails.email)
    await contactUsPage.fillSubject(contactUsDetails.subject)
    await contactUsPage.fillMessage(contactUsDetails.message)

    await contactUsPage.uploadFile("./test-data/simpleFile.txt")

    await page.on('dialog', dialog => dialog.accept())
    await contactUsPage.clickOnSubmit()

    await expect(page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.')).toBeVisible()

    await contactUsPage.clickOnHome()

    await expect(page).toHaveURL("https://automationexercise.com/")




})