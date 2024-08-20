import { expect } from "@playwright/test";

exports.UserDetailsPage = class UserDetailsPage {
    constructor(page) {
        this.page = page
        this.mrTitle = page.getByLabel("Mr.")
        this.mrsTitle = page.getByLabel("Mrs.")
        this.passwordTextBox = page.getByLabel("Password *", { exact: true })
        this.dateDay = page.locator("#days")
        this.dateMonth = page.locator("#months")
        this.dateYear =  page.locator("#years")
        this.newsletterCheckBox = page.locator("#newsletter")
        this.specialOffersCheckBox = page.locator("#optin")
        this.firstName = page.getByLabel("First name *", { exact: true })
        this.lastName = page.getByLabel("Last name *", { exact: true })
        this.company = page.getByLabel("Company", { exact: true })
        this.adress = page.getByLabel("Address *")
        this.adressSecond = page.getByLabel("Address 2")
        this.countryDropDown = page.getByLabel("Country *")
        this.state = page.getByLabel("State *")
        this.city = page.getByLabel("City *")
        this.zipCode = page.locator("#zipcode")
        this.mobileNumber = page.getByLabel("Mobile Number *")
        this.createAccountButton = page.getByRole("button", { name: "Create Account",})
    }

    async selectMrTitle() {
        await this.mrTitle.waitFor({ state: "visible" })
        await expect(this.mrTitle).toBeVisible()
        await this.mrTitle.check()
    }

    async selectMrsTitle() {
        await this.mrsTitle.waitFor({ state: "visible" })
        await expect(this.mrsTitle).toBeVisible()
        await this.mrsTitle.check()
    }

    async fillPassword(password) {
        await this.passwordTextBox.waitFor({ state: "visible"})
        await expect(this.passwordTextBox).toBeVisible()
        await this.passwordTextBox.fill(password)
    }

    async selectDay(day) {
        await this.dateDay.waitFor({ state: "visible" })
        await expect(this.dateDay).toBeVisible()
        await this.dateDay.selectOption(day)
    }

    async selectMonth(month) {
        await this.dateMonth.waitFor({ state: "visible" })
        await expect(this.dateMonth).toBeVisible()
        await this.dateMonth.selectOption(month)
    }

    async selectYear(year) {
        await this.dateYear.waitFor({ state: "visible" })
        await expect(this.dateYear).toBeVisible()
        await this.dateYear.selectOption(year)
    }

    async checkNewsletter() {
        await this.newsletterCheckBox.waitFor({ state: "visible" })
        await expect(this.newsletterCheckBox).toBeVisible()
        await this.newsletterCheckBox.check()
    }

    async checkSpecialOffers() {
        await this.specialOffersCheckBox.waitFor({ state: "visible" })
        await expect(this.specialOffersCheckBox).toBeVisible()
        await this.specialOffersCheckBox.check()
    }

    async fillFirstName(firstName) {
        await this.firstName.waitFor({ state: "visible" })
        await expect(this.firstName).toBeVisible()
        await this.firstName.fill(firstName)
    }

    async fillLastName(lastName) {
        await this.lastName.waitFor({ state: "visible" })
        await expect(this.lastName).toBeVisible()
        await this.lastName.fill(lastName)
    }

    async fillCompany(companyName) {
        await this.company.waitFor({ state: "visible" })
        await expect(this.company).toBeVisible()
        await this.company.fill(companyName)
    }

    async fillAddress(addressFirst) {
        await this.adress.waitFor({ state: "visible" })
        await expect(this.adress).toBeVisible()
        await this.adress.fill(addressFirst)
    }

    async fillAddress2(address_Second) {
        await this.adressSecond.waitFor({ state: "visible" })
        await expect(this.adressSecond).toBeVisible()
        await this.adressSecond.fill(address_Second)
    }

    async selectCountry(country) {
        await this.countryDropDown.waitFor({ state: "visible" })
        await expect(this.countryDropDown).toBeVisible()
        await this.countryDropDown.selectOption(country)
    }

    async fillState(state) {
        await this.state.waitFor({ state: "visible" })
        await expect(this.state).toBeVisible()
        await this.state.fill(state)
    }

    async fillCity(city) {
        await this.city.waitFor({ state: "visible" })
        await expect(this.city).toBeVisible()
        await this.city.fill(city)
    }

    async fillZipCode(zip) {
        await this.zipCode.waitFor({ state: "visible" })
        await expect(this.zipCode).toBeVisible()
        await this.zipCode.fill(zip)
    }

    async fillMobileNumber(number) {
        await this.mobileNumber.waitFor({ state: "visible" })
        await expect(this.mobileNumber).toBeVisible()
        await this.mobileNumber.fill(number)
    }

    async clickOnCreateAccount() {
        await this.createAccountButton.waitFor({ state: "visible" })
        await expect(this.createAccountButton).toBeVisible()
        await this.createAccountButton.click()
    }
}