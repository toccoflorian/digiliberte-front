import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolCreationComponent } from './carpool-creation.component';

describe('CarpoolCreationComponent', () => {
  let component: CarpoolCreationComponent;
  let fixture: ComponentFixture<CarpoolCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarpoolCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
