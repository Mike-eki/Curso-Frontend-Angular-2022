// Ejercicio 1.6
// Queremos representar un elemento de inventario como una estructura donde la primera entrada
// es el nombre del artículo y la segunda es la cantidad.
// Dado el siguiente codigo:
// 1 Añadir anotaciones de tipo (lo más explícitas posible) ✅
// 2 Solucionar errores (si corresponde) ✅
const elementoInventario : any[] = ['tuerca', 11];

 // despues lo desestructuramos
const [nombre, cantidad] : any[] = elementoInventario;
const mensaje = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}