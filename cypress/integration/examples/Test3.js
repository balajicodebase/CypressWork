/// <reference types="Cypress" />
describe("My Third test suite",function(){
    it("My Third test case",function(){
        //Check Boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2'])

        //Static Drop Down
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Drop Down
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text()=="India"){
                $e1.trigger("click")
            }
        })

        //Find Visible and invisible elements
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').type('balaji').should('be.visible').and('have.value','balaji')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        //radio button
        cy.get('[value = "radio2"]').check().should('be.checked')

    })
})