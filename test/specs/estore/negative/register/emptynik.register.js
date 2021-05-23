//import { waitForTextChange } from '../../../../utilities/helper';
const RegisterPage = require('../../../../pageobjects/estore/register.page');

//use allure reporter
// import allureReporter from '@wdio/allure-reporter';

describe('Customer did not fill nik register form', () => {
    before(() => {
        RegisterPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/register/emptynikregister.png');
    });

    it('should show error message when empty nik', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        // allureReporter.addSeverity('High');
        // allureReporter.addLabel('Negative Case');
        // allureReporter.addFeature('Failed Register');

        await RegisterPage.register('pfmwdio1@yopmail.com', 'Pfm12345', 'Pfm12345', 'Pfm Wdio Satu', '', '8123400000001', '01-01-1985');
        await expect(RegisterPage.messageNik).toBeDisplayed();
        await expect(RegisterPage.messageNik).toHaveText('Harus diisi');
    });
    
    // it('should save a screenshot of the browser view when empty nik', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/register/emptyemail.png');
    // });
});