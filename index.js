// Pair programing
//variables
let variableSinValor;

let booleano1 = true;
let booleano2 = false;

const PI = 3.14;

const TAU = PI * 2;

//booleano
const booleanoAnd = booleano1 && booleano2;

const booleanoNot = !booleano1;

const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//operadores
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes =  ++incrementarAntes; 

//bucles
let contarHasta10_2 = 0;
for(let i=0; contarHasta10_2 < 10; i++){
    contarHasta10_2 += 2;
}

let postI = 0;
let postJ = 0;
for(let i = 0; i < 11; i++){
    postI += postJ++;
}

let sumaPares=0;
let i=0;
while (i < 10){
    if(i % 2 === 0){
        sumaPares+=i;
    }
    i++;
}

// Individual
// Variables
let variableValorNumerico = 0

const MiNombre = 'Juan Diego Acosta Liscano'

const MiNumeroFav = 2

// Booleanos
const booleanoOr = booleano1 || booleano2

const booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav)

const seisNoEsNueve = 6 !== 9

const booleanoMix2 = variableValorNumerico > 1 || variableValorNumerico < -(MiNumeroFav * TAU)

// Operadores

const valorSuma = MiNumeroFav + variableValorNumerico

const valorResta = MiNumeroFav - variableValorNumerico

const valorMultiplicacion = MiNumeroFav * variableValorNumerico

const valorDivision = MiNumeroFav / 3

// Bucles

let contarHasta10 = 0
while (contarHasta10 < 10) {
    contarHasta10++
}

let preI = 0;
let preJ = 0;

for(let i = 0; i < 11; i++){
    preI += ++preJ;
}

let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2) {
        sumaImpares += i;
    }
}
