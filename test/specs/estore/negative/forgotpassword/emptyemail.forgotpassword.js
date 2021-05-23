const LoginPage = require('../../../../pageobjects/estore/login.page');
const ForgotPasswordPage = require('../../../../pageobjects/estore/forgotpassword.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer failed forgot password', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/positive case/forgotpassword/emptyemailforgotpassword.png');
    });

    it('should forgot password with empty email', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Failed Forgot Password');

        await ForgotPasswordPage.forgotpasswordbtn();
        await expect(ForgotPasswordPage.heading).toHaveText('Lupa Kata Sandi');
        await ForgotPasswordPage.forgotpassword('');
        await expect(ForgotPasswordPage.messageEmail).toBeDisplayed();
        await expect(ForgotPasswordPage.messageEmail).toHaveText('Harus diisi');
    });

    // it('should save a screenshot of the browser view when success forgot password', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/forgot password.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});