define('orderMod',['zepto','vue'],function ($,Vue) {

   return {
       setDataAllAip:function () {

           var httpUr = '../../simulateData/orderHistoryAll.json';
           $.getJSON(httpUr,function (data) {
               //全部产品列表

               var prodData = data.prodlist;

               new Vue({

                   el:"#produListHiscAll",
                   data:{

                       prodData:prodData
                   }

               })

           });

       },
       setDataDateApi:function () {
           var httpUr = '../../simulateData/orderHistoryAll.json';
           $.getJSON(httpUr,function (data) {
               //全部产品列表

               var prodData = data.prodlist;
               new Vue({
                   el:"#produListHisDate",
                   data:{

                       prodData:prodData
                   }

               })

           });
       }

   }

});