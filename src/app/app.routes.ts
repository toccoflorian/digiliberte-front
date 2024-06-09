import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from '../services/authentication/auth-guard.service';
import { MainLayoutComponent } from './layouts/main/main.layout';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
    
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {path: '', component: HomePage, canActivate: [AuthGuardService]},  // canActivate: [AuthGuardService] pour rendre la page accessible aux connectés uniquement
            {path: 'login', component: LoginComponent },
        ],
        // canActivate: [AuthGuardService]
    }
];

