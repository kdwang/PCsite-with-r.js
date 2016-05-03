define(['units/detail_slide', 'units/tabswitch', 'units/place_holder'], function(detail_slide, tabswitch, placeHolder) {

    var carDetail = {};

    carDetail.start = function() {

        $(document).ready(function() {

            // slide
            //require(['units/detail_slide'], function() {});

            // tab
            //require(['units/tabswitch'], function() {
            $('.tab_layout').tabswitch({
                tabClass: 'tab_tit',
                currClass: 'cur',
                contentClass: 'tab_con',
                event: 'click'
            });
            //});

            // detail toggle
            $('#tog_btn').toggle(function () {
                $(this).prev('div').animate({ height : 'toggle' });
                $(this)[0].className = 'tog_up';
            }, function() {
                $(this).prev('div').animate({ height : 'toggle' });
                $(this)[0].className = 'tog_down';
            });

            // comment tx
            //require(['units/place_holder'], function() {
            var comment_tx = new placeHolder({
                target: $('.comment textarea'),
                str: '请输入评论内容...'
            });
            //});



        })
    }

    return carDetail;

})