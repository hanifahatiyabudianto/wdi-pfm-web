//import { waitForTextChange } from '../../../../utilities/helper';
const RegisterPage = require('../../../../pages/register.page');

//use allure reporter
// import allureReporter from '@wdio/allure-reporter';

describe('Customer did not fill phone number register form', () => {
    before(() => {
        RegisterPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/register/emptyphonenumber.png');
    });

    it('should show error message when empty phone number', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        // allureReporter.addSeverity('High');
        // allureReporter.addLabel('Negative Case');
        // allureReporter.addFeature('Failed Register');

        await RegisterPage.register('pfmwdio1@yopmail.com', 'Pfm12345', 'Pfm12345', 'Pfm Wdio Satu', '', '0001112223330001', '', '01-01-1985');
        await expect(RegisterPage.messagePhonenumber).toBeDisplayed();
        await expect(RegisterPage.messagePhonenumber).toHaveText('Harus diisi');
    });
    
    // it('should save a screenshot of the browser view when empty phone number', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/register/emptyemail.png');
    // });
});