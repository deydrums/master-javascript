//Clase (molde del objeto)

class Camiseta{
    //Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    //Metodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }
    public getColor(color){
        return this.color;
    }
}

var camiseta = new Camiseta();
camiseta.setColor("rojo");
//camiseta.getColor();

var playera = new Camiseta();
playera.setColor("azul");

console.log(camiseta, playera);
