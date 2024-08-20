import { expect } from "@playwright/test";

exports.ProductsPage = class ProductsPage {
    constructor(page){
        this.page = page
        this.viewProduct = page.getByRole("link", { name: "View Product"}).first()
        this.productName = page.locator('[class="product-information"]').getByRole('heading')
        this.productCategory = page.getByRole('paragraph').getByText("Category")
        this.productPrice = page.getByText('Rs.')
        this.productAvailability = page.getByRole('paragraph').getByText("Availability")
        this.productCondition = page.getByRole('paragraph').getByText("Condition")
        this.productBrand = page.getByRole('paragraph').getByText("Brand")

    }

    async clickOnViewProduct() {
        await this.viewProduct.waitFor( {state: "visible" })
        await expect(this.viewProduct).toBeVisible()
        await this.viewProduct.click()
    }

    async productNameVisability() {
        await this.productName.waitFor({ state: "visible"} )
        await expect(this.productName).toBeVisible()
    }

    async productCategoryVisability() {
        await this.productCategory.waitFor( {state: "visible" })
        await expect(this.productCategory).toBeVisible()
    }

    async productPriceVisability() {
        await this.productPrice.waitFor( {state: "visible" })
        await expect(this.productPrice).toBeVisible()
    }
    
    async productAvailabilityVisability() {
        await this.productAvailability.waitFor({ state: "visible"} )
        await expect(this.productAvailability).toBeVisible()
    }
    
    async productConditionVisability() {
        await this.productCondition.waitFor({ state: "visible"} )
        await expect(this.productCondition).toBeVisible()
    }
    
    async productBrandVisability() {
        await this.productBrand.waitFor({ state: "visible"} )
        await expect(this.productBrand).toBeVisible()
    }
}


