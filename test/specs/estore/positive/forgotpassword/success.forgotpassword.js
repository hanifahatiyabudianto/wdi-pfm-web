const LoginPage = require('../../../../pageobjects/estore/login.page');
const ForgotPasswordPage = require('../../../../pageobjects/estore/forgotpassword.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer success forgot password', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/positive case/forgotpassword/successforgotpassword.png');
    });

    it('should forgot password with valid credentials', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Positive Case');
        allureReporter.addFeature('Success Forgot Password');

        await ForgotPasswordPage.forgotpasswordbtn();
        await expect(ForgotPasswordPage.heading).toHaveText('Lupa Kata Sandi');
        await ForgotPasswordPage.forgotpassword('hello.hanifahatiya@gmail.com');
        await expect(browser).toHaveUrlContaining('https://eprimafreshmart.cp.co.id/pfm/index.php/customer/account/login/referer');
        await expect(LoginPage.heading).toHaveText('Login');
        await expect(LoginPage.alertSuccess).toBePresent();
        await expect(LoginPage.alertSuccess).toHaveText('Jika ada akun yang terkait dengan hello.hanifahatiya@gmail.com Anda akan menerima email dengan tautan untuk mengatur ulang kata sandi Anda.');
    });

    // it('should save a screenshot of the browser view when success forgot password', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/forgot password.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});