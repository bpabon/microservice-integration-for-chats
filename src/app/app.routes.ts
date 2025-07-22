import { Routes } from '@angular/router';
import { SignUpComponent } from './modules/auth/pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
    // loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    component: SignUpComponent
    // loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errors',
    component: SignUpComponent
    // loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', 
    component: SignUpComponent
    //redirectTo: 'errors/404' 
  },
];
