require.config({
	baseUrl: '../js',
	paths: {
        'jquery': 'base/jquery-1.8.0.min',
        'common': 'pages/common',
        'home_page': 'pages/home_page'
	}
});

// start init
require(['jquery', 'common', 'home_page'], function($, ymc, homePage) {
	
    // common
    ymc.global();

    // single
	homePage.start();

});
