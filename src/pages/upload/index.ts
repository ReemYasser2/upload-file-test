export const goToUploadPage = () => {
  cy.visit("https://the-internet.herokuapp.com/upload");
};

export const uploadFile = (fileName: string) => {
  cy.get("#file-upload").selectFile(`cypress/fixtures/${fileName}`);
  cy.get("#file-submit").click();
};

export const assertFileUpload = (fileName: string) => {
  cy.get("#uploaded-files").should("contain", "hello.pdf");
};
