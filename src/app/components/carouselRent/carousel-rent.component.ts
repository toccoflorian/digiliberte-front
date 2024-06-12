import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import IGetOneVehicule from '../../../interfaces/IGetOneVehicule';
import { VehiculesService } from '../../../services/vehicules/vehicules.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-rent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-rent.component.html',
  styleUrl: './carousel-rent.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselRentComponent {
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
