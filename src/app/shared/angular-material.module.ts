import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatDialogModule
} from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    LazyLoadImageModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule { }
