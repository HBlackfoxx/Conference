import { Component } from '@angular/core';

interface Sponsor {
  name: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})
export class SponsorsComponent {
  sponsors: Sponsor[] = [
    { name: 'Sponsor 1', imageUrl: '/assets/images/partners/springer.webp', link: 'https://www.springer.com/' },
    { name: 'Sponsor 2', imageUrl: '/assets/images/partners/ensa.webp', link: 'https://ensa-marrakech.uca.ma/' },
    { name: 'Sponsor 3', imageUrl: '/assets/images/partners/aminov.webp', link: '#'},
    { name: 'Sponsor 4', imageUrl: '/assets/images/partners/Lartid.jpg', link: 'https://ensa-marrakech.uca.ma/' },
    { name: 'Sponsor 5', imageUrl: '/assets/images/partners/Blockhat.png', link: 'https://blockhat.io/' },
  ];
}
