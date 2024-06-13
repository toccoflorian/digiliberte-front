import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModelComponent } from './create-model-form.component';

describe('CreateModelFormComponent', () => {
  let component: CreateModelComponent;
  let fixture: ComponentFixture<CreateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateModelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
