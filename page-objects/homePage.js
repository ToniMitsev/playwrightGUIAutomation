import { expect } from "@playwright/test"

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page
    // this.subscriptionElement = page.getByText('Subscription')
    // this.scrollUpArrowButton = page.locator('#scrollUp')
  }

  async goToHomePage() {
    await this.page.goto("https://automationexercise.com/", {
      waituntill: "domcontentloaded",
    })
    await this.page.getByLabel('Consent', { exact: true }).click()
    await expect(this.page).toHaveURL("https://automationexercise.com/")
  }

  // async scrollToSubscription() {
  //   await this.subscriptionElement.waitFor({ state: "visible" })
  //   await this.subscriptionElement.scrollIntoViewIfNeeded()

  // }

  // async scrollUpArrow() {
  //   await this.scrollUpArrowButton.waitFor({ state: 'visible' })
  //   await expect(this.scrollUpArrowButton).toBeVisible()
  //   await this.scrollUpArrowButton.click()
  // }
  
}


