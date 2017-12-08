define('progressMod',['zepto','vue'],function ($,Vue) {

    return {

        setDataProgress:function () {

            var httpUr = '../../simulateData/processList.json';
            $.getJSON(httpUr,function (data) {
                //全部产品列表

                var prodData = data.process;
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