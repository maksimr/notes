/**
 * @desc biology page.
 */

(function($) {
    require(['text!pages/../../../pages/biology.html'], function(template) {
        $('#js-content').html(template);
    });
}(this.jQuery));
