import { Routes } from '@angular/router';
import { LandingView } from './components/views/landing-view/landing-view';
import { LoginComponent } from './components/Autenticacion/login-component/login-component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingView },
  { path: 'login', component: LoginComponent }
];
