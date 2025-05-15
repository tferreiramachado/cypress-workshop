it('first api test', () => {
    cy.request('GET', 'https://www.bstackdemo.com/').then((response) => {
        expect(response.status).to.eq(200)
    })
})

it('intercept api request 1', () => {
    cy.intercept('GET', '/failed-request').as('failedRequest')

    cy.intercept('GET', '/api/products').as('productsRequest')
    
    cy.visit('https://www.bstackdemo.com/')

    cy.wait('@failedRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(404)
    })

    cy.wait('@productsRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
        expect(interception.response.body).not.to.be.empty
        expect(interception.response.body).to.have.property('products')
    })
})

it('intercept api request 2', () => {
    cy.intercept('GET', '/comments').as('comments')

    cy.visit('https://qa-practice.netlify.app/fetch-api')

    cy.wait('@comments').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
        expect(interception.response.body).not.to.be.empty
    })
})

it.only('mock api test 1', () => {
    cy.intercept('GET', '/api/products', {
        fixture: 'products.json'
    })

    cy.visit('https://www.bstackdemo.com/')
})