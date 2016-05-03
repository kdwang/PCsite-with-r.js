require.config({
	baseUrl: '../js',
	paths: {
		'jquery': 'base/jquery-1.8.0.min',
        'common': 'pages/common',
		// 'page_name': 'pages/page_name'
	}
});

// start init
require(['jquery', 'common'], function($, ymc) {
	
    // common
    ymc.global();

    // single
	// pagename.start();

});
