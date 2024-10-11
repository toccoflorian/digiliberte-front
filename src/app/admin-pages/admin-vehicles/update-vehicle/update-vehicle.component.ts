import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../../../models/Vehicle';
import { VehiculesService } from '../../../../services/vehicules/vehicules.service';
import { BrandSelectorComponent } from "../../../admin-components/brand-selector/brand-selector.component";
import { ModelSelectorComponent } from "../../../admin-components/model-selector/model-selector.component";
import { CategorySelectorComponent } from "../../../admin-components/category-selector/category-selector.component";
import { MotorizationSelectorComponent } from "../../../admin-components/motorization-selector/motorization-selector.component";
import { ColorSelectorComponent } from "../../../admin-components/color-selector/color-selector.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-vehicle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BrandSelectorComponent, ModelSelectorComponent, CategorySelectorComponent, MotorizationSelectorComponent, ColorSelectorComponent],
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.scss'
})
export class UpdateVehicleComponent {

  public vehicle!: Vehicle;

  public form!: FormGroup;


  constructor(private route: ActivatedRoute, private _vehicleService: VehiculesService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['vehicleId'];
      this._vehicleService.getById$(id).subscribe((v)=>{
        console.log('vehi', v);
        this.vehicle = v;
      })
    });
    
  }

  onSubmit(e: Event){
    console.log('submit');


    
  }

  public onBrandIdChange(selectedBrandId: number){
    this.form.patchValue({brandId: selectedBrandId})
  }  
  
  public onModelIdChange(selectedModelId: number){
    this.form.patchValue({modelId: selectedModelId})
  }

  public onCategoryIdChange(selectedCategoryId: number){
    this.form.patchValue({categoryId: selectedCategoryId})
  }

  public onMotorizationIdChange(selectedMotorizationId: number){
    this.form.patchValue({motorizationId: selectedMotorizationId})
  }

  public onColorIdChange(selectedColorId: number){
    this.form.patchValue({colorId: selectedColorId})
  }


}
