
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
//require('./../../../bower_components/gentelella/src/js/custom.js');
//require('./../../../bower_components/gentelella/src/js/custom.js');
//require('./../../../bower_components/gentelella/src/js/helpers/smartresize.js');
//require('./../../../bower_components/gentelella/vendors/fastclick/lib/fastclick.js');
//require('./../../../bower_components/gentelella/vendors/nprogress/nprogress.js');
//require('./../../../bower_components/gentelella/vendors/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js');
//require('./../../../bower_components/gentelella/vendors/jquery.hotkeys/jquery.hotkeys.js');
//require('./../../../bower_components/gentelella/vendors/google-code-prettify/src/prettify.js');

require ('./modules/main/fonts_loader.js');

//window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', require('./components/Example.vue'));

//const app = new Vue({
//    el: '#app',
//    components: example
//});


//
//
// Menu component
//
//

//Display menu function
function menu_display() {
    var display_menu = true;
    console.log('menu display init');
    $('.open_btn, .close_btn').click(function() {
        console.log('click');
        if (display_menu === false) {
            $("header").animate({
                left: "-=320",
            }, 500);
            $(".shadow").css("display", "none");
            $(".open_btn").show(500);
            $(".close_btn").css("display", "none");
            display_menu = true;
        } else {
            $("header").animate({
                left: "+=320",
            }, 500);
            $(".shadow").css("display", "block");
            $(".close_btn").show(500);
            $(".open_btn").css("display", "none");
            display_menu = false;
        }
    });

    $('.shadow').click(function() {
        console.log('click');
        if (display_menu === false) {
            $("header").animate({
                left: "-=320",
            }, 500);
            $(".shadow").css("display", "none");
            $(".open_btn").show(500);
            $(".close_btn").css("display", "none")
            display_menu = true;
    }});
}

$(document).ready(function() {
    menu_display();
});


