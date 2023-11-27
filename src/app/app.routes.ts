import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PorscheCarsComponent } from './components/porsche-cars/porsche-cars.component';
import { MercedesCarsComponent } from './components/mercedes-cars/mercedes-cars.component';
import { AudiCarsComponent } from './components/audi-cars/audi-cars.component';
import { BmwCarsComponent } from './components/bmw-cars/bmw-cars.component';

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
  {
    path: 'mercedes-cars',
    title: 'Mercedes Cars page',
    component: MercedesCarsComponent,
  },
  {
    path: 'audi-cars',
    title: 'Audi Cars page',
    component: AudiCarsComponent,
  },
  {
    path: 'bmw-cars',
    title: 'BMW Cars page',
    component: BmwCarsComponent,
  },
];
