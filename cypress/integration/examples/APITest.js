/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My API test case',function() {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
        "name":"Learn Appium Automation with Java",
        "isbn":"bcdss",
        "aisle":"22s7",
        "author":"John for"
    }).then(function(resposne){
        expect(resposne.body).to.have.property("Msg","successfully added")
        expect(resposne.status).to.eq(200)
    })
})
})