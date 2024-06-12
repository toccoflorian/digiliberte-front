import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarpoolsPageComponent } from './my-carpools.page';

describe('MyCarpoolsPageComponent', () => {
  let component: MyCarpoolsPageComponent;
  let fixture: ComponentFixture<MyCarpoolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCarpoolsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCarpoolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
