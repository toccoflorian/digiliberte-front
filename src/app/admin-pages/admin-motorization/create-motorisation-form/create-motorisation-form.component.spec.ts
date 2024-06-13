import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMotorisationComponent } from './create-motorisation-form.component';

describe('CreateMotorisationFormComponent', () => {
  let component: CreateMotorisationComponent;
  let fixture: ComponentFixture<CreateMotorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMotorisationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMotorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
