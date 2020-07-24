describe('My First Test', function () {
    it('Does not do much', function () {
        cy.visit('index.html')

        cy.get('[name=username]').type('Words')
    })
})