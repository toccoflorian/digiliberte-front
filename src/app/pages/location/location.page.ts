import { Component } from "@angular/core";
import { TitleboxComponent } from "../../components/titlebox/titlebox.component";
import { FiltreLocationComponent } from "../../components/filtre-location/filtre-location.component";

@Component({
  selector: "app-location",
  standalone: true,
  imports: [TitleboxComponent, FiltreLocationComponent],
  templateUrl: "./location.page.html",
  styleUrl: "./location.page.scss",
})
export class LocationPage {}
