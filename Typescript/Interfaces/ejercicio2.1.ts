// Ejercicio 2.1
// Dado el siguiente codigo:
function agregarAlCarro(item: CartItem) {
 console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
}

agregarAlCarro( { id: 1, titulo: 'Zapatos de cuero' });
// Crea una interfaz ‘CartItem‘ y reemplaza el tipo de parametros con ella ✅
// Hacer idVariante opcional ✅

interface CartItem {
    id? : number;
    idVariante? : number
    titulo : string;
}