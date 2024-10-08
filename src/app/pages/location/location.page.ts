import { Component } from "@angular/core";
import { TitleboxComponent } from "../../components/titlebox/titlebox.component";

@Component({
  selector: "app-location",
  standalone: true,
  imports: [TitleboxComponent],
  templateUrl: "./location.page.html",
  styleUrl: "./location.page.scss",
})
export class LocationPage {}
