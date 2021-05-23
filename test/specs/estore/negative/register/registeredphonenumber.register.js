const RegisterPage = require('../../../../pageobjects/estore/register.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer failed register', () => {
    before(() => {
        RegisterPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/positive case/register/success register.png');
    });

    it('should register with fill with registered email', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Positive Case');
        allureReporter.addFeature('Success Register');

        await RegisterPage.register('hello.hanifahatiya@gmail.com', 'Pfm12345', 'Pfm12345', 'Pfm Wdio Satu', '0001112223330001', '8123400000001', '01-01-1985');
        await expect(RegisterPage.messagePhonenumberregistered).toBeDisplayed();
        await expect(RegisterPage.messagePhonenumberregistered).toHaveText('Nomor handphone sudah dipakai');
    });

    // it('should save a screenshot of the browser view when success register', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/wrongpassword.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});