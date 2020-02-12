require(['../config'], function () {
    var app = null;
    var timeLeft = '2020/2/13 19:19:00';
    var pickedData = [
        {
            name: 'Portable Steam Sauna Tent w/ Head',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/759/75917_1000765_N.jpg',
            price: 139.98,
            wasPrice: 299.95,
            save: 53,
            reviews: 202
        },
        {
            name: 'Electromagnetic Wave Foot Massager',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/733/73361_353591_N.jpg',
            price: 109.98,
            wasPrice: 249.95,
            save: 56,
            reviews: 161
        },
        {
            name: '6 Tiers Hairdresser Hair Salon Spa',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/780/78067_540317_N.jpg',
            price: 79.97,
            wasPrice: 119.95,
            save: 33,
            reviews: 136
        },
        {
            name: 'Large Mobile Portable Salon Hair',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/819/81925_540287_N.jpg',
            price: 79.95,
            wasPrice: 119.95,
            save: 33,
            reviews: 111
        },
        {
            name: 'Portable Steam Sauna Tent',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/759/75919_1000755_N.jpg',
            price: 139.98,
            wasPrice: 299.95,
            save: 53,
            reviews: 107
        },
        {
            name: '3D Shiatsu Foot Ankle Calf',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/1204/120491_945633_N.jpg',
            price: 179.95,
            wasPrice: 269.95,
            save: 44,
            reviews: 94
        },
        {
            name: '10 Motor Vibration Massage Cushion',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/157/157285_1032793_N.jpg',
            price: 69.95,
            wasPrice: 199.95,
            save: 65,
            reviews: 93
        },
        {
            name: 'Full Body Car Seat Back Massager',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/154/154377_992779_N.jpg',
            price: 99.88,
            wasPrice: 199.95,
            save: 50,
            reviews: 92
        },
        {
            name: 'Medium Mobile Portable Salon Hair',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/819/81927_540273_N.jpg',
            price: 59.95,
            wasPrice: 119.95,
            save: 50,
            reviews: 89
        },
        {
            name: 'Portable Steam Sauna Tent With',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/1083/108355_1000771_N.jpg',
            price: 69.98,
            wasPrice: 239.95,
            save: 71,
            reviews: 84
        },
        {
            name: 'Full Body Neck Back Massager',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/1582/158267_1045797_N.jpg',
            price: 149.95,
            wasPrice: 249.95,
            save: 40,
            reviews: 83
        },
        {
            name: '3D Shiatsu Foot Ankle Calf',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/1284/128429_945723_N.jpg',
            price: 179.95,
            wasPrice: 269.95,
            save: 33,
            reviews: 76
        },
        {
            name: 'Genki Portable 3-Section Massage',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/349/34905_354633_N.jpg',
            price: 139.88,
            wasPrice: 189.95,
            save: 26,
            reviews: 68
        },
        {
            name: '10 Motor Vibration Massage Chair',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/157/157287_1032817_N.jpg',
            price: 69.95,
            wasPrice: 189.95,
            save: 63,
            reviews: 66
        },
        {
            name: 'Portable Black Massage',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/770/77053_629525_N.jpg',
            price: 149.88,
            wasPrice: 239.95,
            save: 38,
            reviews: 51
        },
        {
            name: 'Electromagnetic Wave Foot Massager',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/157/157555_1036385_N.jpg',
            price: 109.96,
            wasPrice: 249.95,
            save: 56,
            reviews: 48
        },
        {
            name: 'Full Body Neck Back Massager',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/1582/158269_1045793_N.jpg',
            price: 179.95,
            wasPrice: 249.95,
            save: 28,
            reviews: 47
        },
        {
            name: 'HOMASA Acupuncture Foot Massager',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/200/200439_1523735_N.jpg',
            price: 79.97,
            wasPrice: 219.95,
            save: 64,
            reviews: 0
        },
        {
            name: 'HOMASA Hand Massager with Air',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/200/200441_1523761_N.jpg',
            price: 79.95,
            wasPrice: 169.95,
            save: 53,
            reviews: 0
        }
    ];
    var newHotData = [
        {
            name: 'Bestway Inflatable Flocked Airbed Camping Mattress Air',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/205/201/201865_1541459_F.jpg',
            price: 129.95,
            wasPrice: 239.95,
            save: 46,
            reviews: 82
        },
        {
            name: 'Modern Storage Bed Frame Double Size Wooden Bed Base',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/205/201/201079_1531855_F.jpg',
            price: 439.95,
            wasPrice: 849.95,
            save: 48,
            reviews: 202
        },
        {
            name: 'vidaXL Hardcase Trolley Set 3 pcs Rose Gold ABS',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/205/2018/201841_1541147_F.jpg',
            price: 169.95,
            wasPrice: 269.95,
            save: 37,
            reviews: 231
        },
        {
            name: 'Luxdream U Shape Full Body Pregnancy Pillow Maternity',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/205/200/200951_1530885_F.jpg',
            price: 49.95,
            wasPrice: 199.95,
            save: 75,
            reviews: 67
        },
        {
            name: 'vidaXL TV Cabinet White and Sonoma Oak 120x30x35.5 cm',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/205/2018/201815_1541035_F.jpg',
            price: 89.95,
            wasPrice: 149.95,
            save: 40,
            reviews: 12
        },
        {
            name: 'Sideboard Buffet Cabinet Table 4 Doors 1 Drawer High Gloss',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/205/200/200667_1527883_F.jpg',
            price: 199.95,
            wasPrice: 549.95,
            save: 64,
            reviews: 62
        },
        {
            name: 'Rechargeable Cordless Tyre Inflator Car Tyre Pump with Digital LCD 11V',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/205/200/200581_1526513_F.jpg',
            price: 79.95,
            wasPrice: 139.95,
            save: 43,
            reviews: 34
        },
        {
            name: '160L Portable Cement Mixer w/ Waterproof Power Motor for',
            thumbnail: 'https://img.crazysales.com.au/products_pictures/205/200/200571_1526159_F.jpg',
            price: 259.97,
            wasPrice: 479.95,
            save: 46,
            reviews: 186
        },
    ];
    var galleryData = [
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523713_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523713_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523713_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523697_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523697_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523697_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/2004/200437_1526699_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/2004/200437_1526699_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/2004/200437_1526699_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523711_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523711_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523711_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523709_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523709_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523709_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523707_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523707_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523707_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523705_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523705_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523705_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523703_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523703_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523703_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523701_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523701_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523701_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/200/200437_1523699_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/200/200437_1523699_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/200/200437_1523699_HD.jpg',
        },
        {
            thumbnail: '//img.crazysales.com.au/products_pictures/2004/200437_1526701_T.jpg',
            dataOrigin: '//img.crazysales.com.au/products_pictures/2004/200437_1526701_F.jpg',
            dataOriginZoom: '//img.crazysales.com.au/products_pictures/2004/200437_1526701_HD.jpg',
        },
    ];
    var reviewData = [
        {
            name: "Rafael Marquez",
            date: '2019-12-24 11:28:32',
            star: 5,
            content: 'Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio hendrerit. Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.',
            yes: 5,
            no: 0,
        },
        {
            name: "Rafael Marquez",
            date: '2019-12-24 11:28:32',
            star: 5,
            content: 'Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio hendrerit. Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.',
            yes: 5,
            no: 0,
        },
        {
            name: "Rafael Marquez",
            date: '2019-12-24 11:28:32',
            star: 5,
            content: 'Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio hendrerit. Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.',
            yes: 5,
            no: 0,
        },
        {
            name: "Rafael Marquez",
            date: '2019-12-24 11:28:32',
            star: 5,
            content: 'Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio hendrerit. Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.',
            yes: 5,
            no: 0,
        },
    ];
    require(['vue', 'bootstrap'], function (Vue) {
        app = new Vue({
            el: '#details-page',
            data: {
                pickedData: [],
                // galleryData: galleryData,   // galleryData.slice(0, 10),
                newHotData: [],
                reviewData: [],
                status: {
                    isLoadingSuburb: false,
                    isLoadingPostage: false,
                },
                productID: 200437,
                placeID: 2000,
                quantity: 1,
                suburbID: 997,
                suburbData: [],
                postageData: {
                    courierName: "-",
                    express_postage: 0,
                    express_dTime: "-",
                    dTime: "-",
                    postage: 0,
                    error: ""
                },
                timeLeft: {
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                },
            },
            methods: {
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
                                        app.suburbID = null;
                                    }
                                } else {
                                    app.suburbData.splice(0);
                                    app.suburbID = null;
                                }
                            } else {
                                app.suburbData.splice(0);
                                app.suburbID = null;
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
                            productID: this.productID,
                            quantity: this.quantity,
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
                        this.ajaxProductPostage();
                    }
                },
                suburbID: function (val, originVal) {
                    if (parseInt(val) != parseInt(originVal)) {
                        this.ajaxProductPostage();
                    }
                },
            },
            mounted: function () {
                // this.ajaxSearchSuburb();
                // this.ajaxProductPostage();
            }
        });
    });

    require(['lozad', 'simplebar', 'owlcarousel', 'drift', 'fancybox', 'hcsticky', 'bootstrap', 'common'], function (lozad, SimpleBar, owlCarousel, drift, fancybox, hcs, bs, common) {
        !function (c) {
            var e = {
                init: function () {
                    e.lozadResources();
                    e.updateTime();
                    // e.navGoodsSticky();
                    e.showOriginImage();
                    e.imageZoom();
                    e.initGallerySlider();
                    e.initPickedSlider();
                    e.rightProductFloating();
                    e.showReviews();
                    e.showCharMain();
                    e.popoverInfo();
                },
                lozadResources: function () {
                    var observer = lozad();
                    observer.observe();
                },
                updateTime: function () {
                    var el = document.querySelector("#current_product_countdown");
                    if (null != el) {
                        var t = common.timeLeft({
                            'end': timeLeft,
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
                showOriginImage: function () {
                    if ($('.item-thumb').length) {
                        $('.item-thumb img').mouseenter(function () {
                            var originImage = $(this).data('origin');
                            var originZoomImage = $(this).data('origin-zoom');
                            $('.cz-image-zoom').attr({'src': originImage, 'data-zoom': originZoomImage});

                            $(this).parent().siblings().removeClass('active')
                            $(this).parent().addClass('active');
                        });
                    }
                },
                imageZoom: function () {
                    for (var e = document.querySelectorAll(".cz-image-zoom"), t = 0; t < e.length; t++) {
                        new Drift(e[t], {
                            paneContainer: e[t].parentElement.querySelector(".cz-image-zoom-pane")
                        });
                    }
                },
                initGallerySlider: function () {
                    var t = document.querySelector(".thumbs-wrap");
                    if (null != t) {
                        new SimpleBar(document.querySelector('.thumbs-wrap'), {autoHide: false});
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
                                1199: {items: 6}
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
                        var o = $('#picked_product').offset().top;
                        var w = $(window).height();
                        window.addEventListener("scroll", function (ev) {
                            var s = document.querySelector("#picked_slider").getAttribute('data-render');
                            if (ev.currentTarget.pageYOffset + w + 200 > o && s == 'false') {
                                app.pickedData = pickedData;
                                document.querySelector("#picked_slider").setAttribute('data-render', 'true');
                                app.$nextTick(function () {
                                    if (app.pickedData.length > 0) {
                                        render_slider();
                                        e.lozadResources();
                                    }
                                });
                            } else {
                            }
                        });
                    }
                },
                rightProductFloating: function () {
                    if ($('[data-sticky-products]').length && $('[data-sticky-products-container]').length) {
                        var sticky = new hcSticky('[data-sticky-products]', {
                            stickTo: '[data-sticky-products-container]',
                            top: 5,
                            bottom: 5,
                        });
                    }

                    var t = document.querySelector("#new-hot-product");
                    if (null != t) {
                        var o = $('#new-hot-product').offset().top;
                        var w = $(window).height();
                        window.addEventListener("scroll", function (ev) {
                            var s = document.querySelector("#new-hot-product-list").getAttribute('data-render');
                            if (ev.currentTarget.pageYOffset + w + 200 > o && s == 'false') {
                                app.newHotData = newHotData;
                                document.querySelector("#new-hot-product-list").setAttribute('data-render', 'true');
                                app.$nextTick(function () {
                                    if (app.newHotData.length > 0) {
                                        e.lozadResources();
                                    }
                                });
                            } else {
                            }
                        });
                    }
                },
                showReviews: function () {
                    var t = document.querySelector("#product_reviews");
                    if (null != t) {
                        var o = $('#product_reviews').offset().top;
                        var w = $(window).height();
                        window.addEventListener("scroll", function (ev) {
                            var s = document.querySelector("#reviewData").getAttribute('data-render');
                            if (ev.currentTarget.pageYOffset + w + 200 > o && s == 'false') {
                                app.reviewData = newHotData;
                                document.querySelector("#reviewData").setAttribute('data-render', 'true');
                                app.$nextTick(function () {
                                    if (app.reviewData.length > 0) {
                                        e.lozadResources();
                                    }
                                });
                            } else {
                            }
                        });
                    }
                },
                showCharMain: function () {
                    $('[data-fancybox="iframe"]').fancybox({
                        toolbar: false,
                        smallBtn: true,
                        arrows: false,
                        infobar: false,
                        buttons: ["close"],
                        iframe: {
                            preload: false
                        }
                    });
                },
                popoverInfo: function () {
                    $(function () {
                        $(".copy_review_nav_filter").append($(".review_nav_filter").clone());
                        $('[data-toggle="tooltip"]').tooltip();

                        $('[data-toggle="popover"]').popover({
                            html: true,
                            trigger: 'hover',
                            content: function () {
                                return "<p class='border-bottom py-1 my-1'>Postage: $" + (app.postageData.express_postage || '-') + "</p><p class='border-bottom py-1 my-1'>Quantity: " + app.postageData.quantity + "</p><p class='border-bottom py-1 my-1'>PostCode: " + app.postageData.placeID + "</p><p class='py-1 my-1'>ETA: " + app.postageData.express_dTime + "</p>";
                            }
                        });
                        $(document).on('click', '.close-popover', function () {
                            $('[data-toggle="popover"]').popover('hide');
                        });
                    });
                },
            };
            e.init();
        }(jQuery);

        // setTimeout(function () {
        //     requirejs(['sharethis']);
        // }, 300);

    });
});