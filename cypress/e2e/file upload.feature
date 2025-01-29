Feature: File Upload Functionality

    Scenario: Upload a file and verify its content
        Given I navigate to the file upload page
        When I upload "hello.pdf"
        Then I should see the uploaded file name
        And the file content should match "Hello World!"
