requirejs.config({
    baseUrl:"../../script",
    paths:{
        'zepto':'./zepto.min',
        'vue':'./vue/vue',
        'sharedUi':'./module/sharedUi',
        'orderMod':'./module/orderMod'

    }
});

require(['zepto','sharedUi','orderMod'],function ($,data,order) {

    data.setTab(".tab-switch");

    order.setDataAllAip();

    $("#btnEnquiries").on('click',function () {
        order.setDataDateApi();
        $("#produListHisDate").show();
    });





});