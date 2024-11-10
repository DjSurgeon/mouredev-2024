/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram (string1, string2) {
    // Convert the strings to lower case, add the strings to array and finally sort de array. The last method is to convert the array to string and compare.
    let str1 = string1.toLowerCase().split('').sort().toString();
    let str2 = string2.toLowerCase().split('').sort().toString();

    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}
console.log(isAnagram("CastoR", "CasTRo"));
