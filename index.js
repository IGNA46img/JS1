// Ejercicio 1
// Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres 
// en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

function Ex1(word){
  let myWord = word[0];
  for(let i=1; i<word.length; i++){
    myWord = myWord + ' ' + word[i];
  }
  return myWord.toUpperCase();
}

console.log(Ex1('Ana'));

// Ejercicio 2
// Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene 
// el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

function Ex2(phrase){
  const myPhraseArray = phrase.split(' ');
  return myPhraseArray.length;
}

console.log(Ex2('Antonio Alberto Jesús'));
