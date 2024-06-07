// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthenticationService } from '../services/authentication/authentication.service';
import { AuthGuardService } from '../services/authentication/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { TitleboxComponent } from './components/titlebox/titlebox.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [HttpClientModule, RouterOutlet, RouterLink, RouterLinkActive, TitleboxComponent],
  providers: [AuthenticationService, AuthGuardService],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'CarShare-front';
  
  constructor(){}

  ngOnInit(){}
}
