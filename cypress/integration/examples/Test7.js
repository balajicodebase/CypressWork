/// <reference types="Cypress" />
describe("My Sixth test suite",function(){
    it("My Sixth test case",function(){
        //Mouse Hover
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //https://qaclickacademy.com/practice.php
        cy.get('#opentab').then(e1=>{
            const url = e1.prop('href')
            cy.visit(url)
        })
    })
})