/*Задание 49
Допишите функцию truncate(), которая обрезает переданную строку до указанного количества символов, добавляет в конце многоточие и возвращает получившуюся строку. Подобная логика часто используется на сайтах, чтобы отобразить длинный текст в сокращенном виде.
Функция принимает два параметра:
Строка, которую нужно обрезать
Число символов, которые нужно оставить
Пример того, как должна работать написанная вами функция:
Передаём текст напрямую
Обрезаем текст, оставляя 2 символа
truncate('hexlet', 2); // 'he...'

 Решение*/

// const truncate = (text, length) => {
//   return`${text.slice(0,length)}...`;
// };
// let example = 'Hello, everybody!';
// console.log(truncate(example,5)); // проверка функции - результат - Hello...

// const getHiddenCard = (cardNumber, starsCount = 4) => {
//   const visibleDigitsLine = cardNumber.slice(12);
//   return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
// };
// const number12 = 12012345;
// console.log(getHiddenCard(number12, 5));

/*Задание 50

Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки (состоящий из 16 цифр) в виде строки 
и возвращает его скрытую версию, которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

Кредитка передается внутрь как строка
getHiddenCard('1234567812345678', 2); // "**5678"
getHiddenCard('2034399002121100', 1); // "*1100"
Для выполнения задания вам понадобится метод строки repeat(), который повторяет строку указанное количество раз
'+'.repeat(5); // "+++++"
'o'.repeat(3); // "ooo"

Решение*/

/* const getHiddenCard = (numberCard, asteriksCount = 4) => {
  return`${'*'.repeat(asteriksCount)}${numberCard.slice(-4)}`;
};
getHiddenCard('1234567812345678', 2);
console.log(getHiddenCard('1234567812345678'));
 */

/* Задание 51

Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:
const name = 'arya';
console.log(capitalize(name)); // => "Arya"
Чтобы получить подстроку (или символ) из строки, используйте метод slice():
'welcome'.slice(2, 5); // "lco"
Для приведения строки к верхнему регистру используйте метод toUpperCase()
'welcome'.toUpperCase(); // "WELCOME" 

Решение*/
// Решение учителя
//const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;
/* const capitalize = (text) => `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
let nameFirst = 'dayeneris';
console.log(capitalize(nameFirst));//Dayeneris */

/* Задание 52

Напишите функцию isPensioner(), которая принимает один параметр — возраст человека, и проверяет, является ли он пенсионным. Пенсионером считается человек, достигший возраста 60 лет и больше.
Примеры вызова:
isPensioner(75); // true
isPensioner(18); // false

Решение*/
/* const isPensioner = (age) => age >= 60; 
console.log(isPensioner(44));// false */

/* Задание 53

Задание
Напишите функцию isMister(), которая принимает строку и проверяет, является ли она словом 'Mister'.
Примеры вызова:
isMister('Mister'); // true
isMister('Miss');   // false

Решение*/
// const isMister = (text) => (text === 'Mister');
// console.log(isMister('Lady')); // false

/* Задание 54

Реализуйте функцию, которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.
isInternationalPhone('89602223423'); // false
isInternationalPhone('+79602223423'); // true

Решение*/
// const isInternationalPhone = (phone) => (phone[0] === '+');
// console.log(isInternationalPhone('79602223423')); // false

/* Задание 55

Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет. Год будет високосным, если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100. Как видите, в определении уже заложена вся необходимая логика, осталось только переложить её на код:
isLeapYear(2018); // false
isLeapYear(2017); // false
isLeapYear(2016); // true

Решение*/

// const isLeapYear = (year) => (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
// console.log(isLeapYear(2018)); // false
// console.log(isLeapYear(2017)); // false
// console.log(isLeapYear(2016)); // true

/* Задание 56 ВСЕ ЗАКОММЕНТИРОВАНО!!!!

В этом уроке вам нужно будет реализовать две функции isPalindrome() и isNotPalindrome()
Функция isPalindrome() определяет, является ли слово палиндромом или нет. Палиндром это слово, которое читается одинаково в обоих направлениях.
isPalindrome('шалаш'); // true
isPalindrome('ага'); // true
isPalindrome('хекслет'); // false

// Слова в функцию могут быть переданы в любом регистре
// Поэтому сначала нужно привести слово в нижний регистр word.toLowerCase()
isPalindrome('Ага'); // true
Для определения палиндрома необходимо перевернуть строку и сравнить ее с исходной. Для этого воспользуйтесь функцией reverse()

reverse('мама'); // 'амам'
Функция isNotPalindrome() проверяет что слово НЕ является палиндромом:
isNotPalindrome('шалаш'); // false
isNotPalindrome('ага'); // false
isNotPalindrome('хекслет'); // true
Для этого, вызовите функцию isPalindrome() внутри isNotPalindrome() и примените отрицание.

Решение*/ //написана функция создателями курса В РЕДАКТОРЕ КОДА  И БРАУЗЕРЕ НЕ БУДЕТ РАБОТАТЬ!!!!!!

/* Решение учителя:
// Функция reverse() написана нами специально для наших упражнений
// В ней используются механики, которые еще не изучались
const reverse = (s) => s.split('').reverse().join('');

// BEGIN
const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverse(lowerWord);
};

const isNotPalindrome = (word) => !isPalindrome(word);
// END

export default isNotPalindrome;
Ваше решение:
// Функция reverse() написана нами специально для наших упражнений
// В ней используются механики, которые еще не изучались
const reverse = (s) => s.split('').reverse().join('');

// BEGIN (write your solution here)
const isPalindrome = (string) => {
  const stringLower = string.toLowerCase();
  return stringLower === reverse(stringLower);
};

const isNotPalindrome = (word) => (!isPalindrome(word)); 
//const isNotPalindrome = (word) => (!isPalindrome);
// END

export default isNotPalindrome; */

/* Задание 57

Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому номеру, а не по его индексу) и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.
Примеры вызова:
const name = 'Hexlet';
// Обычное обращение возвращает undefined
name[10]; // undefined
// 11 символ соответствует 10 индексу
getLetter(name, 11); // ''
getLetter(name, 1); // 'H'

Решение*/

// const getLetter = (text, number) => (text[number - 1] || '');
// console.log(getLetter('maintainability',15)); //y

/* Задание 58

Реализуйте функцию guessNumber(), которая принимает число и проверяет, равно ли число заданному (пусть это будет 42). Если равно, то функция должна вернуть строку 'You win!', в противном случае нужно вернуть строку 'Try again!'.

guessNumber(42) // 'You win!'
guessNumber(61) // 'Try again!'

Решение*/

// const guessNumber = (number) => {
//   if(number === 42){
//     return 'You win!';
//   }
//   return 'Try again!';
// };
// console.log(guessNumber(37));//Try again!

/* Задание 59

Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает его с https:// в начале.
Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС
Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса https://. А потом на основе этого добавлять или не добавлять https://.
Примеры вызова:
normalizeUrl("google.com"); // "https://google.com"
normalizeUrl("https://ai.fi"); // "https://ai.fi"

Решение*/

const normalizeUrl = (site) => {
  let normalizedUrl;

  if (site.startsWith('https://')) {
    normalizedUrl = site;
  } else {
    normalizedUrl = `https://${site}`;
  }

  return normalizedUrl;
};
console.log(normalizeUrl('code-basics.com/ru'));//https://code-basics.com/ru