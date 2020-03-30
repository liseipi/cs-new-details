require(['config'], function () {
    require(['pace'], function (pace) {
        console.log("aaa");
        pace.start({
            document: false
        });
    });
});