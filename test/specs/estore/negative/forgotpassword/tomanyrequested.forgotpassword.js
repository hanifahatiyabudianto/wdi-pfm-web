const LoginPage = require('../../../../pageobjects/estore/login.page');
const ForgotPasswordPage = require('../../../../pageobjects/estore/forgotpassword.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer failed forgot password', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/positive case/forgotpassword/tomanyrequestedforgotpassword.png');
    });

    it('should forgot password with valid credentials, but to many requested', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Failed Forgot Password');

        await ForgotPasswordPage.forgotpasswordbtn();
        await expect(ForgotPasswordPage.heading).toHaveText('Lupa Kata Sandi');
        await ForgotPasswordPage.forgotpassword('hello.hanifahatiya@gmail.com');
        await expect(browser).toHaveUrlContaining('https://eprimafreshmart.cp.co.id/pfm/index.php/customer/account/forgotpassword/');
        await expect(ForgotPasswordPage.alertToManyRequested).toBePresent();
        await expect(ForgotPasswordPage.alertToManyRequested).toHaveText('Kami menerima terlalu banyak permintaan untuk mengatur ulang kata sandi. Mohon tunggu dan coba lagi nanti atau hubungi cs_pfm@cp.co.id.');
    });

    // it('should save a screenshot of the browser view when success forgot password', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/forgot password.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});