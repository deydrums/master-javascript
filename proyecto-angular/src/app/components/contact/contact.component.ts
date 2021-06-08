import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider!: any;
  public anchuraToSlider!: any;

  constructor() {

   }

  ngOnInit(): void {

  }

  // cargarSlider(){
  //   this.anchuraToSlider = this.widthSlider;
  // }

  cargarSlider(){
    this.anchuraToSlider = null;
    setTimeout(() =>{
      this.anchuraToSlider = this.widthSlider;     
    }, 10);

}

}
