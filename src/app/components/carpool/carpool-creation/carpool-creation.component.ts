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
import ILocalization from "../../../../interfaces/ILocalisation";

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
  
  constructor(private carPoolService: CarpoolDataService) {}
  private formGroupValue! : ICreateCarpoolRequest;
  
  requestInterface?: ICreateCarpoolRequest;
  
  formGroup: FormGroup= new FormGroup({
    RentId: new FormControl<number>(0),
    CarpoolName: new FormControl(""),
    StartDate: new FormControl<Date>(new Date(0)),
    EndDate: new FormControl<Date>(new Date(0)),
    StartLocalization: new FormControl<ILocalization>({ latitude: 0, logitude: 0 }),
    EndLocalization: new FormControl<ILocalization>({ latitude: 0, logitude: 0 }),
  });

  


  selectVehicle? : object;
  selectedVehicleImmat : string = "Immatriculation";
  selectedVehicleMarque : string = "Marque";
  selectedVehicleModel : string = "Modèle";
  selectedVehicleMaxSeats : number = 0;

  getNumberArray(max: number): number[] {
    return Array.from({ length: max + 1 }, (_, i) => i);
  }


  myRents!: Array<IGetOneRentWithCarPool>;

  // recupération des coordonnées recupérés par le geo-component
  //#region coordonnee
  startCoordinates: { latitude: number; logitude: number } | null = null;
  onStartCoordinatesSelected(coords: { latitude: number; logitude: number }) {
    this.startCoordinates = coords;
    console.log(
      "depart depuis les coordonnées suivant :",
      this.startCoordinates
    );
  }
  endCoordinates: { latitude: number; logitude: number } | null = null;
  onEndCoordinatesSelected(coords: { latitude: number; logitude: number }) {
    this.endCoordinates = coords;
    console.log("fin aux les coordonnées suivant :", this.endCoordinates);
  }
  //#endregion coordonnee


  ngOnInit(): void {

    this.carPoolService.getRentByUser().subscribe((response) => {
      this.myRents = response;
      console.log("before filtre", this.myRents);
      // console.log("------------------------");
      // console.log(this.myRents);
      const now = new Date(); // Obtenez la date et l'heure actuelles
      const filtre = this.myRents.filter(
        (rent) => new Date(rent.returnDate) > now
        );
      // console.log(filtre);
      // filtre.forEach(a => {
      //   console.log(a.vehicleInfo);
      // });
    });
  }

  handleSubmitForm(event : Event){
    event.preventDefault();

    this.formGroupValue = this.formGroup.value;
    this.formGroupValue.startLocalization = this.startCoordinates as ILocalization;
    this.formGroupValue.endLocalization = this.endCoordinates as ILocalization;


    console.log(this.formGroupValue);
    console.log('====================================');
    console.log('====================================');
    console.log(this.formGroup);

    this.carPoolService.createCarPool({
      RentId : this.formGroupValue.rentId,
      CarpoolName: "Bonjour",
      StartDate: this.formGroupValue.startDate as Date,
      EndDate: this.formGroupValue.endDate as Date,
      StartLocalization: this.formGroupValue.startLocalization as ILocalization,
      EndLocalization: this.formGroupValue.endLocalization as ILocalization,
    });
  }

  onCarSelect(event : any){
    const selectElement = event.target.selectedIndex;

    const selectedObject = this.myRents[selectElement];

    this.selectedVehicleImmat = selectedObject.vehicle.immatriculation;
    this.selectedVehicleMarque = selectedObject.vehicle.brandName;
    this.selectedVehicleMaxSeats = selectedObject.vehicle.seatsNumber;
    this.selectedVehicleModel = selectedObject.vehicle.modelName;

  }
}
