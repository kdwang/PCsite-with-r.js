({
    appDir: "./",
    baseUrl: "./js",
    dir: "build",

    modules: [
       {name: 'init/init_car_detail'}, {name: 'init/init_home_page'}
    ],

    paths: {
        jquery: 'empty:',
        common: 'pages/common',
        car_detail: 'pages/car_detail',
        home_page: 'pages/home_page',
        drifter: 'units/drifter',
        place_holder: 'units/place_holder',
        tabswitch: 'units/tabswitch',
        detail_slide: 'units/detail_slide',
        focus_slide: 'units/focus_slide',
        flexslider: 'units/flexslider',
        DELETEME_17: 'DELETEME_17'
    },

    //stubModules: ['jquery'],
    findNestedDependencies: true,
    fileExclusionRegExp: /^(r|build)\.js$/,
    removeCombined: true

    

})