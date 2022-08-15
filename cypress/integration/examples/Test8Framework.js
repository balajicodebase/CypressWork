/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"

describe("My Eight test suite",function(){
    before(function (){
        cy.fixture("example").then(function(data){
            this.data = data
        })
    })
    it("My Eight test case",function(){
        const homePage = new HomePage();
        const productPage = new ProductPage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEnterprenaur().should('be.disabled') 
        Cypress.config('defaultCommandTimeout',7000)
        homePage.getShopTab().click()
        this.data.productName.forEach(prod => {
            cy.selectProduct(prod)
        });
        productPage.getCheckoutButton().click()
        cy.contains('Checkout').click()
        cy.get('#country').type(this.data.country)
        cy.get('div.suggestions ul li a').click()
        cy.get('.checkbox').click()
        cy.get('input[type="submit"]').click()
        // cy.get('.alert').should('have.text','Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then((e1) =>{
            const actualText = e1.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })
})