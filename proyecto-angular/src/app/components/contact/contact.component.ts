import { Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider!: any;
  public anchuraToSlider!: any;
  public autor!: any;
  

  @ViewChild('textos', {static: true}) textos!: any;


  constructor() {

   }

  ngOnInit(): void {
    var opcion1 = document.querySelector('#texto')?.innerHTML
    console.log(opcion1);
    console.log(this.textos.nativeElement.textContent);
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

  getAutor(event: any){
    this.autor = event;
  }

}
