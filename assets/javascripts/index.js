/*
 * @desc The index file.
 */

(function(global) {
    'use strict';

    require(['text!../../pages/index.html', 'jquery'], function(template) {
        var $ = global.jQuery,
            $mainnav = $('#js-mainnav'),
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
        require(['rails', 'bootstrap/collapse', 'bootstrap/scrollspy']);

        // order plugin does not work
        // whith anonymous define modules
        require(['bootstrap/tooltip'], function() {
            require(['bootstrap/popover']);
        });
    });

}(this));
