import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbonementComponent } from './list-abonement.component';

describe('ListAbonementComponent', () => {
  let component: ListAbonementComponent;
  let fixture: ComponentFixture<ListAbonementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAbonementComponent]
    });
    fixture = TestBed.createComponent(ListAbonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
