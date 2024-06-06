import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurggermenuComponent } from './burggermenu.component';

describe('BurggermenuComponent', () => {
  let component: BurggermenuComponent;
  let fixture: ComponentFixture<BurggermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurggermenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurggermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
