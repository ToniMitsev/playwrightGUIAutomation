import { expect } from "@playwright/test"

exports.PageScrolling = class PageScrolling {
  constructor(page) {
    this.page = page
    this.subscriptionElement = page.getByText('Subscription')
    this.scrollUpArrowButton = page.locator('[href="#top"]')
    this.topElement = page.getByAltText('Website for automation practice')
  }

  async scrollToSubscription() {
    await this.subscriptionElement.waitFor({ state: "visible" })
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

  }

  async SubscriptionElementIsVisible() {
    await this.subscriptionElement.waitFor({ state: "visible" })
    await expect(this.subscriptionElement).toBeVisible()
  }

  async clickOnScrollUpArrowButton(){
    await this.scrollUpArrowButton.waitFor({ state: "visible" })
    await expect(this.scrollUpArrowButton).toBeVisible()
    await this.scrollUpArrowButton.click()
  }

  async scrollToTheTop() {
    await this.topElement.waitFor({ state: 'visible' })
    await expect(this.topElement).toBeVisible()
    await this.topElement.scrollIntoViewIfNeeded()
  }



}

















