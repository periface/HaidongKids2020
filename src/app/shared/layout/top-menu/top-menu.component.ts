import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalMenuComponent } from './modal-menu/modal-menu.component';
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
  constructor(private router: Router, public dialog: MatDialog) {


  }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.modal) {
        this.closeMenu();
      }

    })
  }
  openMenu() {
    // this.modal = document.getElementById('dialog-dark-rounded') as any;
    // dialogPolyfill.registerDialog(this.modal);
    // this.modal.showModal()
    const dialogRef = this.dialog.open(ModalMenuComponent, {
      width: '80%',
      data: this.routes
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  closeMenu() {
    this.modal.close()
  }
}
