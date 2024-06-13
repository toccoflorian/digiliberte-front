import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MotorizationService } from '../../../../services/motorization/motorisation.service';
import { CreateMotorization } from '../../../../interfaces/CreateMotorization';
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
  templateUrl: './create-motorisation-form.component.html',
  styleUrl: './create-motorisation-form.component.scss',
})
export class CreateMotorizationComponent implements OnInit {
  public motorizationForm!: FormGroup;
  private motorizationFormValue!: any;

  constructor(private _motorizationServices: MotorizationService) {}

  ngOnInit(): void {
    this.motorizationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  onMotorizationSubmit(event: Event): void {
    event.preventDefault();
    this.motorizationFormValue = this.motorizationForm.value;
    this._motorizationServices.createMotorization(
      new CreateMotorization(this.motorizationFormValue.name)
    );
  }
}
