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

const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();

        // myModule();
        tabs();
        spoiler();
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
