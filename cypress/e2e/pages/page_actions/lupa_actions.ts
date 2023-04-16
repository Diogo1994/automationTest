// import json from 'cypress/fixtures/example.json';

export class LupaAgi {

  static abriSite() {
    cy.fixture('example.json').then((json) => {
      cy.visit(json.url)
    });
  }

  static validaElement(element) {
    cy.get(element).should('be.visible', element)
  }

  static click(element) {
    cy.get(element).click()
  }

  static inputTexto(element, texto){
    cy.get(element).should('be.visible', element)
    .type(texto).should('have.value', texto)
  }

  static validaTexto(element, texto){
    cy.get(element).should('be.visible', element)
    .eq(texto)
  }

}

export default LupaAgi;
