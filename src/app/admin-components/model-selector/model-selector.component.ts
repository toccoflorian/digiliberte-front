import { Component, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Model } from '../../../models/Model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelService } from '../../../services/model/model.service';
import { CommonModule } from '@angular/common';
import { BrandService } from '../../../services/brand/brand.service';

@Component({
  selector: 'app-model-selector',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './model-selector.component.html',
  styleUrl: './model-selector.component.scss'
})
export class ModelSelectorComponent {
  public models$!: Observable<Model[]>;


  public modelForm!: FormGroup;
  public formIsActive: boolean = false;

  public selectedModelId!: number;
  @Output('modelId') modelId: Subject<number> = new Subject<number>();


  constructor(private _modelService: ModelService, private _brandService: BrandService){}


  public ngOnInit(): void {
      this.models$ = this._modelService.loadAll$();


      this.modelForm = new FormGroup({
        Name: new FormControl(null, Validators.required),
        Co2: new FormControl(null, Validators.required),
        Year: new FormControl(null, Validators.required),
      })
  } // tes

  public create(e: Event){
    e.preventDefault();
    console.log('ik');
    
    if(this.modelForm.valid){
      console.log(this.modelForm.value);
      this._modelService.create$(this.modelForm.value).subscribe((model: Model)=>{
        this.models$ = this._modelService.loadAll$();
        this.onClick();
        
        
      })
    }
  }

  public onClick(){
    this.formIsActive = !this.formIsActive;
  }

  public onModelSelected(){
    this.modelId.next(this.selectedModelId);
  }
}
