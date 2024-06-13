import { Component } from "@angular/core";
import { CarpoolCreationComponent } from "../../../components/carpool/carpool-creation/carpool-creation.component";

@Component({
  selector: "app-create",
  standalone: true,
  imports: [CarpoolCreationComponent],
  templateUrl: "./create.page.html",
  styleUrl: "./create.page.scss",
})
export class CreateCarpoolPageComponent {}
