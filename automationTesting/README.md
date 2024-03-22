<h1 align="center">:robot: Automation Framework :robot:</h1>

## **Table of Contents**

- [Purpose](#notebook-purpose-notebook)
- [Prerequisites](#loudspeaker-prerequisites-loudspeaker)
- [Installation](#electric_plug-installation-electric_plug)
- [Dependencies](#toolbox-dependencies-toolbox)
- [Running the Framework](#runner-running-the-framework-runner)
  - [Scripts](#scripts)
- [Reporting](#reporting)
    - [Allure](#allure)

## :notebook: Purpose :notebook:

The primary goal of this automation framework is to provide a robust and versatile testing solution that caters to smoke and regression UI and API testing requirements.

## :loudspeaker: Prerequisites :loudspeaker:

In order to use the automation framework, you'll need to install the following:

        A. Git
        B. Node.js
        C. Latest versions of Chrome and Firefox (optional) browsers.
        D. VS Code
        E. Git Bash
        F. Java JDK

## :electric_plug: Installation :electric_plug:

- Clone the Repo
  Run the below command in the terminal or command prompt to clone the repository:
    `git clone https://github.com/Marrkkov/recruitment-homework-qa-wdio.git`

- Install the app backend by following these instructions: Backend [docs](./../backend/README.md)

- Install the app frontend by following these instructions: Frontend [docs](./../web/README.md)

- Go to the AutomationTesting folder (`cd automationTesting`) and Install Node Modules (`npm i` or `npm install`)

## :toolbox: Dependencies :toolbox:

The following is a brief description of each NPM library and its purpose/how we use it in the framework.

`@trivago/prettier-plugin-sort-imports` - A prettier plugin used to sort import declarations by provided Regular Expression order.

`@typescript-eslint/eslint-plugin` - ESLint plugin that provides linting rules tailored for TypeScript code.

`@typescript-eslint/parser` - ESLint parser that allows for linting and analyzing TypeScript code.

...

## :runner: Running the Framework :runner:

Before running any scripts, you need to do the following:
- Launch the backend in a new terminal by following these instructions: Backend [docs](./../backend/README.md)
- Launch the frontend in a new terminal by following these instructions: Frontend [docs](./../web/README.md)

...

### Scripts

- `npm run test`: Run all the tests present in the framework (API+UI)
    note: if you want to run a single test, you need to use mochaGrep.
    I.E.: `npm run test -- --mochaOpts.grep 009` will run the test with ID=`009`.

- `clean-report`: Removes the allure-results data
- `generate-report`: Generates an allure report
- `open-report`: Opens the allure report/test run results
- `clean-report-win`: Removes the allure-results data if you are working from a Windows terminal.

It is important that you run `clean-report` before executing the test to generate a new clean report!

### Other Scripts

- `lint:check`: Check lint rules
- `lint:fix`: Apply lint fixes
- `prettier:check`: Check prettier rules
- `prettier:fix`: Apply prettier rules

### 🔔 Allure 🔔

Allure is used in this framework. After executing a test(s), an .xml file will be generated under the output folder. You can then use the `generate-report` command to create an HTML report and open it with the `open-report` command. Below is an example of what that report looks like. It includes test execution time, graphs with test history, filtering for specific tests, and category breakdowns.

![example report](https://i.imgur.com/IQRVkQc.png)

![example report](https://i.imgur.com/uCNN5GQ.png)
