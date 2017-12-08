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


    var browserW = parseInt($(document.body).width());
    if(browserW >= 960){

        //根据屏幕宽度，设置n列布局（元素，列数）
        //var bodyW = sharedUis.setLayout('.column-count .carrier-column',3);

    }else if(browserW < 960) {

        //根据屏幕宽度，设置n列布局（元素，列数）
        //var bodyW = sharedUis.setLayout('.column-count .carrier-column',2);


    }



});

