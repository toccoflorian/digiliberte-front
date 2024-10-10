import { Component, Output, output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Model } from '../../../models/Model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Motorization } from '../../../models/Motorization';
import { MotorizationService } from '../../../services/motorization/motorization.service';

@Component({
  selector: 'app-color-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './color-selector.component.html',
  styleUrl: './color-selector.component.scss'
})
export class ColorSelectorComponent {
  public color$!: Observable<Motorization[]>;


  public modelForm!: FormGroup;
  public formIsActive: boolean = false;

  public selectedColorId!: number;
  @Output('modelId') colorId: Subject<number> = new Subject<number>();


  constructor(private _motorizationService: MotorizationService){}


  public ngOnInit(): void {
      this.color$ = this._motorizationService.loadAll$();


      this.modelForm = new FormGroup({
        name: new FormControl(null, Validators.required),
      })
  } // tes

  public create(e: Event){ 
    e.preventDefault();
    console.log('ik');
    
    if(this.modelForm.valid){
      console.log(this.modelForm.value);
      this._motorizationService.create$(this.modelForm.value).subscribe((color: Motorization)=>{
        this.color$ = this._motorizationService.loadAll$();
        this.onClick();
        
        
      })
    }
  }

  public onClick(){
    this.formIsActive = !this.formIsActive;
  }

  public onColorSelected(){
    this.colorId.next(this.selectedColorId);
  }
}
