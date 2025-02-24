import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  constructor(private router: Router) {}

  index: number = 0;
  images: string[] = [
    'assets/images/nafora.jpg',
    'assets/images/koutoubia.jpg',
    'assets/images/medina.jpg',
    'assets/images/marrakech.jpg',
  ];

  ngOnInit() {

    setInterval(() => {
      this.next();
    }, 3000);
  }

  previous(): void {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.index = (this.index + 1) % this.images.length;
  }
}
