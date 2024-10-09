import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVehiclesPage } from './create-vehicles.page';


describe('CreateVehiclesPage', () => {
  let component: CreateVehiclesPage;
  let fixture: ComponentFixture<CreateVehiclesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVehiclesPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVehiclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
