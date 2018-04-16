import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

$(document).foundation();

// hamburger
function openMobileMenu() {
    $('body').toggleClass('no-scroll');
    $('.hamburger-menu').toggleClass('animate');
    $('.nav-mobile-menu').toggleClass('--active');
    $('.nav-mobile-menu-item').toggleClass('--active');
    $('.nav-ham').toggleClass('--active');
}

(function () {
    $('.nav-ham').on('click', function() {
        openMobileMenu();
    })
})();

(function () {
    $('.nav-mobile-menu').on('click', function(e) {
        if ( !$(e.target).is('.nav-mobile-menu-item') ) {
            openMobileMenu();
        }
    })
})();
