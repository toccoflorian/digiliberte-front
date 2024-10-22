import { carouselVehiclesComponent } from './../../components/carousel-vehicule/carousel-vehicule.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RentService } from '../../../services/rent/rent.service';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationService } from '../../../services/security/authentication.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Vehicle } from '../../../models/Vehicle';

@Component({
  selector: 'app-reservation-vehicules',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    carouselVehiclesComponent,
  ],
  templateUrl: './reservation-vehicules.component.html',
  styleUrls: ['./reservation-vehicules.component.scss'],
})
export class ReservationVehiculesComponent implements OnInit {
  public reservationForm!: FormGroup;
  public selectedVehicle: boolean = true; // Store selected vehicle details
  public userId!: string | null;

  constructor(
    private rentService: RentService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur connecté
    // this.userId = this.authService.getUserId();
    // Initialize the form with default values or empty fields
    this.reservationForm = new FormGroup({
      vehiceId: new FormControl(undefined, [Validators.required]), // Vehicle ID will be updated when a vehicle is selected
      // userFirstname: new FormControl('', [Validators.required]),
      // userLastname: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      returnDate: new FormControl('', [Validators.required]),
      // userId: new FormControl(this.userId, [Validators.required]),
    });
  }

  // Method to handle the selected vehicle from the carrousel
  onVehiculeSelected(vehicle: Vehicle): void {
    console.log('Vehicle selected:', vehicle);

    this.reservationForm.get('vehiceId')?.setValue(vehicle.vehicleId);
    // this.selectedVehicle = vehicle;
    // // Update form control with the selected vehicle's ID
    // this.reservationForm.patchValue({
    //   vehicleId: vehicle.vehicleId, // Update the vehicleId field with the selected vehicle's ID
    // });
  }

  // Method triggered when the form is submitted
  onSubmit(): void {
    console.log('onSubmit: ', this.reservationForm.value);
    console.log('valid: ', this.selectedVehicle );
    
    
    if (this.reservationForm.valid && this.selectedVehicle) {
      const formData = this.reservationForm.value;
      console.log('Form submitted:', formData);

      // Call rentService to create the rent
      this.rentService.create$(formData).subscribe({
        next: (response) => {
          console.log('Rent successfully created:', response);
        },
        error: (error) => {
          console.log('Error creating rent:', error);
        },
      });
    } else {
      console.log('Form is invalid or no vehicle selected.');
    }
  }
}
