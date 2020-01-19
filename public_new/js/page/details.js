require(['../config'], function () {
    require(['owlcarousel', 'sticky', 'sharethis'], function (owlCarousel, sticky) {
        !function (c) {
            var e = {
                init: function () {
                    e.initViewedSlider();
                    e.rightProductFloating();
                },
                initViewedSlider: function () {
                    if ($('.viewed_slider').length) {
                        var viewedSlider = $('.viewed_slider');
                        viewedSlider.owlCarousel({
                            loop: true,
                            margin: 10,
                            autoplay: true,
                            autoplayTimeout: 5000,
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
                        $('[data-sticky-detail]').sticky({
                            context: '[data-sticky-detail-main]',
                            pushing: true
                        });
                    }
                },
            };
            e.init();
        }(jQuery);
    });
});