describe('Banner Homepage', () => {
    it('should show the banner container', () => {
        browser.url('https://primafreshmart.com/');
        const promoBanner = $('#maincontent > div.columns > div > div.banner-container > div.hero-banner > div > div > div > div > a:nth-child(1)');
        expect(promoBanner).toBeDisplayed();
    });

    it('should show the banner image', () => {
        const linkImageBanner = $('body.cms-home.cms-index-index.page-layout-1column:nth-child(4) div.page-wrapper:nth-child(2) main.page-main div.columns:nth-child(4) div.column.main div.banner-container:nth-child(1) div.hero-banner div.hb-container div.hb-list.slick-initialized.slick-slider.slick-dotted div.slick-list.draggable div.slick-track a.hb-item.slick-slide.slick-cloned:nth-child(7) picture:nth-child(1) > img:nth-child(2)');
        expect(linkImageBanner).toHaveLink('https://primafreshmart.com/pub/media/banner/tmp/images/promo_omega-36_3.png');
    });

    it('should slick next image banner', async function () {
        const nextBtn = await $('body.cms-home.cms-index-index.page-layout-1column:nth-child(4) div.page-wrapper:nth-child(2) main.page-main div.columns:nth-child(4) div.column.main div.banner-container:nth-child(1) div.hero-banner div.hb-container div.hb-list.slick-initialized.slick-slider.slick-dotted > button.slick-next.slick-arrow');
        const secondlinkImageBanner = $('body.cms-home.cms-index-index.page-layout-1column:nth-child(4) div.page-wrapper:nth-child(2) main.page-main div.columns:nth-child(4) div.column.main div.banner-container:nth-child(1) div.hero-banner div.hb-container div.hb-list.slick-initialized.slick-slider.slick-dotted div.slick-list.draggable div.slick-track a.hb-item.slick-slide.slick-cloned:nth-child(7) picture:nth-child(1) > img:nth-child(2)');

        nextBtn.click();
        expect(secondlinkImageBanner).toHaveLink('https://primafreshmart.com/pub/media/banner/tmp/images/promo_omega-36_3.png');
    });
});