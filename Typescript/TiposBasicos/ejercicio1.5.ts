// Ejercicio 1.5
// Dado el siguiente codigo:
// 1 Añadir anotaciones de tipo (lo más explícitas posible) ✅
// 2 Solucionar errores (si corresponde) ✅
const secuencia : number[] = Array.from(Array(10).keys());
const animales : string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros : any[] = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos : any[] = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);