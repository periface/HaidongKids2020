import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    LazyLoadImageModule
  ]
})
export class AngularMaterialModule {}
