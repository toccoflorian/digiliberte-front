import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VehiculesListComponent } from './components/vehicules-list/vehicules-list.component';
import { VehiculeRentComponent } from './components/vehicules-list/vehicule-rent/vehicule-rent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    VehiculesListComponent,
    VehiculeRentComponent,
  ],
})
export class AppComponent {
  title = 'CarShare-front';
}
