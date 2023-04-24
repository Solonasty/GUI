import validate from 'jquery-validation';

const ELEMENTS_SELECTOR = {
    validation: '[data-validation]',
};

$.extend($.validator.messages, {
    required: "Обязательное поле",
    email: "E-mail указан неверно",
});

$.validator.setDefaults({
    errorClass: 'input__control--error',
    errorElement: 'span',
    validClass: 'input__control--valid',

    errorPlacement: function (error, element) {
        error.addClass('input__control-error')

        error.appendTo(element.closest('.form__field'));
    },
})

$.validator.addClassRules("js-required", {
    required: true,
});

$.validator.addClassRules("js-email", {
    email: true,
});

export default function () {
    $(ELEMENTS_SELECTOR.validation).validate();
}
