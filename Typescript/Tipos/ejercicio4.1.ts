// Este ejercicio es exactamente igual que el 4.4
// Por lo que asumo que se resolvera de la misma manera


// // Dado el siguiente codigo:
// interface EggLayer {
//     layEggs(): void;
// }

// interface Flyer {
//     fly(height: altura): void;
// }

// interface Swimmer {
//     swim(depth: profundidad): void;
// }

// // agregar alias de tipo(s) aqui
// type altura = number
// type profundidad = number


// class Bird implements Flyer, EggLayer {
//     constructor(public species: string) { }

//     layEggs(): void {
//         console.log('Poniendo huevos de aves.');
//     }

//     fly(height: number): void {
//         console.log(`Volando a la altura de ${height} metros.`);
//     }
// };

// class Fish implements EggLayer, Swimmer {
//     constructor(public species: string) { }

//     layEggs(): void {
//         console.log('Poniendo huevos de pescado.');
//     }

//     swim(depth: number): void {
//         console.log(`Nadando a una profundidad de ${depth} metros.`);
//     }
// }

// function getRandomAnimal() : Bird | Fish {
//     const animals = [
//         new Bird('puffin'),
//         new Bird('kittiwake'),
//         new Fish('sea robin'),
//         new Fish('leafy seadragon'),
//     ];

//     return animals[Math.floor(Math.random() * animals.length)];
// }

// function interrogateAnimal(animal = getRandomAnimal()) : string {
//     animal.swim(10) // se llama solo si es un pez
//     animal.fly(10); // se llama solo si es un pajaro

//     return animal.species;
// }

// console.log('[Ejercicio 4.4]',
//     `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
    // Restrinja el tipo de ‘valor‘ a ‘string o number‘
    // Solucione cualquier error resultante