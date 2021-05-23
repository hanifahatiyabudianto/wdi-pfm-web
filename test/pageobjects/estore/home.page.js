const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get pfmLogo () { return $('#pfm-logo') };
    get searchNavbar () { return $('#search_navbar') };
    get miniCart () { return $('#minicart-icon') };
    get btnRegister () { return $('#register-navbar') };
    get btnLogin () { return $('#login-navbar') };

    get categoryMenu () { return $('div.main-list-item:nth-child(1) div.list-item-panel > span.collapsible') };
    get brandMenu () { return $('div.main-list-item:nth-child(2) div.list-item-panel > span.collapsible') };
    get promoMenu () { return $('div.main-list-item:nth-child(3) div.list-item-panel > a.collapsible') };
    get storeLocationMenu () { return $('div.main-list-item:nth-child(4) div.list-item-panel > a.collapsible') };
    get aboutUsMenu () { return $('div.main-list-item:nth-child(5) div.list-item-panel > a.collapsible') };
    get blogMenu () { return $('div.main-list-item:nth-child(6) div.list-item-panel > a.collapsible') };
    
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
