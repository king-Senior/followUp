    /**
     *  热销产品入口
     *
     */
    require(['./main'],function (main) {

        require(['hotsalesMod','sharedUi','zepto'],function (data,sharedUis,$) {

            data.setDataAipHot();
            sharedUis.setSharedUi(".swiper-container",".swiper-wrapper");

            //加载动画
            sharedUis.setToload();

        });





    })
