context ('Given I access Rose blog', () => {

    it('when I click on first article then I should get Rose as a creator ', () => {

        cy.visit('https://roseblackburn.wixsite.com/website')
        cy.get('._2ekub > :nth-child(1)').click()
        cy.get('#content-wrapper').contains('Rose Blackburn')

    })
})
