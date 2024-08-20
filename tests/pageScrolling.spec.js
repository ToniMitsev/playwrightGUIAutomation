import { test, expect } from "@playwright/test"
import { HomePage } from "../page-objects/homePage"
import { PageScrolling } from "../page-objects/pageScrolling"
import { ProductsPage } from "../page-objects/productsPage"

test.beforeEach("Navigate to home page", async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.goToHomePage()
})

test("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async ({ page }) => {
    const pageScrolling = new PageScrolling(page)
    await pageScrolling.scrollToSubscription()
    await pageScrolling.SubscriptionElementIsVisible()
    await page.pause()
    await pageScrolling.clickOnScrollUpArrowButton()
    await expect(page.getByText('Full-Fledged practice website').first()).toBeVisible()

})

test("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async ({ page }) => {
    const pageScrolling = new PageScrolling(page)
    await pageScrolling.scrollToSubscription()
    await pageScrolling.SubscriptionElementIsVisible()
    await page.pause()
    await pageScrolling.scrollToTheTop()
    await expect(page.getByText('Full-Fledged practice website').first()).toBeVisible()

})