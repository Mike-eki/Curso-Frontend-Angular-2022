// Ejercicio 5.1
// Dado el siguiente codigo:
class MC {
  greet(event: string = "party") : string {
    return `Bienvenido al ${event}`;
  }
}

const mc = new MC();
console.log("[Ejercicio 5.1]", mc.greet("espectaculo"));
// 1 Añadir tipo de parámetro de forma explícita en método ‘greet‘
// 2 Agregar el tipo de retorno explicito al metodo greet
