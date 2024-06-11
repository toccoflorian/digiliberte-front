import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VehiculesService } from '../../../services/vehicules/vehicules.service';
import { VehiculeComponent } from '../vehicules-list/vehicule/vehicule.component';
import { CommonModule } from '@angular/common';
import IGetOneVehicule from '../../../interfaces/IGetOneVehicule';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  public vehicules: IGetOneVehicule[] = [];

  constructor(private VehiculesService: VehiculesService) {}

  getImageUrl(vehicules: { pictureUrl: string }) {
    return `./../../../assets/vehiculesPictures/${vehicules.pictureUrl}`;
  }

  ngOnInit(): void {
    // Voilà la souscription
    // Quand il y aura une notification next, alors vehicules sera réassignée
    this.VehiculesService.loadVehicules().subscribe({
      next: (vehicules: IGetOneVehicule[]) => {
        this.vehicules = vehicules;
        // console.log('vehicules : ', vehicules);
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
