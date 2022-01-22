Cypress.Commands.add("addItem", (item) =>{
    cy.get('#new-todo')
        .clear()
        .type(item)
        .type('{enter}')
})

Cypress.Commands.add("checkItemOnList", (item) =>{
    cy.get('#todoapp')
      .should('contain', item)
})
Cypress.Commands.add("checkItemNotOnList", (item) =>{
    cy.get('#todoapp').contains(item).should('not.exist')
})

Cypress.Commands.add("editItem", (item,changeItem) =>{
    cy.get('#todoapp')
      .contains(item)
      .dblclick().focused()
      .type('{selectall}{del}')
      .type(changeItem)
      .type('{enter}')

})

Cypress.Commands.add("deleteItem", () =>{
    cy.get('#todoapp')
      .find('.destroy')
      .invoke('show')
    cy.get('.view > .destroy').click({ multiple: true })
})

Cypress.Commands.add('deleteSpecificItemByDescription',item => {
    cy.get(`label:contains("${item}") ~ .destroy`).focus().click({force: true})
}) 