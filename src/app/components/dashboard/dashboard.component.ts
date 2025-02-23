import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenereicService } from '../services/service-gen/genereic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customers: any[] = []
  packs: any[] = []
  constructor(private router: Router, private genericService: GenereicService) { }

  ngOnInit(): void {
    this.genericService.findAll("customers").subscribe((data: any) => {
      this.customers = data;
    })

    this.genericService.findAll("packs").subscribe((data: any) => {
      this.packs = data
    })
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

}
