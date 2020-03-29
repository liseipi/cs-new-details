require(['config'], function () {
    require(['lozad'], function (lozad) {
        (function () {
            console.log(111);
            var observer = lozad();
            observer.observe();
        })();
    });
});