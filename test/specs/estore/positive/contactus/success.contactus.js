//import { waitForTextChange } from '../../../../utilities/helper';
const Page = require('../../../../pageobjects/page');
const HomePage = require('../../../../pageobjects/estore/home.page');
const ContactUsPage = require('../../../../pageobjects/estore/contactus.page');

//use allure reporter
import allureReporter from '@wdio/allure-reporter';

describe('Customer success send message contact us', () => {
    before(() => {
        ContactUsPage.open();
    });

    after(() => {
        browser.saveScreenshot('test/screenshot/positive case/contactus/contactus-success.png');
    });

    it('should show alert success send message contact us', async () => {
        //use allure API for allure reporter (Critical, High, Medium, Low)
        allureReporter.addSeverity('High');
        allureReporter.addLabel('Positive Case');
        allureReporter.addFeature('Success Contact Us');

        await HomePage.contactus();
        await expect(ContactUsPage.heading).toHaveText('Kontak Kami');
        await expect(browser).toHaveUrlContaining('https://eprimafreshmart.cp.co.id/pfm/index.php/contact/');
        await ContactUsPage.contactus('Hani', '8123400000001', 'pfmwdio1@yopmail.com', 'Bagaimana cara pengiriman telur ayam?');
        await expect(ContactUsPage.alertSuccess).toBePresent();
        await expect(ContactUsPage.alertSuccess).toHaveText('Terima kasih telah memberikan saran dan pertanyaan Anda. Kami akan menanggapi segera');
    });
    
    // it('should save a screenshot of the browser view when empty email', function () {
    //     browser.saveScreenshot('test/screenshot/negative case/login/emptyemail.png');
    // });
});