define('sharedUi',['zepto'],function ($) {
    //公共方法模块，Ui
    
    return {

        /**
         *  加载状态事件
         *
         *  document.onreadystatechange         页面加载状态改变时的事件
         *  document.readyState                 返回当前文档的状态
         *      ——uninitialized                 还未开始载入
         *      ——loading                       载入中
         *      ——interactive                   已加载
         *      ——complete                      载入完成
         *
         */
        setToload:function (elemnt) {

            //创建元素
            var loadingElement = '<div class="loading"><span class="loading-an"></span></div>';
            $("body").append(loadingElement);

            /**
                document.onreadystatechange=function () {

                    //原生写法
                    if(document.readyState === "complete"){

                    }
                }
                requery 用法
                document.addEventListener('DOMContentLoaded',function () {

                })
            */

            if(document.readyState === "complete") {
                $(".loading").remove();
            }
        },
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
            //导航滚动添加透明度

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
        setActive:function (searchSo) {
           //实时监听输入内容变化

            this.searchSo = $(searchSo);
            this.searchSo.on('input propertychange',function () {

                var thisVal = $(this).val();
                if(thisVal.length <= 0) {
                    console.log('请输入订单号');
                    return;
                }else {
                    return;
                }
            })


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
                // $(".datWeixList").hide();
            })

        },
        setTextHint:function (text) {
            //提示框

            var hintElement = '';
                hintElement += '<div id="shade" class="shade">';

                    hintElement += '<div class="centent-box">';

                        hintElement += '<div class="centent">';
                        hintElement += '<p class="centent-text">'+ text +'</p>';
                        hintElement += '</div>';

                        hintElement += '<div class="centent-operation">';
                        hintElement += '<p id="hintEnter" class="oper-btn">确认</p>';
                        // hintElement += '<p id="EscEnter" class="oper-btn">取消</p>';
                        hintElement += '</div>';

                    hintElement += '</div>';

                hintElement += '</div>';

            $('body').append(hintElement);


            $("body").delegate('#hintEnter',"click",function () {
                //取消事件
                var $this = $(this);
                var $parents = $this.parents(".shade");

                $parents.remove();

            });


        },
        dateFormat:function(dateString,format) {
            //时间格式化

            if(!dateString)return "";
            var time = new Date(dateString.replace(/-/g,'/').replace(/T|Z/g,' ').trim());
            var o = {
                "M+": time.getMonth() + 1, //月份
                "d+": time.getDate(), //日
                "h+": time.getHours(), //小时
                "m+": time.getMinutes(), //分
                "s+": time.getSeconds(), //秒
                "q+": Math.floor((time.getMonth() + 3) / 3), //季度
                "S": time.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 -     RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return format;
        },
        getQueryString:function(name) {

            //获取url参数   name 指定的参数
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }


}
    
});