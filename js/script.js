document.addEventListener('DOMContentLoaded', () => {
  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

  const key = prompt('Один из последних просмотренных фильмов?', '');
  personalMovieDB.movies[key] = +prompt('На сколько оцените его?', '');;
  const key2 = prompt('Один из последних просмотренных фильмов?', '');
  personalMovieDB.movies[key2] = +prompt('На сколько оцените его?', '');;
  console.log(personalMovieDB);
});
