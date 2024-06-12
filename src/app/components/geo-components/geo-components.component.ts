import { Component } from "@angular/core";
import { GeoService } from "../../../services/geoFetch/geoFetch";
import { FeatureCollection } from "../../../interfaces/geoCoding/FeatureCollection";
import { GeoNavbarComponent } from "../geo-navbar/geo-navbar.component";

@Component({
  selector: "app-geo-components",
  standalone: true,
  imports: [GeoNavbarComponent],
  templateUrl: "./geo-components.component.html",
  styleUrl: "./geo-components.component.scss",
})
export class GeoComponentsComponent {
  data?: FeatureCollection;

  constructor(private geoService: GeoService) {}

  ngOnInit(): void {
    this.geoService.getData().subscribe(
      (response: FeatureCollection) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error("Error fetching data", error);
      }
    );
  }
}
