/**
 * @desc index page.
 */

(function($) {
    require(['text!pages/../../../pages/index.html'], function(template) {
        $('#js-content').html(template);
    });
}(this.jQuery));
