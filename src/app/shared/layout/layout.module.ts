import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { UnderMaintenanceComponent } from '../components/under-mant/under-mant.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ModalMenuComponent } from './top-menu/modal-menu/modal-menu.component';

@NgModule({
  exports: [TopMenuComponent, FooterComponent, UnderMaintenanceComponent, ModalMenuComponent],
  declarations: [TopMenuComponent, FooterComponent, UnderMaintenanceComponent, ModalMenuComponent],
  imports: [AngularMaterialModule, CommonModule, RouterModule],
  entryComponents: [ModalMenuComponent]
})
export class LayoutModule { }
