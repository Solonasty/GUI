import fancybox from "@fancyapps/fancybox";

export default function () {
    $.fancybox.defaults.btnTpl = {
        smallBtn:
        '<div data-fancybox-close class="fancybox-close"><svg class="fancybox-close-icon icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L8.99999 8.99999M8.99999 8.99999L16 16M8.99999 8.99999L16 2M8.99999 8.99999L2 16" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
    };

    $.fancybox.defaults.hash = false;
    $.fancybox.defaults.infobar = false;
    $.fancybox.defaults.toolbar = false;
    $.fancybox.defaults.smallBtn = true;
    $.fancybox.defaults.closeExisting = true;
    $.fancybox.defaults.touch = false;
    $.fancybox.defaults.hideScrollbar = true;
    $.fancybox.defaults.fullScreen = false;
    $.fancybox.defaults.backFocus = false;
    $.fancybox.defaults.keyboard = false;
    $.fancybox.defaults.arrows = false;
    $.fancybox.defaults.loop = false;

    $('[data-modal-type="modal"]').fancybox({
        baseClass: 'modal',
    })

    // $('[data-modal-type="outer"]').fancybox({
    //     baseClass: 'modal modal--outer',
    //     loop: true,
    // })
}