import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicules-list',
  standalone: true,
  imports: [],
  templateUrl: './vehicules-list.component.html',
  styleUrl: './vehicules-list.component.scss'
})
export class VehiculesListComponent {
  /* Récupération de l'objet task envoyé par le composant parent soit TasksList */
  @Input() task: VehiculeInterface | undefined;
}
