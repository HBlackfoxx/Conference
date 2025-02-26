import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.css']
})
export class ScientificComponent implements OnInit {
  committeeMembers: string[] = [
    'Abdelkabir Charkaoui | FST Settat, UHP',
    'Abdelmounaim Aggour | EST, UIZ',
    'Abdelwahed Echchatbi | FST Settat, UHP',
    'Ahmed Mousrij | FST Settat, UHP',
    'Ali Allaoui | EST Béni Mellal, USMS',
    'Amina El-yaagoubi | ISEN, Université Catholique de Lille',
    'Amine Belhadi | Rabat Business School, UIR',
    'Anass Cherrafi | EST Safi, UCA',
    'Asmaa Benghabrit | ENSMR, UM5',
    'Elmehdi Mellouli | ENSA Fès, USMBA',
    'Fatima Touriki | ENSA Safi, UCA',
    'Fatimazahraa Grine | ENSI',
    'Guilherme F.Frederico | School of Management, Federal University of Paraná (UFPR)',
    'Hamza Faraji | ENSA Marrakech, UCA',
    'Hassan Elbahi | ENCG, UCA',
    'Hassana Mahfoud | ENSAM, UMI',
    'Khalid Benhida | EST Safi, UCA',
    'Loubna Laaouina | ENSA Fès, USMBA',
    'Mohamed Eddabbah | EST Essaouira, UCA',
    'Mustapha Ahlaqqach | ESITH Casablanca',
    'Nadia Hamani | University of Picardie Jules Verne, Amiens, France',
    'Oulfa Labbi | ENSAM, UMI',
    'Rachid Benmoussa | ENSA Marrakech, UCA',
    'Said Elbeid | ENSA Marrakech, UCA',
    'Said Elfizazi | FST Settat, UHP',
    'Samya Dahbi | ENSA Marrakech, UCA',
    'Touria Benazzouz | ENSA Marrakech, UCA',
    'Yassine Erraoui | EMI, UM5',
    'Youssef Boulaksil | United Arab Emirates University'
  ];

  firstColumn: string[] = [];
  secondColumn: string[] = [];

  ngOnInit() {
    // Sort the names alphabetically
    this.committeeMembers.sort((a, b) => a.localeCompare(b));

    // Split into two columns in an alternating pattern
    const mid = Math.ceil(this.committeeMembers.length / 2);
    this.firstColumn = this.committeeMembers.slice(0, mid);
    this.secondColumn = this.committeeMembers.slice(mid);
  }
}
