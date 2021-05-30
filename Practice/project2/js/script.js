document.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const   tabsParent = document.querySelector('.tabheader__items'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabs = document.querySelectorAll('.tabheader__item');
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        console.log(target);
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, index) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });

    function hideTabContent() {
        tabsContent.forEach((item, index) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach((item, index) => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(index = 0) {
        tabs[index].classList.add('tabheader__item_active');
        tabsContent[index].classList.add('show', 'fade');
        tabsContent[index].classList.remove('hide');
    }

    //Timer
    const deadline = `2021-05-30`;
    setClock('.timer', deadline);
    function getTimeRemaining(endTime) {
        const   t = Date.parse(endTime) - new Date(),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return (`0${num}`);
        }
        else {
            return (num);
        }
    }
    function setClock(selector, endTime) {
        const   timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);//t.days < 10 ? `0${t.days}` : `${t.days}`;
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    //Modal
    const   modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');
            // modalTimerId = setTimeout(openModal, 2000);

    modalTrigger.forEach( (item) => {
        item.addEventListener('click', openModal);

        modalCloseBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            const target = e.target;
            if (target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });
    });

    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    function openModal() {
        // clearInterval(modalTimerId);
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    // Use classes for cards
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.classes = classes;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price *= this.transfer;
        }

        render() {
            const   element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard('img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт' +
        'активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229/27, '.menu .container').render();
    new MenuCard('img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.' +
        'Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        550/27, '.menu .container', 'menu__item').render();
    new MenuCard('img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного' +
        'происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и' +
        'импортных вегетарианских стейков. ',
        430/27, '.menu .container', 'menu__item').render();
});
