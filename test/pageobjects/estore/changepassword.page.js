const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChangePassword extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('h1.page-title > span.base') }

    get inputcurrentPassword () { return $('#current_password') }
    get inputNewPassword () { return $('#new_password') }
    get inputPasswordConfirm () { return $('#password_confirmation') }
    get btnSubmit () { return $('div.action:nth-child(6) > button.btn.submit-password') }

    //Harap diisi.
    get messageCurrentPassword () { return $('#current_password-error') }
    get messageNewPassword () { return $('#new_password-error') }
    get messagePasswordConfirm () { return $('#password_confirmation-error') }
    
    //Informasi akun berhasil disimpan.
    get alertSuccessChangePassword () { return $('div.message-success.success.message > div:nth-child(1)') }

    //Password tidak cocok. Mohon periksa dan coba lagi nanti.
    //Password minimal 8 karakter.
    //Password harus min. 8 karakter, 1 angka, 1 huruf besar, 1 huruf kecil.
    get alertFailedChangePassword () { return $('div.message-error.error.message > div:nth-child(1)') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async changepassword (currentpassword, newpassword, passwordconfirm) {
        await (await this.inputcurrentPassword).setValue(currentpassword);
        await (await this.inputNewPassword).setValue(newpassword);
        await (await this.inputPasswordConfirm).setValue(passwordconfirm);
        await (await this.btnSubmit).click();
    }

    async clearValue (currentpassword, newpassword, passwordconfirm) {
        await (await this.inputcurrentPassword).getValue();
        await (await this.inputcurrentPassword).clearValue(currentpassword);
        await (await this.inputNewPassword).getValue();
        await (await this.inputNewPassword).clearValue(newpassword);
        await (await this.inputPasswordConfirm).getValue();
        await (await this.inputPasswordConfirm).clearValue(passwordconfirm);
    }
}

module.exports = new ChangePassword();
