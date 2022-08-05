/// <reference types="Cypress" />
describe("My Fifth test suite",function(){
    it("My Fifth test case",function(){
        //Dynamic Webtable sibiling
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //https://qaclickacademy.com/practice.php
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("Python")){
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().should('have.text','25')
            }
        })
    })
})