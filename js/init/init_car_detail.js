require.config({
	baseUrl: '../js',
	paths: {
        'jquery': 'base/jquery-1.8.0.min',
        'common': 'pages/common',
		'car_detail': 'pages/car_detail'
	}
});

// start init
require(['jquery', 'common', 'car_detail'], function($, ymc, carDetail) {
	
    // common
    ymc.global();

    // single
    carDetail.start();
    
});
