import { Component, OnInit} from '@angular/core';
import { Zapatilla} from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook clasic','Reebook', 'Blanco', 80, true),
            new Zapatilla('Nike clasic','Nike', 'Azul', 80, true),
            new Zapatilla('Adidas xz','Adidas', 'Negra', 100, false)
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);
    }
}