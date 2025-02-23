import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-abonement',
  templateUrl: './manage-abonement.component.html',
  styleUrls: ['./manage-abonement.component.css']
})
export class ManageAbonementComponent {
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
