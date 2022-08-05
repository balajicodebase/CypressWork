/// <reference types="Cypress" />
describe("My Sixth test suite",function(){
    it("My Sixth test case",function(){
        //Mouse Hover
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //https://qaclickacademy.com/practice.php
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })
})