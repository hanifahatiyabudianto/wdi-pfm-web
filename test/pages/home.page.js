const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get avatarImage () { return $('#close-profile-popup') };
    get avatarName () { return $('span.avatar-name') };
    get profilePopup () { return $('#profile-popup-account') };

    async avatar () {
        await (await this.avatarImage).click();
    }

    async profile () {
        await (await this.profilePopup).click();
    }
}

module.exports = new HomePage();
