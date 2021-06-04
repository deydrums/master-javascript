import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
    public nombre: string;
    public fallowers: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router, 
    
  ) { 
    this.nombre ="";
    this.fallowers = 0;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre;
      this.fallowers = +params.fallowers;
      //this.nombre = params['nombre'];
      console.log(this.nombre);
      console.log(typeof +params.fallowers);
    });
  }

}
