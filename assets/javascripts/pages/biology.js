/**
 * @desc biology page.
 */

(function($) {
    require(['text!../../../pages/biology.html'], function(template) {
        $('#js-content').html(template);
    });
}(this.jQuery));
