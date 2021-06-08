import { Component, OnInit, Input } from '@angular/core';
declare const $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura!:number;
  constructor() { }

  ngOnInit(): void {

        // $("header").css("background","green");
        $('.photos').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: this.anchura
        });

        
  }

}
