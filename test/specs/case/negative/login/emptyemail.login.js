//import { waitForTextChange } from '../../../../utilities/helper';
const LoginPage = require('../../../../pages/login.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer did not fill email login form', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/login/emptyemail.png');
    });

    it('should show error message when empty email', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Failed Login');

        await LoginPage.login('','Pfm12345');
        await expect(LoginPage.messageEmail).toBeDisplayed();
        await expect(LoginPage.messageEmail).toHaveText('Harus diisi');
    });
    
    // it('should save a screenshot of the browser view when empty email', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/emptyemail.png');
    // });
});