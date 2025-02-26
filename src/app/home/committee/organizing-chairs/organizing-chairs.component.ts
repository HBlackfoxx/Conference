import { Component } from '@angular/core';

@Component({
  selector: 'app-organizing-chairs',
  templateUrl: './organizing-chairs.component.html',
  styleUrls: ['./organizing-chairs.component.css']
})
export class OrganizingChairsComponent {
  steeringCommittee = 'Pr. BENMOUSSA Rachid';
  generalChair = 'Pr. BENAZZOUZ Touria';
  organizingCommitteeMembers = [
    'Pr. DAHBI Samya',
    'Pr. EDDABBAH Mohamed',
    'Pr. EL BEID Said',
    'Pr. EL HALOUI Loubna',
    'Pr. FARAJI Hamza',
    'Pr. HATIM Anas'
  ];
}
