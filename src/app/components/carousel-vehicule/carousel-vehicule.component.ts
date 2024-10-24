import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../../../models/Vehicle';
import { VehiculesService } from '../../../services/vehicules/vehicules.service';
import {
  CarouselComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
} from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel-vehicule',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    MatIconModule,
  ],
  templateUrl: './carousel-vehicule.component.html',
  styleUrls: ['./carousel-vehicule.component.scss'],
})
export class carouselVehiclesComponent implements OnInit {
  public vehicles$: Observable<Vehicle[]>;

  // @Output to emit selected vehicle
  @Output() vehiculeSelected = new EventEmitter<Vehicle>();

  selectedVehicleIndex: number = 0; // Track current active vehicle

  constructor(private _vehicleService: VehiculesService) {
    this.vehicles$ = this._vehicleService.loadAll$();
  }

  ngOnInit() {
    this.vehicles$.subscribe((vehicles) => {
      if (vehicles && vehicles.length > 0) {
        this.selectVehicle(vehicles[this.selectedVehicleIndex]);
      }
    });
  }

  // Method to emit the selected vehicle
  selectVehicle(vehicle: Vehicle) {
    this.vehiculeSelected.emit(vehicle);
  }

  // Update the current active vehicle when user clicks next/prev
  onCarouselMove(index: number, vehicles: Vehicle[]) {
    this.selectedVehicleIndex = index;
    this.selectVehicle(vehicles[this.selectedVehicleIndex]);
  }

  getImageUrl(vehicle: Vehicle): string {
    return `./../../../assets/vehiculesPictures/${vehicle.pictureUrl}`;
  }
}
