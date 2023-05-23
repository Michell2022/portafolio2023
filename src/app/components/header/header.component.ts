import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const menuIcon = this.elementRef.nativeElement.querySelector('#menu-icon');
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });


    // Enlace activo de las secciones de desplazamiento.
    let sections = this.elementRef.nativeElement.querySelectorAll('section');
    let navLinks = this.elementRef.nativeElement.querySelectorAll('header nav a');

    window.onscroll = () => {
      sections.forEach((sec: HTMLElement) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links: HTMLElement) => {
            links.classList.remove('active');
            this.elementRef.nativeElement.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        };
      });

      //sticky navbar - aparecere una linea al bajar el scroll.
      let header = this.elementRef.nativeElement.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      // Elimina el ícono de alternar y la barra de navegación cuando haga clic en el enlace de la barra de navegación (desplazamiento).
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

    // EVENTO CLICK PARA CAMBIAR DE DE TEMA CLARO - MOON Y SUN
    let label = this.elementRef.nativeElement.querySelector('.theme-switch');
    let darkModeIcon = this.elementRef.nativeElement.querySelector('#darkMode-icon');
    let slider = this.elementRef.nativeElement.querySelector('.slider');

    let toggleDarkMode = () => {
      darkModeIcon.classList.toggle('bxs-sun');
      document.body.classList.toggle('dark-mode');
    };

    label.addEventListener('click', toggleDarkMode);
    slider.addEventListener('click', toggleDarkMode);
  }
}

