    // const nameInput = () => cy.get('input[name="name"]')
    // const emailInput = () => cy.get('input[name="email"]')
    // const passwordInput = () => cy.get('input[name="password"]')
    // const tosInput = () => cy.get('input[name="tos"]')
    // const submitBtn = () => cy.get('button[id=btn]')
describe('User Onboarding App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // const nameInput = () => cy.get('input[name="name"]')
    // const emailInput = () => cy.get('input[name="email"]')
    // const passwordInput = () => cy.get('input[name="password"]')
    // const tosInput = () => cy.get('input[name="tos"]')
    // const submitBtn = () => cy.get('button[id=btn]')

    it('sanity checks', () => {
        expect(1).to.eql(1)
        
        
            // cy.get('input[name="email"]'
            //     .should('have.value', '')
            //     .type('georgio@gmail.com')
            //     .should('have.value', 'georgio@gmail.com')
    })
    it('testing form', () => {
        describe('Filling name', () => {
            cy.get('input[name="name"]')
                .should('have.value', '')
                .type('gary')
                .should('have.value', 'gary')
                // .type('{backspace}')
                // .should('have.value', '')

        describe('filling email', () => {
            cy.get('input[name="email"]')
                .should('have.value', '')
                .type('gary@gmail.com')
                .should('have.value', 'gary@gmail.com')
        })
        
        describe('filling pass', () => {
            cy.get('input[name="password"]')
                .should('have.value', '')
                .type('garypass')
                .should('have.value', 'garypass')
        })

        describe('clicking checkbox', () => {
            cy.get('input[name="tos"]')
                .should('have.value', 'false')
                .click()
                .should('have.value', 'true')
        })
        describe('submitting form', () => {
            cy.get('button[id=btn]')
                .click()
            
        })

        describe('check if empty', () => {
            cy.get('input')
                .should('have.value', '')
        })
        
        
        
        
             
    });

    });

    
})