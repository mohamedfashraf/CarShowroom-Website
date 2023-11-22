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
  platHome =
    'assets/Images/homeImages/WhatsApp Image 2023-11-10 at 20.01.58_0cac2f19.jpg';
  carousel1 = 'assets/Images/homeImages/carousel1.png';
  carousel2 = 'assets/Images/homeImages/carousel2.png';
}
