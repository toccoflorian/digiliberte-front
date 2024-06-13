import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarpoolsComponent } from './my-carpools.component';

describe('MyCarpoolsComponent', () => {
  let component: MyCarpoolsComponent;
  let fixture: ComponentFixture<MyCarpoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCarpoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCarpoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
