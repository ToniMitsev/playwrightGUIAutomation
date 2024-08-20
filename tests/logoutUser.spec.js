import { test, expect } from "@playwright/test"
import { HomePage } from "../page-objects/homePage"
import { SignUpPage } from "../page-objects/signUpPage"
import { HeaderPage } from "../page-objects/headerPage"

const existingUser = JSON.parse(JSON.stringify(require('../test-data/existingUser.json')))

test.beforeEach("Navigate to home page", async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.goToHomePage()
})

test("Test Case 4: Logout User", async ({ page }) => {
    const headerPage = new HeaderPage(page)
    const signUpPage = new SignUpPage(page)
    
    await headerPage.clickOnsignUpLogin()
    
    await expect(page.getByText("Login to your account")).toBeVisible()

    await signUpPage.fillLoginEmail(existingUser.email)
    await signUpPage.fillLoginPassword(existingUser.password)
    await signUpPage.clickOnLoginButton()

    await expect(page.getByText("Logged in as " + existingUser.name)).toBeVisible()

    await headerPage.clickOnlogout()

    await expect(page).toHaveURL("https://automationexercise.com/login")
})