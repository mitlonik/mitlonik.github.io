$(function () {
    'use strict';

    $(document).on('click', ".b-menu-button", function () {
        var $this = $(this);
        var ul = $(this).parents('.wrap-mobile-menu').children('.wrap-menu-list');

        if (ul.hasClass("unhidden")) {
            ul.removeClass("unhidden");
        } else {
            ul.addClass("unhidden");
        }
    });
});