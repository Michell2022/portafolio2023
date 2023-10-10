import { Component } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  servicios = [
    {
      titulo: 'Desarrollador Web Full Stack',
      descripcion: 'Como desarrollador web Full Stack, ofrezco soluciones integrales para tus proyectos en línea. Mis servicios incluyen: ' +
                   '\n- Desarrollo Front End: Creación de interfaces atractivas y funcionales utilizando HTML, CSS y JavaScript, así como ',
      textoExtra:  'frameworks como Angular. \n- Desarrollo Back End: Implementación de la lógica de servidor utilizando tecnologías como Java y Spring Boot, garantizando un rendimiento eficiente y una gestión segura de datos.' +  
                   '\n- Bases de Datos: Diseño y gestión con MySQL.' +
                   '\n- Diseño Responsivo: Experiencia óptima en dispositivos.' +
                   '\n- Colaboración en Equipo: Trabajo conjunto para el éxito del proyecto.',
      icono: 'bx bx-code-alt'
    },
    {
      titulo: 'Servicio Técnico IT',
      descripcion: 'Ofrezco servicios de mantenimiento preventivo para computadoras y laptops, asegurando un rendimiento óptimo y seguro. Además, realizo formateo e instalación de sistemas operativos y',
      textoExtra: 'programas personalizados según tus necesidades.',
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
