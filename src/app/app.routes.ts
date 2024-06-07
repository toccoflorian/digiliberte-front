import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { AuthGuardService } from '../services/authentication/auth-guard.service';

export const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuardService]},  // canActivate: [AuthGuardService] pour rendre la page accessible aux connectés uniquement
    {path: 'login', component: LoginComponent },
];

