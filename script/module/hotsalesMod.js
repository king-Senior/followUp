define('hotsalesMod',['zepto','vue','swiper-def','api_config'],function ($,Vue,mySwiper,apiConfig) {
    //热销产品

    return {
        setDataAipHot:function () {


            $.getJSON(apiConfig.ad_url,function (data) {
                //首页轮播

                var imgName = data.list;

                new Vue({
                    el:"#navTopHot",
                    data:{
                        imgName:imgName
                    },
                    mounted:function () {
                        //调用方法

                    },
                    methods:{
                        //定义方法
                        setData:function () {

                        }
                    }

                });

                //首页广告切换
                mySwiper.setSwiper();

            });


            $.getJSON(apiConfig.queryHotSaleList,function (data) {
                //热销产品列表
                var prodData = data;
                var hotsale = new Vue({
                    el:"#produListHot",
                    data:{

                        prodData:prodData,
                        imgUrlHttp:apiConfig.imgUrlHttp
                    },
                    mounted:function(){
                        this.setAaim();
                    },
                    methods:{

                        setOllect:function (item) {
                            var collectInt;

                            if(typeof item.collectors == "undefined") {
                                //收藏功能

                                //如果 item.collectors 不存在，就给全局添加item.collectors变量为true

                                //局部义变量  vm.$set  让Vue去监听没有定义的变量
                                //this.$set(item,"collectors",false);

                                //全局定义变量  vm.$set  让Vue去监听没有定义的变量
                                Vue.set(item,"collectors",true);

                                collectInt = parseInt(item.collect) + 1;

                            }else {

                                //否则 更改item.collectors变量为false
                                item.collectors = !item.collectors;

                                !item.collectors ? collectInt = parseInt(item.collect) - 1 : collectInt = parseInt(item.collect) + 1;
                            }
                            item.collect = collectInt;

                        },
                        setAaim:function () {
                            //逐渐加载数据

                        }
                    }

                })

                var carrier_row = $(".carrier-row");

                $.each(carrier_row,function (index,value) {
                    //循环

                    var rowindex = (index+1) / 5;
                    carrier_row.eq(index).css({animation:"row "+ rowindex + "s linear;"});
                })



            });

        }
    }

});