import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAbonementComponent } from './manage-abonement.component';

describe('ManageAbonementComponent', () => {
  let component: ManageAbonementComponent;
  let fixture: ComponentFixture<ManageAbonementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAbonementComponent]
    });
    fixture = TestBed.createComponent(ManageAbonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
