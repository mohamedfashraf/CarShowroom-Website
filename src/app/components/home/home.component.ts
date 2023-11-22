import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  hollmannHome = 'assets/Images/homeImages/carousel0.jpg';
  carousel1 = 'assets/Images/homeImages/carousel1.jpg';
  carousel2 = 'assets/Images/homeImages/carousel2.jpg';
  carousel3 = 'assets/Images/homeImages/carousel3.jpg';

  images = [
    'assets/Images/homeImages/carousel0.jpg',
    'assets/Images/homeImages/carousel1.jpg',
    'assets/Images/homeImages/carousel2.jpg',
    'assets/Images/homeImages/carousel3.jpg',
  ];
}
