import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoComponentsComponent } from './geo-components.component';

describe('GeoComponentsComponent', () => {
  let component: GeoComponentsComponent;
  let fixture: ComponentFixture<GeoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
