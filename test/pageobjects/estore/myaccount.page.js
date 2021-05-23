const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MyAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get profileInfo () { return $('ul.nav-items li.nav.item:nth-child(1) > a:nth-child(1)') }
    get changePassword () { return $('ul.nav-items li.nav.item:nth-child(2) > a:nth-child(1)') }
    get addressBook () { return $('ul.nav-items li.nav.item:nth-child(3) > a:nth-child(1)') }
    get orderHistory () { return $('ul.nav-items li.nav.item:nth-child(4) > a:nth-child(1)') }
    get wishlist () { return $('ul.nav-items li.nav.item:nth-child(5) > a:nth-child(1)') }
    get btnLogout () { return $('ul.nav-items li.nav.item:nth-child(6) > a:nth-child(1)') }
}

module.exports = new MyAccountPage();
