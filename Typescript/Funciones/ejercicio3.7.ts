// Actualmente, nuestra función ‘pushToCollection‘ acepta *cualquier* elemento y lo agrega, (in-
//     discriminadamente) a *cualquier* tipo de matriz.

// Un par de problemas con esto:
// El tipo ‘any‘ hace que perdamos toda la información de tipos en nuestros parámetros.

// Esta holgura se ha vuelto en nuestra contra durante el tiempo de ejecución (mira a ‘incre-
// mentByTwo‘)

// Dado el siguiente codigo:
const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<T>(item : T, collection: T[]) : T[] {
    collection.push(item);
    return collection;
}

// Anadir algunas cosas a las colecciones

//Lo comentado dara error, debido a que la funcion es generica

// pushToCollection(false, stringCollection);
// pushToCollection([], stringCollection);

pushToCollection('hi', stringCollection);

// Esto dara error
// pushToCollection('1', numberCollection);
// pushToCollection('2', numberCollection);
// pushToCollection('3', numberCollection);

pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);
// 1 Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear errores
// en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección
// determinada. Fije estos valores a los tipos correctos)
// 2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operar
// en artículos y colecciones de cualquier tipo mientras se continúa aplicando que conicidan