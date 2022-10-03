// Ejercicio 4.3
// Dado el siguiente codigo:
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten<T>(array : T[]) : T[] {
  const flattened: T[] = [];

  for (const element of array) {
    if (Array.isArray(element)) {
       element; // tipo T & any[]
      flattened.push(...element);
    } else {
      element; // tipo T
      flattened.push(element);
    }
  }

  return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log("[Ejercicio 4.3]", flattenedNumbers);
// 1 Añadir anotaciones de tipo (‘any‘ excluido) ✅
// 2 Inspeccione el tipo de ‘element‘ en diferentes ramas de código ✅
// 3 Bonificación: convertir ‘flatten‘ en una función genérica ✅
