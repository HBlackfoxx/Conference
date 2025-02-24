import { Component, OnInit } from '@angular/core';

interface Chair {
  title: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-organizing-chairs',
  templateUrl: './organizing-chairs.component.html',
  styleUrls: ['./organizing-chairs.component.css']
})
export class OrganizingChairsComponent implements OnInit {
  chairs: Chair[] = [
    { title: 'General chair', name: 'Mr. BENMOUSSA Rachid', email: 'r.benmoussa@uca.ma' },
    { title: 'Production chair', name: 'Ms. BENAZZOUZ Touria', email: 't.benazzouz@uca.ma' },
    { title: 'Scientific chair', name: 'Ms. BOUYAHIA Fatima', email: 'f.bouyahia@uca.ac.ma' },
    { title: 'Financial chair', name: 'Ms. ESSABER Fatima Ezzahra', email: 'essaberfatimaezzahra@gmail.com'},
    { title: 'Logistic chair', name: 'Ms. DAHBI Samia', email: 's.dahbi@uca.ma' },
    { title: 'Logistic chair', name: 'Ms. ELHAROUNI Fatine', email: 'f.elharouni@uca.ac.ma' },
    { title: 'Industrial chair', name: 'Mr. IRHIRANE Elhassan', email: 'e.irhirane@uca.ac.ma' },
    { title: 'Industrial chair', name: 'Mr. DAKKAK Badr', email: 'b.dakkak@uca.ac.ma' }
  ];

  ngOnInit(): void {
  }
}
