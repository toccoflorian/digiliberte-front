import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormboxComponent } from './formbox.component';

describe('FormboxComponent', () => {
  let component: FormboxComponent;
  let fixture: ComponentFixture<FormboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
