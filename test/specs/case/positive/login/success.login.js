const LoginPage = require('../../../../pages/login.page');
const HomePage = require('../../../../pages/home.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer success login', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/positive case/login/success login.png');
    });

    it('should login with valid credentials', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Positive Case');
        allureReporter.addFeature('Success Login');

        await LoginPage.login('hello.hanifahatiya@gmail.com', 'Pfm12345');
        await expect(browser).toHaveUrl('https://primafreshmart.com/');
        await expect(HomePage.avatarImage).toBeVisible();
    });

    // it('should save a screenshot of the browser view when success login', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/wrongpassword.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});