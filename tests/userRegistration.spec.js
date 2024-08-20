import { test, expect } from "@playwright/test"
import { HomePage } from "../page-objects/homePage"
import { HeaderPage } from "../page-objects/headerPage"
import { SignUpPage } from "../page-objects/signUpPage"
import { UserDetailsPage } from "../page-objects/userDetailsPage"

const accountDetails = JSON.parse(
    JSON.stringify(require("../test-data/accountDetails.json"))
  )
  const existingUser = JSON.parse(
    JSON.stringify(require("../test-data/existingUser.json"))
  )

test.beforeEach("Navigate to home page", async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.goToHomePage()
})


test("Test Case 1: Register User", async ({ page }) => {
    const headerPage = new HeaderPage(page)
    const signUpPage = new SignUpPage(page)
    const userDetailsPage = new UserDetailsPage(page)

    await headerPage.clickOnsignUpLogin()
    await expect (page.locator('[class="signup-form"]')).toBeVisible()
    await expect (page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()
    await signUpPage.fillNewName(accountDetails.firstName)
    await signUpPage.fillNewEmail(accountDetails.newEmail)
    await signUpPage.clickOnSignUpButton()
    await expect(page.getByText('Enter Account Information')).toBeVisible()
    await userDetailsPage.fillPassword(accountDetails.password)
    await userDetailsPage.selectDay(accountDetails.day)
    await userDetailsPage.selectMonth(accountDetails.month)
    await userDetailsPage.selectYear(accountDetails.year)
    await userDetailsPage.checkNewsletter()
    await userDetailsPage.checkSpecialOffers()
    await userDetailsPage.fillFirstName(accountDetails.firstName)
    await userDetailsPage.fillLastName(accountDetails.lastName)
    await userDetailsPage.fillCompany(accountDetails.company)
    await userDetailsPage.fillAddress(accountDetails.address1)
    await userDetailsPage.fillAddress2(accountDetails.address2)
    await userDetailsPage.selectCountry(accountDetails.country)
    await userDetailsPage.fillState(accountDetails.state)
    await userDetailsPage.fillCity(accountDetails.city)
    await userDetailsPage.fillZipCode(accountDetails.zipcode)
    await userDetailsPage.fillMobileNumber(accountDetails.mobileNumber)
    await userDetailsPage.clickOnCreateAccount()

    await expect(page.getByText("Account Created!")).toBeVisible()

    await signUpPage.clickOnContinue()

    await expect(page.getByText("Logged in as " + accountDetails.firstName)).toBeVisible()

    await headerPage.clickOndeleteAccount()

    await expect(page.getByText("Account Deleted!")).toBeVisible()

    await signUpPage.clickOnContinue()



})

test("Test Case 5: Register User with existing email", async ({ page }) => {
    const headerPage = new HeaderPage(page)
    const signUpPage = new SignUpPage(page)

    await headerPage.clickOnsignUpLogin()
    await expect (page.locator('[class="signup-form"]')).toBeVisible()
    await expect (page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()
    await signUpPage.fillExistingName(existingUser.name)
    await signUpPage.fillExistingEmail(existingUser.email)
    await signUpPage.clickOnSignUpButton()

    await expect (page.getByText('Email Address already exist!')).toBeVisible()


})