import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Vehicle } from '../../../../models/Vehicle';
import { VehiculesService } from '../../../../services/vehicules/vehicules.service';
import { CommonModule } from '@angular/common';
import { CdkListboxModule } from '@angular/cdk/listbox';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    CdkListboxModule,
  ],
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss', 'dropdown-button.css'],
})
export class VehiclesComponent {
  public vehicles$!: Observable<Vehicle[]>;

  constructor(private _vehicleService: VehiculesService) {}

  ngOnInit() {
    this.vehicles$ = this._vehicleService.loadAll$();
    this.vehicles$.subscribe((v) => {
      console.log('sub', v);
    });
  }
}
