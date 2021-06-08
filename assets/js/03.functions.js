// La función debe imprimir la suma de todos los valores en el arreglo dado:
function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        // 0 < 3 Okey
        // 0,1,2
        // escribe tu código aquí
        console.log('arreglo-->',x[i])
        sum += x[i];
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debe imprimir 6