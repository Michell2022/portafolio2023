import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //CAMBIARA AL AÑO ACTUAL DE FOOTER
  @ViewChild('currentYearElement', { static: true }) currentYearElement!: ElementRef;

  ngOnInit() {
    const currentYear: number = new Date().getFullYear();
    this.currentYearElement.nativeElement.textContent = currentYear.toString();


    //SE ENCARGA DE LA OCULTAR Y MOSTRAR LA ANIMACION DEL ICONO
    const footerIconTop = document.querySelector('.footer-iconTop');

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 250) {
        footerIconTop?.classList.add('show');
      } else {
        footerIconTop?.classList.remove('show');
      }
    });
  }
}
