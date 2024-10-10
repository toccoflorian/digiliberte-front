
import { Routes } from '@angular/router';
import { AuthGuardService } from '../services/security/auth-guard.service';
import { MainLayoutComponent } from './layouts/main/main.layout';
import { HomePage } from './pages/home/home.page';
import { RoleGuardService } from '../services/security/role-guard.service';
import { AdminHomePageComponent } from './admin-pages/admin-home/admin-home.page';
import { NotAdminComponent } from './admin-pages/not-admin/not-admin.page';
import { VehiculesListComponent } from './components/vehicules-list/vehicules-list.component';
import { CarouselCarsComponent } from './components/carouselCars/carouselCars.component';
import { CarouselRentComponent } from './components/carouselRent/carousel-rent.component';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { CreateVehiclesPage } from './admin-pages/admin-vehicles/create-vehicle/create-vehicles.page';
import { VehiclesComponent } from './admin-pages/admin-vehicles/vehicles/vehicles.component';
import { LocationPage } from './pages/location/location.page';

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", component: HomePage, canActivate: [AuthGuardService] }, // canActivate: [AuthGuardService] pour rendre la page accessible aux connectés uniquement
      { path: "login", component: LoginPage },
      { path: "register", component: RegisterPage },
      {
        path: "notAdmin",
        component: NotAdminComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "createVehicle",
        component: VehiculesListComponent,
        canActivate: [AuthGuardService, RoleGuardService],
      },
      { path: 'carouselCars', component: CarouselCarsComponent },
      { path: 'carouselRent/:id', component: CarouselRentComponent },
      { path : 'location', component: LocationPage}
      // {path: 'admin', component: AdminHomePageComponent, canActivate: [AuthGuardService, RoleGuardService]},
      // Nouvelle page (ex: rent.page.ts) ici = {path: 'rent', component: RentPageComponent, canActivate: [AuthGuardService] }
      // Une page est un composant mais on remplace .component.ts par .page.ts et le nom de la class on met namePageComponent
      // ensuite pour naviguer vers elle on fait (depuis le html d'un composant): <a routerLink="/rent" /> (ne pas oublier de l'importer)
      // Attention, c'est '/rent' dans le <a/> mais 'rent' ici dans path:
    ],
    // canActivate: [AuthGuardService]
  },
  {
    path: "admin",
    component: MainLayoutComponent,
    children: [
      { path: '', component: AdminHomePageComponent },
      { path: 'create-vehicle', component: CreateVehiclesPage },
      { path: 'vehicles', component: VehiclesComponent },
    ],
    canActivate: [AuthGuardService, RoleGuardService],
  },
];
