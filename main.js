// --------------Palindrome---------------
function palindrome() {
  let str = prompt("Introduce un palindromo y te diré si es correcto").toLowerCase().replace(/[ ,;'."-?!]/g, '');
  let res = str.split("").reverse().join("");
    if(str === res){return true} else{return false}
}
/*-----Palindrome examples----------
Are we not pure? "No, sir!" Panama's moody Noriega brags. "It is garbage!" Irony dooms a man-a prisoner up to new era.
On a clover, if alive, erupts a vast, pure evil; A fire Volcano.*/
// --------------FahrenheittoCelsius---------------
const Fahrenheit2Celsius = (fht) =>
  ((fht - 32) * 5) / 9;

const fdeg = prompt("Pero qué diablos, ¿Quién sabe cuánto es esto en normal?");
alert(`Tranquil@ son ${Fahrenheit2Celsius(fdeg)}°C`);
//Fahrenheit2Celsius
//((32 °F − 32) * 5)/9 = 0 °C

// --------------Countries---------------
const longestCountry = (paises) => {
  paises.sort((a, b) => b.length - a.length);
  return paises[0];
}
const lista = prompt("Inserta los paises").split(" ")
alert(longestCountry(lista));
//Argentina Alemania Parangaricutirimicuaro Noruega Paraguay Lituania Tailandia Checoslovaquia
// --------------Countries---------------
const cuantosp = (...parametros) => parametros.length;

