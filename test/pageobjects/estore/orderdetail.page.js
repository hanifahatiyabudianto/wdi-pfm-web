const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class orderDetailPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('h1.page-title > span.base') } //Detail Pesanan
    
    get backToOrderHistory () { return $('div.account-nav-menu:nth-child(1) > a:nth-child(2)') }

    get orderId () { return $('span[class="order-view-id"]')}
    get orderStatus () { return $('span[class="order-view-status"]')}
    get grandTotal () { return $('//td[@id="Grand Total"]')}
    get btnTracking () { return $('#track-order-btn') }
}

module.exports = new orderDetailPage();