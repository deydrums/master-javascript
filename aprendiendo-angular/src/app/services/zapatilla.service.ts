import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
@Injectable()

export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook clasic','Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook spartan','Reebook', 'Morado', 50, true),
            new Zapatilla('Nike clasic','Nike', 'Azul', 80, true),
            new Zapatilla('Adidas xz','Adidas', 'Negra', 100, false),
            new Zapatilla('Vans xz','Vans', 'Marron', 40, false)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }
    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}