import { Routes } from '@angular/router';
import { AuthGuardService } from '../services/security/auth-guard.service';
import { MainComponent } from './layouts/main/main.layout';
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
import { CarpoolComponent } from './pages/carpool/carpool.component';
import { UpdateVehicleComponent } from './admin-pages/admin-vehicles/update-vehicle/update-vehicle.component';
import { ReservationVehiculesComponent } from './pages/reservation-vehicules/reservation-vehicules.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { RecapLocationComponent } from './pages/recap-location/recap-location.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomePage, canActivate: [AuthGuardService] }, // Page d'accueil, accessible uniquement aux utilisateurs connectés
      { path: 'login', component: LoginPage }, // Page de connexion à l'appli
      { path: 'register', component: RegisterPage }, // Page d'inscription, accessible uniquement aux utilisateurs connectés
      {
        path: 'reservation-vehicules',
        component: ReservationVehiculesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'recap-location',
        component: RecapLocationComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'notAdmin',
        component: NotAdminComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'createVehicle',
        component: VehiculesListComponent,
        canActivate: [AuthGuardService, RoleGuardService],
      },
      { path: 'carpool', component: CarpoolComponent },
      { path: 'carouselCars', component: CarouselCarsComponent },
      { path: 'carouselRent/:id', component: CarouselRentComponent },
      {
        path: 'corouselCars',
        component: CarouselCarsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'ReservationList',
        component: ReservationsListComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'carouselVehicles',
        component: VehiclesComponent,
        canActivate: [AuthGuardService],
      },
      // Autres routes...
    ],
  },
  {
    path: 'admin',
    component: MainComponent,
    children: [
      { path: '', component: AdminHomePageComponent },
      { path: 'create-vehicle', component: CreateVehiclesPage },
      { path: 'vehicles', component: VehiclesComponent },
      {path: 'update-vehicle', component: UpdateVehicleComponent}
    ],
    canActivate: [AuthGuardService, RoleGuardService],
  },
];
