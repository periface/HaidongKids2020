import { Component } from '@angular/core';
declare var dialogPolyfill;
@Component({
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  selector: 'app-top-menu'
})
export class TopMenuComponent {
  /**
   *
   */
  routes = [
    {
      title: 'Inicio',
      url: '/'
    },
    {
      title: 'Noticias',
      url: 'noticias'
    },
    // {
    //   title: 'Proyectos',
    //   url: 'proyectos'
    // },
    // {
    //   title: 'Patentes',
    //   url: 'patentes'
    // },
    // {
    //   title: 'Servicios',
    //   url: 'servicios'
    // },
    // {
    //   title: 'Convocatorias',
    //   url: 'convocatorias'
    // },
    {
      title: 'Inscrpciones',
      url: 'maestria'
    },
    {
      title: 'Maestros',
      url: 'cursos'
    },
  ];
  constructor() { }
  openMenu() {
    var modal = document.getElementById('dialog-dark-rounded') as any;
    dialogPolyfill.registerDialog(modal);
    modal.showModal()
  }
}
