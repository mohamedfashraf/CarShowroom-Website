import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PorscheCarsComponent } from './components/porsche-cars/porsche-cars.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    title: 'Home page',
    component: HomeComponent,
  },
  {
    path: 'cars',
    title: 'Cars page',
    component: CarsComponent,
  },
  {
    path: 'signup',
    title: 'Signup page',
    component: SignupComponent,
  },
  {
    path: 'login',
    title: 'Login page',
    component: LoginComponent,
  },
  {
    path: 'contact',
    title: 'Contact page',
    component: ContactComponent,
  },
  {
    path: 'purchase',
    title: 'Purchase page',
    component: PurchaseComponent,
  },
  {
    path: 'porsche-cars',
    title: 'Porsche Cars page',
    component: PorscheCarsComponent,
  },
];
