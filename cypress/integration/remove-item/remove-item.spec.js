/// <reference types = "Cypress"/>
import testData from '../../fixtures/todoData.json' 
import {deleteSpecificItemByDescription} from '../../support/Commands/todo-commands-backend';

//This test case can ensure that an element is deleted from the list
//when looking the element, it will not be found
//To create an appropriate environment to test, delete backend endpoint is used todo clean data.
describe('Delete item from list', ()=>{
    beforeEach('Check url', () =>{
        cy.deleteTodoItems();
        cy.createTodosItemsByApi(testData.item,testData.item);
        cy.checkUrl();
    })
    it('Delete specifict item',()=>{
        cy.deleteSpecificItemByDescription(testData.item)  
        cy.checkItemNotOnList(testData.item)
    })

})