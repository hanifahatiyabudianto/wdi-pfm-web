//import { waitForTextChange } from '../../../../utilities/helper';
const RegisterPage = require('../../../../pages/register.page');

//use allure reporter
// import allureReporter from '@wdio/allure-reporter';

describe('Customer did not fill email register form', () => {
    before(() => {
        RegisterPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/register/emptyemail.png');
    });

    it('should show error message when empty email', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        // allureReporter.addSeverity('High');
        // allureReporter.addLabel('Negative Case');
        // allureReporter.addFeature('Failed Register');

        await RegisterPage.register('', 'Pfm12345', 'Pfm12345', 'Pfm Wdio Satu', '', '0001112223330001', '8123400000001', '01-01-1985');
        await expect(RegisterPage.messageEmail).toBeDisplayed();
        await expect(RegisterPage.messageEmail).toHaveText('Harus diisi');
    });
    
    // it('should save a screenshot of the browser view when empty email', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/register/emptyemail.png');
    // });
});