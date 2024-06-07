import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import IGetOneVehicule from '../../../../interfaces/IGetOneVehicule';

@Component({
  selector: 'app-vehicule-rent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicule-rent.component.html',
  styleUrl: './vehicule-rent.component.scss',
})
export class VehiculeRentComponent {
  /* Récupération de l'objet task envoyé par le composant parent soit TasksList */
  @Input() vehiculesRent!: IGetOneVehicule;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
