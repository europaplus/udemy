document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDb: () => {
      this.privat === true ? this.privat = false : this.privat = true;
    },
    start:   function () {
      do {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      } while (this.count === '' || this.count == null || isNaN(this.count))
    },
    rememberMyFilms: function () {
      for (let i = 0; i < 2; ++i) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a !== '' && a !== 'null' && a.length <= 50 &&
            b !== '' && b !== 'null') {
          personalMovieDB[a] = b;
        } else {
          --i;
        }
      }
    },
    detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
        alert('Вы киноман')
      } else {
        alert('Произошла ошибка');
      }
    },
    showMyDb: function (hidden) {
      if (hidden) {
        personalMovieDB.toggleVisibleMyDb();
      }
    },
    writeYourGenres: function () {
      // for (let i = MoviesDB; i <= 3; ++i) {
      //   let tmp = prompt(`Ваш любимый жанр под номером ${i}?`, '');
      //   if (tmp !== null && tmp !== '') {
      //     personalMovieDB.genres.push(tmp);
      //   } else {
      //     alert('Нажал кнопку отмена..');
      //     --i;
      //   }
      // }
      for (let i = 1; i < 2; ++i) {
        let genres = prompt(`Введите ваши люибмые жанры через запятую`, '');
        if (genres !== null && genres !== '') {
          personalMovieDB.genres = genres.split(', ');
        } else {
          alert('Нажал кнопку отмена..');
          --i;
        }
      }
      personalMovieDB.genres.forEach((item, index, array) => {
        console.log(`Любимый жанр #${index + 1} - это ${item}`);
      });
    },
  };
  console.log(personalMovieDB.writeYourGenres());
});
