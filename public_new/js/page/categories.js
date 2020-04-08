require(['config'], function () {
    require(['lozad', 'simplebar', 'nouislider'], function (lozad, SimpleBar, noUiSlider) {
        !function (c) {
            var e = {
                init: function () {
                    e.rangeSlider();
                },
                rangeSlider: function () {
                    for (var a = document.querySelectorAll(".cs-range-slider"), e = function (e) {
                        var t = a[e].querySelector(".cs-range-slider-ui")
                            , o = a[e].querySelector(".cs-range-slider-value-min")
                            , n = a[e].querySelector(".cs-range-slider-value-max")
                            , r = {
                            dataStartMin: parseInt(a[e].dataset.startMin, 10),
                            dataStartMax: parseInt(a[e].dataset.startMax, 10),
                            dataMin: parseInt(a[e].dataset.min, 10),
                            dataMax: parseInt(a[e].dataset.max, 10),
                            dataStep: parseInt(a[e].dataset.step, 10)
                        };
                        noUiSlider.create(t, {
                            start: [r.dataStartMin, r.dataStartMax],
                            connect: !0,
                            step: r.dataStep,
                            pips: {
                                mode: "count",
                                values: 5
                            },
                            tooltips: !0,
                            range: {
                                min: r.dataMin,
                                max: r.dataMax
                            },
                            format: {
                                to: function (e) {
                                    return "$" + parseInt(e, 10)
                                },
                                from: function (e) {
                                    return Number(e)
                                }
                            }
                        }),
                            t.noUiSlider.on("update", function (e, t) {
                                var r = e[t];
                                r = r.replace(/\D/g, ""),
                                    t ? n.value = Math.round(r) : o.value = Math.round(r)
                            }),
                            o.addEventListener("change", function () {
                                t.noUiSlider.set([this.value, null])
                            }),
                            n.addEventListener("change", function () {
                                t.noUiSlider.set([null, this.value])
                            })
                    }, t = 0; t < a.length; t++)
                        e(t)
                },
            };
            e.init();
        }(jQuery);
    });
});