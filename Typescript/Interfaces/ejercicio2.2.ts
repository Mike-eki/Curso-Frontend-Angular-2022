// Ejercicio 2.2
// Dado el siguiente codigo:
class Persona implements IPersona {
constructor(public nombre: string, public edad: number) { }
}

const juan = new Persona('Juan', 31);

console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);
// 1 Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso
// a las propiedades miembros ‘nombre‘ y ‘edad‘ ✅

interface IPersona {
    nombre : string;
    edad : number;
}