define('sharedUi',['zepto'],function () {
    
    return {
        
        setSharedUi:function (parent,img) {

            var parentHeight = $(parent).offset().height;
            var imgHeight = $(img);

            imgHeight.css('height',parentHeight + 'px');

        },
        setTab:function (tabSwitch) {

            var tabLi = $(tabSwitch).find("ul.carrier-tab li");
            var tabCenve = $(tabSwitch).find(".carrier-cenve .tab-cenveChild");
            tabLi.on("click",function () {
                var _this = $(this);
                var _index = parseInt(_this.index());

                _this.addClass("tab-active").siblings().removeClass("tab-active");

                tabCenve.eq(_index).addClass("cenve-active").siblings().removeClass("cenve-active");

            })

        },
        setLayout:function (element,column) {

            var browserW = parseInt($(document.body).width() / column);
            $(element).css('width',browserW + 'px');

            return browserW;
        }
    }
    
});