/*
 * Course table
 * - Fetch course table plugin
 *
 * [Cross domain solution]
 * @see http://james.padolsey.com/javascript/cross-domain-requests-with-jquery/
 *
 * @author Len <a78965 [at] gmail.com>
 * @require NTUT
 * @license MIT
 */

(function($){

    $.fn.course = function(param){
        $.ajaxSetup({
            //dataType: 'jsonp',
            crossOrigin: true,
        });

        var settings = $.extend(
        {
            url     : 'http://aps.ntut.edu.tw/course/tw/Select.jsp',
            id      : '103590006',    // student id
            format  : -4,             // whatever
            year    : 103,            // year you want to fetch
            sem     : 2,              // semester

        }, param);

        var info = {
            code    : settings.id,
            format  : settings.format,
            year    : settings.year,
            sem     : settings.sem,
        };

        var obj = $(this);
        $.get(settings.url+'?'+$.param(info), function(data){
            console.log(data);
            $(obj).html(data.responseText);
        })
    }

})(jQuery);
