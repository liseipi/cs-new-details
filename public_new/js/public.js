require(['bootstrap', 'hcsticky', 'smoothscroll', 'simplebar', 'common'], function (bootstrap, hcsticky, SmoothScroll, simplebar, common) {

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

    var timeLeft = '2020/2/16 23:29:36';

    !function (c) {
        var e = {
            init: function () {
                e.coupletFloating();
                e.smoothScroll();
                e.menuStopPropagation();
                e.renderTopButton();
                e.scrollTopButton();
                e.updateTime();
                setTimeout(function () {
                    e.adsbygoogle();
                }, 30);
            },
            coupletFloating: function () {
                if ($('[data-sticky-main-ad]').length) {
                    var elements = document.querySelectorAll('[data-sticky-main-ad]');
                    for (var i = 0; i < elements.length; i++) {
                        new hcSticky(elements[i], {
                            stickTo: '[data-sticky-main-container]',
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
            updateTime: function () {
                var el = document.querySelector("#promotion_today_product");
                if (null != el) {
                    var t = common.timeLeft({
                        'end': timeLeft,
                    });
                    if (JSON.stringify(t) !== '{}') {
                        document.querySelector('#promotion_today_product_time').innerHTML = t.hour + ':' + t.minute + ':' + t.second;
                        setTimeout(function () {
                            e.updateTime();
                        }, 1000);
                    }
                }
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