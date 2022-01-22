///<reference types = "Cypress"/>
import testData from '../../fixtures/todoData.json'

///this test case can ensure that every item added shows up at front.
///also we are adding different kind of data to ensure greater coverage of accepted characters.
//To create an appropriate environment to test, delete backend endpoint is used todo clean data.
describe('Add diferent items to list', ()=>{
    beforeEach('Check url', ()=>{
        cy.deleteTodoItems()
        cy.checkUrl()
    })
    it('Add and check items',()=>{
        let testDataJson = Object.values (testData)
        testDataJson.forEach( e => {
            cy.addItem(e)
            cy.checkItemOnList(e)            
        })
    }) 
})