/**
 * @desc index page.
 */

(function($) {
    require(['text!../../../pages/index.html'], function(template) {
        $('#js-content').html(template);
    });
}(this.jQuery));
