const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('#register-title') }
    
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#password') }
    get inputPasswordConfirm () { return $('#password_confirmation') }
    get inputName () { return $('#firstname') }
    // get chooseGender () { return $('input[value="1"]') }
    get chooseGender () { return $('div.input-wraper > label:nth-child(2)') } //male
    // get chooseGender () { return $('div.input-wraper > label:nth-child(5)') } //female
    get inputNik () { return $('#nik') }
    get inputPhonenumber () { return $('#phone_number') }
    get inputDob () { return $('#dob') }
    get checkTnc () { return $('form.form.create.account.form-create-account:nth-child(4) div.termsconditions:nth-child(8) label.label-radio div.control > span.radiomark') }
    get btnSubmit () { return $('button[type="submit"]') }

    get messageEmail () { return $('#email-error') }
    get messagePassword () { return $('#password-error') }
    get messagePasswordConfirm () { return $('#password_confirmation-error') }
    get messageName () { return $('#firstname-error') }
    get messageNik () { return $('#nik-error') }
    get messagePhonenumber () { return $('#phone_number-error') }
    get messagePhonenumberregistered () { return $('div.mage-error.phone') }
    get messageDob () { return $('#dob-error') }
    get messageTnc () { return $('#termscondition-error') }

    get alertEmail () { return $('div.message-error') }
    get alertPassword () { return $('div.message-error') }
    get alertPhonenumber () { return $('div.message-error') } 

    get alertSuccessRegister () { return $('class.message-success') }
    get alertFailedRegister () { return $('div.message-error.error.message')}
    
    /**
     * a method to encapsule automation code to interact with the page
     */
    async register (email, password, passwordconfirm, customername, nik, phonenumber, dob) {
        await (await this.inputEmail).setValue(email);
        await (await this.inputPassword).setValue(password);
        await (await this.inputPasswordConfirm).setValue(passwordconfirm);
        await (await this.inputName).setValue(customername);
        await (await this.chooseGender).click();
        await (await this.inputNik).setValue(nik);
        await (await this.inputPhonenumber).setValue(phonenumber);
        await (await this.inputDob).setValue(dob);
        await (await this.checkTnc).click();
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('customer/account/create');
    }

    async clearValue (email, password, passwordconfirm, customername, nik, phonenumber, dob) {
        await (await this.inputEmail).getValue();
        await (await this.inputEmail).clearValue(email);
        await (await this.inputPassword).getValue();
        await (await this.inputPassword).clearValue(password);
        await (await this.inputPasswordConfirm).getValue();
        await (await this.inputPasswordConfirm).setValue(passwordconfirm);
        await (await this.inputName).getValue();
        await (await this.inputName).setValue(customername);
        await (await this.inputNik).getValue();
        await (await this.inputNik).setValue(nik);
        await (await this.inputPhonenumber).getValue();
        await (await this.inputPhonenumber).setValue(phonenumber);
        await (await this.inputDob).getValue();
        await (await this.inputDob).setValue(dob);
    }
}

module.exports = new RegisterPage();
