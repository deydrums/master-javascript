import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
        <h2>Componente de Videojuegos</h2>
        <ul>
            <li>GTA V</li>
            <li>Clash Royale</li>
            <li>Fifa 21</li>
            <li>Mario Bros</li>
        </ul>
    `
})
export class VideojuegoComponent{
    constructor(){
        console.log("Se ha cargado el componente");
    }
}