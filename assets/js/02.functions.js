/* 
Imprime todos los enteros desde el 0 hasta el 255. 
Con cada entero, debes imprimir la suma de todos hasta ese punto. Retorna la suma final.
*/
function printSum(x) {
    var sum = 0;
        for(let i = 0; i <= x; i++){
                sum += i;
        }
    return sum
}
y = printSum(255) // debe imprimir todos los enteros desde el 0 hasta el 255, y la suma parcial en cada punto
console.log(y) // debe imprimir 32640