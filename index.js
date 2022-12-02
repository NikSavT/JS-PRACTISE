
/* Задание 70
Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.
const text = 'I never look back';
// Каждый третий элемент
makeItFunny(text, 3); // 'I NevEr LooK bAck'
Решение: */

// Решение учителя: через переменную
// const makeItFunny = (str, n) => {
//   let i = 0;
//   let result = '';
//   while (i < str.length) {
//     const current = str[i];
//     if ((i + 1) % n === 0) {
//       result = `${result}${current.toUpperCase()}`;
//     } else {
//       result = `${result}${current}`;
//     }
//     i++;
//   }

//   return result;
// };

// Мое через долгие мытарства:

// const makeItFunny = (str, n) => {
//   let i = 0;
//   let result = '';
//   while (i < str.length) {
//     if ((i+1) % n === 0) {
//       result = `${result}${str[i].toUpperCase()}`;
//     }
//     if ((i+1) % n !== 0) {
//       result = `${result}${str[i]}`;
//     }
//     ++i;
//   }

//   return result;
// };

// Самое короткое но пока есть непонятка для меня
const makeItFunny = (text, stepUpperCase) => {
  let i = 0;
  let result = '';
  
  while (i < text.length) {
  let char = text[i];
  if (++i % stepUpperCase === 0) {// движение цикла заложено здесь, а не в конце. Код сильно сократился, но пока не понимаю как это работает
  char = char.toUpperCase();
  }
  result += char;
  }
  
  return result;
  };

console.log(makeItFunny('I never look back', 3));// проверка I NevEr LooK bAck
