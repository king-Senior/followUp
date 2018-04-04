define('api_config',function () {



    //api路径
    var url = '../../simulateData/';
    //本地服务
    var urlsp = '/admin/webservice/WebService.asmx';

    //产品列表
    var queryProductIntroductionList = urlsp +  '/queryProductIntroductionList';

    //热销产品
    var queryHotSaleList = urlsp + '/queryHotSaleList';

    //首页轮播图
    var ad_url = url + 'shuffling.json';


    //历史订-全部产品列表
    var queryOrderInfo = urlsp + '/queryOrderInfo';
    //历史订单-按日期查询
    var queryOrderWechatCodeOrTimeInfo = urlsp + '/queryOrderWechatCodeOrTimeInfo';
    //历史订单-按微信号/订单号
    var queryOrderWechatCodeOrLshInfo = urlsp + '/queryOrderWechatCodeOrLshInfo';

    //订单流程信息
    var queryOrderWorkingProWechatCodeOrLshInfo = urlsp + '/queryOrderWorkingProWechatCodeOrLshInfo';

    //进度查询订单
    var progress = url +'processList.json';

    //联系我们
    var queryCompanyInfo = urlsp + '/queryCompanyInfo';

    //图片地址
    var imgUrlHttp = 'http://47.97.111.17:55709';

    //微信token
    var weiXinToken = urlsp + '/getWeChatOauthInfo';

    //刷新tonkn
    var getWeChatRefreshOauthInfo = urlsp + '/getWeChatRefreshOauthInfo';

    //用户信息
    var weixUserInfo = urlsp + "/getWeChatUserInfo";

    return {
        ad_url:ad_url,
        queryProductIntroductionList:queryProductIntroductionList,
        queryOrderInfo:queryOrderInfo,
        progress:progress,
        queryHotSaleList:queryHotSaleList,
        queryOrderWechatCodeOrTimeInfo:queryOrderWechatCodeOrTimeInfo,
        queryCompanyInfo:queryCompanyInfo,
        imgUrlHttp:imgUrlHttp,
        queryOrderWechatCodeOrLshInfo:queryOrderWechatCodeOrLshInfo,
        queryOrderWorkingProWechatCodeOrLshInfo:queryOrderWorkingProWechatCodeOrLshInfo,
        weiXinToken:weiXinToken,
        weixUserInfo:weixUserInfo,
        getWeChatRefreshOauthInfo:getWeChatRefreshOauthInfo
    }
})



