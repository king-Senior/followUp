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
            //滚动添加透明度

            var scrollTop = 0;
            var opacity;
            window.onscroll = function () {

                var objName = $(search);

                // 获取滚动距离
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                opacity =scrollTop/400;
                objName.css('opacity',opacity);


            }

        },
        setReturnPage:function (name) {
            //返回

            $(name).on('click',function () {
                window.history.back();
            })
        },
        setEditShowClose:function (name,nameBtn) {
            //搜索框 、清空

            var nameText = $(name);
            var nameBnt = $(nameBtn);

            nameText.on('input',function () {

               nameText.val().length > 0 ? nameBnt.show() : nameBnt.hide();

            });

            nameBnt.on('click',function () {
                $(this).hide();
                nameText.val('');
                nameText.focus();
            })

        }
    }
    
});