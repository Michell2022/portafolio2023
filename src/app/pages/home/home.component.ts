import { Component, OnInit } from '@angular/core';
//npm install typed.js
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //TYPED JAVASCRIPT -- PARA HACER ANIMACION DE TEXTO
    const typed = new Typed('.multiple-texto', {
      strings: ['Front-End Developer', 'YouTuber', 'Técnico IT'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }

}
