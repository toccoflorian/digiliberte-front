// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VehiculesListComponent } from './components/vehicules-list/vehicules-list.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { OnInit } from '@angular/core';
import { AuthenticationService } from '../services/security/authentication.service';
import { AuthGuardService } from '../services/security/auth-guard.service';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AuthenticationService, AuthGuardService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    VehiculesListComponent,
    ReservationsListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit{
  title = 'CarShare-front';

  
  constructor(){}

  ngOnInit(){}
}
