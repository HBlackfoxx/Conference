import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.css']
})
export class ScientificComponent implements OnInit {
  committeeMembers: string[] = [
    'Abbass Wissam | ENSA Marrakech, UCA',
    'Abouelkalam Anas | ENSA Marrakech, UCA',
    'Abourraja Mohamed Nezar | Siemens Gamesa/UHII',
    'Aggour Abdelmounaim | EST, UIZ',
    'Ahlaqqach Mustapha | ESITH Casablanca',
    'Allaoui Ali | EST Beni Mellal, USMS',
    'Azougaghe Ali | ENSA Marrakech, UCA',
    'Behlouli Mohamed |Ibn Tofail University',
    'Behrendt Fabian | Magdeburg-Stendal University of Applied Sciences, Germany',
    'Belhadi Amine | Rabat Business School, UIR',
    'Benazzouz Touria | ENSA Marrakech, UCA',
    'Benghabrit Asmaa | ENSMR, UM5',
    'Benhida Khalid |EST Safi, UCA',
    'Benmamoun Zoubida | Liwa College (LC), Abu Dhabi, United Arab Emirates',
    'Benmoussa Rachid | ENSA Marrakech, UCA',
    'Boulaksil Youssef | United Arab Emirates University',
    'Charkaoui Abdelkabir |FST Settat, UHP',
    'Cherrafi Anass |EST Safi, UCA',
    'Dahbi Samya | ENSA Marrakech, UCA',
    'Dolgui Alexandre | IMT Atlantique, France',
    'Echchatbi Abdelwahed | FST Settat, UHP',
    'Eddabbah Mohamed | EST Essaouira, UCA',
    'EL Alaoui  Mohamed  | ENSA  Beni Mellal, USMS',
    'El-yaagoubi Amina | ISEN, Université Catholique de Lille',
    'Elassali Raja | ENSA Marrakech, UCA',
    'Elbahi Hassan | ENCG, UCA',
    'Elbeid Said | ENSA Marrakech, UCA',
    'Elfizazi Said |EST Safi, UCA',
    'Elhachfi Imene| University of Sousse Higher Institute of Transport and Logistics of Sousse, Tunisia',
    'Elhaloui Loubna | ENSA Marrakech, UCA',
    'Elharouni Fatine | ENSA Marrakech, UCA',
    'Elmhamedi Abderrahman | IUT, Université Paris 8',
    'Erraoui Yassine | EMI, UM5',
    'Faraji Hamza | ENSA Marrakech, UCA',
    'Grine Fatimazahraa | ENSI Tanger',
    'Guilherme F.Frederico | School of Management, Federal University of Paraná (UFPR)',
    'Hamani Nadia | University of Picardie Jules Verne, Amiens, France',
    'Hassini Elkafi  | DeGroote School of Business, McMaster University, Canada',
    'Hatim Anas| ENSA Marrakech, UCA',
    'Jay Daniel | Derby Business School at the University of Derby, England, UK',
    'Jayaraman Raja | New Mexico State University, Las Cruces, NM USA',
    'Kriraa Mounir | ENSA Safi, UCA',
    'Laaouina Loubna |ENSA Fès, USMBA',
    'Labbi Oulfa | ENSAM, UMI',
    'Mahfoud Hassana | ENSAM, UMI',
    'Mellouli Elmehdi | ENSA Fès, USMBA',
    'Minner Stefan | TUM School of Management, Germany',
    'Mousrij Ahmed | FST Settat, UHP',
    'Mumtaz Jabir | Capital University of Science and Technology Islamabad, Pakistan',
    'Riane Fouad | Ecole Centrale Casablanca (ECC)',
    'Touriki Fatima | ENSA Safi, UCA',
    'Zrikem Maria | ENSA Marrakech, UCA'
  ];


  firstColumn: string[] = [];
  secondColumn: string[] = [];
  visibleMembers: number = 8; // Number of members to show initially
  isLoading: boolean = false; // Loading state

  ngOnInit() {
    // Sort the names alphabetically
    this.committeeMembers.sort((a, b) => a.localeCompare(b));

    // Initialize with only a subset of members
    this.updateColumns();
  }

  updateColumns() {
    const limitedMembers = this.committeeMembers.slice(0, this.visibleMembers);
    
    // Split into two columns in an alternating pattern
    this.firstColumn = limitedMembers.filter((_, index) => index % 2 === 0);
    this.secondColumn = limitedMembers.filter((_, index) => index % 2 !== 0);
  }

  loadMore() {
    this.isLoading = true; // Show loading animation

    setTimeout(() => {
      this.visibleMembers += 8; // Load 8 more members
      this.updateColumns();
      this.isLoading = false; // Hide loading animation
    }, 1000); // Simulate loading delay
  }

  get hasMore(): boolean {
    return this.visibleMembers < this.committeeMembers.length;
  }
}