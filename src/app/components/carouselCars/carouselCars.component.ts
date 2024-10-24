import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VehiculesService } from '../../../services/vehicules/vehicules.service';
import { VehiculeComponent } from '../vehicules-list/vehicule/vehicule.component';
import { CommonModule } from '@angular/common';
import IGetOneVehicule from '../../../interfaces/IGetOneVehicule';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carouselCars',
  standalone: true,
  imports: [CommonModule, MatIconModule, VehiculeComponent],
  templateUrl: './carouselCars.component.html',
  styleUrls: ['./carouselCars.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselCarsComponent {
  public vehicules: IGetOneVehicule[] = [];

  constructor(
    private VehiculesService: VehiculesService,
    private router: Router
  ) {}

  getImageUrl(vehicules: { pictureUrl: string }) {
    return `./../../../assets/vehiculesPictures/${vehicules.pictureUrl}`;
  }
  navigateToCarouselRent(vehicleId: string): void {
    this.router.navigate(['/carouselRent', vehicleId]);
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
