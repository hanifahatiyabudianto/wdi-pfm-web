const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ForgotPasswordPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('#forgotpass-title') }

    get inputEmail () { return $('#email_address') }
    get btnSubmit () { return $('button[type="submit"]') }

    get btnForgotPassword () { return $('div.secondary > a.action.remind') }

    get btnBacktoLogin () { return $('#forgotpass-back') }

    get messageEmail () { return $('#email_address-error') }

    get alertSuccess () { return $('div.message-success.success.message') }
    get alertToManyRequested () { return $('div.message-error.error.message') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using email
     */
    async forgotpasswordbtn () {
        await (await this.btnForgotPassword).click();
    }

    async loginbtn () {
        await (await this.btnBacktoLogin).click();
    }
    
    async forgotpassword (email) {
        await (await this.inputEmail).setValue(email);
        await (await this.btnSubmit).click();
    }

    async clearValue (email) {
        await (await this.inputEmail).getValue();
        await (await this.inputEmail).clearValue(email);
    }
}

module.exports = new ForgotPasswordPage();
