define('weixinUser',["zepto","api_config","orderMod","sharedUi"],function ($,api_config,orderMod,sharedUi) {


    var APPID = "wx6d0770da1adbde30";
    var SECRET = "63f6791a787d2595ed6785091c46280a";
    function getQueryString(name) {
        //获取url参数   name 指定的参数

        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    var code = getQueryString("code");

    function getWeiXinInfo() {

        //会话存储 -- code
        //sessionStorage.setItem("userInfoCode",code);

        //读取存储的值
        //var userInfoCodeName = sessionStorage.getItem("userInfoCode");



        var tokenData = {

            code:code,
            appid:APPID,
            secret:SECRET

        }


        $.post(api_config.weiXinToken,tokenData,function (data) {
            //获取微信access_token

            var data = data.split('"');
            var token = data[3];
            var poenid = data[13];

            var userData = {

                access_token:token,
                openid:poenid

            }


            // var refreshData = {
            //     appid:APPID,
            //     grant_type:'refresh_token',
            //     refresh_token:token
            // }
            //alert(refreshData.appid +'--'+  refreshData.grant_type + '--' +refreshData.refresh_token +'传入的数据')
            // $.post(api_config.getWeChatRefreshOauthInfo,refreshData,function (data) {

                // $(".foor-line").html(data);

            // });
            $.post(api_config.weixUserInfo,userData,function (data) {
                //获取微信用户基本信息
                var data = JSON.parse(data);

                // alert(userInfoStorageName)
                //全部订单

                var nickname = data.nickname;
                // var nickname = 'Stranger';
                orderMod.setDataAllAip(nickname);

                $("#orderAdd").on("click",function () {
                    orderMod.setDataAllAip(nickname);

                })

                orderMod.setDdataWeixOrderNoApi(nickname);

                orderMod.setDataDateApi(nickname);

            })


        })


        return;
    }

    return {

        getWeiXinInfo:getWeiXinInfo,
        getQueryString:getQueryString,
    }
})