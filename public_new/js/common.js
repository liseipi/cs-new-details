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
    };
});