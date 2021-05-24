//import { waitForTextChange } from '../../../../utilities/helper';
const Page = require('../../../../pageobjects/page');
const HomePage = require('../../../../pageobjects/estore/home.page');
const ContactUsPage = require('../../../../pageobjects/estore/contactus.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer did not fill comment contact us form', () => {
    before(() => {
        ContactUsPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/negative case/contactus/contactus-emptycomment.png');
    });

    it('should show error message when empty comment', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Negative Case');
        allureReporter.addFeature('Failed Send Message Contact Us');

        await HomePage.contactus();
        await expect(ContactUsPage.heading).toHaveText('Kontak Kami');
        await expect(browser).toHaveUrlContaining('https://eprimafreshmart.cp.co.id/pfm/index.php/contact/');
        await ContactUsPage.contactus('Hani', '8123400000001', 'pfmwdio1@yopmail.com', '');
        await expect(ContactUsPage.messageComment).toBeDisplayed();
        await expect(ContactUsPage.messageComment).toHaveText('Harus diisi');
    });
    
    // it('should save a screenshot of the browser view when empty email', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/emptyemail.png');
    // });
});