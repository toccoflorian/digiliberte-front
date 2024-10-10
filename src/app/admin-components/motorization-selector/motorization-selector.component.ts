import { Component, Output, output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Model } from '../../../models/Model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Motorization } from '../../../models/Motorization';
import { MotorizationService } from '../../../services/motorization/motorization.service';

@Component({
  selector: 'app-motorization-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './motorization-selector.component.html',
  styleUrl: './motorization-selector.component.scss'
})
export class MotorizationSelectorComponent {
  public motorization$!: Observable<Motorization[]>;


  public modelForm!: FormGroup;
  public formIsActive: boolean = false;

  public selectedModelId!: number;
  @Output('modelId') modelId: Subject<number> = new Subject<number>();


  constructor(private _motorizationService: MotorizationService){}


  public ngOnInit(): void {
      this.motorization$ = this._motorizationService.loadAll$();


      this.modelForm = new FormGroup({
        name: new FormControl(null, Validators.required),
      })
  } // tes

  public create(e: Event){ 
    e.preventDefault();
    console.log('ik');
    
    if(this.modelForm.valid){
      console.log(this.modelForm.value);
      this._motorizationService.create$(this.modelForm.value).subscribe((model: Motorization)=>{
        this.motorization$ = this._motorizationService.loadAll$();
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
