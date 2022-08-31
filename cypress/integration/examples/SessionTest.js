/// <reference types="Cypress" />
const neatCSV = require('neat-csv')
let prodName;
describe("JWT session",function(){
    it("Login through local storage",async() =>{
       cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client',
            {
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
       })
       cy.get(".card-body b").eq(1).then(function(ele){
        prodName = ele.text();
        console.log(prodName)
       })
       cy.get(".card-body .btn.w-10.rounded").eq(1).click();
       cy.get("[routerlink*='cart']").click();
       cy.contains("Checkout").click();
       cy.get("[placeholder*='Country']").type("ind");
       cy.get(".ta-results button.ta-item").eq(1).click();
       cy.get(".action__submit").click();
       cy.wait(2000)
       cy.get(".order-summary button").click();

       
       cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_s.balaji790.csv")
       .then(async(text) =>
       {
        const csv = await neatCSV(text)
        console.log(csv)
        const actualProductCsv = csv[0]["Product Name"]
        console.log(actualProductCsv)
        expect(prodName).to.equal(actualProductCsv)
       })
    })
})