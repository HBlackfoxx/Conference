import { Component, OnInit } from '@angular/core';

interface Speaker {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent implements OnInit {
  speakers: Speaker[] = [
    { 
      name: 'Dr. Jay Daniel', 
      role: 'Professor of Digital Supply Chain and Technology Innovation | Reasearch Cluster Lead at the Center for Supply Chain Improvement | Derby Business School, University of Derby, United Kingdom', 
      imageUrl: 'assets/images/speakers/speaker1.jpg', 
      description: 'Talk: Digital Supply Chain and Blockchain Technology: How to Unblock the Chain'
    },
    { 
      name: 'Mrs. Hind GUENDOUL', 
      role: 'Innovation and New Services Manager at Safran Engineering Services | Digital Transformation Consultant | Former Quality and Project Transfer Manager in the automotive and aerospace sectors.', 
      imageUrl: 'assets/images/speakers/Speaker6.jpg', 
      description: 'Talk: Bridging Strategy, Technology, and Operations: A Roadmap for Digital Transformation in Industrial Ecosystems'
    },
    { 
      name: 'Dr. Guilherme F.Frederico', 
      role: 'Professor of Operations, Supply Chain and Project Management at Federal University of Parana - UFPR - School of Management, Curitiba, Brazil', 
      imageUrl: 'assets/images/speakers/Speaker2.jpg', 
      description: 'Talk: Supply Chain 4.0: A strategic approach'
    },
    { 
      name: 'Mr. Hicham Bensghir', 
      role: 'Ergonomist | Specialist in Human and Organizational Factors and Human-Machine Interaction, Safran.', 
      imageUrl: 'assets/images/speakers/Speaker3.jpg', 
      description: 'Talk: Industrial Ergonomics in Aerospace: Enhancing Performance, Safety, and Operator Well-being in Advanced Manufacturing Environments.'
    },
    { 
      name: 'Mr. Said ZARGUAN', 
      role: 'Logistics & Transportation Expert | Logistics Project Manager (Maturity Systems, Digitalization, ERP, Operations Implementation…) | Supply Chain Security Consultant ISO 28000 & AEO SS (SAFE) | Logistics Manager at SDFM LOGISTICS, Tangier, Morocco', 
      imageUrl: 'assets/images/speakers/Speaker4.jpg', 
      description: 'Talk: Certification and Labeling Standards: Their Impact on the Maturity Level of Industrial and Logistics Systems as Prerequisites for the Governance of Sustainable Digital Transformation in Automotive and Aeronautical Supply Chains.'
    },
    { 
      name: 'Mr. Salaheddine AIT OUAKRIM', 
      role: 'Deputy General Manager - Chief Commercial Director in Buildings & Logistics Services  | Logistics & Supply Chain Expert | End-to-End Logistics | Digital Transformation | Sustainability', 
      imageUrl: 'assets/images/speakers/Speaker5.jpg', 
      description: 'Talk: Supply Chain Digitalization: Interface Challenges and Data Governance Complexity'
    },
  ];

  speakerRows: Speaker[][] = [];
  visibleRows: number = 1; // Initially show only the first row
  speakersPerRow: number = 4;
  
  ngOnInit() {
    this.organizeIntoRows();
  }

  organizeIntoRows() {
    this.speakerRows = [];
    for (let i = 0; i < this.speakers.length; i += this.speakersPerRow) {
      this.speakerRows.push(this.speakers.slice(i, i + this.speakersPerRow));
    }
  }

  loadMoreRows() {
    if (this.visibleRows < this.speakerRows.length) {
      this.visibleRows++;
    }
  }

  get hasMoreRows(): boolean {
    return this.visibleRows < this.speakerRows.length;
  }
}