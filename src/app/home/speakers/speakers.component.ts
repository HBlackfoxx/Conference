import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {
  speakers = [
    { name: 'Dr. Jay Daniel', 
      role: 'Professor of Digital Supply Chain and Technology Innovation | Reasearch Cluster Lead at the Center for Supply Chain Improvement | Derby Business School, University of Derby, United Kingdom', 
      imageUrl: 'assets/images/speakers/speaker1.jpg', 
      description: 'Talk: Digital Supply Chain and Blockchain Technology: How to Unblock the Chain'
    },
    { name: 'Dr. Guilherme F.Frederico', 
      role: 'Professor of Operations, Supply Chain and Project Management at Federal University of Parana - UFPR - School of Management, Curitiba, Brazil', 
      imageUrl: 'assets/images/speakers/Speaker2.jpg', 
      description: 'Talk: Supply Chain 4.0: An strategic approach'
    },
    { name: 'Mr. Hicham Bensghir', 
      role: 'Ergonomist | Specialist in Human and Organizational Factors and Human-Machine Interaction, Safran.', 
      imageUrl: 'assets/images/speakers/Speaker3.jpg', 
      description: 'Talk: Industrial Ergonomics in Aerospace: Enhancing Performance, Safety, and Operator Well-being in Advanced Manufacturing Environments.'
    },
    { name: 'Mr. Said ZARGUAN', 
      role: 'Logistics Manager at SDFM Logistics, Morocco.', 
      imageUrl: 'assets/images/speakers/Speaker4.jpg', 
      description: 'Talk: Certification and Labeling Standards: Their Impact on the Maturity Level of Industrial and Logistics Systems as Prerequisites for the Governance of Sustainable Digital Transformation in Automotive and Aeronautical Supply Chains.'
    },
  ];
}
