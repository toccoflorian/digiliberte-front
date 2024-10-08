import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreLocationComponent } from './filtre-location.component';

describe('FiltreLocationComponent', () => {
  let component: FiltreLocationComponent;
  let fixture: ComponentFixture<FiltreLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltreLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
