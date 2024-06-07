import { Component } from '@angular/core';
import { ReservationComponent } from './reservation/reservation.component';
import { CommonModule } from '@angular/common';
import IGetOneVehicule from '../../../interfaces/IGetOneVehicule';
import { VehiculesService } from '../../../services/vehicules/vehicules.service';
@Component({
  selector: 'app-reservations-list',
  standalone: true,
  imports: [CommonModule, ReservationComponent],
  templateUrl: './reservations-list.component.html',
  styleUrl: './reservations-list.component.scss',
})
export class ReservationsListComponent {
  public vehiculesReservation: IGetOneVehicule[] = [];

  constructor(private VehiculesService: VehiculesService) {}

  ngOnInit(): void {
    // Voilà la souscription
    // Quand il y aura une notification next, alors vehicules sera réassignée
    this.VehiculesService.loadVehicules().subscribe({
      next: (vehiculesReservation: IGetOneVehicule[]) => {
        this.vehiculesReservation = vehiculesReservation;
        console.log('vehicules reservation: ', this.vehiculesReservation);
        return this.vehiculesReservation;
      },
      error: (error) => {
        console.error(
          `Erreur catchée dans le composant vehicules-list : `,
          error
        );
      },
    });
  }
}
