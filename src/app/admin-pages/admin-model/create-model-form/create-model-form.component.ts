import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModelService } from './../../../../services/model/model.service';
import { OnInit } from '@angular/core';
import { CreateModel } from '../../../../interfaces/CreateOnModel';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
})
export class CreateModelComponent implements OnInit {
  public modelForm!: FormGroup;
  private modelFormValue!: any;

  constructor(private _modelServices: ModelService) {}

  ngOnInit(): void {
    this.modelForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      co2: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
    });
  }

  onModelSubmit(event: Event): void {
    event.preventDefault();
    console.log('event : ', event);
    this.modelFormValue = this.modelForm.value;
    this._modelServices.createModel(
      new CreateModel(
        this.modelFormValue.name,
        this.modelFormValue.co2,
        this.modelFormValue.year
      )
    );
  }
}
