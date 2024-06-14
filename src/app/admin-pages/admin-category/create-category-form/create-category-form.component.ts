import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryService } from '../../../../services/category/category.service';
import { CreateCategory } from '../../../../interfaces/CreateOneCategory';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-create-motorisation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatSlideToggleModule,
  ],
  templateUrl: './create-category-form.component.html',
  styleUrl: './create-category-form.component.scss',
})
export class CreateCategoryComponent implements OnInit {
  public categoryForm!: FormGroup;
  private categoryFormValue!: any;

  constructor(private _categoryServices: CategoryService) {}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      seatsNumber: new FormControl('', [Validators.required]),
    });
  }

  onCategorySubmit(event: Event): void {
    event.preventDefault();
    this.categoryFormValue = this.categoryForm.value;
    this._categoryServices.createCategory(
      new CreateCategory(
        this.categoryFormValue.name,
        this.categoryFormValue.seatsNumber
      )
    );
  }
}
