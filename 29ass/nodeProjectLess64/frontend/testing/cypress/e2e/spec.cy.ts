/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.log('before each')
    cy.visit('http://localhost:5173')
  })
  it('check if counter exists', () => {
    cy.get('#counter').should('exist');
    cy.get('#counter').should('have.text', '0');
  })
  it('check if counter works', () => {
    cy.get('#counter').should('have.text', '0');
    cy.get('#increment').click();
    cy.get('#counter').should('have.text', '1');
    cy.get('#decrement').click();
    cy.get('#counter').should('have.text', '0');
  })
})