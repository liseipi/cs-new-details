require.config({
    baseUrl: 'public_new/js/',
    paths: {
        'css': 'css',
        'jquery': './jquery-3.4.1.min',
        'popper': './popper.min',
        'bootstrap': './libs/bootstrap/js/bootstrap.min',
        'owlcarousel': './libs/owlcarousel/owl.carousel.min',
        'simplebar': './libs/simplebar/simplebar.min',
        'smoothscroll': './libs/smooth-scroll/smooth-scroll.polyfills.min',
        'sticky': './libs/sticky/sticky',
        'lozad': './libs/lozad/lozad.min',
        'sharethis': 'https://platform-api.sharethis.com/js/sharethis.js#property=5e1eb86ad9b8290012a6ec22&product=inline-share-buttons&cms=sop',


    },
    map: {
        '*': {
            'popper.js': 'popper'
        }
    },
    shim: {
        bootstrap: {
            deps: ['jquery', 'popper']
        },
        owlcarousel: {
            deps: ['css!./libs/owlcarousel/assets/owl.carousel.min.css', 'css!./libs/owlcarousel/assets/owl.theme.default.min.css', 'jquery']
        },
        simplebar: {
            deps: ['css!./libs/simplebar/simplebar.min.css']
        },
        sticky: {
            deps: ['css!./libs/sticky/sticky.css', 'jquery']
        },
    }
});

require(['bootstrap', 'lozad',  'smoothscroll', 'sticky', 'simplebar'], function (bs, lozad, SmoothScroll, simplebar) {
    //加载进度条
    // pace.start({
    //     document: false
    // });

    //图片lozad
    // var observer = lozad();
    // observer.observe();


    !function (c) {
        var e = {
            init: function () {
                e.menuStopPropagation();
                e.scrollTopButton();
                e.smoothScroll();
                e.coupletFloating();
                e.lozadResources();
            },
            menuStopPropagation: function () {
                var t = document.querySelector("#all-category-menu");
                if (null != t) {
                    $("#all-category-menu").on("click", function (e) {
                        e.stopPropagation();
                    });
                }
            },
            scrollTopButton: function () {
                var t = document.querySelector(".btn-scroll-top");
                if (null != t) {
                    var o = parseInt(600, 10);
                    window.addEventListener("scroll", function (e) {
                        e.currentTarget.pageYOffset > o ? t.classList.add("show") : t.classList.remove("show")
                    })
                }
            },
            smoothScroll: function () {
                if ($('[data-scroll]').length) {
                    new SmoothScroll("[data-scroll]", {
                        speed: 800,
                        speedAsDuration: !0,
                        offset: 40,
                        header: "[data-scroll-header]",
                        updateURL: !1
                    });
                }
            },
            coupletFloating: function () {
                if ($('[data-sticky]').length) {
                    $('[data-sticky]').sticky({
                        context: '[data-sticky-container]',
                        offset: 5
                    });
                }

                $('.subscribe-txt, .subscribe-btn').on('click', function () {
                    var t = document.querySelector(".newsletter_input");
                    if (null != t) {
                        document.querySelector(".newsletter_input").focus();
                    }
                });

            },
            lozadResources: function () {

                const el = document.querySelector('img.lozad');
                const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
                observer.observe();

                // var el = document.querySelector('.lozad');
                // var observer = lozad(el);
                // observer.observe();
            }
        };
        e.init();
    }(jQuery);


});


