const ELEMENTS_SELECTOR = {
    details: '[data-details]',
    button: '[data-details-toggle]',
    content: '[data-details-content]',
    text: '[data-details-text]',
};

export default function () {

    $(document).on('click', ELEMENTS_SELECTOR.button, function () {
        const $parent = $(this).closest(ELEMENTS_SELECTOR.details);
        const $content = $parent.find(ELEMENTS_SELECTOR.content);
        const $text = $parent.find(ELEMENTS_SELECTOR.text);

        $parent.toggleClass('details__item--opened');
        $content.slideToggle();

        if($parent.hasClass('details__item--opened')) {
            $text[0].innerText = 'Скрыть';
        }
        else {
            $text[0].innerText = 'Показать еще';
        }
    });
}
