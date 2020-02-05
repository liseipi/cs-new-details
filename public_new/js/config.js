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

require(['bootstrap', 'lozad', 'smoothscroll', 'simplebar', 'pace', 'holder', 'hcsticky'], function (bs, lozad, SmoothScroll, simplebar, pace, Holder) {

    // Page loading progress
    pace.start({
        document: false
    });

    // Holder.run({
    //     domain: "img.crazysales",
    //     dataAttr: 'holder-src',
    //     themes: {
    //         "simple": {
    //             bg: "#fff",
    //             fg: "#000",
    //             size: 12
    //         }
    //     },
    //     images: document.querySelector('img.holder')
    // });

    !function (c) {
        var e = {
            init: function () {
                e.menuStopPropagation();
                e.renderTopButton();
                e.scrollTopButton();
                e.smoothScroll();
                e.coupletFloating();
                e.lozadResources();
                e.adsbygoogle();
            },
            menuStopPropagation: function () {
                var t = document.querySelector("#all-category-menu");
                if (null != t) {
                    $("#all-category-menu").on("click", function (e) {
                        e.stopPropagation();
                    });
                }
            },
            renderTopButton: function () {
                $('body').append('<a class="btn-scroll-top" href="#top" data-scroll><span class="btn-scroll-top-tooltip text-muted font-size-sm mr-2">Top</span><i class="fas fa-chevron-up align-middle text-light"></i></a>');
            },
            scrollTopButton: function () {
                var t = document.querySelector(".btn-scroll-top");
                if (null != t) {
                    var o = parseInt(600, 10);
                    window.addEventListener("scroll", function (e) {
                        e.currentTarget.pageYOffset > o ? t.classList.add("show") : t.classList.remove("show")
                    });
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
                    var elements = document.querySelectorAll('[data-sticky]');
                    for (var i = 0; i < elements.length; i++) {
                        new hcSticky(elements[i], {
                            stickTo: '[data-sticky-container]',
                            top: 5,
                        });
                    }
                }

                $('.newsletter-left').on('click', function () {
                    var t = document.querySelector(".newsletter_input");
                    if (null != t) {
                        document.querySelector(".newsletter_input").focus();
                    }
                });

            },
            lozadResources: function () {
                const observer = lozad();
                observer.observe();
            },
            adsbygoogle: function () {
                var t = document.querySelector(".adsbygoogle");
                if (null != t) {
                    requirejs(['adsbygoogle']);
                }
            }
        };
        e.init();
    }(jQuery);


});


