import { Component } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'] 
})
export class GalleryComponent {
  currentIndex = 0;
  carouselImages = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/7.jpg',
    'assets/images/8.jpg',
    'assets/images/9.jpg',
    'assets/images/10.jpg',
    'assets/images/11.jpg',
    'assets/images/12.jpg',
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
