requirejs.config({
    baseUrl:'../../script',
    paths:{
        'zepto':'./zepto.min',
        'vue':'./vue/vue',
        'swiper':'./swiper/swiper.min',
        'swiper-def':'./module/swiper',
        'hotsalesMod':'./module/hotsalesMod',
        'sharedUi':'./module/sharedUi'
    }

});

require(['hotsalesMod','sharedUi'],function (data,sharedUis) {

    data.setDataAipHot();
    sharedUis.setSharedUi(".swiper-container",".swiper-wrapper");

});