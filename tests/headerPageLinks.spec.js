import { test, expect } from "@playwright/test"
import { HomePage } from "../page-objects/homePage"
import { HeaderPage } from "../page-objects/headerPage"
import { ProductsPage } from "../page-objects/productsPage"

test.beforeEach("Navigate to home page", async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.goToHomePage()
})

test("Test Case 7: Verify Test Cases Page", async ({ page }) => {
    const headerPage = new HeaderPage(page)

    await headerPage.clickOnTestCases()

    await expect(page).toHaveURL("https://automationexercise.com/test_cases")
})

test("Test Case 8: Verify All Products and product detail page", async ({ page }) => {
    const headerPage = new HeaderPage(page)
    const productsPage = new ProductsPage(page)

    await headerPage.clickOnProductsPage()

    await expect(page).toHaveURL("https://automationexercise.com/products")
    await expect(page.locator('[class="features_items"]')).toBeVisible()

    await productsPage.clickOnViewProduct()
    await expect(page).toHaveURL("https://automationexercise.com/product_details/1")

    await productsPage.productNameVisability()
    await productsPage.productCategoryVisability()
    await productsPage.productPriceVisability()
    await productsPage.productAvailabilityVisability()
    await productsPage.productConditionVisability()
    await productsPage.productBrandVisability()
})