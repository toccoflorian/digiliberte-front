import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrandService } from '../../../../services/brand/brand.service';
import { OnInit } from '@angular/core';
import { CreateBrand } from '../../../../interfaces/CreateOneBrand';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-create-Brand-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatSlideToggleModule,
  ],
  templateUrl: './create-brand-form.component.html',
  styleUrl: './create-brand-form.component.scss',
})
export class CreateBrandComponent implements OnInit {
  public brandForm!: FormGroup;
  private brandFormValue!: any;

  constructor(private _brandServices: BrandService) {}

  ngOnInit(): void {
    this.brandForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  onBrandSubmit(event: Event): void {
    event.preventDefault();
    this.brandFormValue = this.brandForm.value;
    this._brandServices.createBrand(new CreateBrand(this.brandFormValue.name));
  }
}
