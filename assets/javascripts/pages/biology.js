/**
 * @desc biology page.
 */

(function($) {
    require(['text!/notes/pages/biology.html'], function(template) {
        $('#js-content').html(template);
    });
}(this.jQuery));
