const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('#block-customer-login-heading') }
    
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#password') }
    get checkRemember () { return $('span.checkmark') }
    get btnSubmit () { return $('button[type="submit"]') }

    get btnForgotPassword () { return $('form.form.form-login fieldset.fieldset.login:nth-child(2) div.field.password.required:nth-child(2) div.label-container div.secondary > a.action.remind') }
    get btnRegister () { return $('#login-action') }

    get messageEmail () { return $('#email-error') } 
    get messagePassword () { return $('#password-error') } 
    
    get alertPassword () { return $('div.message-error') } 
    
    //alert Forgot password
    get alertSuccess () { return $('div.message-success.success.message') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await (await this.inputEmail).setValue(email);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('customer/account/login');
    }

    async clearValue (email, password) {
        await (await this.inputEmail).getValue();
        await (await this.inputEmail).clearValue(email);
        await (await this.inputPassword).getValue();
        await (await this.inputPassword).clearValue(password);
    }
}

module.exports = new LoginPage();
