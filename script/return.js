requirejs.config({
    baseUrl:'../../script',
    paths:{
        'zepto':'./zepto.min',
        'vue':'./vue/vue',
        'sharedUi':'./module/sharedUi'
    }

});

require(['zepto','sharedUi'],function ($,sharedUis) {

    //返回上一页
    sharedUis.setReturnPage("#returnPage");

    //编辑显示关闭按钮
    sharedUis.setEditShowClose("#searchSo","#removeText");

});

