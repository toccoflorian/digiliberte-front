import { Component, Input } from '@angular/core';
import IGetOneVehicule from '../../../../interfaces/IGetOneVehicule';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent {
  /* Récupération de l'objet task envoyé par le composant parent soit TasksList */
  @Input() vehiculesResevation!: IGetOneVehicule;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
