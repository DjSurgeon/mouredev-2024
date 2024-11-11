/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(n) {
    let a = 0; // First number
    let b = 1; // Second number
    let c; // Sum of the numbers
    for (let k = 0; k <= n; k++) { // loop
        console.log(`${a}`);
        c = a + b;
        a = b;
        b = c;
    }
}
fibonacci(50);