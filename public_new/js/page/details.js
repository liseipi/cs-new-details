require(['../config'], function () {
    require(['vue', 'owlcarousel', 'lozad', 'hcsticky', 'sharethis'], function (Vue, owlCarousel, lozad) {

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
        var newHotData=[
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
        var app = new Vue({
            el: '#details-page',
            data: {
                pickedData: pickedData,
                newHotData: newHotData
            }
        });

        !function (c) {
            var e = {
                init: function () {
                    e.initViewedSlider();
                    e.rightProductFloating();
                    e.lozadResources();
                },
                initViewedSlider: function () {
                    if ($('.viewed_slider').length) {
                        var viewedSlider = $('.viewed_slider');
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
                        if ($('.viewed_prev').length) {
                            var prev = $('.viewed_prev');
                            prev.on('click', function () {
                                viewedSlider.trigger('prev.owl.carousel');
                            });
                        }
                        if ($('.viewed_next').length) {
                            var next = $('.viewed_next');
                            next.on('click', function () {
                                viewedSlider.trigger('next.owl.carousel');
                            });
                        }
                    }
                },
                rightProductFloating: function () {
                    if ($('[data-sticky-detail]').length) {
                        var Sticky = new hcSticky('[data-sticky-detail]', {
                            stickTo: '[data-sticky-detail-main]'
                        });
                    }
                },
                lozadResources: function () {
                    const observer = lozad();
                    observer.observe();
                }
            };
            e.init();
        }(jQuery);

    });
});