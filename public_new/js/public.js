require(['config.min'], function () {

    require(['jquery', 'pace', 'lozad', 'bootstrap', 'hcsticky', 'smoothscroll', 'simplebar', 'hoverDelay', 'common'], function (jquery, pace, lozad, bootstrap, hcsticky, SmoothScroll, simplebar, hoverDelay, common) {

        (function () {
            // # page loading progress
            pace.start({
                document: false,
                // ajax: true
            });

            // # lozad data-origin
            var observer = lozad();
            observer.observe();
        })();


        // var timeLeft = '2020/2/26 23:29:36';
        var timeLeft = _floatREndtime;

        !function (c) {
            var e = {
                init: function () {
                    e.coupletFloating();
                    e.updateTime();
                    e.showSubCategory();
                    e.menuStopPropagation();
                    e.renderTopButton();
                    e.scrollTopButton();
                    e.showHotsearch();
                    e.showSearchList();
                    e.hideSearchInputTip();
                    e.searchSubmit();
                    e.adsbygoogle();
                },
                showSubCategory: function () {
                    $("#all-category-menu .dropdown-item").each(function () {
                        var that = $(this);
                        that.children(".dropdown-submenu").html('<div class="d-flex flex-wrap flex-md-nowrap p-3"><div class="mega-menu"><div class="w-100 h-100 d-flex justify-content-around align-items-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div></div></div>');
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

                    // $('.newsletter-left').on('click', function () {
                    //     var t = document.querySelector(".newsletter_input");
                    //     if (null != t) {
                    //         document.querySelector(".newsletter_input").focus();
                    //     }
                    // });
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
                    $('body').append('<a class="btn-scroll-top" href="#top" data-scroll-header><span class="btn-scroll-top-tooltip text-muted font-size-sm mr-2">Top</span><i class="csiconfont csicon-chevron_up csicon-xl align-middle text-light"></i></a>');
                    e.smoothScroll();
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
                    if ($('[data-scroll-header]').length) {
                        new SmoothScroll("[data-scroll-header]", {
                            speed: 800,
                            speedAsDuration: !0,
                            offset: 40,
                            header: "[data-scroll-header-position]",
                            updateURL: !1
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
                        } else {
                            document.querySelector('#promotion_today_product_time').innerHTML = "End";
                        }
                    }
                },
                showHotsearch: function () {
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
                showSearchList: function () {
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
                hideSearchInputTip: function () {
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
                searchSubmit: function () {
                    var forms = document.getElementsByClassName('search-wrap');
                    if (null != forms) {
                        var validation = Array.prototype.filter.call(forms, function (form) {
                            form.addEventListener('submit', function (event) {
                                if (form.checkValidity() === false) {
                                    document.querySelector("#input-keywords").focus();

                                    event.preventDefault();
                                    event.stopPropagation();
                                } else {
                                    var additionUrl = '';
                                    var _key = document.querySelector("#input-keywords").value;
                                    var keyword = ($.trim(_key).replace(/[^-\w+]/g, " ")).replace(/( )+/g, "+");
                                    var _category = document.querySelector(".select-category").value;
                                    if ($.trim(_category).length > 0 && _category != 0) {
                                        additionUrl = 'category/' + _category + '/';
                                    }
                                    window.location.href = "https://" + window.location.host + "/search/" + keyword + '/' + additionUrl;

                                    event.preventDefault();
                                    event.stopPropagation();
                                    return false;
                                }
                            }, false);
                        });
                    }
                },
                adsbygoogle: function () {
                    var t = document.querySelector(".adsbygoogle");
                    if (null != t) {
                        // requirejs(['adsbygoogle']);
                        (function (url) {
                            var js = document.createElement('script');
                            js.src = url;
                            js.async = true;
                            var fs = document.getElementsByTagName('script')[0];
                            fs.parentNode.insertBefore(js, fs);
                        })('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?_=1580701438626');
                    }
                }
            };
            e.init();
        }(jQuery);
    });

});