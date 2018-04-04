define('orderMod',['zepto','vue','api_config','dateFormat','sharedUi'],function ($,Vue,apiConfig,dateFormat,sharedUi) {
    //历史订单列表-全部

   return {
       setDataAllAip:function (userName) {
           //全部产品列表

           var data = {

               str_wechatcode:userName

           }
           $.post(apiConfig.queryOrderInfo,data,function (data) {
               //全部产品列表
               var prodData = JSON.parse(data);
               new Vue({

                   el:"#produListHiscAll",
                   data:{

                       prodData:prodData,
                       imgUrlHttp:apiConfig.imgUrlHttp
                   },
                   methods:{
                       orderPocessInfo:function (index) {

                           /**
                            *  index 索引值
                            *  拿到索引值与数据数组匹配订单号
                            *  进入当前订单详情
                            */

                           //window.location.href = './progress.html?lsh='+prodData[index].lsh;
                           setDindc(prodData[index].lsh);
                       }
                   },
                   filters:{
                       //使用vue过滤器
                       formatDate:function (timec) {
                           return dateFormat.dateFormat(timec,"yyyy-MM-dd");
                       }
                   }
               })

           });

       },
       setDataDateApi:function (userName) {


           var prodDatac = new Vue({
               el:"#produListHisDate",
               data:{

                   prodData:"",
                   imgUrlHttp:apiConfig.imgUrlHttp
               },
               methods:{
                   orderPocessInfo:function (index) {

                       /**
                        *  index 索引值
                        *  拿到索引值与数据数组匹配订单号
                        *  进入当前订单详情
                        */


                       //window.location.href = './progress.html?lsh='+prodData[index].lsh;
                       setDindc(this.prodData[index].lsh);


                   },
                   setAPi:function () {

                       //按时间查询


                       $("#btnEnquiries").on('click',function () {


                           var staTime = $("#staTime");
                           var endTime = $("#endTime");

                           var staTimeInt = parseInt(staTime.val().split('-').join());
                           var endTimeInt = parseInt(endTime.val().split('-').join());
                           var data = {
                               str_wechatcode:userName,
                               str_start_time:staTime.val(),
                               str_end_time:endTime.val()
                           }


                           if(staTimeInt && endTimeInt) {

                               if(staTimeInt > endTimeInt) {
                                   sharedUi.setTextHint('起始时间不能大于结束时间');
                               }else {

                                   $.post(apiConfig.queryOrderWechatCodeOrTimeInfo,data,function (data) {
                                       //按时间查询

                                       var prodDataA = JSON.parse(data);
                                       prodDatac.prodData = prodDataA;

                                   });
                                   $("#produListHisDate").show();
                               }

                           }else {
                               sharedUi.setTextHint('请选择你查询的时间范围');
                           }


                       })


                   },

               },
               filters:{
                   formatDate:function (timec) {
                       return dateFormat.dateFormat(timec,"yyyy-MM-dd");
                   }
               }

           })

           prodDatac.setAPi();



       },
       setDdataWeixOrderNoApi:function (userName) {
           //通过微信号和订单号查询订单信息

           var isInof = new Vue({

               el:"#ddataWeixOrder",
               data:{
                   prodData:''
               },
               methods:{
                   setSearch:function(event){

                       var searchSo = $('#searchSo');

                           if(searchSo.val().length <= 0){

                               sharedUi.setTextHint('请输入订单号.');

                           }else {

                               var searchOrderBnt = $("#searchOrder");
                               var searchSo = $('#searchSo');
                               var searchSo = $("#searchSo");
                               var data = {

                                   str_wechatcode:userName,
                                   str_lsh:searchSo.val()
                               }

                               $.post(apiConfig.queryOrderWechatCodeOrLshInfo,data,function (data) {
                                   //全部产品列表
                                   var prodDatac = JSON.parse(data);
                                   isInof.prodData = prodDatac;
                               });

                           }
                   },
                   setReurn:function () {
                       $("#ddataWeixOrder").hide();
                   },
                   orderPocessInfo:function (index) {

                       /**
                        *  index 索引值
                        *  拿到索引值与数据数组匹配订单号
                        *  进入当前订单详情
                        */
                       //window.location.href = '/view/order/progress.html?lsh='+this.prodData[index].lsh+'&username='+userName;
                       setDindc(this.prodData[index].lsh);
                   },
                   setOnload:function(){

                       //返回上一页
                       sharedUi.setReturnPage("#returnPage");

                       //编辑显示关闭按钮
                       sharedUi.setEditShowClose("#searchSo","#removeText");
                   }
               },
               filters:{
                   //使用vue过滤器
                   formatDate:function (timec) {
                       return dateFormat.dateFormat(timec,"yyyy-MM-dd");
                   }
               }
           })
            //直接调用方法
           isInof.setOnload();


       }

   }


   //显示订单工序
    function setDindc(lsh){

        $("#procesOrd").show();


        var data = {
            str_lsh:lsh
        }

        $.post(apiConfig.queryOrderWorkingProWechatCodeOrLshInfo,data,function (data) {
            //全部产品列表



            var prodData = JSON.parse(data);
            var esecd = new Vue({
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

                    },
                    setEsc:function () {

                        $('#cDesc').on('click',function () {
                            $("#procesOrd").hide();
                        });

                    }

                }

            })



        });

    }
});

