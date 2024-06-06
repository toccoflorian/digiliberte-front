import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleboxComponent } from './titlebox.component';

describe('TitleboxComponent', () => {
  let component: TitleboxComponent;
  let fixture: ComponentFixture<TitleboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
