const LoginPage = require('../../../../pageobjects/estore/login.page');
const ForgotPasswordPage = require('../../../../pageobjects/estore/forgotpassword.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer success back to login page', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/forgotpassword/backtologinforgotpassword.png');
    });

    it('should redirect to login page', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('Low');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Cancel Forgot Password');

        await ForgotPasswordPage.forgotpasswordbtn();
        await expect(browser).toHaveUrl('https://eprimafreshmart.cp.co.id/pfm/index.php/customer/account/forgotpassword/');
        await expect(ForgotPasswordPage.heading).toHaveText('Lupa Kata Sandi');
        await ForgotPasswordPage.loginbtn();
        await expect(browser).toHaveUrlContaining('https://eprimafreshmart.cp.co.id/pfm/index.php/customer/account/login/referer/');
        await expect(LoginPage.heading).toHaveText('Login');
    });

    // it('should save a screenshot of the browser view when success forgot password', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/forgot password.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});