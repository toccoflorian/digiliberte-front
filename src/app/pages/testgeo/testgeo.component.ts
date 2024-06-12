import { Component } from "@angular/core";
import { GeoComponentsComponent } from "../../components/geo-components/geo-components.component";
import { GeoNavbarComponent } from "../../components/geo-navbar/geo-navbar.component";

@Component({
  selector: "app-testgeo",
  standalone: true,
  templateUrl: "./testgeo.component.html",
  styleUrl: "./testgeo.component.scss",
  imports: [GeoComponentsComponent, GeoNavbarComponent],
})
export class TestgeoComponent {
  selectedCoordinates: { lat: number; long: number } | null = null;

  onCoordinatesSelected(coords: { lat: number; long: number }) {
    this.selectedCoordinates = coords;
    console.log("Coordinates in ParentComponent:", this.selectedCoordinates);
    // Utilisez les coordonnées comme vous en avez besoin
  }
}
