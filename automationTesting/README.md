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

In order to use the automation framework you'll need to install the following:

        A. Git
        B. NodeJs
        C. Chrome and Firefox(optional) browsers latest versions.
        D. VS Code
        E. GitBash
        F. Java JDK

## :electric_plug: Installation :electric_plug:

- Clone the Repo
  Run the below command on terminal or command prompt to clone the repository:
    `git clone https://github.com/Marrkkov/recruitment-homework-qa-wdio.git`

- Install the app backend following this: Backend [docs](./../backend/README.md)

- Install the app frontend following this: Frontend [docs](./../web/README.md)

- Go to the AutomationTesting folder (`cd automationTesting`) and Install Node Modules (`npm i` or `npm install`)

## :toolbox: Dependencies :toolbox:

The following is a brief description of each NPM library and what it does/how we use it in the framework.

`@trivago/prettier-plugin-sort-imports` - A prettier plugin to sort import declarations by provided Regular Expression order.

`@typescript-eslint/eslint-plugin` - ESLint plugin which provides linting rules tailored for TypeScript code.

`@typescript-eslint/parser` - ESLint parser which allows for linting and analyzing TypeScript code.

`@wdio/allure-reporter` - Allure reporter plugin for WDIO for generating detailed test reports.

`@wdio/cli`- WebdriverIO testrunner command line interface

`@wdio/local-runner` - A WebdriverIO runner to run tests locally

`@wdio/mocha-framework` - A WebdriverIO plugin. Adapter for Mocha testing framework.

`@wdio/spec-reporter` - A WebdriverIO plugin to report in spec style.

`ajv` - JSON schema validator for Node.js and browser.

`eslint` - Linting utility for JavaScript and JSX that identifies and reports on patterns.

`ts-node` - TypeScript execution environment and REPL for Node.js.

`typescript` - Language for application-scale JavaScript with types.

`wdio-chromedriver-service` - Helps you to run ChromeDriver seamlessly when running tests with the WDIO testrunner. It uses the chromedriver NPM package that wraps the ChromeDriver for you.

`wdio-geckodriver-service` - Helps you to run firefox seamlessly when running tests with the WDIO testrunner.

`allure-commandline` - A tool to generate Allure report from test results.

`axios` - Promise based HTTP client for the browser and node.js

`chai` - Assertion library for testing JavaScript.

`chai-http` - Plugin for Chai to assist in HTTP integration testing.

`chromedriver` - An NPM wrapper for Selenium ChromeDriver.

`prettier` - Code formatter for JavaScript, TypeScript, and more.

## :runner: Running the Framework :runner:

Before you're ready to run any of the scripts, you need to do the following:
- Launch the backend in a new terminal following this: Backend [docs](./../backend/README.md)
- Launch the frontend in a new terminal following this: Frontend [docs](./../web/README.md)

It is imperative that you do these steps or you **will** run into issues trying to use the framework.

### Scripts

- `npm run test`: Run all the tests presnet in the framework (API+UI)
    note: if you want to run a single test you need to use mochaGrept.
    I.E.: `npm run test -- --mochaOpts.grep 009` will run the test with ID=`009`.

- `clean-report`: Removes the allure-results data
- `generate-report`: Generates an allure report
- `open-report`: Opens the allure report/test run results
- `clean-report-win`: Removes the allure-results data if you are working from a windows terminal.

It is importat that you run `clean-report` before execute the test to generate a new clean report!.

### Other Scripts

- `lint:check`: Check lint rules
- `lint:fix`: Apply lint fixes
- `prettier:check`: Check prettier rules
- `prettier:fix`: Apply prettier rules

### 🔔 Allure 🔔

Allure is used in this framework. Once you've executed a test(s) an .xml file will be generated under the output folder. You can then use the `generate-report` command to generate an HTML report and then open it with `open-report` command. Below is an example of what that report looks like. You have everything from test execution time, to graphs with test history, filtering for specific tests, to category breakdowns.

![example report](https://i.imgur.com/IQRVkQc.png)

![example report](https://i.imgur.com/uCNN5GQ.png)