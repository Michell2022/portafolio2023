import { Component } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  servicios = [
    {
      titulo: 'Desarrollador Web',
      descripcion: 'Desarrollador web Front-End con habilidades en HTML, CSS, JavaScript y Angular. Ofrezco soluciones web personalizadas y de calidad, diseñadas para potenciar tu ',
      textoExtra: 'presencia en línea y brindar una experiencia excepcional a tus usuarios.',
      icono: 'bx bx-code-alt'
    },
    {
      titulo: 'Servicio Técnico IT',
      descripcion: 'Ofrezco servicios de mantenimiento preventivo para computadoras y laptops, asegurando un rendimiento óptimo y seguro. Además, realizo formateo e instalación de ',
      textoExtra: 'sistemas operativos y programas personalizados según tus necesidades.',
      icono: 'bx bxl-windows'
    },

    // Agrega más objetos de servicios según sea necesario
  ];

  mostrarCompleto: boolean[] = [];

  constructor() {
    this.servicios.forEach(() => this.mostrarCompleto.push(true));
  }

  alternarMostrar(index: number): void {
    this.mostrarCompleto[index] = !this.mostrarCompleto[index];
  }
}
