import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  toggleFAQ(event: any) {
    const item = event.currentTarget.parentElement;
    item.classList.toggle("active");
  }
}
