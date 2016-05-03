/*
◇ Writer:一七
◇ For:Ymc Pc Site
◇ Time:2015.9.28
◇ Version:
*/
define(function() {

	var ymc_Funs_17 = {};

	// 获取公共Header区域
	ymc_Funs_17.getHeader = function() {
		$.ajax({
			url: './comm/header.xml',
			dataType: 'html',
			cache: false,
			success: function(html) {
				$('.header').append(html);
			}
		});
	};

	// 获取公共Footer区域
	ymc_Funs_17.getFooter = function() {
		$.ajax({
			url: './comm/footer.xml',
			dataType: 'html',
			cache: false,
			success: function(html) {
				$('.footer').append(html);
			}
		});
	};

	// 获取公共Crumb区域
	ymc_Funs_17.getCrumb = function() {
		$.ajax({
			url: './comm/crumb.xml',
			dataType: 'html',
			cache: false,
			success: function(html) {
				$('.crumb').append(html);
			}
		});
	};

	// 获取公共Dirfter区域
	ymc_Funs_17.getDirfter = function() {
		$.ajax({
			url: './comm/drifter.xml',
			dataType: 'html',
			cache: false,
			success: function(html) {
				$('body').append(html);
			}
		});
	};

	// 获取公共pager区域
	ymc_Funs_17.getSearch = function() {
		$.ajax({
			url: './comm/search.xml',
			dataType: 'html',
			cache: false,
			success: function(html) {
				$('.search').append(html);
			}
		});
	};

	// 获取公共pager区域
	ymc_Funs_17.getPager = function() {
		$.ajax({
			url: './comm/pager.xml',
			dataType: 'html',
			cache: false,
			success: function(html) {
				$('.pager').append(html);
			}
		});
	};

	return ymc_Funs_17;

})