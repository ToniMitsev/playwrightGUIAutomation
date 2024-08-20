import { test, expect } from "@playwright/test"
import { HomePage } from "../page-objects/homePage"
import { HeaderPage } from "../page-objects/headerPage"
import { SignUpPage } from "../page-objects/signUpPage"

const existingUser = JSON.parse(
    JSON.stringify(require("../test-data/existingUser.json"))
  )

test.beforeEach("Navigate to home page", async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.goToHomePage()
})

test("Test Case 2: Login User with correct email and password", async ({ page }) => {
    const headerPage = new HeaderPage(page)
    const signUpPage = new SignUpPage(page)
    
    await headerPage.clickOnsignUpLogin()
    
    await expect(page.getByText("Login to your account")).toBeVisible()

    await signUpPage.fillLoginEmail(existingUser.email)
    await signUpPage.fillLoginPassword(existingUser.password)
    await signUpPage.clickOnLoginButton()

    await expect(page.getByText("Logged in as " + existingUser.name)).toBeVisible()
})

test("Test Case 3: Login User with incorrect email and password", async ({ page }) => {
    const headerPage = new HeaderPage(page)
    const signUpPage = new SignUpPage(page)

    await headerPage.clickOnsignUpLogin()
    
    await expect(page.getByText("Login to your account")).toBeVisible()

    await signUpPage.fillLoginEmail("wrong@email.con")
    await signUpPage.fillLoginPassword("wrong-mail-password")
    await signUpPage.clickOnLoginButton()

    await expect(page.getByText("Your email or password is incorrect!")).toBeVisible()


})

