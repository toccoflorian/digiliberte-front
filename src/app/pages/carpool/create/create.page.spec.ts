import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarpoolPageComponent } from './create.page';

describe('CreateCarpoolPageComponent', () => {
  let component: CreateCarpoolPageComponent;
  let fixture: ComponentFixture<CreateCarpoolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCarpoolPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCarpoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
