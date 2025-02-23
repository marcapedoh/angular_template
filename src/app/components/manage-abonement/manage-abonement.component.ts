import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenereicService } from '../services/service-gen/genereic.service';

@Component({
  selector: 'app-manage-abonement',
  templateUrl: './manage-abonement.component.html',
  styleUrls: ['./manage-abonement.component.css']
})
export class ManageAbonementComponent {

  offerName: string = ''
  durationMonths: number = 0
  monthlyPrice: number = 0
  constructor(private router: Router, private genericService: GenereicService) { }

  onSubmit() {
    const pack = {
      offerName: this.offerName,
      durationMonths: this.durationMonths,
      monthlyPrice: this.monthlyPrice
    }
    this.genericService.create("packs", pack).subscribe(data => {
      this.router.navigate([""])
    })
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
