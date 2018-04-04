define('indexMod',['zepto','vue','swiper-def','api_config'],function ($,Vue,mySwiper,apiConfig) {
    //产品介绍

    return {

        setDataApi:function () {

            $.getJSON(apiConfig.ad_url,function (data) {
                //首页轮播

                var imgName = data.list;

                new Vue({
                    el:"#navTopIn",
                    data:{
                        imgName:imgName
                    },
                    mounted:function () {
                        //调用方法

                        this.setData();
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

            $.get(apiConfig.queryProductIntroductionList,function (data) {
                //全部产品列表

                var prodData = JSON.parse(data);
                new Vue({
                    el:"#prodListIn",
                    data:{
                        prodData:prodData,
                        imgUrlHttp:apiConfig.imgUrlHttp
                        //ollName:true,
                        //escollname:false,
                        //modName:2
                    },
                    methods:{
                        setOllect:function (item) {
                            var collectInt;

                            if(typeof item.collectors == "undefined") {

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

                        }
                    }

                })

            });

        }
    };

});