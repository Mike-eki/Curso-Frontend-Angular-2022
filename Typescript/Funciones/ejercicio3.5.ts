function layEggs(quantity : number = 0, color : string = '') : void {
    console.log(
        `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
}

layEggs(7, 'Marrones');
// Añadir anotación de tipo de parámetro
// A pesar de que esta función no vuelve, agregue un tipo de retorno explícito