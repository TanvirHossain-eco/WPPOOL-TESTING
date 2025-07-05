WebdriverIO WPPOOL PLUGIN & WEBSITE TESTING
==============================================

Manually testing your website is an easy one, but setting up a test automation tool can be worse since there are too many changes are noticed while running the scripts

But with Javascript, the struggle is comparatively less than in other programming languages. Although some complications were running the script with few dependencies. Sometimes installing the updated version of dev dependencies might cause an error while running the test script. 

Below, all the steps will be mentioned from installation to Allure report generation & Git deployment

**1. Take a tour of Manual Testing for the Given test plan
=========================================================**

1.1. Sign up on Pantheon.io
1.2. On Free Server install WordPress Environment
1.3. Setup admin panel with dummy UserID & Pass
1.4. On the given test plan, do a manual test
1.5. Create test strategies, test scenarios & logic for each & every step
1.6. Note any possible bugs

**2. Setup the Automation test environment on Visual Studio
all the steps that followed are given below
==========================================================**

2.1. npm init -y
2.2. npm wdio config -y
2.3. yes
2.4. E2E Testing
2.5. Local Machine
2.6. Web - Web applications in the browser
2.7. Chrome
2.8. Mocha
2.9. No
2.10. Yes
2.11. Enter
2.12. Y
2.13. Enter
2.14. Spec
2.15. Wait-for
2.16. no
2.17. vite
2.18. yes

**3. 2 test scripts are developed. 
================================**

3.1. darModePluginTest.js
3.2. darkModeFrontEndTest.js

**4. For running the test script the commands are mentioned below
==============================================================**

4.1. npx wdio --spec test/specs/darkModePluginTest.js
4.2. npx wdio --spec test/specs/darkModeFrontEndTest.js

**5. Setup the Allure report & View the Report
=============================================**

5.1. npm install @wdio/allure-reporter --save-dev
5.2. Configure the output directory in your wdio.conf.js file
5.3. Run any one script from section 4
5.4. npx allure generate allure-results - (For the first time) / npx allure generate allure-results --clean
5.5. npx allure open

**6. Git Deployment
=====================**

6.1. git init - for the first time only
6.2. git add .
6.3. git commit -m "Your Message"
6.4. git remote add origin <repository-url> - for the first time only
6.5. git push -u origin master or git push -u origin master -f

Finally, accessing wp-admin with .env.example & automated allure report generating with allure-commandline are causing run time errors while running scripts

**7. Update all the packages
============================**
npm i @wdio/cli@latest @wdio/allure-reporter@latest @wdio/local-runner@latest @wdio/mocha-framework@latest @wdio/spec-reporter@latest eslint-plugin-wdio@latest allure-commandline@latest dotenv@latest --save-dev

