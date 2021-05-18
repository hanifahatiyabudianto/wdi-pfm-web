//import { waitForTextChange } from '../../../../utilities/helper';
const LoginPage = require('../../../../pages/login.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer account has not been confirmed', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/positive case/login/success login.png');
    });

    it('should show message that the account has not been confirmed', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Failed Login');

        await LoginPage.login('hanifah@yopmail.com', 'Pfm12345');
        await expect(LoginPage.alertPassword).toBeDisplayed();
        //waitForTextChange(LoginPage.alertPassword, 'Akun ini belum terkonfirmasi. Mohon cek email Anda untuk mengkonfirmasi.', 3000);
        await expect(LoginPage.alertPassword).toHaveText('Akun ini belum terkonfirmasi. Mohon cek email Anda untuk mengkonfirmasi.');
    });

    it('should save a screenshot of the browser view when Confirmation Required', function () {
        browser.saveScreenshot('test/screenshot/negative case/login/Confirmation Required.png');
    });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});