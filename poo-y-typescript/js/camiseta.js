//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //Metodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function (color) {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("rojo");
//camiseta.getColor();
var playera = new Camiseta();
playera.setColor("azul");
console.log(camiseta, playera);
