import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura!:number;
  
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;
  constructor() { 
    this.autor ={
      nombre: 'David Garcia',
      website: 'http://deydrums.com',
      youtube: 'deydrums'
    };
  }

  ngOnInit(): void {

        // $("header").css("background","green");
        $('.photos').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: this.anchura
        });

        
  }
  
  lanzar(event: any){
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
