import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reservation-vehicules',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservation-vehicules.component.html',
  styleUrls: ['./reservation-vehicules.component.scss'],
})
export class ReservationVehiculesComponent implements OnInit {
  public reservationForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reservationForm = new FormGroup({
      vehicleType: new FormControl('', [Validators.required]),
      pickupDate: new FormControl('', [Validators.required]),
      returnDate: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      customerEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      console.log('Reservation details:', this.reservationForm.value);
      // Ici, vous pouvez ajouter la logique pour envoyer les détails de réservation à votre service
    } else {
      console.log('Form is invalid');
    }
  }
}
