/**
 *  产品介绍入口
 *
 */

require(['./main'],function (main) {


    require(['zepto','indexMod','sharedUi','api_config'],function ($,index,sharedUis) {

        index.setDataApi();
        sharedUis.setSharedUi(".swiper-container",".swiper-wrapper");

        //固定顶底
        sharedUis.setLocalizeNav(".scrllTop-color");
        window.onresize = function () {

            //sharedUis.setLocalizeNav(".top-search");
        }

        //加载动画
        sharedUis.setToload();

    })



})


