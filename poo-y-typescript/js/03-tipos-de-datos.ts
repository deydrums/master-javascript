type alfanumerico = String | number;

//String
let cadena: alfanumerico = "David";
cadena = 12;
//number
let numero: number = 12;

//booleano
let verdadero_falso: boolean = true;

//Any
let cualquiera: any = "hola";

//arrays
var lenguajes: Array<string> = ["PHP" , "JS" , "CSS"];
var years: Array<number> = [2021 , 1989, 1999];

//Let vs Var

var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}

console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso,cualquiera, lenguajes, years);

