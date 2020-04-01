require(['config'], function () {
    var app = null;
    require(['vue', 'common'], function (Vue, common) {
        app = new Vue({
            el: '#details-page',
            data: {
                pageData: _pageData,

                pickedData: [],
                // galleryData: galleryData,   // galleryData.slice(0, 10),
                newHotData: [],
                reviewPercent: [],
                reviewPercentColor: common.reviewPercentColor,
                reviewData: [],

                reviewFitle: {
                    productID: _pageData.productID,
                    size: 6,
                    offset: 1,
                    sort: 'rate',
                    direction: 'desc'
                },

                status: {
                    isLoadingSuburb: false,
                    isLoadingPostage: false,
                    isLoadingReviews: false
                },

                quantity: _pageData.inStockOrigin > 0 ? 1 : 0,
                placeID: _pageData.defaultPlaceID,
                suburbData: _pageData.suburbs,
                suburbID: _pageData.suburbs.length > 0 ? _pageData.suburbs[0].subID : 0,
                postageData: _pageData.postageData,
                timeLeft: {
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            },
            methods: {
                selectAttr: function (e) {
                    // var _target = e.target;
                    // console.log(_target);
                    var _actList = [];
                    var _selectList = document.querySelectorAll('.select-attr-list');
                    for (var i = 0; i < _selectList.length; i++) {
                        var _index = _selectList[i].selectedIndex;
                        _actList.push(parseInt(_selectList[i][_index].getAttribute('data-optionid')));
                        _actList.push(parseInt(_selectList[i][_index].getAttribute('data-variantid')));
                    }
                    this.pageData.group_info.forEach(function (item, index) {
                        var _orgList = [];
                        (item.group_info).forEach(function (list) {
                            _orgList.push(list.optionID);
                            _orgList.push(list.variantID);
                        });
                        if (JSON.stringify(_orgList.sort(function (a, b) {
                            return a - b
                        })) == JSON.stringify(_actList.sort(function (a, b) {
                            return a - b
                        }))) {
                            console.log(item.url);
                            window.location = '/' + item.url;
                        }
                    });
                },
                ajaxSearchSuburb: function () {
                    this.status.isLoadingSuburb = true;
                    $.ajax({
                        url: '/Shipping/ajaxSearchSuburb',
                        type: 'POST',
                        data: {
                            post_code: this.placeID
                        },
                        success: function (result) {
                            // console.log(result);
                            app.status.isLoadingSuburb = false;
                            if (result.flag) {
                                if (result.data instanceof Array) {
                                    if (result.data.length > 0) {
                                        app.suburbData = result.data;
                                        app.suburbID = result.data[0].subID;
                                    } else {
                                        app.suburbData.splice(0);
                                        app.suburbID = 0;
                                    }
                                } else {
                                    app.suburbData.splice(0);
                                    app.suburbID = 0;
                                }
                            } else {
                                app.suburbData.splice(0);
                                app.suburbID = 0;
                            }
                            // app.$forceUpdate();
                        },
                        error: function (e) {
                            app.status.isLoadingSuburb = false;
                            console.log(e);
                        }
                    });
                },
                ajaxProductPostage: function () {
                    this.status.isLoadingPostage = true;
                    $.ajax({
                        url: '/Shipping/ajaxProductPostage',
                        type: 'POST',
                        data: {
                            productID: this.pageData.productID,
                            quantity: this.quantity > 0 ? this.quantity : 1,
                            placeID: this.placeID,
                            suburbID: this.suburbID,
                        },
                        success: function (result) {
                            // console.log(result);
                            app.status.isLoadingPostage = false;
                            if (result instanceof Object) {
                                app.postageData = result;
                            } else {
                                app.postageData = {
                                    courierName: "-",
                                    express_postage: 0,
                                    express_dTime: "-",
                                    dTime: "-",
                                    postage: 0,
                                    error: ""
                                };
                            }
                        },
                        error: function (e) {
                            app.status.isLoadingPostage = false;
                            console.log(e);
                        }
                    });
                },
                userVote: function (index, reviewID, val) {
                    Pace.restart({
                        document: false,
                        ajax: true
                    });
                    Pace.track(function () {
                        $.ajax({
                            url: '/ProductView/ajaxUsefulVote',
                            type: 'POST',
                            data: {
                                rid: reviewID,
                                isuseful: val
                            },
                            success: function (result) {
                                // console.log(result);
                                if (result) {
                                    app.reviewData[index].yes = result[0].R_UsefulVotes;
                                    app.reviewData[index].no = parseInt(result[0].R_AllVotes) - parseInt(result[0].R_UsefulVotes);
                                }
                            },
                            error: function (e) {
                                console.log(e);
                            }
                        });
                    });
                },
                prdsale: function () {
                    if (!this.pageData.isLogin) {
                        location.href = this.pageData.httpsUrl + 'login?r=' + encodeURI(this.pageData.httpsUrl + 'checkout?p=' + this.pageData.productID + '&t=' + this.quantity);
                        return false;
                    } else {
                        // console.log(this.pageData.httpsUrl + 'checkout?p=' + this.pageData.productID + '&t=' + this.quantity);
                        location.href = this.pageData.httpsUrl + 'checkout?p=' + this.pageData.productID + '&t=' + this.quantity;
                        return false;
                    }
                },
                goodsStatus: function (config) {
                    return common.goodsBadgeStatus(config);
                },
                addItemToWishList: function () {
                    Pace.restart({
                        document: false,
                        ajax: true
                    });
                    Pace.track(function () {
                        var message = '';
                        $.ajax({
                            url: '/productview/ajaxAddItemToWishList',
                            type: 'POST',
                            data: {
                                productID: app.pageData.productID,
                            },
                            success: function (result) {
                                // console.log(result);
                                if (result && result.newWishProductID) {
                                    message = 'This item has been added to your wishlist successfully!';
                                    $("#wishlistitemsnum").text(result.newWishProductID);
                                } else {
                                    message = result.errorMessage;
                                }
                                alert(message);
                            },
                            error: function (e) {
                                console.log(e);
                            }
                        });
                    });
                },
                postageFormat: function (val) {
                    // console.log(val);
                    var str = '';
                    if (val === -1) {
                        str = 'Not available';
                    } else if (val === 0) {
                        str = 'Free Shipping';
                    } else if (val > 0) {
                        str = '$' + val;
                    } else {
                        str = val;
                    }
                    return str;
                }
            },
            watch: {
                placeID: function (val, originVal) {
                    if (parseInt(val) != parseInt(originVal)) {
                        if (val.length == 4) {
                            this.ajaxSearchSuburb();
                        }
                    }
                },
                quantity: function (val, originVal) {
                    if (parseInt(val) != parseInt(originVal)) {
                        if (val < 1) {
                            this.quantity = 1;
                        }
                        if (val > this.pageData.inStockOrigin) {
                            this.quantity = this.pageData.inStockOrigin;
                        }
                        this.ajaxProductPostage();
                    }
                },
                suburbID: function (val, originVal) {
                    // console.log(val);
                    // console.log(originVal);
                    if (parseInt(val) != parseInt(originVal) && val != 0) {
                        this.ajaxProductPostage();
                    }
                },
                reviewFitle: {
                    handler: function (val) {
                        // console.log(val);
                        this.status.isLoadingReviews = true;
                        $.ajax({
                            url: '/productView/ajaxReviewVersion2',
                            type: 'POST',
                            data: val,
                            success: function (result) {
                                // console.log(result);
                                app.status.isLoadingReviews = false;
                                if (result) {
                                    app.reviewData = result.reviews;
                                }
                            },
                            error: function (e) {
                                app.status.isLoadingReviews = false;
                                console.log(e);
                            }
                        });
                    },
                    //immediate: true,    // init handler
                    deep: true          // deep watch
                }
            },
            computed: {
                isAttrSelected: function () {
                    return function (optionID, variantID) {
                        // console.log(optionID, variantID);
                        var _s = false;
                        this.pageData.group_info.forEach(function (item) {
                            if (item.defaultMember == 1) {
                                item.group_info.forEach(function (list) {
                                    if (list.optionID == optionID && list.variantID == variantID) {
                                        _s = true;
                                    }
                                })
                            }
                        });
                        return _s;
                    };
                },
            },
            mounted: function () {
                // this.ajaxSearchSuburb();
                // this.ajaxProductPostage();
            }
        });
    });

    require(['lozad', 'simplebar', 'owlcarousel', 'elevatezoom', 'fancybox', 'hcsticky', 'hoverDelay', 'bootstrap', 'common', 'smoothscroll', 'pagination'], function (lozad, SimpleBar, owlCarousel, elevatezoom, fancybox, hcs, hoverDelay, bs, common, SmoothScroll, pagination) {
        !function (c) {
            var e = {
                init: function () {
                    e.lozadResources();
                    e.updateTime();
                    e.initSimpleBar();
                    e.elevatezoomImage();
                    e.initPickedSlider();
                    e.rightProductFloating();
                    e.showReviews();
                    e.showPaymentBox();
                    e.popoverInfo();
                    e.reviewsSmoothScroll();
                    e.topNavSticky();
                    e.notifymeDom();
                    e.renderShare();
                    e.endRenderDom();
                    e.renderSchema()
                },
                lozadResources: function () {
                    var observer = lozad();
                    observer.observe();
                },
                updateTime: function () {
                    var el = document.querySelector("#current_product_countdown");
                    if (null != el) {
                        var t = common.timeLeft({
                            'end': app.pageData.timeLeft,
                        });
                        if (JSON.stringify(t) !== '{}') {
                            app.timeLeft = t;
                            setTimeout(function () {
                                e.updateTime();
                            }, 1000);
                        }
                    }
                },
                navGoodsSticky: function () {
                    var t = document.querySelector(".char-main");
                    if (null != t) {
                        var charHeight = $('.char-main').offset().top;
                        var navTag = $('.nav-goods-sticky');

                        var calcNavSticky = function () {
                            if ($(this).scrollTop() >= charHeight) {
                                navTag.addClass('d-block');
                            } else {
                                navTag.removeClass('d-block');
                            }
                        };
                        $(window).on('scroll', function () {
                            calcNavSticky();
                        });
                        calcNavSticky();
                    }
                },
                elevatezoomImage: function () {

                    $(window).on("resize", function () {
                        initEZPlusRender();
                    });

                    initEZPlusRender();

                    function initEZPlusRender() {
                        try {
                            $('#cz-image-zoom').ezPlus({
                                gallery: 'cs-thumbs-wrap',
                                // scrollZoom: true,
                                borderSize: 1,
                                galleryActiveClass: 'active',
                                imageCrossfade: true,
                                // loadingIcon: true,
                                loadingIcon: 'https://img.crazysales.com.au/images/newhomepage/base/loading-cs.gif',

                                respond: [
                                    {
                                        zoomType: 'inner',
                                        containLensZoom: true,
                                        scrollZoom: false,
                                        range: '320-575',
                                        // tintColour: 'red',
                                        // zoomWindowHeight: 538,
                                        // zoomWindowWidth: 538
                                    },
                                    {
                                        zoomType: 'inner',
                                        containLensZoom: true,
                                        scrollZoom: false,
                                        range: '576-767',
                                        // tintColour: 'blue',
                                        // zoomWindowHeight: 359,
                                        // zoomWindowWidth: 359
                                    },
                                    {
                                        range: '768-991',
                                        // tintColour: 'green',
                                        zoomWindowHeight: 359,
                                        zoomWindowWidth: 359,
                                    },
                                    {
                                        range: '992-1199',
                                        // tintColour: 'yellow',
                                        zoomWindowHeight: 479,
                                        zoomWindowWidth: 479,
                                    },
                                    {
                                        range: '1199-1920',
                                        // tintColour: 'gray',
                                        zoomWindowHeight: 499,
                                        zoomWindowWidth: 499,
                                    }
                                ]
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    }

                },
                initSimpleBar: function () {
                    var t = document.querySelector(".thumbs-wrap");
                    if (null != t) {
                        try {
                            var thumbsWrap = new SimpleBar(document.querySelector('.thumbs-wrap'), {autoHide: false});
                        } catch (e) {
                            console.log(e);
                        }
                    }
                },
                initPickedSlider: function () {
                    var render_slider = function () {
                        var viewedSlider = $('#picked_slider');
                        viewedSlider.owlCarousel({
                            loop: true,
                            margin: 10,
                            // autoplay: true,
                            // autoplayTimeout: 5000,
                            nav: false,
                            dots: false,
                            responsive: {
                                0: {items: 2},
                                575: {items: 2},
                                767: {items: 3},
                                991: {items: 4},
                                1199: {items: 5}
                            }
                        });
                        if ($('.picked_prev').length) {
                            var prev = $('.picked_prev');
                            prev.on('click', function () {
                                viewedSlider.trigger('prev.owl.carousel');
                            });
                        }
                        if ($('.picked_next').length) {
                            var next = $('.picked_next');
                            next.on('click', function () {
                                viewedSlider.trigger('next.owl.carousel');
                            });
                        }
                    }

                    var t = document.querySelector("#picked_product");
                    if (null != t) {
                        var m = $(window).scrollTop();
                        var w = $(window).height();
                        var o = $('#picked_product').offset().top;

                        function handleScroll(ev) {
                            m = $(window).scrollTop();
                            w = $(window).height();
                            o = $('#picked_product').offset().top;

                            var s = document.querySelector("#picked_slider").getAttribute('data-render');
                            // console.log(ev.currentTarget.pageYOffset);
                            // console.log(o);
                            if (ev.currentTarget.pageYOffset + w + 200 > o && s == 'false') {
                                renderData();
                                window.removeEventListener("scroll", handleScroll);
                            }
                            if (ev.currentTarget.pageYOffset + w + 200 > o && s == 'true') {
                                window.removeEventListener("scroll", handleScroll);
                            }
                        }

                        var renderData = function () {
                            app.pickedData = app.pageData.interested_products;
                            document.querySelector("#picked_slider").setAttribute('data-render', 'true');
                            app.$nextTick(function () {
                                if (app.pickedData.length > 0) {
                                    render_slider();
                                    e.lozadResources();
                                }
                            });
                        };

                        if (m + w > o) {
                            renderData();
                        }

                        window.addEventListener("scroll", handleScroll);
                    }
                },
                rightProductFloating: function () {
                    // if ($('[data-sticky-products]').length && $('[data-sticky-products-container]').length) {
                    //     var sticky = new hcSticky('[data-sticky-products]', {
                    //         stickTo: '[data-sticky-products-container]',
                    //         top: 5,
                    //         bottom: 5,
                    //     });
                    // }

                    var t = document.querySelector("#new-hot-product");
                    if (null != t) {
                        var m = $(window).scrollTop();
                        var w = $(window).height();
                        var o = $('#new-hot-product').offset().top;

                        function handleScroll(ev) {
                            m = $(window).scrollTop();
                            w = $(window).height();
                            o = $('#new-hot-product').offset().top;

                            var s = document.querySelector("#new-hot-product-list").getAttribute('data-render');
                            if (ev.currentTarget.pageYOffset + w + 200 >= o && s == 'false') {
                                renderData();
                                window.removeEventListener("scroll", handleScroll);
                            }
                            if (ev.currentTarget.pageYOffset + w + 200 >= o && s == 'true') {
                                window.removeEventListener("scroll", handleScroll);
                            }
                        }

                        var renderData = function () {
                            app.newHotData = app.pageData.newHotData;
                            document.querySelector("#new-hot-product-list").setAttribute('data-render', 'true');
                            app.$nextTick(function () {
                                if (app.newHotData.length > 0) {
                                    e.lozadResources();
                                }
                            });
                        };

                        // console.log(m + w > o);
                        if (m + w > o) {
                            renderData();
                        }

                        window.addEventListener("scroll", handleScroll);
                    }
                },
                showReviews: function () {
                    var t = document.querySelector("#product_reviews");
                    if (null != t) {
                        var m = $(window).scrollTop();
                        var w = $(window).height();
                        var o = $('#product_reviews').offset().top;

                        function handleScroll(ev) {
                            m = $(window).scrollTop();
                            w = $(window).height();
                            o = $('#product_reviews').offset().top;

                            var s = document.querySelector("#reviewData").getAttribute('data-render');
                            if (ev.currentTarget.pageYOffset + w + 200 >= o && s == 'false') {
                                renderData();
                                window.removeEventListener("scroll", handleScroll);
                            }
                            if (ev.currentTarget.pageYOffset + w + 200 >= o && s == 'true') {
                                window.removeEventListener("scroll", handleScroll);
                            }
                        }

                        var renderData = function () {
                            app.reviewPercent = app.pageData.reviewPercent;
                            app.reviewData = app.pageData.reviewsData;
                            document.querySelector("#reviewData").setAttribute('data-render', 'true');
                            app.$nextTick(function () {
                                if (app.reviewData.length > 0) {
                                    e.lozadResources();
                                }
                            });
                        };

                        if (m + w > o) {
                            renderData();
                        }

                        window.addEventListener("scroll", handleScroll);

                    }
                },
                showPaymentBox: function () {
                    $('[data-fancybox="payment-iframe"]').fancybox({
                        toolbar: false,
                        smallBtn: true,
                        arrows: false,
                        infobar: false,
                        buttons: ["close"],
                        iframe: {
                            preload: false,
                            css: {
                                width: '500px'
                            }
                        }
                    });
                },
                popoverInfo: function () {
                    $(function () {
                        if (app.pageData.reviewCount > 0) {
                            $(".copy_review_nav_filter").append($(".review_nav_filter").clone());
                            e.initReivewPagination();
                        }
                        $('[data-toggle="tooltip"]').tooltip();

                        $('[data-toggle="popover"]').popover({
                            html: true,
                            trigger: 'hover',
                            content: function () {
                                return "<p class='border-bottom py-1 my-1'>Postage: " + app.postageFormat(app.postageData.express_postage) + "</p><p class='border-bottom py-1 my-1'>Quantity: " + app.quantity + "</p><p class='border-bottom py-1 my-1'>PostCode: " + app.placeID + "</p><p class='py-1 my-1'>ETA: " + (app.postageData.express_dTime || '-') + "</p>";
                            }
                        });
                        $(document).on('click', '.close-popover', function () {
                            $('[data-toggle="popover"]').popover('hide');
                        });

                        //reviews filter
                        $('.reviews-dropdown').on('click', 'a.dropdown-item', function () {
                            app.reviewFitle.offset = 1;
                            app.reviewFitle.sort = $(this).data('sort');
                            app.reviewFitle.direction = $(this).data('direction');

                            $('.reviews-dropdown .filter-title').text($(this).text());
                        });
                    });
                },
                initReivewPagination: function () {
                    var _pageDom = $('.reviews-pagination');
                    var totalRecord = app.pageData.reviewCount;
                    var maxResult = 6;
                    if (_pageDom.length > 0) {
                        _pageDom.each(function () {
                            var that = $(this);
                            that.pagination({
                                items: totalRecord % maxResult == 0 ? totalRecord / maxResult : Math.ceil(totalRecord / maxResult),
                                itemOnPage: 1,
                                currentPage: 1,
                                cssStyle: '',
                                prevText: '<span aria-hidden="true">&laquo;</span>',
                                nextText: '<span aria-hidden="true">&raquo;</span>',
                                onInit: function () {
                                    // fire first page loading
                                },
                                onPageClick: function (page, evt) {
                                    // some code
                                    app.reviewFitle.offset = page;
                                }
                            });
                        });

                        _pageDom.pagination('drawPage', 1);
                    }
                },
                reviewsSmoothScroll: function () {
                    if ($('[data-scroll-reviews]').length) {
                        new SmoothScroll("[data-scroll-reviews]", {
                            updateURL: !1,
                            speed: 800,
                            speedAsDuration: !0,
                            offset: function (anchor, toggle) {
                                return 81;
                            },
                        });
                    }
                },
                topNavSticky: function () {
                    var t = document.querySelector("#char_main");
                    if (null != t) {
                        var m = $(window).scrollTop();
                        var w = $(window).height();
                        var o = $('#char_main').offset().top;
                        var showStatus = false;
                        var hideStatus = false;

                        function handleScroll(ev) {
                            m = $(window).scrollTop();
                            w = $(window).height();
                            o = $('#char_main').offset().top;

                            if (ev.currentTarget.pageYOffset + 20 >= o) {
                                showNav();
                            } else {
                                hideNav();
                            }
                        }

                        function showNav() {
                            $('.nav-goods-sticky').show();
                            if (!showStatus) {
                                if ($('[data-sticky-main-ad]').length) {
                                    var elements = document.querySelectorAll('[data-sticky-main-ad]');
                                    for (var i = 0; i < elements.length; i++) {
                                        window._adSticky['ad' + i].update({
                                            top: 81
                                        });
                                    }
                                }
                            }
                            showStatus = true;
                            hideStatus = false;
                        }

                        function hideNav() {
                            $('.nav-goods-sticky').hide();
                            if (!hideStatus) {
                                if ($('[data-sticky-main-ad]').length) {
                                    var elements = document.querySelectorAll('[data-sticky-main-ad]');
                                    for (var i = 0; i < elements.length; i++) {
                                        window._adSticky['ad' + i].update({
                                            top: 5
                                        });
                                    }
                                }
                            }
                            showStatus = false;
                            hideStatus = true;
                        }

                        if (m + 20 > o) {
                            showNav();
                        }

                        window.addEventListener("scroll", handleScroll);

                    }
                },
                notifymeDom: function () {
                    var t = document.querySelector("#verifyImg");
                    if (null != t) {
                        common.getVerifyImg({
                            callback: function (res) {
                                t.src = res.ImgDir;
                            }
                        });
                        t.onclick = function () {
                            common.getVerifyImg({
                                callback: function (res) {
                                    t.src = res.ImgDir;
                                }
                            });
                        }
                    }

                    var forms = document.getElementsByClassName('notifyme-validation');
                    if (null != forms) {
                        var validation = Array.prototype.filter.call(forms, function (form) {
                            form.addEventListener('submit', function (event) {
                                if (form.checkValidity() === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                } else {
                                    $.ajax({
                                        url: '/productview/ajaxNotify',
                                        type: 'POST',
                                        data: {
                                            username: form.notify_username.value,
                                            email: form.notify_email.value,
                                            verifycode: form.verifycode.value,
                                            newsletter: form.notify_newsletter.checked,
                                            productID: app.pageData.productID
                                        },
                                        success: function (result) {
                                            console.log(result);
                                            if (result.errorMessage) {
                                                alert(result.errorMessage);
                                            } else {
                                                alert('OK');
                                                $.fancybox.close();
                                            }
                                        },
                                        error: function (e) {
                                            console.log(e);
                                        }
                                    });

                                    event.preventDefault();
                                    event.stopPropagation();
                                    return false;
                                }
                                form.classList.add('was-validated');
                            }, false);
                        });
                    }
                },
                renderShare: function () {
                    var t = document.querySelector(".sharethis-inline-share-buttons");
                    if (null != t) {
                        (function (url) {
                            var js = document.createElement('script');
                            js.src = url;
                            js.async = true;
                            var fs = document.getElementsByTagName('script')[0];
                            fs.parentNode.insertBefore(js, fs);
                        })('https://platform-api.sharethis.com/js/sharethis.js#property=5e1eb86ad9b8290012a6ec22&product=inline-share-buttons&cms=sop');
                    }
                },
                endRenderDom: function () {
                    $('.description_information table.Specification').addClass("table text-sm");

                    $(".review-item").each(function () {
                        $(this).find('[data-fancybox="review-images"]').fancybox({
                            // toolbar: false,
                            // smallBtn: true,
                            // arrows: false,
                            // infobar: false,
                            buttons: ["close"],
                            thumbs: {
                                autoStart: true
                            }
                        });
                    });
                },
                renderSchema: function () {
                    (function () {
                        var YOUTUBE_API_KEY = "AIzaSyBSe5moDEmqPl2yOemNYmPx5wLdCeeUq-A";
                        try {
                            [].forEach.call(document.getElementsByTagName('iframe'), function (e) {
                                var ytbSrc = e.getAttribute('data-src');
                                if (!ytbSrc) return;
                                var rx = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/;]{10,12})/;
                                var yid = ytbSrc.match(rx);
                                var id = yid ? yid[1] : '';
                                if (id) {
                                    var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + YOUTUBE_API_KEY;
                                    var xhttp2 = new XMLHttpRequest();
                                    xhttp2.onreadystatechange = function () {
                                        if (this.readyState == 4 && this.status == 200) {
                                            var responseObject = JSON.parse(this.response);
                                            if (responseObject.items.length > 0) {
                                                var video = responseObject.items[0].snippet;
                                                var jsonld = {
                                                    "@context": "http://schema.org",
                                                    "@type": "VideoObject",
                                                    "name": video.title,
                                                    "description": video.description ? video.description : video.title,
                                                    "thumbnailUrl": [
                                                        video.thumbnails.default.url,
                                                        video.thumbnails.medium.url,
                                                        video.thumbnails.high.url,
                                                        // video.thumbnails.maxres.url,
                                                    ],
                                                    "uploadDate": video.publishedAt,
                                                    "contentUrl": "https://www.youtube.com/watch?v=" + id,
                                                    "embedUrl": "https://www.youtube.com/embed/" + id,
                                                };
                                                var script = document.createElement("script");
                                                script.type = "application/ld+json";
                                                script.text = JSON.stringify(jsonld);
                                                document.querySelector("body").appendChild(script);
                                            }
                                        }
                                    };
                                    xhttp2.open("GET", url, true);
                                    xhttp2.send();
                                }
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    })();
                }
            };
            e.init();
        }(jQuery);
    });
});