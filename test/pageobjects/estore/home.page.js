const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    //Headers
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

    get sliderProductPromo () { return $('#Produk\ Promo-title') };
    get linkProductPromo () { return $('#Produk\ Promo-link') };

    get sliderMyFavorite () { return $('#Favorit\ Saya-title') };
    get linkMyFavorite () { return $('#Favorit\ Saya-link') };

    get sliderAllProduct () { return $('#Semua\ Produk-title') };
    get linkAllProduct () { return $('#Semua\ Produk-link') };

    get sliderBlog () { return $('#mpblog-list-container-title') };
    get linkBlog () { return $('#mpblog-list-container-link') };

    //FOOTER
    get footerFbicon () { return $('#footer-fb-img') };
    get footerIgicon () { return $('#footer-ig-img') };

    //TENTANG
    get footerTitle () { return $('#footer-links-title') };
    get footerFaq () { return $('#footer-faq') };
    get footerLocation () { return $('#footer-location') };
    get footerContactus () { return $('#footer-contact') };
    get footerTnc () { return $('#footer-tnc') };
    get footerPrivacypolicy () { return $('#footer-privacy') };

    //KATEGORI
    get footerCategoryTitle () { return $('#footer-category-title') };
    get footerCategoryAllproduct () { return $('#footer-category-Semua\ Produk') };
    get footerCategoryDaging () { return $('#footer-category-Daging') };
    get footerCategoryTelur () { return $('#footer-category-Telur') };
    get footerCategoryTepung () { return $('#footer-category-Tepung') };
    get footerCategorySosis () { return $('#footer-category-Sosis') };
    get footerCategoryNugget () { return $('#footer-category-Nugget') };
    get footerCategoryKentang () { return $('#footer-category-Kentang') };
    get footerCategoryDimsum () { return $('#footer-category-Dimsum') };
    get footerCategoryFastfood () { return $('#footer-category-Makanan\ Siap\ Saji') };
    get footerCategoryMerchandise () { return $('#footer-category-Merchandise') };
    get footerCategoryOlahanAyam () { return $('#footer-category-Olahan\ Ayam') };

    async avatar () {
        await (await this.avatarImage).click();
    }

    async profile () {
        await (await this.profilePopup).click();
    }

    async facebook () {
        await (await this.footerFbicon).click();
    }

    async instagram () {
        await (await this.footerIgicon).click();
    }

    async faq () {
        await (await this.footerFaq).click();
    }

    async location () {
        await (await this.footerLocation).click();
    }

    async contactus () {
        await (await this.footerContactus).click();
    }

    async tnc () {
        await (await this.footerTnc).click();
    }

    async privacypolicy () {
        await (await this.footerPrivacypolicy).click();
    }

    async footerallproduct () {
        await (await this.footerCategoryAllproduct).click();
    }
    
    async footerdaging () {
        await (await this.footerCategoryDaging).click();
    }
    
    async footertelur () {
        await (await this.footerCategoryTelur).click();
    }

    async footertepung () {
        await (await this.footerCategoryTepung).click();
    }
    
    async footersosis () {
        await (await this.footerCategorySosis).click();
    }
    
    async footernugget () {
        await (await this.footerCategoryNugget).click();
    }

    async footerkentang () {
        await (await this.footerCategoryKentang).click();
    }
    
    async footerdimsum () {
        await (await this.footerCategoryDimsum).click();
    }
    
    async footerfastfood () {
        await (await this.footerCategoryFastfood).click();
    }

    async footermerchandise () {
        await (await this.footerCategoryMerchandise).click();
    }
    
    async footerolahanayam () {
        await (await this.footerCategoryOlahanAyam).click();
    }

}

module.exports = new HomePage();
