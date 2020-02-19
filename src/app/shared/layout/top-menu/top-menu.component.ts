import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var dialogPolyfill;
@Component({
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  selector: 'app-top-menu'
})
export class TopMenuComponent implements OnInit {

  /**
   *
   */
  routes = [
    {
      title: 'Inicio',
      url: '/'
    },
    // {
    //   title: 'Noticias',
    //   url: 'noticias'
    // },
    {
      title: 'Inscrpciones',
      url: 'inscrpciones'
    },
    {
      title: 'Maestro(a)',
      url: 'maestro'
    },
  ];
  constructor(private router: Router) {


  }
  ngOnInit(): void {
  }
  openMenu() {
    var modal = document.getElementById('dialog-dark-rounded') as any;
    dialogPolyfill.registerDialog(modal);
    modal.showModal()
  }
}
