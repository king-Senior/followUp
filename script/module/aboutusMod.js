define('aboutusMod',['zepto','vue','api_config'],function ($,Vue,api_config) {

    function setCultureAipData(){
        $.get(api_config.queryCompanyInfo,function (data) {
            var prod = JSON.parse(data);
            new Vue({
                el:"#culture",
                data:{
                    prodData:prod
                }
            })

        });

    }

    return{
        setCultureAipData:setCultureAipData
    }

})