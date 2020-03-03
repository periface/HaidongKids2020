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
    {
      title: 'Noticias',
      url: 'noticias'
    },
    {
      title: 'Maestro(a)',
      url: 'maestro'
    },
    {
      title: 'Contacto',
      url: 'contacto'
    }

  ];
  modal: any;
  constructor(private router: Router) {


  }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.modal) {
        this.closeMenu();
      }

    })
  }
  openMenu() {
    this.modal = document.getElementById('dialog-dark-rounded') as any;
    dialogPolyfill.registerDialog(this.modal);
    this.modal.showModal()
  }
  closeMenu() {
    this.modal.close()
  }
}
