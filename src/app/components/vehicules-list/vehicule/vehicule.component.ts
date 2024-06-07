import { Component, Input,SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import IGetOneVehicule from '../../../../interfaces/IGetOneVehicule';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.scss',
})
export class VehiculeComponent {
  /* Récupération de l'objet task envoyé par le composant parent soit TasksList */
  @Input() vehicules!: IGetOneVehicule;

  constructor(private http: HttpClient) {
    // console.log(this.vehicule);
  }

  ngOnInit(): void {}
}
