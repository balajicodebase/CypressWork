describe("My First test suite",function(){
    it("My first test case",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // Finding element and type in search box
        cy.get('.product:visible').should('have.length',4)
        // Parent Child Chaining
        cy.get('.products').as('parentElement')
        cy.get('@parentElement').find('.product').should('have.length',4)
        cy.get('@parentElement').find('.product').eq(2).contains("ADD TO CART").click()
        cy.get('@parentElement').find('.product').each(($e1, index, $list) => {
            const vegName = $e1.find('h4.product-name').text()
            if(vegName.includes('Cashews')){
                cy.wrap($e1).find('button').click();
            }
        })
        cy.get('.brand').then((logoElement) =>{
            cy.log(logoElement.text())
        });
        cy.get('.brand').should('have.text','GREENKART')
    })
})