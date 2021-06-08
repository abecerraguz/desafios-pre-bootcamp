// Imprime números enteros de 1 a x. Si x es menor que 1, retorna false.
function imprimeHasta(x) {
    // escribe tu código aquí
    if(x > 1){
        for(let i = 1; i < x; i++ ){
            console.log('De 1 a x--->', i)
        }
    }else{
        return false
    }
}
imprimeHasta(1000); // debe imprimir todos los enteros desde el 1 hasta el 1000000copy
y = imprimeHasta(-10); 
console.log('Valor y ---->',y); // debe imprimir y