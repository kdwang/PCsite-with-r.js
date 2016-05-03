define(['jquery'], function($) {

    function placeHolder(o) {

        var tar = o.target,
            holder = o.str;
            
        tar.addClass('holder_color');
        tar.val(holder);
        tar.focusin(function() {
            if(tar.val() == holder) {
                $(this).val('');
                tar.removeClass('holder_color');
            }
        }).focusout(function() {
            if(!tar.val()) {
                tar.val(holder);
                tar.addClass('holder_color');
            }
        })

    }
    
    var search_tx = new placeHolder({
        target: $('.search input'),
        str: '请输入品牌、车系搜索'
    });

    return placeHolder;

})
