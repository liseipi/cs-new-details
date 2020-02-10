require.config({
    baseUrl: 'public_new/js/',
    paths: {
        'css': './css',
        'jquery': './jquery-3.4.1.min',
        'popper': './popper.min',
        'bootstrap': './libs/bootstrap/js/bootstrap.min',
        'owlcarousel': './libs/owlcarousel/owl.carousel.min',
        'simplebar': './libs/simplebar/simplebar.min',
        'smoothscroll': './libs/smooth-scroll/smooth-scroll.polyfills.min',
        'hcsticky': './libs/hc-sticky/hc-sticky',
        'fancybox': './libs/fancybox/jquery.fancybox.min',
        'lozad': './libs/lozad/lozad.min',
        'vue': './vue@2.6.11',
        'pace': './libs/pace/pace.min',
        'drift': './libs/drift-zoom/Drift.min',
        'holder': './holder',
        'sharethis': 'https://platform-api.sharethis.com/js/sharethis.js#property=5e1eb86ad9b8290012a6ec22&product=inline-share-buttons&cms=sop',
        'adsbygoogle': 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?_=1580701438626',

        'public': './public',


    },
    map: {
        '*': {
            'css': 'css',
            'popper.js': 'popper'
        }
    },
    shim: {
        bootstrap: {
            deps: ['jquery', 'popper']
        },
        owlcarousel: {
            // deps: ['css!./libs/owlcarousel/assets/owl.carousel.min.css', 'css!./libs/owlcarousel/assets/owl.theme.default.min.css', 'jquery'],
            deps: ['jquery']
        },
        fancybox: {
            deps: ['jquery']
        }
    }
});

require(['pace', 'lozad', 'jquery'], function (pace, lozad) {
    // # page loading progress
    pace.start({
        document: false
    });
    // # lozad data-origin
    var observer = lozad();
    observer.observe();

    // init public
    // setTimeout(function () {
    // requirejs(['public']);
    // }, 300);

});

requirejs(['public']);


