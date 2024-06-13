import { Component } from "@angular/core";
import { TitleboxComponent } from "../../titlebox/titlebox.component";
import { GeoNavbarComponent } from "../../geo-navbar/geo-navbar.component";

@Component({
  selector: "app-carpool-creation",
  standalone: true,
  imports: [TitleboxComponent, GeoNavbarComponent],
  templateUrl: "./carpool-creation.component.html",
  styleUrl: "./carpool-creation.component.scss",
})
export class CarpoolCreationComponent {}
