// sponsors.component.ts
import { Component, OnInit } from '@angular/core';

interface Sponsor {
  name: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  sponsors: Sponsor[] = [
    { name: 'Springer', imageUrl: '/assets/images/partners/springer.webp', link: 'https://www.springer.com/' },
    { name: 'ENSA', imageUrl: '/assets/images/partners/ensa.webp', link: 'https://ensa-marrakech.uca.ma/' },
    { name: 'Aminov', imageUrl: '/assets/images/partners/aminov.webp', link: '#'},
    { name: 'Lartid', imageUrl: '/assets/images/partners/Lartid.jpg', link: 'https://ensa-marrakech.uca.ma/' },
    { name: 'Blockhat', imageUrl: '/assets/images/partners/Blockhat.png', link: 'https://blockhat.io/' },
    { name: 'Stellantis', imageUrl: '/assets/images/partners/Stellantis.jpg', link: 'https://www.stellantis.com/fr' },
    { name: 'UFPR', imageUrl: '/assets/images/partners/UFPR.jpg', link: 'https://internacional.ufpr.br/portal/about-ufpr/' },
    { name: 'Clarivate', imageUrl: '/assets/images/partners/Clarivate.jpg', link: 'https://clarivate.com/' },
    { name: 'Scopus', imageUrl: '/assets/images/partners/Scopus.jpg', link: 'https://www.elsevier.com/fr-fr/products/scopus' },
    { name: 'SDFM', imageUrl: '/assets/images/partners/SDFM.jpg', link: 'https://www.sdfmlogistics.com/' },
  ];
  
  allSponsors: Sponsor[] = [];

  ngOnInit() {
    // Tripler les sponsors pour créer un défilement continu sans saut
    this.allSponsors = [...this.sponsors, ...this.sponsors, ...this.sponsors];
  }
}