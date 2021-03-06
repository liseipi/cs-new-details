define(['jquery'], function ($) {
    return {
        "timeLeft": function (config) {
            var startDate = config.start ? new Date(config.start) : new Date();
            var endDate = config.end ? new Date(config.end) : new Date();
            var time = (endDate - startDate) / 1000;

            if (time < 0) {
                return {};
            }

            var day = parseInt(time / 86400, 10);
            var hour = parseInt(time % 86400 / 60 / 60, 10);
            var minute = parseInt(time % 86400 % 3600 / 60, 10);
            var second = parseInt(time % 86400 % 3600 % 60, 10);

            var mayday = day > 0 ? day : 0;
            var mayhour = hour < 10 ? '0' + hour : hour;
            var mayminute = minute < 10 ? '0' + minute : minute;
            var maysecond = second < 10 ? '0' + second : second;

            return {
                day: mayday,
                hour: mayhour,
                minute: mayminute,
                second: maysecond,
            };
        },
        "getVerifyImg": function (config) {
            $.ajax({
                type: 'POST',
                data: {},
                url: config.url ? config.url : '/contactus/refreshcode',
                // dataType: 'jsonp',
                success: function (res) {
                    config.callback(res);
                },
                error: function (res) {
                    alert("error!");
                }
            });
        },
        "goodsTagStatus": function (config) {
            var str = '';
            if (config.isFreeShipping || (config.promotionType == 3)) {
                var str = '<p class="tag tag-free"><span class="text-capitalize">Free Shipping</span></p>';
            } else if (config.promotionType != 99 && config.promotionType > 0) {
                var str = '<p class="tag tag-on-sale"><span class="text-capitalize">On Sale</span></p>';
            } else if (config.promotionType == 99) {
                var str = '<p class="tag tag-reduced"><span class="text-capitalize">Reduced</span></p>';
            } else if (config.isNew) {
                var str = '<p class="tag tag-new"><span class="text-capitalize">New</span></p>';
            } else {
                var str = '';
            }
            return str;
        },
        "goodsBadgeStatus": function (config) {
            var str = '';
            if (config.isFreeShipping || (config.promotionType == 3)) {
                var str = '<span class="badge badge-info font-weight-normal">Free Shipping</span>';
            } else if (config.promotionType != 99 && config.promotionType > 0) {
                var str = '<span class="badge badge-success font-weight-normal">On Sale</span>';
            } else if (config.promotionType == 99) {
                var str = '<span class="badge badge-warning font-weight-normal">Reduced</span>';
            } else if (config.isNew) {
                var str = '<span class="badge badge-secondary font-weight-normal">New</span>';
            } else {
                var str = '';
            }
            return str;
        },
        "getDeviceFlag": function () {
            var bodyElementStyle = getComputedStyle(document.body, '::before');
            window.deviceFlag = bodyElementStyle.content.replace(/"/g, "");
            return window.deviceFlag;
        },
        "reviewPercentColor": ['#28a745', '#a7e453', '#ffda75', '#fea569', '#dc3545'],
    };
});