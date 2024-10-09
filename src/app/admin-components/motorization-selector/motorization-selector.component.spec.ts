import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorizationSelectorComponent } from './motorization-selector.component';

describe('MotorizationSelectorComponent', () => {
  let component: MotorizationSelectorComponent;
  let fixture: ComponentFixture<MotorizationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorizationSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorizationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
