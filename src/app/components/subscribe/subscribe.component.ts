import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
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
