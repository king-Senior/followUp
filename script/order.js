requirejs.config({
    baseUrl:"../../script",
    paths:{
        'zepto':'./zepto.min',
        'vue':'./vue/vue',
        'sharedUi':'./module/sharedUi',
        'orderMod':'./module/orderMod',
        'LCalendar':'./module/LCalendar'

    }
});

require(['zepto','sharedUi','orderMod','LCalendar'],function ($,data,order,LCalendarc) {

    data.setTab(".tab-switch");

    order.setDataAllAip();

    $("#btnEnquiries").on('click',function () {
        order.setDataDateApi();
        $("#produListHisDate").show();
    });

    //日期选择器
    var calendar = new LCalendar();
    var calendare = new LCalendar();
    calendar.init({
            'trigger':'#staTime',
            'type':'date',
            'minDate':'1900-1-1'
            //'maxDate':'1900-1-1'
        })

    calendare.init({
            'trigger':'#endTime',
            'type':'date',
            'minDate':'1900-1-1'
            //'maxDate':'1900-1-1'
        })

});