import { Component, OnInit} from '@angular/core';
import { Zapatilla} from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    constructor(){
        this.color = 'orange';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Reebook clasic','Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook spartan','Reebook', 'Morado', 50, true),
            new Zapatilla('Nike clasic','Nike', 'Azul', 80, true),
            new Zapatilla('Adidas xz','Adidas', 'Negra', 100, false),
            new Zapatilla('Vans xz','Vans', 'Marron', 40, false)
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }
    getMarcas(){
        this.zapatillas.forEach((zapatilla,index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            
        });
        console.log(this.marcas)
    }
}