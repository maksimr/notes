/*
 * @desc The index file.
 */

(function(global) {
    'use strict';

    /**
     * Configuration requirejs.
     * Add CDN jQuery.
     */
    global.requirejs.config({
        paths: {
            jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min'
        }
    });

    require(['jquery', 'text!/notes/pages/index.html'], function($, template) {
        var $mainnav = $('#js-mainnav'),
            $navlinks = $mainnav.find('li');

        /**
         * Bind actions to
         * main navigation menu.
         */
        $('#js-mainnav').delegate('li', 'click', function() {
            $navlinks.removeClass('active');
            $(this).addClass('active');
        });

        /**
         * set index content.
         */
        $('#js-content').html(template);

        /**
         * load unobtrusive scripting
         * adapter and bootstrap plugins.
         */
        require(['rails', 'bootstrap/collapse', 'bootstrap/scrollspy', 'order!bootstrap/tooltip', 'order!bootstrap/popover']);
    });

}(this));
