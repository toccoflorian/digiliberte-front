import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login.page';
import { AuthGuardService } from '../services/authentication/auth-guard.service';
import { MainLayoutComponent } from './layouts/main/main.layout';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
    
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {path: '', component: HomePage, canActivate: [AuthGuardService]},  // canActivate: [AuthGuardService] pour rendre la page accessible aux connectés uniquement
            {path: 'login', component: LoginPageComponent },
            // Nouvelle page (ex: rent.page.ts) ici = {path: 'rent', component: RentPageComponent, canActivate: [AuthGuardService] }
            // Une page est un composant mais on remplace .component.ts par .page.ts et le nom de la class on met namePageComponent
            // ensuite pour naviguer vers elle on fait (depuis le html d'un composant): <a routerLink="/rent" />
            // Attention, c'est '/rent' dans le <a/> mais 'rent' ici dans path:
        ],
        // canActivate: [AuthGuardService]
    }
];

