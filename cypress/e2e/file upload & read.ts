import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { assertFileUpload, goToUploadPage, uploadFile } from "../../src/pages/upload";

Given("I navigate to the file upload page", () => {
  goToUploadPage();
});

When("I upload {string}", (fileName: string) => {
  uploadFile(fileName);
});

Then("I should see the uploaded file name", () => {
  assertFileUpload('hello.pdf');
});

Then("the file content should match {string}", (expectedContent: string) => {
  cy.readFile("cypress/fixtures/hello.pdf").then((content) => {
    expect(content).to.include(expectedContent);
  });
});
