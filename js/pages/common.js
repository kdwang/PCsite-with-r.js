define(['units/drifter', 'units/place_holder'], function(drifter, placeHolder) {

    var ymc = {};

    ymc.global = function() {

        // common todo
        console.log('add common.js');

        //require(['DELETEME_17'], function(ymc_Funs_17) {
            // del.getHeader();
            // del.getFooter();
            // del.getDirfter();
            // del.getCrumb();
            // del.getSearch();
            // del.getPager();
        //})

        // add drifter
        setTimeout(function() {  // 提交测试时将此延迟同DELETEME_17一起去掉
            drifter.ctrl();
            //placeHolder...
        }, 1000)
    }

    return ymc;

})