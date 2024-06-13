import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolReservationComponent } from './carpool-reservation.component';

describe('CarpoolReservationComponent', () => {
  let component: CarpoolReservationComponent;
  let fixture: ComponentFixture<CarpoolReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolReservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarpoolReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
