define(function() {

    var drifter = {};

    drifter.ctrl = function() {
        var wd = $(window),
            //tar = $('.con-header').next('div'),
            drifter = $('.drifter') || [],
            backtop = $('.drifter li:last') || [];

        if(drifter) {
            drifter.css({ top : wd.scrollTop() + 180 + 'px' });
            wd.scroll(function(){
                var offsetTop = wd.scrollTop() + 180 + 'px';
                drifter.animate({top : offsetTop },{ duration:500 , queue:false });
            });
            backtop.click(function() {
                $('html,body').animate({scrollTop: '0px'}, 300);
            })
        }
    };

    return drifter;

})
    

