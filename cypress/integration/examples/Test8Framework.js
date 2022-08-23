/// <reference types="Cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/ProductPage"

describe("My Eight test suite",function(){
    before(function (){
        cy.fixture("example").then(function(data){
            this.data = data
        })
    })
    it("My Eight test case",function(){
        const homePage = new HomePage();
        const productPage = new ProductPage();
        cy.visit(Cypress.env('url')+ '/angularpractice')
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
        var sum=0
        cy.get('tr td:nth-child(4) strong').each((ele)=>{
            var valueText = ele.text()
            var value = valueText.split(" ")
            value = value[1].trim()
            cy.log(value)
            sum = sum + Number(value)
        })
        cy.get('td h3 strong').then((ele2)=>{
            const amount = ele2.text()
            var res = amount.split(" ")
            const total = res[1].trim()
            expect(Number(total)).to.equal(Number(sum))
        })
        cy.contains('Checkout').click()
        cy.get('#country').type(this.data.country)
        cy.get('div[class="input-field col s12"]').next().click()
        cy.get('.checkbox').click()
        cy.get('input[type="submit"]').click()
        // cy.get('.alert').should('have.text','Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then((e1) =>{
            const actualText = e1.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })
})