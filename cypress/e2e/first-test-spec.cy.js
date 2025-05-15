it('first test', () => {
    cy.visit('/todo');
    cy.get('h1').should('be.visible')
    cy.get('[data-test="new-todo"]').should('be.visible')

    cy.get('[data-test="new-todo"]').type('Clean the house{enter}')
    cy.contains('Clean the house').should('be.visible')

    cy.contains('Pay electric bill').parent().find('input').check()
    cy.contains('Pay electric bill').parents('li').should('have.class', 'completed')
    cy.contains('Clear completed').should('be.visible')

    cy.contains('Active').click()
    cy.contains('Active').should('have.class', 'selected').and('be.visible')
    cy.get('.todo-count').contains('2').should('not.be.visible')
});