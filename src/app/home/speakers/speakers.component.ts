import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {
  speakers = [
    { name: 'Dr. Jay Daniel', 
      role: 'Professor of Digital Supply Chain and Technology Innovation | Reasearch Cluster Lead at thee Center for Supply CHain Improvement | Derby Business School, University of Derby, United Kingdom', 
      imageUrl: 'assets/images/speakers/speaker1.jpg', 
      description: 'Talk: Digital Supply Chain and Blockchain Technology: How to Unblock the Chain'
    },
    { name: 'Dr. Guilherme F.Frederico', 
      role: 'Professor of Operations, Supply Chain and Project Management at Federal University of Parana - UFPR - School of Management, Curitiba, Brazil', 
      imageUrl: 'assets/images/speakers/Speaker2.jpg', 
      description: 'Talk: Supply Chain 4.0: An strategic approach'
    },
  ];
}
