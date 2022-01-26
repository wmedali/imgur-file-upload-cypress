/// <reference types="cypress" />

it("Upload file and verify it ", () => {
  cy.viewport("macbook-16");
  cy.visit("https://imgur.com/upload");

  cy.get("#file-input").attachFile("logo.jpeg");

  cy.url().should("not.contain", "/upload");
  cy.contains("Download post").click();
});
