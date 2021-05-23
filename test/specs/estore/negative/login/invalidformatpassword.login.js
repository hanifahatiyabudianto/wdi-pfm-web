//import { waitForTextChange } from '../../../../utilities/helper';
const LoginPage = require('../../../../pageobjects/estore/login.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer fill password login with invalid format', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/login/emptypassword.png');
    });

    it('should show error message wrong password', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Failed Login');

        await LoginPage.login('hello.hanifahatiya@gmail.com', 'Pfm');
        await expect(LoginPage.alertPassword).toBeDisplayed();
        await expect(LoginPage.alertPassword).toHaveText('Password tidak cocok dengan akun ini. Verifikasi password dan coba lagi.');
    });

    // it('should save a screenshot of the browser view when wrong password', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/wrongpassword.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});