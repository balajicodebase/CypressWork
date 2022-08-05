/// <reference types="Cypress" />
describe("My Fourth test suite",function(){
    it("My FOurth test case",function(){
        //Check Boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //https://qaclickacademy.com/practice.php
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //Windows:alert
        cy.on('window:alert',(str) => {
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
        })
        //window:confirm
        cy.on('window:confirm',(str) => {
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
        })
        //Open Child window in same window
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('include','rahulshettyacademy')
        //Navigating browser controls
        cy.go('back')
    })
})