import { Component } from '@angular/core';

@Component({
  selector: 'app-call-papers',
  templateUrl: './call-papers.component.html',
  styleUrl: './call-papers.component.css'
})
export class CallPapersComponent {
  topics = [
    {
      number: '01',
      title: 'Industrial and Logistics Organization and Management (ILOM)',
      items: [
        'Lean Manufacturing and Logistics',
        'Six sigma, continuous improvement, competitiveness and performance',
        'Supply Chain Management and Extended Enterprise',
        'Reverse Logistics and Circular Supply Chains',
        'Risk management',
        'Project Management, Human Factors, and Organizational Behavior',
        'Decision support tools and Operational Research',
        'Corporate Social Responsibility (CSR)'

      ],
      imageUrl: 'assets/images/ilom.jpg',
      altText: 'ILoM Description'
    },
    {
      number: '02',
      title: 'Industrial and Logistics Information Systems (ILIS)',
      items: [
        'Decision-Making and Collaborative Systems',
        'Skills and Knowledge Management Systems',
        'Business Process Management (BPM)',
        'Enterprise resource planning (ERP)',
        'Manufacturing Execution Systems (MES)',
        'Warehouse Management Systems (WMS)',
        'Product Life Cycle Management (PLM)',
        'Decision Support Systems (DSS)'
      ],
      imageUrl: 'assets/images/ilis.jpg',
      altText: 'ILIS Description'
    },
    {
      number: '03',
      title: 'Industrial and Logistics Products and Equipment (ILPE)',
      items: [
        'Product and Process Design',
        'Equipment Reliability and Maintenance',
        'Health, Hygiene, Safety, Ergonomics, and Environment',
        'Product and Process Quality Management',
        'Systems Engineering',
        'Material Selection and Durability',
        'Compliance, Standardization, and Certification'
      ],
      imageUrl: 'assets/images/ilpe.jpg',
      altText: 'ilpe'
    },
    {
      number: '04',
      title: 'Digital Transformation of Industrial and Logistics Systems (DTILS)',
      items: [
        'Cyber-Physical Systems',
        'Internet of Things (IoT) and Industrial IoT (IIoT)',
        'Artificial Intelligence and Machine Learning',
        'Digital Twin and Simulation',
        'Blockchain Technology',
        'Big Data Analytics and Decision Intelligence',
        'Cybersecurity for Industrial and Logistics Systems',
        'Augmented Reality (AR) and Virtual Reality (VR)',
        'Human-Machine Collaboration and Intelligent Assistants',
        'Sustainability and Green Digital Transformation'
      ],
      imageUrl: 'assets/images/dtils.jpg',
      altText: 'dtils'
    },
  ];
}

