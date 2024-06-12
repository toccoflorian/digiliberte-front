import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VehiculesService } from '../../../services/vehicules/vehicules.service';
import IGetOneVehicule from '../../../interfaces/IGetOneVehicule';

@Component({
  selector: 'app-carousel-rent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-rent.component.html',
  styleUrls: ['./carousel-rent.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselRentComponent implements OnInit {
  public vehiculeRent!: IGetOneVehicule;

  constructor(
    private route: ActivatedRoute,
    private vehiculesService: VehiculesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id'); // Récupération de l'ID depuis les paramètres de l'URL
      if (id !== null) {
        this.vehiculesService
          .loadRentVehiculeById(id) // Utiliser la méthode pour charger le véhicule par ID
          .subscribe({
            next: (vehiculeRent: IGetOneVehicule) => {
              this.vehiculeRent = vehiculeRent;
              console.log('Véhicule trouvé:', this.vehiculeRent);
            },
            error: (error) => {
              console.error(
                'Erreur lors de la récupération du véhicule:',
                error
              );
            },
          });
      } else {
        console.error('ID est null');
      }
    });
  }

  getImageUrl(vehicule: IGetOneVehicule): string {
    return `./../../../assets/vehiculesPictures/${vehicule.pictureUrl}`;
  }
}
