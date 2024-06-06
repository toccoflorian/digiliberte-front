import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarshareComponent } from './carshare.component';

describe('CarshareComponent', () => {
  let component: CarshareComponent;
  let fixture: ComponentFixture<CarshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarshareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
