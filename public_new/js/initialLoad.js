require(['config'], function () {
    require(['config'], function () {
        require(['lozad'], function (lozad) {
            (function () {
                var observer = lozad();
                observer.observe();
            })();
        });
    });

    // require(['pace'], function (pace) {
    //     console.log("aaa");
    //     pace.start({
    //         document: false
    //     });
    // });
});