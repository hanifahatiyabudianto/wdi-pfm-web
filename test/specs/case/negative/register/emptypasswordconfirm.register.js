//import { waitForTextChange } from '../../../../utilities/helper';
const RegisterPage = require('../../../../pages/register.page');

//use allure reporter
// import allureReporter from '@wdio/allure-reporter';

describe('Customer did not fill password confirm register form', () => {
    before(() => {
        RegisterPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/register/emptypasswordconfirm.png');
    });

    it('should show error message when empty password confirm', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        // allureReporter.addSeverity('High');
        // allureReporter.addLabel('Negative Case');
        // allureReporter.addFeature('Failed Register');

        await RegisterPage.register('pfmwdio1@yopmail.com', 'Pfm12345', '', 'Pfm Wdio Satu', '', '0001112223330001', '8123400000001', '01-01-1985');
        await expect(RegisterPage.PasswordConfirm).toBeDisplayed();
        await expect(RegisterPage.PasswordConfirm).toHaveText('Harus diisi');
    });
    
    // it('should save a screenshot of the browser view when empty password confirm', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/register/emptyemail.png');
    // });
});