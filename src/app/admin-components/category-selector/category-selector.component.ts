import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Model } from '../../../models/Model';
import { ModelService } from '../../../services/model/model.service';
import { BrandService } from '../../../services/brand/brand.service';
import { CommonModule } from '@angular/common';
import { Category } from '../../../models/Category';
import { CategoryService } from '../../../services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './category-selector.component.html',
  styleUrl: './category-selector.component.scss'
})
export class CategorySelectorComponent {
  public categories$!: Observable<Category[]>;


  public modelForm!: FormGroup;
  public formIsActive: boolean = false;

  public selectedCategoryId!: number;
  @Output('categoryId') categoryId: Subject<number> = new Subject<number>();

  constructor(private _categoryService: CategoryService, private _router: Router){}


  public ngOnInit(): void {
      this.categories$ = this._categoryService.loadAll$();


      this.modelForm = new FormGroup({
        Name: new FormControl(null, Validators.required),
        Co2: new FormControl(null, Validators.required),
        Year: new FormControl(null, Validators.required),
      })
  } // tes

  public create(e: Event){
    e.preventDefault();
    this._router.navigate(['/admin/category']);
  }

  public onClick(){
    this.formIsActive = !this.formIsActive;
  }

  public onCategorySelected(): void{
    this.categoryId.next(this.selectedCategoryId);
  }
}
