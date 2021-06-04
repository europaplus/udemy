function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');
    document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimerId) {
    const   modalTrigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);

    modalTrigger.forEach( (item) => {
        item.addEventListener('click', () => openModal(modalSelector, modalTimerId));

        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target === modal || e.target.getAttribute('data-close') === '') {
                closeModal(modalSelector);
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal(modalSelector);
            }
        });
    });

    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
}

export default modal;
export {closeModal};
export {openModal};