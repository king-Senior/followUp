define('swiper-def',['swiper'],function (mySwiper) {
    //swiper滚动

    return {
        setSwiper:function () {

            new mySwiper('.swiper-container',{
                //首页

                //自动切换
                autoplay:{

                    //时间
                    delay:2000
                },

                //设置边缘不被拖动
                resistanceRatio:0
            })

        }

    }



})