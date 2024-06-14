import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorizationComponent } from './create-motorisation-form.component';

describe('CreateMotorisationFormComponent', () => {
  let component: MotorizationComponent;
  let fixture: ComponentFixture<MotorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorizationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MotorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
