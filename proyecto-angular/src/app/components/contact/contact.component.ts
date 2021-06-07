import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $("header").css("background","green");
    $('.photos').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    });

  }

}
