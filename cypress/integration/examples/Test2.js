describe("My First test suite",function(){
    it("My second test case",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('parentElement')
        // cy.get('@parentElement').find('.product').eq(2).contains("ADD TO CART").click()
        cy.get('@parentElement').find('.product').each(($e1, index, $list) => {
            const vegName = $e1.find('h4.product-name').text()
            if(vegName.includes('Cashews')){
                cy.wrap($e1).find('button').click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})