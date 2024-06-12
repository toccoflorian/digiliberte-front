import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login.page';
import { AuthGuardService } from '../services/security/auth-guard.service';
import { MainLayoutComponent } from './layouts/main/main.layout';
import { HomePage } from './pages/home/home.page';
import { RoleGuardService } from '../services/security/role-guard.service';
import { AdminHomePageComponent } from './admin-pages/admin-home/admin-home.page';
import { NotAdminComponent } from './admin-pages/not-admin/not-admin.page';
import { VehiculesListComponent } from './components/vehicules-list/vehicules-list.component';
import { CarouselCarsComponent } from './components/carouselCars/carouselCars.component';
import { CarouselRentComponent } from './components/carouselRent/carousel-rent.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePage, canActivate: [AuthGuardService] }, // canActivate: [AuthGuardService] pour rendre la page accessible aux connectés uniquement
      { path: 'login', component: LoginPageComponent },
      {
        path: 'notAdmin',
        component: NotAdminComponent,
        canActivate: [AuthGuardService],
      },
      { path: 'vehicules', component: VehiculesListComponent },
      { path: 'carouselCars', component: CarouselCarsComponent },
      { path: 'carouselRent/:id', component: CarouselRentComponent },
      // {path: 'admin', component: AdminHomePageComponent, canActivate: [AuthGuardService, RoleGuardService]},
      // Nouvelle page (ex: rent.page.ts) ici = {path: 'rent', component: RentPageComponent, canActivate: [AuthGuardService] }
      // Une page est un composant mais on remplace .component.ts par .page.ts et le nom de la class on met namePageComponent
      // ensuite pour naviguer vers elle on fait (depuis le html d'un composant): <a routerLink="/rent" /> (ne pas oublier de l'importer)
      // Attention, c'est '/rent' dans le <a/> mais 'rent' ici dans path:
    ],
    // canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    component: MainLayoutComponent,
    children: [{ path: '', component: AdminHomePageComponent }],
    canActivate: [AuthGuardService, RoleGuardService],
  },
];
