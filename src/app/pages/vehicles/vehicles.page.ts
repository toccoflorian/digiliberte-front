import { Component, OnInit } from '@angular/core';
import { VehiculesListComponent } from "../../components/vehicules-list/vehicules-list.component";
import { Brand } from '../../../models/Brand';
import { HttpClient } from '@angular/common/http';
import { BrandService } from '../../../services/brand/brand.service';
import { Observable } from 'rxjs';
import { Model } from '../../../models/Model';
import { ModelService } from '../../../services/model.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [VehiculesListComponent, CommonModule],
  templateUrl: './vehicles.page.html',
  styleUrl: './vehicles.page.scss'
})
export class VehiclesPage implements OnInit{

  public brands$!: Observable<Brand[]>;
  public models$!: Observable<Model[]>;


  constructor(private _brandService: BrandService, private _modelService: ModelService){}


  ngOnInit(): void {
      this.brands$ = this._brandService.loadAll$();
      this.models$ = this._modelService.loadAll$()
  }


  public createBrand = () => {
    console.log('create brand');
    
  }


  public oncreateVehicleFormSubmit = (e: Event)=>{
    e.preventDefault();
  }
}
