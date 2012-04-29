/**
 * @desc index page.
 */

(function($) {
    require(['text!/notes/pages/index.html'], function(template) {
        $('#js-content').html(template);
    });
}(this.jQuery));
