import { Component, OnInit } from '@angular/core';
import { RentService } from '../../../services/rent/rent.service';
import { Rent } from '../../../models/Rent';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import GetRentsByUserAsync from '../../../interfaces/GetRentsByUserAsync';

@Component({
  selector: 'app-recap-location',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './recap-location.component.html',
  styleUrls: ['./recap-location.component.scss'],
})
export class RecapLocationComponent implements OnInit {
  public userRents: GetRentsByUserAsync[] = [];
  public currentDate: Date = new Date();

  constructor(private _rentService: RentService) {}

  ngOnInit(): void {
    // Souscription à l'observable pour obtenir les Rent[]
    this._rentService.loadRentByUser$().subscribe({
      next: (rents: GetRentsByUserAsync[]) => {
        this.userRents = rents.map((rent) => ({
          userId: rent.userId,
          immatriculation: rent.immatriculation,
          startDate: rent.startDate,
          returnDate: rent.returnDate,
          VehicleId: rent.VehicleId,
          vehicleInfo: rent.vehicleInfo,
        }));
        console.log('Transformed rents:', this.userRents);
      },
      error: (error) => {
        console.error('Error loading user reservations', error);
      },
    });
  }

  deleteReservation(reservationId: string): void {
    // Implémentez la logique pour supprimer la réservation
  }

  updateReservation(reservationId: string): void {
    // Implémentez la logique pour mettre à jour la réservation
  }
}
