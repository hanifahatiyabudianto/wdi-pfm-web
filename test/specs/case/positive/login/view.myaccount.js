const LoginPage = require('../../../../pages/login.page');
const HomePage = require('../../../../pages/home.page');

describe('Prima Freshmart Customer Login', () => {
    before(() => {
        LoginPage.open();
    });

    // after( function () {
    //     browser.saveScreenshot('test/screenshot/positive case/login/successloginandviewaccountpage.png');
    // });
    
    async function successLogin() {
        await LoginPage.login('hello.hanifahatiya@gmail.com', 'Pfm12345');
        await expect(browser).toHaveUrl('https://primafreshmart.com/');
        await expect(HomePage.avatarImage).toBeVisible();
    }

    it('should login with valid credentials', () => {
        return successLogin();
    });
    
    // it('wait', function () {
    //     browser.pause(3000);
    // });

    it('should avatar will be displayed', async () => {
        await expect(HomePage.avatarImage).toBeClickable();
        await HomePage.avatar();
        await expect(HomePage.avatarName).toBeDisplayed();
        await expect(HomePage.avatarName).toHaveTextContaining('Atiya');
    });

    it('should direct to my account page', async () => {
        await HomePage.profile();
        await expect(browser).toHaveUrl('https://primafreshmart.com/customer/account/');
        await expect(browser).toHaveTitleContaining('Akun Saya');
    });

    it('should save a screenshot of the browser view of account page', function () {
        // browser.pause(5000);
        browser.takeScreenshot();
        browser.saveScreenshot('test/screenshot/positive case/login/viewaccountpage.png');
    });
});