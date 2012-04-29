/**
 * @desc biology page.
 */

(function($) {
    require(['text!/notes/pages/biology.html'], function(template) {
        $('#js-content').append(template);
    });
}(this.jQuery));
