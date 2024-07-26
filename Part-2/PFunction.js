//FILTER

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mascotas = [
  { nombre: "Puchini", edad: 12, raza: "perro" },
  { nombre: "Chanchito feliz", edad: 3, raza: "perro" },
  { nombre: "Pulga", edad: 10, raza: "perro" },
  { nombre: "Pelusa", edad: 16, raza: "gato" },
];

const perros = mascotas.filter(x => x.raza == "perro")
console.log(perros)

const gatos = mascotas.filter(x => x.raza == "gato")
console.log(gatos)
 */

//MAP
/*
const suma = (ns) => {
    let acumulado = 0
    for (let i = 0; i < ns.length; i++) {

        acumulado += ns[i]
    }
    return acumulado
}


const numeros = [1, 2, 3, 4, 5]

const multiplicados = numeros.map(x => x * 2)

console.log(numeros);
console.log(multiplicados);


const parejas = numeros.map(x => [x, x])

const mascotas = [
  { nombre: "Puchini", edad: 12, tipo: "perro" },
  { nombre: "Chanchito feliz", edad: 3, tipo: "perro" },
  { nombre: "Pulga", edad: 10, tipo: "perro" },
  { nombre: "Pelusa", edad: 12, tipo: "gato" },
];

const resultado1 = suma(numeros)    

const edades = mascotas.map(x => x.edad)
console.log(edades);
const sumaEdades = suma(edades)
console.log(sumaEdades / edades.length);

*/

//REDUCE

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((sum, numero) => sum + numero, 5)
console.log(suma);

const mascotas = [
  { nombre: "Puchini", edad: 12, tipo: "perro" },
  { nombre: "Chanchito feliz", edad: 3, tipo: "perro" },
  { nombre: "Pulga", edad: 10, tipo: "perro" },
  { nombre: "Pelusa", edad: 12, tipo: "gato" },
];

const indexed = mascotas.reduce((acc, el) => ({...acc, [el.nombre]: el }), {})

const anidado = [1, [2, 3], 4, [5]]

const plano = anidado.reduce((acc, el) => acc.concat(el), [])
console.log(plano);