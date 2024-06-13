// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VehiculesListComponent } from './components/vehicules-list/vehicules-list.component';
import { OnInit } from '@angular/core';
import { AuthenticationService } from '../services/security/authentication.service';
import { AuthGuardService } from '../services/security/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormModule,
    VehiculesListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Correct property name is styleUrls
  providers: [AuthenticationService, AuthGuardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'CarShare-front';

  constructor() {}

  ngOnInit() {}
}
