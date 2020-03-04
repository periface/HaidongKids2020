import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { WelcomeComponent } from './welcome.component';
const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    LazyLoadImageModule
  ],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
