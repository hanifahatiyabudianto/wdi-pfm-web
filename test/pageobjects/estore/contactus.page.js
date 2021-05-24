const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactUsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('#contact-title') }
    
    get inputName () { return $('#name') }
    get inputPhonenumber () { return $('#telephone') }
    get inputEmail () { return $('#email') }
    get inputComment () { return $('#comment') }
    get btnSubmit () { return $('#contact-submit') }

    //Harus diisi
    get messageName () { return $('#name-error') } 
    //Harus diisi
    //Format handphone salah.
    get messagePhonenumber () { return $('#telephone-error') } 
    //Harus diisi
    get messageEmail () { return $('#email-error') } 
    //Harus diisi
    get messageComment () { return $('#comment-error') } 
    
    //Terima kasih telah memberikan saran dan pertanyaan Anda. Kami akan menanggapi segera
    get alertSuccess () { return $('div.message-success.success.message') }

    /* a method to encapsule automation code to interact with the page*/
    async contactus (name, phonenumber, email, comment) {
        await (await this.inputName).setValue(name);
        await (await this.inputPhonenumber).setValue(phonenumber);
        await (await this.inputEmail).setValue(email);
        await (await this.inputComment).setValue(comment);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
     open () {
        return super.open('');
    }

    async clearValue (name, phonenumber, email, comment) {
        await (await this.inputName).getValue();
        await (await this.inputName).clearValue(name);
        await (await this.inputPhonenumber).getValue();
        await (await this.inputPhonenumber).clearValue(phonenumber);
        await (await this.inputEmail).getValue();
        await (await this.inputEmail).clearValue(email);
        await (await this.inputComment).getValue();
        await (await this.inputComment).clearValue(comment);
    }
}

module.exports = new ContactUsPage();
