const WHATSAPP_PHONE = '5598981118527';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-whatsapp-message]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const message = encodeURIComponent(link.dataset.whatsappMessage || 'Olá!');
            const url = 'https://wa.me/' + WHATSAPP_PHONE + '?text=' + message;

            window.open(url, '_blank', 'noopener');
        });
    });
});
