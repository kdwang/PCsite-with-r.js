require.config({
	baseUrl: '../js',
	paths: {
		'jquery': 'base/jquery-1.8.0.min',
        'common': 'pages/common'
	}
});

// start init
require(['jquery', 'common'], function($, ymc) {
	
    // common
    ymc.global();

    // single
	// pageA.start();

});
