/*
 * 调用方式
 *  //$('.select').uiSelect({hover:'鼠标hover项目的时候的类名'});
 */
;
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function($) {
    $.fn.uiSelect = function(options){
        var defaults = {
            hover:'hover'//hover的class 默认为 hover  可以在调用的时候通过 $('.select').uiSelect({hover:'定制类名'});
        };
        // 最终参数
        var params = $.extend({}, defaults, options || {});
        $(this).each(function(a,b){
            var o = $(b);
            var content = o.find('.select-content');
            var selectWrap = o.find('.select-wrap');
            o.click(function(){
            selectWrap.removeClass('hide');
            });

            o.on('click','li',function(){
                content.html($(this).html());
                selectWrap.addClass('hide');
                return false;
            }).on('mouseover','li',function(){
                $(this).siblings().removeClass(params.hover);
                $(this).addClass(params.hover);
            });
            $(document).on('click',function(e){
                if(!$(e.target).parent('.select').length){
                    selectWrap.addClass('hide');
                }
            });
        });
    }
}));