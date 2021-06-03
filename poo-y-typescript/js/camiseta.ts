//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Clase (molde del objeto)

class Camiseta implements CamisetaBase{
    //Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    //Metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;

    }

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}
/*
var camiseta = new Camiseta("rojo","Manga larga","Nike","L","15");
camiseta.setColor("rojo");
console.log(camiseta);
*/

//Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("rojo","Manga larga","Nike","L",15);
console.log(camiseta);

var sudadera_nike = new Sudadera("rojo","Manga Corta","Adidas","L",25);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Azul");
console.log(sudadera_nike);