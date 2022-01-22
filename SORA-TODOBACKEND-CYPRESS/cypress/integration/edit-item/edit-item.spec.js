/// <reference types = "Cypress"/>
import testData from '../../fixtures/todoData.json' 

//this case can ensure that when editing an item the changes will be taken.
//when looking for the previous element before being edited, it will not be found.
//To create an appropriate environment to test, delete backend endpoint is used todo clean data.
describe('Edit item from the list', ()=>{
    beforeEach('Check url', () =>{
        cy.deleteTodoItems()
        cy.checkUrl()
    })
        it('Add and edit items',()=>{
            let testDataJson = Object.values (testData)
            testDataJson.forEach( e => {
                cy.createTodosItemsByApi(e,e)
            })
            cy.reload()
            cy.editItem(testData.item,testData.changeItem)
            cy.checkItemOnList(testData.changeItem)
            cy.checkItemNotOnList(testData.item)


        })
})