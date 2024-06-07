import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarshareListComponent } from './carshare-list.component';

describe('CarshareListComponent', () => {
  let component: CarshareListComponent;
  let fixture: ComponentFixture<CarshareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarshareListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarshareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
