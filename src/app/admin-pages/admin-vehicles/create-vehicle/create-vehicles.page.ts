import { Component, OnInit } from '@angular/core';
import { VehiculesListComponent } from "../../../components/vehicules-list/vehicules-list.component";
import { Brand } from '../../../../models/Brand';
import { HttpClient } from '@angular/common/http';
import { BrandService } from '../../../../services/brand/brand.service';
import { Observable } from 'rxjs';
import { Model } from '../../../../models/Model';
import { ModelService } from '../../../../services/model/model.service';
import { CommonModule } from '@angular/common';
import { BrandSelectorComponent } from '../../../admin-components/brand-selector/brand-selector.component';
import { ModelSelectorComponent } from "../../../admin-components/model-selector/model-selector.component";
import { CategorySelectorComponent } from "../../../admin-components/category-selector/category-selector.component";
import { MotorizationSelectorComponent } from "../../../admin-components/motorization-selector/motorization-selector.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ColorSelectorComponent } from "../../../admin-components/color-selector/color-selector.component";
import { VehiculesService } from '../../../../services/vehicules/vehicules.service';
import { Vehicle } from '../../../../models/Vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VehiculesListComponent,
    CommonModule,
    BrandSelectorComponent,
    ModelSelectorComponent,
    CategorySelectorComponent,
    MotorizationSelectorComponent,
    ColorSelectorComponent
],
  templateUrl: './create-vehicles.page.html',
  styleUrl: './create-vehicles.page.scss'
})
export class CreateVehiclesPage implements OnInit{

  public createVehicleForm!: FormGroup;

  constructor(private _vehicleService: VehiculesService, private _router: Router){}

  public brandId!: Observable<number>;


  ngOnInit(): void {
    this.createVehicleForm = new FormGroup({
      brandId: new FormControl(null, Validators.required),
      categoryId: new FormControl(null, Validators.required),
      modelId: new FormControl(null, Validators.required),
      motorizationId: new FormControl(null, Validators.required),
      colorId: new FormControl(2, Validators.required),
      immatriculation: new FormControl(null, Validators.required),
      pictureUrl: new FormControl(null, Validators.required),
    })
  }





  public onFormSubmit = (e: Event)=>{
    e.preventDefault();
    
    if(this.createVehicleForm.valid){
      console.log('VALID');      
      this._vehicleService.create$(this.createVehicleForm.value).subscribe((vehicle: Vehicle) => {
        console.log('result', vehicle);
      });
    }
    else{
      console.log('NOT VALID');
    }
    this._router.navigate(['/admin/vehicles'])
  }

  public onBrandIdChange(selectedBrandId: number){
    this.createVehicleForm.patchValue({brandId: selectedBrandId})
  }  
  
  public onModelIdChange(selectedModelId: number){
    this.createVehicleForm.patchValue({modelId: selectedModelId})
  }

  public onCategoryIdChange(selectedCategoryId: number){
    this.createVehicleForm.patchValue({categoryId: selectedCategoryId})
  }

  public onMotorizationIdChange(selectedMotorizationId: number){
    this.createVehicleForm.patchValue({motorizationId: selectedMotorizationId})
  }

  public onColorIdChange(selectedColorId: number){
    this.createVehicleForm.patchValue({colorId: selectedColorId})
  }
}
