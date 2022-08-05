/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("Iframe test suite",function(){
    it("Iframe test case",function(){
        //Mouse Hover
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //https://qaclickacademy.com/practice.php
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(2000).iframe().find("h1[class*='pricing-title']").should('have.length',2)
    })
})