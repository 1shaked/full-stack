import {generateSource} from '../../src/utils/generateSource'

function checkSourceNumbers(n: number) {
    it(`checking ${n} as a number`, () => {
        const arr_sources = generateSource(n)
        cy.get('#source_input').type(n.toString());
        cy.get('#source_generate_button').should('contain.text', n.toString());
        cy.get('#source_generate_button').click();
        for (const source_item of arr_sources) {
            cy.get(`#source_item_${source_item[0]}_${source_item[1]}`).should('exist'); 
        }
    })
}

describe('Checking the generation of the source', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    checkSourceNumbers(10);
    checkSourceNumbers(12);
    checkSourceNumbers(118);
    checkSourceNumbers(5);
    checkSourceNumbers(-5);
    it('checking text as a number', () => {
        cy.get('#source_input').type('12.5');
        cy.get('#source_generate_button').click();
        
    })
})