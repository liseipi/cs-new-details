require.config({
    baseUrl: 'public_new/js/',
    paths: {
        'css': './css',
        'jquery': './jquery-3.4.1.min',
        'popper': './popper.min',
        'hoverDelay': './libs/hoverDelay',
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
        'moment': './libs/moment/moment',
        'pagination': './libs/jquery.simplePagination',
        'sharethis': 'https://platform-api.sharethis.com/js/sharethis.js#property=5e1eb86ad9b8290012a6ec22&product=inline-share-buttons&cms=sop',
        'adsbygoogle': 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?_=1580701438626',

        'public': './public',
        'common': './common',

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
    }
});

// requirejs(['public']);
require(['pace', 'lozad', 'bootstrap', 'hcsticky', 'smoothscroll', 'simplebar', 'hoverDelay', 'common'], function (pace, lozad, bootstrap, hcsticky, SmoothScroll, simplebar, hoverDelay, common) {

    // # page loading progress
    pace.start({
        document: false
    });

    // # lozad data-origin
    var observer = lozad();
    observer.observe();

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

    var timeLeft = '2020/2/26 23:29:36';

    !function (c) {
        var e = {
            init: function () {
                e.showSubCategory();
                e.coupletFloating();
                e.smoothScroll();
                e.menuStopPropagation();
                e.renderTopButton();
                e.scrollTopButton();
                e.updateTime();
                e.showHotsearch();
                e.showSearchList();
                e.hideSearchInputTip();
                setTimeout(function () {
                    e.adsbygoogle();
                }, 30);
            },
            showSubCategory: function () {
                $("#all-category-menu .dropdown-item").each(function () {
                    var that = $(this);
                    that.hoverDelay({
                        hoverEvent: function () {
                            that.children(".dropdown-submenu").show();
                            e.getSubCategories(that);
                            $("#all-category-menu").css({
                                borderBottomRightRadius: '0'
                            });
                        },
                        outEvent: function () {
                            that.children(".dropdown-submenu").hide();
                            $("#all-category-menu").css({
                                borderBottomRightRadius: '.25rem',
                            });
                        }
                    });
                });
            },
            getSubCategories: function (el) {
                var _status = $(el).attr('data-status');
                var _cateid = $(el).attr('data-cateid');
                var _el = $(el);
                if (_status == 'empty') {
                    $.ajax({
                        type: "post",
                        data: {
                            newHome: 1,
                            version: 2,
                            cateid: _cateid,
                        },
                        url: "/index/ajaxCategoryMenu",
                        success: function (res) {
                            // console.log(res);
                            _el.attr("status", "cached");
                            _el.find('.mega-menu').html(res.html);
                        },
                        error: function (e) {
                            _el.attr("status", "empty");
                        }
                    });
                }
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
                $('body').append('<a class="btn-scroll-top" href="#top" data-scroll><span class="btn-scroll-top-tooltip text-muted font-size-sm mr-2">Top</span><i class="csiconfont csicon-chevron_up csicon-xl align-middle text-light"></i></a>');
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
            showHotsearch() {
                var el = document.querySelector("#input-keywords");
                if (null != el) {
                    var _inputKeywords = $("#input-keywords");
                    var _hot_SearchList = $('.hot-search-list');
                    var _search_results = $('.search-results');
                    _inputKeywords.focus(function (e) {
                        var _str = $.trim(e.target.value);
                        if (_str.length < 3) {
                            _hot_SearchList.show();
                        } else {
                            _search_results.show();
                        }
                    });
                }
            },
            showSearchList() {
                var text = document.querySelector("#input-keywords");
                var _hot_SearchList = $('.hot-search-list');
                var _search_results = $('.search-results');
                var ids = 0;
                if (null != text) {
                    text.addEventListener("input", inputHandler);

                    function inputHandler(e) {
                        if (ids) return;
                        ids = setTimeout(textContentHandler, 500, this);
                    }

                    function textContentHandler(elem) {
                        var _str = $.trim(elem.value);
                        if (_str.length >= 3) {
                            getSearchList(_str);
                            _hot_SearchList.hide();
                            _search_results.show();
                        } else {
                            _search_results.hide();
                            _hot_SearchList.show();
                        }
                        clearTimeout(ids);
                        ids = 0;
                    }

                    function getSearchList(key) {
                        // console.log(key);
                        $.ajax({
                            url: '/fulltextsearch/ajaxAutoComplete',
                            type: 'POST',
                            data: {
                                keyword: key,
                                pageSize: 10
                            },
                            success: function (res) {
                                if (res) {
                                    _search_results.html(res.html);
                                } else {
                                    _search_results.html('<h6 class="h6 font-weight-normal p-2">No related products</h6>');
                                }
                            },
                            error: function (e) {
                                _search_results.html('<h6 class="h6 font-weight-normal p-2">No related products</h6>');
                            }
                        });
                    }
                }
            },
            hideSearchInputTip() {
                var _inputKeywords = $("#input-keywords");
                var _hot_SearchList = $('.hot-search-list');
                var _search_results = $('.search-results');

                $(document).click(function (e) {
                    var _target = $(e.target);
                    if (_target.closest(".search-keywords").length == 0) {
                        _hot_SearchList.hide();
                        _search_results.hide();
                        _inputKeywords.blur();
                    }
                });
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

// requirejs(['https://helpcentre.crazysales.com.au/__apps/livechat/assets/visitor/js/loader.js']);