require.config({
    baseUrl: 'public_new/js/',
    waitSeconds: 200,
    paths: {
        'lozad': './libs/lozad/lozad.min',
        'pace': './libs/pace/pace.min',
    }
});

requirejs(['pace', 'lozad'], function (pace, lozad) {
    console.log(111);
    pace.start({
        document: false,
        // ajax: true
    });

    var observer = lozad();
    observer.observe();
});