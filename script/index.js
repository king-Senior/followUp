requirejs.config({
    baseUrl:'../../script',
    paths:{
        'zepto':'./zepto.min',
        'vue':'./vue/vue',
        'swiper':'./swiper/swiper.min',
        'swiper-def':'./module/swiper',
        'indexMod':'./module/indexMod',
        'sharedUi':'./module/sharedUi'
    }

});

require(['zepto','indexMod','sharedUi'],function ($,indes,sharedUis) {

    indes.setDataApi();
    sharedUis.setSharedUi(".swiper-container",".swiper-wrapper");

    //固定顶底
    sharedUis.setLocalizeNav(".top-search");
    window.onresize = function () {


        sharedUis.setLocalizeNav(".top-search");
    }


});

