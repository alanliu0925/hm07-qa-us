![github](https://github.com/user-attachments/assets/cc032307-3bdd-4570-9384-92aad6872526)
![parenthesis](https://github.com/user-attachments/assets/a26c45e2-9c0c-42c1-a57d-dacaaf369a82)
![Brackets](https://github.com/user-attachments/assets/09ce06f2-ec1c-4daa-9e8c-738de5da8bd6)
# Project 7: [Testing endpoints for The Urban Grocers App]

## Introduction
This is a brief description of what this project does and its main purpose.
> [The Urban Grocers team has developed its first version of the Urban Grocers Lunch app. It's an Android app that allows customers to order meals from different restaurants in the city, and then collect them from one of the pickup points. My task is to select and test a few endpoint requests and write tests for `GET`, `POST`, `PUT`, and `DELETE` for the app.]

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Instructions For Testing](#instructions-for-testing)
- Errors according to README file
- [Reference for Installation and Technologies](#reference-for-installation-and-technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)
- [Acknowledgements](#acknowledgements)



## Installation
Detailed steps to set up and install the project. Include commands for dependency installation and any setup steps.

### Prerequisites
- Node.js: [Download Node.js](https://nodejs.org/en/download)
- Git: [Download Git](https://git-scm.com/downloads)
- Visual Studio Code: [Download Visual Studio Code](https://code.visualstudio.com/Download)

### Steps
1. **Clone the repository:**
    
sh
    git clone https://github.com/Bsamboy74/hm07-qa-us.git
    
2. **Navigate to the project directory:**
    
sh
    cd hm07-qa-us
    
3. **Install dependencies:**
    
sh
    npm install
    
## Usage
### Running the Project
To start the project, use:
sh
npm start

### Error with the Readme file 
Before running the test pleaase take notice that the read me file is encounting an error; 6:9 on all 4 files (endpoints). It states, "response is assignd a value but never used no -unused vars" 
I will use the (putHandlers.test.js) as an example. The way to solve the problem according to the Bot is to change the expect(actualResponseBody.name).toBe("For movies and series'"); to Paranthesis from its current state using brackets [ "For movies and series"]. The problem is that Visual Code fails the request when adding parenthisis to the (actualResponsebody.name).toBe("For movies and series") return a FAIL saying "product name should contain the name "For movies and series".  
I have attached 3 screenshots that show the errors that I get on VisualCode and Postman.

### Running Tests
To run the tests, use:
sh
npm test
Organize your tests into separate files for each HTTP method within the `tests` directory:
plaintext
tests/
├── deleteHandlers.test.js
├── getHandlers.test.js
├── postHandlers.test.js
└── putHandlers.test.j

```
GitHub
GitHub - Bsamboy74/hm07-qa-us: hm07-qa-us
hm07-qa-us. Contribute to Bsamboy74/hm07-qa-us development by creating an account on GitHub.
GitHub - Bsamboy74/hm07-qa-us: hm07-qa-us

##Instructions For Testing

For the testing of my endpoints, I will be using Visual Code Editor as well as Swagger and the API Urban Grocers Database. The testing of this project can also be used with various installations such as Postman, and as well as the terminal on your computer whether MacOS, Windows, or Linux.

##Reference for Installation and Technologies

Visual Studio Code: Used for actual testing of endpoints, debugging.
Download Visual Studio Code - Mac, Linux, Windows
API Urban Grocers - Database: Used for resource endpoints
Add server URL: [API Documentation](ADD_SERVER_URL/docs)
Swagger (API Server Urban Grocers): Also used for resource endpoints (e.g., APIs for Kits, Courier, Database).
Add server URL: [Swagger](ADD_SERVER_URL/api/swagger/)
Node.js: Software engineers use it to run JavaScript code outside the browser, so developers may need to inspect the code while testing.
Download Node.js
GitHub: QA Engineers can "check out" different branches of code, work on them locally, and then "push" those branches to GitHub.
GitHub Documentation
Postman: A software application that helps developers build, test, document, and share APIs (Application Programming Interfaces).
Download Postman

Code Style and Standards

Download Visual Studio Code - Mac, Linux, Windows
Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows. Download Visual Studio Code to experience a redefined code editor, optimized for building and debugging modern web and cloud applications.
Download Visual Studio Code - Mac, Linux, Windows
Node.js — Run JavaScript Everywhere
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Image
GitHub Docs
Hello World - GitHub Docs
Image
Postman API Platform
Download Postman | Get Started for Free
Try Postman for free! Join 30 million developers who rely on Postman, the collaboration platform for API development. Create better APIs—faster.
Download Postman | Get Started for Free
Variable Declarations:
Use let for variables whose values might change.
Use const for variables whose values are constant.
##Naming Conventions:
Use camelCase for variable and function names.
Use PascalCase for classes and constructor names.
##Code Formatting:
Consistent indentation (2 or 4 spaces).
Keep lines no longer than 80 or 100 characters.
Use opening braces on the same line as the statement.
##Comments:
Write comments to explain the purpose of the code, especially complex logic.
Terminations:
Always use semicolons to end statements.
Error Handling:
Use try/catch blocks to handle exceptions and errors gracefully.
Linting:
Use ESLint to enforce coding standards. Ensure your project includes an .eslintrc.js configuration file.

Example ESLint Configuration:
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}


By following these general principles and configuring ESLint, your codebase will be more consistent, readable, and maintainable.

Contributing
[This only a project for Sprint 7, I will receive feedback through the portal]

License
[I do not have any license / only a project 7]

Contact Information
If you have any questions or feedback, please contact:
Name: [Bill Samboy]
Email: [bsamboy74@gmail.com]

Acknowledgements
[Thanks to all mentors and teachers]
### How to Use
1. Copy the above content.
2. Create a new file named `README.md` in your project directory.
3. Paste the content into `README.md`.
4. Save and upload the file to your GitHub repository.

