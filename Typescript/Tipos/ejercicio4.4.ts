// Dado el siguiente codigo:
interface EggLayer {
  layEggs(): void;
}

interface Flyer {
  fly(height: number): void;
}

interface Swimmer {
  swim(depth: number): void;
}

// agregar alias de tipo(s) aqui

type Animal = Bird | Fish
type BirdLike = EggLayer & Flyer
type FishLike = EggLayer & Swimmer

class Bird implements BirdLike {
  constructor(public species: string) {}

  layEggs(): void {
    console.log("Poniendo huevos de aves.");
  }

  fly(height: number): void {
    console.log(`Volando a la altura de ${height} metros.`);
  }
}

class Fish implements FishLike {
  constructor(public species: string) {}

  layEggs(): void {
    console.log("Poniendo huevos de pescado.");
  }

  swim(depth: number): void {
    console.log(`Nadando a una profundidad de ${depth} metros.`);
  }
}

function getRandomAnimal() : Animal {
  const animals = [
    new Bird("puffin"),
    new Bird("kittiwake"),
    new Fish("sea robin"),
    new Fish("leafy seadragon"),
  ];

  return animals[Math.floor(Math.random() * animals.length)];
}

export function interrogateAnimal(animal = getRandomAnimal()) {
  // Otra forma podria ser:
  // if ('swim' in animal) / if ('fly' in animal)
  // Comprobando si existe tal propiedad en el objeto

  //Pero en este caso como es pedido en el ejercicio, se usa 'instanceof'
  if (animal instanceof Fish) {
    animal.swim(10); // se llama solo si es un pez
  }
  if (animal instanceof Bird) {
    animal.fly(10); // se llama solo si es un pajaro
  }
  return animal.species;
}
console.log(
  "[Ejercicio 4.4]",
  `Tenemos un ${interrogateAnimal()} en nuestras manos!`
);
// 1 Las aves y los peces ponen huevos. Sólo los pájaros vuelan. Sólo los peces nadan. Defina
// dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ basados en estos rasgos ✅
// 2 Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘ ✅
// 3 Use ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros
// volar ✅
// 4 Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible ✅
