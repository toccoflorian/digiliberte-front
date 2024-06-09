// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VehiculesListComponent } from './components/vehicules-list/vehicules-list.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';

import { AuthenticationService } from '../services/authentication/authentication.service';
import { AuthGuardService } from '../services/authentication/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { TitleboxComponent } from './components/titlebox/titlebox.component';


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
    ReservationsListComponent,
  ],
})
export class AppComponent{
  title = 'CarShare-front';
}
