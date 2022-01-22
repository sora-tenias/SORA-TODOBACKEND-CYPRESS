Cypress.Commands.add('getTodos', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('apiUrl')
    }).then(response => {
      cy.wrap(response.body).as('todoItems');
    })
  })
  
  Cypress.Commands.add('deleteTodoItems', () => {
      cy.getTodos();
      cy.get('@todoItems').then(items => {
      if(items.length==0) {
        cy.log('No items for delete');
      } else {
        let itemsId = [];
        items.forEach(item => {
          itemsId.push(item.id)
        });
  
        for (const item of itemsId) {
          cy.request({
            method: 'DELETE',
            url: Cypress.env('apiUrl')+`/${item}`
          })
        }
      }
    })
  });
  
  Cypress.Commands.add('createTodosItemsByApi', (item, i) => {
    let requestBody = {
      order:i,
      title:item,
      completed:false
    };
    cy.request('POST', Cypress.env('apiUrl'), requestBody);
  });
  


