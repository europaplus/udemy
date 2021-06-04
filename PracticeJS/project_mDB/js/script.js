'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const   promoAdv = document.querySelectorAll('.promo__adv img'),
            promoBg = document.querySelector('.promo__bg'),
            promoGenre = document.querySelector('.promo__genre'),
            promoList = document.querySelector('.promo__interactive-list');
    const   addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]');
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log('Добавляем ваш любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, promoList);
        }
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    const makeChanges = () => {
        promoGenre.textContent = 'драма';
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    }
    const sortArr = (arr) => {
      arr.sort();
    };

    deleteAdv(promoAdv);
    makeChanges();
    createMovieList(movieDB.movies, promoList);

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((item, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, index) => {
           btn.addEventListener('click', () => {
              btn.parentElement.remove();
              movieDB.movies.splice(index, 1);
              createMovieList(films, parent);
           });
        });
    }
});

