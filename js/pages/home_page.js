define(['units/flexslider', 'units/tabswitch'], function(flexslider, tabswitch) {

	var homePage = {};

    homePage.start = function() {

        $(document).ready(function() {

            // focus , slide
            //require(['units/flexslider'], function() {

                $('.home_focus').flexslider({
                    animation: 'fade',
                    slideshow: true,
                    slideshowSpeed: 5000,
                    directionNav: false,
                    controlNav: true,
                    animationLoop: true,
                    pausePlay: true,
                    start: function(){
                        $('.flex-control-nav a').click(function() {
                            if(!$(this).hasClass('flex-active')) {
                                setTimeout(function() {
                                    $('.flex-pauseplay a')[0].click();
                                }, 10)
                            }
                        });
                    }
                });

                $('.rotation').flexslider({
                    animation: 'slide',
                    slideDirection: 'horizontal',
                    slideshow: false,
                    directionNav: true,
                    controlNav: false,
                    animationLoop: true
                });

            //});

            // tab
            //require(['units/tabswitch'], function() {

                // map
                $('.map_tab').tabswitch({
                    tabClass: 'tab_tit',
                    currClass: 'active',
                    contentClass: 'tab_con',
                    event: 'click'
                });

                var map_choose = $('.map_tab .tab_tit'),
                    map_tit = $('.map_tab .tab_tit li'),
                    map_btn = $('.area-opt a'),
                    isEnd = 1;

                map_choose.css({ top : 0 });

                
                map_btn.on('click', function() {

                    var _this = $(this),
                        dir = 0,
                        y = map_tit.eq(0).outerHeight(),
                        cur_pos = map_choose.position().top;

                    if(isEnd == 1) {

                        isEnd = 0;

                        if(_this.hasClass('up') && (cur_pos !== 0)) {
                            dir = 1;
                            map_choose.animate({
                                top : (cur_pos + y * dir)
                            }, { duration : 200 , queue : false })
                        }
                        if(_this.hasClass('down') && (cur_pos !== -(map_tit.length-6)*y) ) {
                            dir = -1;
                            map_choose.animate({
                                top : (cur_pos + y * dir)
                            }, { duration : 200 , queue : false })
                        }
                        
                        setTimeout(function() {
                            isEnd = 1;
                        }, 210);

                    }
                    
                });
                
            //});


        })
    }

    return homePage;

})