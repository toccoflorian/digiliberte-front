import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Observable, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  startWith,
  switchMap,
  tap,
} from "rxjs/operators";
import { AsyncPipe } from "@angular/common";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { GeoService } from "../../../services/geoFetch/geoFetch";
import { FeatureCollection } from "../../../interfaces/geoCoding/FeatureCollection";
import { HttpParams } from "@angular/common/http";
import Feature from "../../../interfaces/geoCoding/Feature";

@Component({
  selector: "app-geo-navbar",
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: "./geo-navbar.component.html",
  styleUrl: "./geo-navbar.component.scss",
})
export class GeoNavbarComponent {
  monAdresseControl = new FormControl("");
  searchText!: string;
  options: any[] = [];
  adresseFinal: Feature[] = [];
  adresseObservable = of(this.adresseFinal);
  selectedCoordinates?: { lat: number; long: number };

  @Output() coordonnesSelectionne = new EventEmitter<{
    lat: number;
    long: number;
  }>();

  // adresseFilter: Observable<any[]>;

  constructor(private geoService: GeoService) {}
  ngOnInit() {
    this.monAdresseControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value) => {
          this.searchText = value as string;
        }),
        filter(
          (value) => value !== null && value !== undefined && value.length > 3
        ),
        switchMap((value) => this.geoService.getData(value as string))
      )
      .subscribe((response) => {
        this.options = response.features;
        for (let i = 0; i < 1; i++) {
          this.adresseFinal = [];
          this.adresseObservable = of(this.adresseFinal);
          response.features.forEach((element) => {
            this.adresseFinal.push(element);
            console.log(element.properties); // met en console les resultats
          });
        }
      });
  }
  // permet de binder le retour du component à autre choses
  onOptionSelected(event: any) {
    const selectedLabel = event.option.value;
    this.geoService.getAddressDetails(selectedLabel).subscribe((details) => {
      this.selectedCoordinates = {
        lat: details.features[0].geometry.coordinates[1],
        long: details.features[0].geometry.coordinates[0],
      };
      console.log("Selected Coordinates:", this.selectedCoordinates);
      this.coordonnesSelectionne.emit(this.selectedCoordinates);
    });
  }
}
