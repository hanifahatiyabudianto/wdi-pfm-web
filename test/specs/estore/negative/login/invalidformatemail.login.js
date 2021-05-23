//import { waitForTextChange } from '../../../../utilities/helper';
const LoginPage = require('../../../../pageobjects/estore/login.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer fill email login with invalid format', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/login/emptypassword.png');
    });

    it('should show error message invalid format email', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Failed Login');

        await LoginPage.login('hello.hanifahatiya', 'Pfm12345');
        await expect(LoginPage.messageEmail).toBeDisplayed();
        await expect(LoginPage.messageEmail).toHaveText('Format email salah.');
    });

    // it('should save a screenshot of the browser view when invalid format email', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/invalidemail.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});