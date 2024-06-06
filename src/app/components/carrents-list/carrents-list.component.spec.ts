import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrentsListComponent } from './carrents-list.component';

describe('CarrentsListComponent', () => {
  let component: CarrentsListComponent;
  let fixture: ComponentFixture<CarrentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrentsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
