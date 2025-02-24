import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.css']
})
export class ScientificComponent implements OnInit {
  committeeMembers = [
    'Ahlaqqach Mustapha | ESITH Casablanca',
    'El Harraki Imad | ENIM Rabat',
    'Allaoui Ali | EST Béni Mellal USMS',
    'El Mhamedi Abderrahman | Paris 8 University',
    'Allaoui Hamid | University of Artois',
    'Elassali Raja | ENSA Marrakech, UCA',
    'Auhmani Khalid | ENSA Marrakech, UCA',
    'Elfezazi Said | EST SAFI, UCA',
    'Belhadi Amine | Rabat Business School, UIR',
    'Elharouni Fatine | ENSA Marrakech, UCA',
    'Benazzouz Touria | ENSA Marrakech, UCA',
    'Essaber Fatima Ezzahra | ENSA Marrakech, UCA',
    'Benhammou Abdelaziz | ENSA Safi, UCA',
    'Hatim Anas ENSA Marrakech, UCA',
    'Benhida Khalid | EST Safi, UCA',
    'Idboufker Noureddine | ENSA Marrakech, UCA',
    'Benmoussa Rachid | ENSA Marrakech, UCA',
    'Irhirane El Hassan | ENSA Marrakech, UCA',
    'Bouyahia Fatima | ENSA Marrakech, UCA',
    'Laaouina Loubna | ENSA Fez, USMBA',
    'Charkaoui Abdelkabir | FST Settat, UH1',
    'Latif Adnane | ENSA Marrakech, UCA',
    'Cherrafi Anass | EST Safi, UCA',
    'Nejeoui Abderrazzak | ENSA Marrakech, UCA',
    'Dahbi Samya | ENSA Marrakech, UCA',
    'Starostka-Patyk Marta | Czestochowa University of Technology',
    'Dakkak Badr | ENSA Marrakech, UCA',
    'Tajer Abdelouahed | ENSA Marrakech, UCA',
    'Echchatbi Abdelwahed | FST Settat, UH1',
    'Touriki Fatima Ezzahra | ENSA SAFI, UCA',
    'Elbeid Said | ENSA Marrakech, UCA'
  ];

  firstColumn: string[] = [];
  secondColumn: string[] = [];

  ngOnInit() {
    // Split the array into two columns
    this.committeeMembers.forEach((member, index) => {
      if (index % 2 === 0) {
        this.firstColumn.push(member);
      } else {
        this.secondColumn.push(member);
      }
    });
  }
}


