//Escribe una función que retorne el elemento mayor del arreglo dado:
function mayorElem(x) {
    var mayorHastaAhora = x[0];

    for (var i = 0; i < x.length; i++) {

        if(x[i] > mayorHastaAhora){
            console.log('arreglo-->',x[i])
            mayorHastaAhora = x[i]
        }
        
    }

    // escribe tu código aquí
    return mayorHastaAhora;
}
console.log( mayorElem([8,3,11,2,-8]) ); // debe imprimir 11