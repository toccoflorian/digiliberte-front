import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoNavbarComponent } from './geo-navbar.component';

describe('GeoNavbarComponent', () => {
  let component: GeoNavbarComponent;
  let fixture: ComponentFixture<GeoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
