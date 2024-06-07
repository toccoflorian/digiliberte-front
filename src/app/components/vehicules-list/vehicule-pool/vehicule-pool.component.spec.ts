import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculePoolComponent } from './vehicule-pool.component';

describe('VehiculePoolComponent', () => {
  let component: VehiculePoolComponent;
  let fixture: ComponentFixture<VehiculePoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculePoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
