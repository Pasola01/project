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

// Условия!!!

if (4==9) {
    console.log('Ok');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mnoho');
} else {
    console.log('Ok');
}

(num == 50) ? console.log('Ok') : console.log('Error');

const sum = 100;

switch (sum) {
    case 10:
        console.log('Bad!');
        break;
    case 70:
        console.log('Ico');
        break;
    case 1000:
        console.log('Ok');
        break;
    default:
        console.log('Choto');
}