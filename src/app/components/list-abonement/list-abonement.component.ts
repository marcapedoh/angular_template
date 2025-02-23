import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-abonement',
  templateUrl: './list-abonement.component.html',
  styleUrls: ['./list-abonement.component.css']
})
export class ListAbonementComponent {
  constructor(private router: Router) {}

  onSubmit() {
    console.log('Bouton cliqué !');
  }
  goToAddClient() {
    this.router.navigate(['/add-client']);
  }

  
  goToManageAbonement() {
    this.router.navigate(['/manage-abonement']);
  }

  goToSubcribe() {
    this.router.navigate(['/subcribe']);
  }

  goToListAbonement() {
    this.router.navigate(['/list-abonement']);
  }
}
