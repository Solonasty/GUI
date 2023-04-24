/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';
/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';

import tabs from './modules/tabs';
import spoiler from './modules/spoiler';
import details from './modules/details';
import swiper from './modules/swiper';

import select from './modules/select';
import validate from './modules/validate';
import modal from './modules/modal';

const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();

        // myModule();
        tabs();
        spoiler();
        details();
        swiper();
        select();
        validate();
        modal();
    },

    load() {

    },
    resize() {

    },
    scroll() {
    },
};

$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
