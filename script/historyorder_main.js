    /**
     *  历史订单入口
     *
     */
    require(['./main'],function (main) {

        require(['zepto','sharedUi','orderMod','LCalendar','weixinUser'],function ($,sharedUi,order,LCalendarc,weixinUser) {

            sharedUi.setTab(".tab-switch");



            $("body").delegate('#hintEnter',"click",function () {
                //确认事件
                var $this = $(this);
                var $parents = $this.parents(".shade");

                $parents.remove();

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

            //调用获取微信token
            weixinUser.getWeiXinInfo();

            //输入订单号查询订单
            $("#j-searchSo").on('click',function () {

                $("#ddataWeixOrder").show();

            })

            //返回
            $("#returnPage").on("click",function () {
                $("#ddataWeixOrder").hide();
            })

            //关闭订单工序
            $("#cDesc").on('click',function () {


            });
        });



    })