import { VehiculeComponent } from './vehicule/vehicule.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import IGetOneVehicule from '../../../interfaces/IGetOneVehicule';
import { VehiculesService } from '../../../services/vehicules/vehicules.service';

@Component({
  selector: 'app-vehicules-list',
  standalone: true,
  imports: [CommonModule, VehiculeComponent],
  templateUrl: './vehicules-list.component.html',
  styleUrl: './vehicules-list.component.scss',
})
export class VehiculesListComponent {
  public vehicules: IGetOneVehicule[] = [];

  constructor(private VehiculesService: VehiculesService) {}

  ngOnInit(): void {
    // Voilà la souscription
    // Quand il y aura une notification next, alors vehicules sera réassignée
    this.VehiculesService.loadVehicules().subscribe({
      next: (vehicules: IGetOneVehicule[]) => {
        this.vehicules = vehicules;
        console.log('vehicules', vehicules);
        return vehicules;
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
