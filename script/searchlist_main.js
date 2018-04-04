
    /**
     *  查询结果列表入口
     *
     */
    require(['./main'],function (main) {

        require(['zepto','sharedUi','orderMod','sharedUi','weixinUser'],function ($,sharedUis,orderMod,sharedUi,weixinUser) {
            var username = sharedUi.getQueryString('username');

            //根据订单号查询数据
           // orderMod.setDdataWeixOrderNoApi(username);

            //.log($(window.parent.document).window.location.href);
        });

    })


