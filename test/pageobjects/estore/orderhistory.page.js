const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class orderHistoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('h1.page-title > span.base') } //Riwayat Belanja
    
    get filterAll () { return $('div.filter-history-orders:nth-child(5) div.content > a.item.filter-order-item:nth-child(1)') }
    get filterPending () { return $('div.filter-history-orders:nth-child(5) div.content > a.item.filter-order-item:nth-child(2)') }
    get filterProcessing () { return $('div.filter-history-orders:nth-child(5) div.content > a.item.filter-order-item:nth-child(3)') }
    get filterComplete () { return $('div.filter-history-orders:nth-child(5) div.content > a.item.filter-order-item:nth-child(4)') }
    get filterCanceled () { return $('div.filter-history-orders:nth-child(5) div.content > a.item.filter-order-item:nth-child(5)') }
    
    get orderId () { return $('a[class="order-history-id"]')}
    get orderStatus () { return $('div[class="order-history-status"]')}
    get grandTotal () { return $('span[class="price"]')}
    get btnDetails () { return $('a[class="view-details"]') }
    get btnReorder () { return $('a[class="btn"]') }
}

module.exports = new orderHistoryPage();