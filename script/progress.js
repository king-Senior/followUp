requirejs.config({
    baseUrl:'../../script',
    paths:{
        'zepto':'./zepto.min',
        'vue':'./vue/vue',
        'progressMod':'./module/progressMod'
    }

});

require(['progressMod'],function (progressMod) {

    progressMod.setDataProgress();

});