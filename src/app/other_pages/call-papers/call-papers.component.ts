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
        'Supply chain, extended enterprise',
        'Risk management',
        'Project management, human factor and organization',
        'Decision support tools and Operational Research'
      ],
      imageUrl: 'assets/images/ilom.jpg',
      altText: 'ILoM Description'
    },
    {
      number: '02',
      title: 'Industrial and Logistics Information Systems (ILIS)',
      items: [
        'Decision-making and cooperative systems',
        'Skills and knowledge management systems',
        'Business Process Management (BPM)',
        'Enterprise resource planning (ERP)',
        'Manufacturing Execution Systems (MES)',
        'Product Life Cycle Management (PLM)'
      ],
      imageUrl: 'assets/images/ilis.jpg',
      altText: 'ILIS Description'
    },
    {
      number: '03',
      title: 'Industrial and Logistics Products and Equipment (ILPE)',
      items: [
        'Product and process design',
        'Reliability and maintenance of equipment',
        'Hygiene, safety, ergonomics and environment',
        'Product and process quality management',
        'System engineering'
      ],
      imageUrl: 'assets/images/ilpe.jpg',
      altText: 'ilpe'
    },
    {
      number: '04',
      title: 'Digital Transformation of Industrial and Logistics Systems (DTILS)',
      items: [
        'Cyber Physical System',
        'Internet of Things',
        'Artificial Intelligence and Machine Learning',
        'Digital Twin and Simulation',
        'Blockchain',
        'Big Data'
      ],
      imageUrl: 'assets/images/dtils.jpg',
      altText: 'dtils'
    },
  ];
}

