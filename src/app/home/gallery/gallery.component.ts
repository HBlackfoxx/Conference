import { Component } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'] 
})
export class GalleryComponent {
  currentIndex = 0;
  carouselImages = [
    'assets/images/gallery/16.jpg',
    'assets/images/gallery/13.png',
    'assets/images/gallery/14.jpg',
    'assets/images/gallery/15.png',
    'assets/images/gallery/17.jpg',
    'assets/images/gallery/1.jpg',
    'assets/images/gallery/2.jpg',
    'assets/images/gallery/3.jpg',
    'assets/images/gallery/4.jpg',
    'assets/images/gallery/5.jpg',
    'assets/images/gallery/6.jpg',
    'assets/images/gallery/7.jpg',
    'assets/images/gallery/8.jpg',
    'assets/images/gallery/9.jpg',
    'assets/images/gallery/10.jpg',
    'assets/images/gallery/11.jpg',
    'assets/images/gallery/12.jpg',
  ];

  moveTo(direction: 'prev' | 'next'): void {
    if (direction === 'prev') {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.carouselImages.length - 1;
    } else {
      this.currentIndex = (this.currentIndex < this.carouselImages.length - 1) ? this.currentIndex + 1 : 0;
    }
  }

  previous(): void {
    this.moveTo('prev');
  }

  next(): void {
    this.moveTo('next');
  }
}
