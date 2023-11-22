import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  porscheLogo = 'assets/Images/CarsLogo/Porsche_logo.svg.png';
  audiLogo = 'assets/Images/CarsLogo/audi.png';
  bmwLogo = 'assets/Images/CarsLogo/BMW.svg.png';
  mercedesLogo = 'assets/Images/CarsLogo/Mercedes-Benz-Logo.png';
  mclarenLogo = 'assets/Images/CarsLogo/McLaren.png';
  bugattiLogo = 'assets/Images/CarsLogo/Bugatti-logo-1024x768.webp';
}
