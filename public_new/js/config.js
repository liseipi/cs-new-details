require.config({
    baseUrl: 'public_new/js/',
    waitSeconds: 200,
    paths: {
        'domReady': 'domReady',
        'css': './libs/css',
        'jquery': './libs/jquery-3.4.1.min',
        'popper': './libs/popper.min',
        'hoverDelay': './libs/hover-delay/hover-delay.min',
        'bootstrap': './libs/bootstrap/js/bootstrap.min',
        'owlcarousel': './libs/owlcarousel/owl.carousel.min',
        'simplebar': './libs/simplebar/simplebar.min',
        'smoothscroll': './libs/smooth-scroll/smooth-scroll.polyfills.min',
        'hcsticky': './libs/hc-sticky/hc-sticky',
        'fancybox': './libs/fancybox/jquery.fancybox.min',
        'lozad': './libs/lozad/lozad.min',
        'vue': './libs/vue',
        'pace': './libs/pace/pace.min',
        'elevatezoom': './libs/elevatezoom/jquery.ez-plus.min',
        'holder': './libs/holder.min',
        'moment': './libs/moment/moment.min',
        'pagination': './libs/simple-pagination/jquery.simplePagination.min',

        'config': './config.min',
        'public': './public.min',
        'common': './common.min',

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
        },
        'hoverDelay': ['jquery'],
        'pagination': ['jquery'],
        'elevatezoom': ['jquery'],
    }
});
