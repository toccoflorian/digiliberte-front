import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../../../../models/Vehicle';
import { VehiculesService } from '../../../../services/vehicules/vehicules.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {

  public vehicles$!: Observable<Vehicle[]>;

  constructor(private _vehicleService: VehiculesService){}


  ngOnInit(){
    this.vehicles$ = this._vehicleService.loadAll$();
    this.vehicles$.subscribe((v)=>{
      console.log('sub',v);
      
    })
  }
}
