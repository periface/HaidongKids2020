import { Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './not-found.component';
import { ThanksComponent } from './shared/thanks.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'maestro',
    loadChildren: () =>
      import('./master/master.module').then(m => m.MasterModule)
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'gracias',
    component: ThanksComponent
  },
  {
    path: 'noencontrado',
    component: NotFoundComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', component: NotFoundComponent }
];
