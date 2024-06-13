import { Component, OnInit } from "@angular/core";
import { TitleboxComponent } from "../../titlebox/titlebox.component";
import { GeoNavbarComponent } from "../../geo-navbar/geo-navbar.component";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import ICreateCarpoolRequest from "../../../../interfaces/carpool/ICreateCarpoolRequest";
import { CommonModule } from "@angular/common";
import { CarpoolDataService } from "../../../../services/carpools/data/carpool-data.service";
import IListGetOneRent from "../../../../interfaces/carpool/IListGetOneRent";
import IGetOneRentWithCarPool from "../../../../interfaces/carpool/IGetOneRentWithCarPool";

@Component({
  selector: "app-carpool-creation",
  standalone: true,
  imports: [
    TitleboxComponent,
    GeoNavbarComponent,
    MatIcon,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: "./carpool-creation.component.html",
  styleUrl: "./carpool-creation.component.scss",
})
export class CarpoolCreationComponent implements OnInit {
  requestInterface?: ICreateCarpoolRequest;
  formGroup!: FormGroup;
  myRents!: Array<IGetOneRentWithCarPool>;

  // recupération des coordonnées recupérés par le geo-component
  //#region coordonnee
  startCoordinates: { lat: number; long: number } | null = null;
  onStartCoordinatesSelected(coords: { lat: number; long: number }) {
    this.startCoordinates = coords;
    console.log(
      "depart depuis les coordonnées suivant :",
      this.startCoordinates
    );
  }
  endCoordinates: { lat: number; long: number } | null = null;
  onEndCoordinatesSelected(coords: { lat: number; long: number }) {
    this.endCoordinates = coords;
    console.log("fin aux les coordonnées suivant :", this.endCoordinates);
  }
  //#endregion coordonnee

  constructor(private carPoolService: CarpoolDataService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      rentId: new FormControl(""),
      carpoolName: new FormControl(""),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      startLocalization: new FormControl(""),
      endLocalization: new FormControl(""),
    });

    this.carPoolService.getRentByUser().subscribe((response) => {
      console.log("before filtre", response);
      this.myRents = response;
      console.log("------------------------");
      console.log(this.myRents);
      const now = new Date(); // Obtenez la date et l'heure actuelles
      const filtre = this.myRents.filter(
        (rent) => new Date(rent.returnDate) > now
      );
      console.log(filtre);
    });
  }
}
