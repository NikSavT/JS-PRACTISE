/* Задание 60

Задание
На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.
Напишите для Сэма функцию whoIsThisHouseToStarks(), которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.
Правила определения:
Друзья ('friend'): 'Karstark', 'Tally'
Враги ('enemy'): 'Lannister', 'Frey'
Любые другие семьи считаются нейтральными
Примеры вызова:
whoIsThisHouseToStarks('Karstark'); // 'friend'
whoIsThisHouseToStarks('Frey');     // 'enemy'
whoIsThisHouseToStarks('Joar');     // 'neutral'

Решение*/
/* Решение учителя: через создание переменной.
// BEGIN
const whoIsThisHouseToStarks = (houseName) => {
  let status;

  if (houseName === 'Karstark' || houseName === 'Tally') {
    status = 'friend';
  } else if (houseName === 'Lannister' || houseName === 'Frey') {
    status = 'enemy';
  } else {
    status = 'neutral';
  }

  return status;
};
// END */

/* const whoIsThisHouseToStarks = (family) => {
  if (family === 'Karstark' || family === 'Tally') {
    return 'friend';
  }
  else if (family === 'Lannister' || family === 'Frey'){
    return 'enemy';
  }
  else{
    return 'neutral';
  }
};
console.log(whoIsThisHouseToStarks('NickSova'));//neutral */

/* Задание 61

Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

Примеры вызова:

convertText('Hello'); // 'Hello'
convertText('hello'); // 'olleh'

// Не забудьте учесть пустую строку
convertText(''); // ''
Перевернуть строчку можно используя функцию 
const reverse = (str) => str.split('').reverse().join('');
 В качестве аргумента в неё нужно передать строку, которую мы хотим перевернуть:

const result = reverse('Hello!');
console.log(result); // => '!olleH'
Есть разные подходы к решению этой задачи. Возможно, вам пригодится метод toUpperCase() и возможность получения символа из строки (например, str[0]).

Попробуйте написать два варианта функции: с обычным if-else, и с тернарным оператором.


Решение*/
/* Решение учителя:
const reverse = (str) => str.split('').reverse().join('');
const convertText = (text) => {
  if (text === '') {
    return '';
  }

  const reversable = text[0] !== text[0].toUpperCase();
  return reversable ? reverse(text) : text;
}; */


//const reverse = (str) => str.split('').reverse().join('');// функция дана из условия
/* const convertText = (text) => {
  if (text === '') {
  return '';
}
  if (text[0] === text[0].toUpperCase()) {
  return text;
}
  return reverse(text);
}; */
// Решение через тернальный оператор (применяется дважды, что не рекомендуется)
// const convertText = (text) => (text === '' ? '' : (text[0] === text[0].toUpperCase() ? text : reverse(text)));

// Решение через один тернальный оператор:
/* const convertText = (text) => {
  if (text === '') {
  return '';
  }
  const stringStart = text[0] === text[0].toUpperCase;
  return stringStart ? text : reverse(text);
};

console.log(convertText('mike Vasovski'));//iksvosaV ekim */

/* Задание 62
Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа.
Если для числа нет объяснения, то возвращается null:

getNumberExplanation(8);   // null

// Объяснения есть только для указанных ниже чисел
getNumberExplanation(666); // 'devil number'
getNumberExplanation(42);  // 'answer for everything'
getNumberExplanation(7);   // 'prime number'

Решение: без return, через классическую конструкцию с созданием переменной и break */ 

/* const getNumberExplanation = (number) => {
  let numberValue;
  switch (number) {
    case 666:
      numberValue = 'devil number';
      break;

    case 42:
      numberValue = 'answer for everything';
      break;

    case 7:
      numberValue = 'prime number';
      break;
    
    default:
      numberValue = null;
  }
  return numberValue;
}; */

//Решение 2: через return
/* const getNumberExplanation = (number) => {
  switch (number) {
    case 666:
      return 'devil number';
    
    case 42:
      return 'answer for everything';
   
    case 7:
      return 'prime number';
    
    default:
      return null;
  }
};

console.log(getNumberExplanation(666)); //devil number */

/* Задание 63

функция 
const printNumbers = (lastNumber) => {
  // i сокращение от index (порядковый номер)
  // используется по общему соглашению во множестве языков
  // как счетчик цикла
  let i = 1;

  while (i <= lastNumber) {
    console.log(i);
    i = i + 1;
  }
  console.log('finished!');
};

printNumbers(3);

Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. 
Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением,
 а в теле цикла его нужно уменьшать до нижней границы.

printNumbers(4);
4
3
2
1
finished!

Решение*/
// const printNumbers = (initialNumber) => {
//   let i = initialNumber;
//   while (i >= 1) {
//     console.log(i);
//     i = i - 1;
//   }
//   console.log('finished!'); 
// };
// printNumbers(4);// 4  3  2  1  finished!

/* Задание 64
Реализуйте функцию multiplyNumbersFromRange(), которая перемножает числа в указанном диапазоне включая границы диапазона. Пример вызова:

multiplyNumbersFromRange(1, 5); // 1 * 2 * 3 * 4 * 5 = 120
multiplyNumbersFromRange(2, 3); // 2 * 3 = 6
multiplyNumbersFromRange(6, 6); // 6

Решение*/

const multiplyNumbersFromRange = (start, end) => {
  let i = start;
  let multiplication = 1;
  while (i <= end) {
    multiplication = multiplication * i;
    i = i + 1;
  }
  return multiplication;
};
console.log(multiplyNumbersFromRange(2, 12));// 479001600