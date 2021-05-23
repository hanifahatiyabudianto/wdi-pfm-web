const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfileInfoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('h1.page-title > span.base') }

    //Account Navbar
    get avatarImage () { return $('#avatar-image') }
    get changeAvatar () { return $('div.avatar-image > form:nth-child(1)') }
    get avatarName () { return $('div.avatar-info:nth-child(2) > div.avatar-name') }

    //Value profile info
    get customerName () { return $('#account-info-firstaname-value') }
    get customerPhoneNumber () { return $('#account-info-phone-value') }
    get customerEmail () { return $('#account-info-email-value') }
    get customerDob () { return $('div#account-info-dob-value.value') }
    get customerNik () { return $('div#account-info-nik-value.value') }
    get customerGender () { return $('div.profile-info div.row:nth-child(6) div.col > div.value') }

    //Edit profile info form
    get changeName () { return $('div.profile-info div.row:nth-child(1) div.col:nth-child(2) > span.action-edit') }
    get inputFirstname () { return $('#firstname') }
    get btnChangeFirstname () { return $('div.profile-info div.row:nth-child(1) div.col:nth-child(1) form.form-inline div.action > button.btn:nth-child(2)') }
    get btnCancelFirstname () { return $('div.profile-info div.row:nth-child(1) div.col:nth-child(1) form.form-inline div.action > button.btn.btn-outline.action-cancel:nth-child(1)') }
    
    get changeEmail () { return $('div.profile-info div.row:nth-child(3) div.col:nth-child(2) > span.action-edit') }
    get inputEmail () { return $('#email') }
    get inputPasswordVerify () { return $('#password_verify_email') }
    get btnChangeEmail () { return $('div.profile-info div.row:nth-child(3) div.col:nth-child(1) form.form-inline div.action:nth-child(3) > button.btn:nth-child(2)') }
    get btnCancelEmail () { return $('div.profile-info div.row:nth-child(3) div.col:nth-child(1) form.form-inline div.action:nth-child(3) > button.btn.btn-outline.action-cancel:nth-child(1)') }

    get changeNik () { return $('div.profile-info div.row:nth-child(5) div.col:nth-child(2) > span.action-edit') }
    get inputNik () { return $('#nik') }
    get btnChangeNik () { return $('div.profile-info div.row:nth-child(5) div.col:nth-child(1) form.form-inline div.action > button.btn:nth-child(2)') }
    get btnCancelNik () { return $('div.profile-info div.row:nth-child(5) div.col:nth-child(1) form.form-inline div.action > button.btn.btn-outline.action-cancel:nth-child(1)') }
 
    get messageFirstname () { return $('#firstname-error') }//Harap diisi.
    get messageEmail () { return $('#email-error') }  //Harap diisi.  Format email salah.
    get messagepasswordVerify () { return $('#password_verify_email-error') }//Harap diisi.
    get messageNik () { return $('#nik-error') }//Harap diisi.

    //Notif Success change profile info
    get alertSuccessChangeProfile () { return $('div.message-success.success.message > div:nth-child(1)') } //Informasi akun berhasil disimpan.

    //Notif Failed change profile info
    get alertFailedpasswordVerify () { return $('div.message-error.error.message > div:nth-child(1)') } //Password tidak cocok dengan akun ini. Verifikasi password dan coba lagi. 
    get alertFailedChangeAvatar () { return $('div.account-nav > div.alert-avatar') }  //Ukuran gambar lebih dari 2 MB!
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async changeName (firstname) {
        await (await this.inputFirstname).setValue(firstname);
        await (await this.btnChangeFirstname).click();
    }

    async clearValueName (firstname) {
        await (await this.inputFirstname).getValue();
        await (await this.inputFirstname).clearValue(firstname);
    }

    async changeEmail (email, passwordVerify) {
        await (await this.inputEmail).setValue(email);
        await (await this.inputPasswordVerify).setValue(passwordVerify);
        await (await this.btnChangeEmail).click();
    }

    async clearValueEmail (email, passwordVerify) {
        await (await this.inputEmail).getValue();
        await (await this.inputEmail).clearValue(email);
        await (await this.inputPasswordVerify).getValue();
        await (await this.inputPasswordVerify).clearValue(passwordVerify);
    }

    async changeNik (nik) {
        await (await this.inputNik).setValue(nik);
        await (await this.btnChangeNik).click();
    }

    async clearValueNik (nik) {
        await (await this.inputNik).getValue();
        await (await this.inputNik).clearValue(nik);
    }
}

module.exports = new ProfileInfoPage();
