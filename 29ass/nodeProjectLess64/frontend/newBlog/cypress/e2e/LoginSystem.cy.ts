
function loginSystem() {}


describe('check login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/login')
    });

    it('login as example user', () => {
        cy.get('#login_email_input').type('x2@g.c');
        cy.get('#login_password_input').type('123456');
        cy.get('#login_submit_btn').click();  
        cy.get('#blog_list_title').should('exist');

        cy.contains('a', 'add').click();
        cy.get('#add_blog_title').type('new blog')
        cy.get('#add_blog_content').type('new blog content')
        cy.get('#add_blog_submit').click();

        
    

    })
})