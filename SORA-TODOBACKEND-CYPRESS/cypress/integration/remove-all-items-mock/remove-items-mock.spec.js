/// <reference types = "Cypress"/>

////this test case can ensure front app functionality using a mock.
//To create appropiate enviroment to test, delete backend endpoint is used todo clean data.
//To create an appropriate environment to test, delete backend endpoint is used todo clean data.
describe('Delete item from list', ()=>{
    beforeEach('Check url', () =>{
        cy.deleteTodoItems()
        cy.checkUrl()
    })
    it('Delete items using a get items mock',()=>{
        cy.intercept('GET', Cypress.env('apiUrl'), { fixture: 'getMockResponse.json'}).as('getItems');
        cy.reload()       
        cy.deleteItem()
    })

})