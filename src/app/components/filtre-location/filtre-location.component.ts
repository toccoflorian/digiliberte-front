import { Component, OnInit } from '@angular/core';
import { CategorySelectorComponent } from "../../admin-components/category-selector/category-selector.component";
import { ModelSelectorComponent } from "../../admin-components/model-selector/model-selector.component";
import { BrandSelectorComponent } from "../../admin-components/brand-selector/brand-selector.component";
import { MotorizationSelectorComponent } from "../../admin-components/motorization-selector/motorization-selector.component";
import { ColorSelectorComponent } from "../../admin-components/color-selector/color-selector.component";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehiculesService } from '../../../services/vehicules/vehicules.service';
import { Observable } from 'rxjs';
import { Vehicle } from '../../../models/Vehicle';
import { DatePickerComponent } from "../date-picker/date-picker.component";

@Component({
  selector: 'app-filtre-location',
  standalone: true,
  imports: [
    CategorySelectorComponent,
    ModelSelectorComponent,
    BrandSelectorComponent,
    MotorizationSelectorComponent,
    ColorSelectorComponent,
    CommonModule,
    ReactiveFormsModule,
    DatePickerComponent
],
  templateUrl: './filtre-location.component.html',
  styleUrl: './filtre-location.component.scss'
})
export class FiltreLocationComponent implements OnInit {

  public filtreVehiclesForm!: FormGroup;
  public vehicules$!: Observable<Vehicle[]>;

  constructor(private _vehicleService: VehiculesService){}
  dateNow : Date = new Date();
  ngOnInit(): void {
      this.filtreVehiclesForm = new FormGroup({
        dateDebut: new FormControl(this.dateNow.getDate()),
        dateFin: new FormControl(this.dateNow.setDate(this.dateNow.getDate() + 1)),
        categoryId: new FormControl(null),
        motorizationId: new FormControl(null),
        seatsNumber: new FormControl(null)
      })
  }

  public onFormSubmit = (e: Event)=>{
    e.preventDefault();
    if(this.filtreVehiclesForm.valid)
    {
      console.log('valid');
      this.vehicules$ = this._vehicleService.loadAll$();
      this.vehicules$.subscribe((v) => 
        {
          console.log('sub', v);
        });
    }else{
      console.log('NOT VALID')
    }
  }
}
