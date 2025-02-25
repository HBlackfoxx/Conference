import { Component } from '@angular/core';

interface Sponsor {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})
export class SponsorsComponent {
  sponsors: Sponsor[] = [
    { name: 'Sponsor 1', imageUrl: '/assets/images/partners/springer.webp' },
    { name: 'Sponsor 3', imageUrl: '/assets/images/partners/ensa.webp' },
    { name: 'Sponsor 5', imageUrl: '/assets/images/partners/aminov.webp' }
  ];
}
