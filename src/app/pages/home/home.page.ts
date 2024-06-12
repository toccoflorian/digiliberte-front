import { Component } from '@angular/core';
import { VehiculesListComponent } from '../../components/vehicules-list/vehicules-list.component';
import { GeoNavbarComponent } from '../../components/geo-navbar/geo-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VehiculesListComponent,GeoNavbarComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
