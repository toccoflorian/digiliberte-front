import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LocationPage } from "./location.page";

describe("ReservationVehiculesComponent", () => {
  let component: LocationPage;
  let fixture: ComponentFixture<LocationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
