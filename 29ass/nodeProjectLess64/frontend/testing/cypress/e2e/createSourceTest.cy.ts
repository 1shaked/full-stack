

describe('Checking the generation of the source', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })
    it('checking 12 as a number', () => {
        cy.get('#source_input').type('12');
        cy.get('#source_generate_button').should('contain.text', '12');
        cy.get('#source_generate_button').click();
        cy.get('#source_item_1_12').should('exist');
        cy.get('#source_item_2_6').should('exist');
        cy.get('#source_item_3_4').should('exist');
        cy.get('#source_item_4_3').should('exist');
        cy.get('#source_item_6_2').should('exist');
    })
    it('checking text as a number', () => {
        cy.get('#source_input').type('12.5');
        cy.get('#source_generate_button').click();
        
    })
})