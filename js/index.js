"use strict";
// const result = confirm('Are you here?');

// console.log(result);

// const vopros = prompt("How old are you ?", "");

// console.log(vopros);


const numberOffilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Кращий фільм цього року?', ''),
      b = prompt('На скільки його оціните?', ''),
      c = prompt('Кращий фільм цього року?', ''),
      d = prompt('На скільки його оціните?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);