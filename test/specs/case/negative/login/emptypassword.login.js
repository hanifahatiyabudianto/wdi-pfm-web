//import { waitForTextChange } from '../../../../utilities/helper';
const LoginPage = require('../../../../pages/login.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer did not fill password login form', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/login/emptypassword.png');
    });

    it('should show error message when empty password', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Failed Login');

        await LoginPage.login('hello.hanifahatiya@gmail.com','');
        await expect(LoginPage.messagePassword).toBeDisplayed();
        await expect(LoginPage.messagePassword).toHaveText('Harus diisi');
    });

    // it('should save a screenshot of the browser view when empty password', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/wrongpassword.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});