define('progressMod',['zepto','vue','api_config','sharedUi'],function ($,Vue,apiConfig,sharedUi) {
    //历史订单按时间查询列表

    return {

        setDataProgress:function () {
            var lsh = sharedUi.getQueryString('lsh');
            var data = {
                str_lsh:lsh
            }

            $.post(apiConfig.queryOrderWorkingProWechatCodeOrLshInfo,data,function (data) {
                //全部产品列表

                var prodData = JSON.parse(data);
                console.log(prodData)
                new Vue({
                    el:"#procesOrd",
                    data:{
                        prodData:prodData,
                        curProduct:''
                    },
                    methods:{
                        setToggle:function (item,index) {

                            //将点击哪个一订单对象的值存起来
                            this.curProduct = item;


                            //索引值
                            //console.log(index);

                            // if(this.delFlag == true){
                            //     this.delFlag = false
                            // }else {
                            //     this.delFlag = true
                            // }

                            if(typeof item.delFlag == "undefined") {

                                Vue.set(item,"delFlag",true);

                            }else {

                                item.delFlag = !item.delFlag;

                            }

                        }
                        
                    }

                })

            });

        }
    }

});