To run the code:

-> Clone the project from git lab using command "git clone <project>"
-> Open project folder using code editor (here I am using Visual Studio)
-> Open terminal and run command "npm install" which will install the reuired dependencies in project
-> Once required dependencies are installed run command "cypress open"
-> This will open cypress window containing feature files
-> Run any of the feature file by simple clicking on it
-> New browser window willb elaunched which will run the test scenario

For current project:

Faeture Files: Inside Integration folder with names (FilterValidation.feature , Search Validation.feature, ProductValidation.feature)
StepDefinitions: Inside Integration folder having subfolder names same as feature file name respectively
PageObjects: Inside Integration folder having subfolder name pageObjects containing file names (FilterValidationPom.POM.js, ProductValidationPom.POM.js , SearchValidationPom.POM.js)
Elements file/apths: Inside fixtures folder with file name ElementData.json
