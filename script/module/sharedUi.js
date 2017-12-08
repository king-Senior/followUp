define('sharedUi',['zepto'],function () {
    
    return {
        
        setSharedUi:function (parent,img) {
            //切换图片大小等比例绽放

            var parentHeight = $(parent).offset().height;
            var imgHeight = $(img);

            imgHeight.css('height',parentHeight + 'px');

        },
        setTab:function (tabSwitch) {
            //tab切换

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
            //多列面部局尺寸

            var browserW = parseInt($(document.body).width() / column);
            $(element).css('width',browserW + 'px');

            return browserW;
        },
        setLocalizeNav:function (search) {
            //固定导航

            // 滚动条事件之前文档滚动高度
            var scrollTop = (document.documentElement.scrollTop || document.body.scrollTop);

            var objName = $(search);

            window.onscroll = function () {
                console.log(scrollTop);
                if(scrollTop != (document.documentElement.scrollTop || document.body.scrollTop)){
                    scrollTop = (document.documentElement.scrollTop || document.body.scrollTop);
                    objName.css('top',scrollTop + 'px');
                }

            }


        }
    }
    
});