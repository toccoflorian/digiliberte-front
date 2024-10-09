import { Component, Output } from '@angular/core';
import { Observable, of, Subject, tap } from 'rxjs';
import { Brand } from '../../../models/Brand';
import { Model } from '../../../models/Model';
import { BrandService } from '../../../services/brand/brand.service';
import { ModelService } from '../../../services/model/model.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormModule } from '@coreui/angular';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-brand-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './brand-selector.component.html',
  styleUrl: './brand-selector.component.scss'
})
export class BrandSelectorComponent {
  public brands$!: Observable<Brand[]>;

  public brandForm!: FormGroup;
  public brandFormIsActive: boolean = false;
  public selectedBrandId!: number;
  @Output('brandId') brandId: Subject<number> = new Subject<number>;



  constructor(private _brandService: BrandService){}


  public ngOnInit(): void {
      this.brands$ = this._brandService.loadAll$().pipe(tap((b:Brand[])=>{console.log('brands:', b);}));

      this.brandForm = new FormGroup({
        name: new FormControl('', Validators.required),
      })
  } // tes

  public createBrand(e: Event): void{
    e.preventDefault();
    console.log('ik');
    
    if(this.brandForm.valid){
      console.log(this.brandForm.value);
      this._brandService.create$(this.brandForm.value).subscribe((brand: Brand)=>{
        this.brands$ = this._brandService.loadAll$();
        this.onClick();
      })
    }
  }

  public onClick(): void{
    this.brandFormIsActive = !this.brandFormIsActive;
  }

  public onSelect(e: Event): void{
    console.log('select', this.selectedBrandId);
    this.brandId.next(this.selectedBrandId);
  }
   
}
