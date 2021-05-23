//import { waitForTextChange } from '../../../../utilities/helper';
const RegisterPage = require('../../../../pageobjects/estore/register.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer success register', () => {
    before(() => {
        RegisterPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/positive case/register/success register genderfemale.png');
    });

    it('should register with fill form data with gender is female', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Positive Case');
        allureReporter.addFeature('Success Register');

        await RegisterPage.register('pfmwdio1@yopmail.com', 'Pfm12345', 'Pfm12345', 'Pfm Wdio Satu', '0001112223330001', '8123400000001', '01-01-1985');
        await expect(browser).toHaveUrl('https://primafreshmart.com/customer/account/create/');
        await expect(RegisterPage.register).toHaveText('Anda harus mengkonfirmasi akun Anda. Silakan periksa email Anda untuk tautan konfirmasi atau klik di sini untuk tautan baru.');       
    });
    
    // it('should save a screenshot of the browser view when empty nik', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/register/emptyemail.png');
    // });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});