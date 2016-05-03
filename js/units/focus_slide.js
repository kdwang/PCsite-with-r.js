//focus
(function($){
    $.fn.th_fade = function(options) {
        var settings = {            
			list_class: '.pic',
			nav_class: '.bean',
			cur_class: 'cur',
			duration: 1000,
			delay: 4000
        }
        
        if (options) {
            $.extend(settings,options);
        }           
		
		var $ad_list = $(settings.list_class + ' li'),
			$ad_nav = $(settings.nav_class + ' a'),
			timerId = null,
			currIndex = $ad_nav.index($(settings.nav_class + ' a.' + settings.cur_class)),
			len = $ad_nav.length;
			
		//将广告图片的索引跟分页导航的当前索引保持一致
		$ad_list.eq(currIndex).css({zIndex:99});
		
		$ad_nav.click(function(){
			clearTimeout(timerId);
			
			var $this = $(this),
				index = $this.index();
			
			//将当前的索引号保存到全局的索引号中，以保证动画定时执行的正确性
			currIndex = index;
			
			auto(index);
		})
		
		function auto(index) {	
			$ad_nav.eq(index).addClass(settings.cur_class).siblings().removeClass(settings.cur_class);
			$ad_list.eq(index).animate({opacity:1,zIndex:99},600).siblings().stop().animate({opacity:0,zIndex:0},600);
		}
					
		
		$(settings.list_class).hover(function(){
			clearTimeout(timerId);
		},function(){
			timerId = setTimeout(function(){				
				currIndex = (currIndex + 1) % len;
				auto(currIndex);
				
				timerId = setTimeout(arguments.callee,3000)
			},3000);
		})
		
		$(settings.list_class).trigger('mouseout');
    }
})(jQuery)