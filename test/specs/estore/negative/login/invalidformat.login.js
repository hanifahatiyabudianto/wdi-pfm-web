//import { waitForTextChange } from '../../../../utilities/helper';
const LoginPage = require('../../../../pageobjects/estore/login.page');

describe('Login Page negative case', () => {
    before(() => {
        LoginPage.open();
    });

    after(() => {
        LoginPage.clearValue();
    });

    it('should show error message when empty email', async () => {
        // await LoginPage.open();
        await LoginPage.login('','Pfm12345');
        await expect(LoginPage.messageEmail).toBeDisplayed();
        await expect(LoginPage.messageEmail).toHaveText('Harus diisi');
    });
    
    it('should save a screenshot of the browser view when empty email', function () {
        browser.saveScreenshot('test/screenshot/negative case/login/emptyemail.png');
    });

    // it ('should clear value form login page', async () => {
    //     await LoginPage.clearValue();
    // });
    after(() => {
        LoginPage.clearValue();
    });

    it('should show error message when empty password', async () => {
        await LoginPage.login('hello.hanifahatiya@gmail.com','');
        await expect(LoginPage.messagePassword).toBeDisplayed();
        await expect(LoginPage.messagePassword).toHaveText('Harus diisi');
    });

    it('should save a screenshot of the browser view when empty password', function () {
        browser.saveScreenshot('test/screenshot/negative case/login/emptypassword.png');
    });

    it('should show error message invalid format email', async () => {
        await LoginPage.login('hello.hanifahatiya', 'Pfm12345');
        await expect(LoginPage.messageEmail).toBeDisplayed();
        await expect(LoginPage.messageEmail).toHaveText('Format email salah.');
    });

    it('should save a screenshot of the browser view when invalid format email', function () {
        //global object=browser, function name=saveScreenshot, specify the name of screenshot=invalid format email login.png
        browser.saveScreenshot('test/screenshot/negative case/login/invalidemail.png');
    });

    after(() => {
        LoginPage.clearValue();
    });

    it('should show error message wrong password', async () => {
        await LoginPage.login('hello.hanifahatiya@gmail.com', 'Pfm');
        await expect(LoginPage.alertPassword).toBeDisplayed();
        await expect(LoginPage.alertPassword).toHaveText('Password tidak cocok dengan akun ini. Verifikasi password dan coba lagi.');
    });

    it('should save a screenshot of the browser view when wrong password', function () {
        browser.saveScreenshot('test/screenshot/negative case/login/wrongpassword.png');
    });

    after(() => {
        LoginPage.clearValue();
    });

    it('wait until error message closed', function () {
        browser.pause(3000);

    }); 
    it('should show error message Confirmation Required', async () => {
        await LoginPage.login('hanifah@yopmail.com', 'Pfm12345');
        await expect(LoginPage.alertPassword).toBeDisplayed();
        //waitForTextChange(LoginPage.alertPassword, 'Akun ini belum terkonfirmasi. Mohon cek email Anda untuk mengkonfirmasi.', 3000);
        await expect(LoginPage.alertPassword).toHaveText('Akun ini belum terkonfirmasi. Mohon cek email Anda untuk mengkonfirmasi.');
    });

    it('should save a screenshot of the browser view when Confirmation Required', function () {
        browser.saveScreenshot('test/screenshot/negative case/login/Confirmation Required.png');
    });

    // it('should save a recording video of the browser view', function () {
    //     browser.saveRecordingScreen('test/video/Confirmation Required.mp4');
    // });
});