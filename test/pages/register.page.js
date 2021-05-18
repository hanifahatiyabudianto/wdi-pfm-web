const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#password') }
    get inputPasswordConfirm () { return $('#password_confirmation') }
    get inputName () { return $('#firstname') }
    get chooseGender () { return $('#male') }  //#female
    get inputNik () { return $('#nik') }
    get inputPhonenumber () { return $('#phone_number') }
    get inputDob () { return $('#dob') }
    get checkTnc () { return $('body.customer-account-create.page-layout-1column:nth-child(4) div.page-wrapper:nth-child(2) main.page-main div.columns:nth-child(3) div.column.main div.register-container:nth-child(3) div.wrapper div.register-wrapper form.form.create.account.form-create-account:nth-child(4) div.termsconditions:nth-child(8) label.label-radio div.control > span.radiomark') }
    get btnSubmit () { return $('button[type="submit"]') }

    get messageEmail () { return $('#email-error') }
    get messagePassword () { return $('#password-error') }
    get messagePasswordConfirm () { return $('#password_confirmation-error') }
    get messageName () { return $('#firstname-error') }
    get messageNik () { return $('#nik-error') }
    get messagePhonenumber () { return $('#phone_number-error') }
    get messageDob () { return $('#dob-error') }
    get messageTnc () { return $('#termscondition-error') }

    get alertEmail () { return $('div.message-error') }
    get alertPassword () { return $('div.message-error') }
    get alertPhonenumber () { return $('div.message-error') } 

    get alertSuccessRegister () { return $('class.message-success') }
    
    /**
     * a method to encapsule automation code to interact with the page
     */
    async register (email, password, passwordconfirm, customername, gender, nik, phonenumber, dob, tnc) {
        await (await this.inputEmail).setValue(email);
        await (await this.inputPassword).setValue(password);
        await (await this.inputPasswordConfirm).setValue(passwordconfirm);
        await (await this.inputName).setValue(customername);
        await (await this.chooseGender).setValue(gender);
        await (await this.inputNik).setValue(nik);
        await (await this.inputPhonenumber).setValue(phonenumber);
        await (await this.inputDob).setValue(dob);
        await (await this.checkTnc).isElementSelected(tnc);
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
        await (await this.checkTnc).setValue(tnc);
    }
}

module.exports = new RegisterPage();
