import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenereicService } from '../services/service-gen/genereic.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  firstName: string = ''
  lastName: string = ''
  phoneNumber: string = ''
  constructor(private router: Router, private genericService: GenereicService) { }

  ngOnInit(): void {

  }
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

  createCustomer() {
    const customer = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    }
    this.genericService.create("customers", customer).subscribe(data=>{
      this.router.navigate([""])
    })
  }

}
