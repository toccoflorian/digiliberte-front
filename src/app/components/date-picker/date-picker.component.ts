import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  
  public dateTime$! : Observable<Date>; // utile ? 

  public dateForm!: FormGroup;
  public formIsActive: boolean = false;

  public selectedDate!: number; // representer par un timestanp

  selectedDateDay : string;
  selectedDateTime : string;
  
  @Output('dateTimeOutput') dateTimeOutput: Subject<number> = new Subject<number>();

  constructor() {
    // Initialisation des variables avec des valeurs par défaut si nécessaire
    this.selectedDateDay = ''; // Exemple : new Date().toISOString().split('T')[0] pour la date actuelle
    this.selectedDateTime = ''; // Exemple : '12:00' pour un temps par défaut
  }

  dateNow = new Date();

  public ngOnInit(): void {
      this.dateForm = new FormGroup({
        dateDay : new FormControl(null,Validators.required),
        dateHour : new FormControl(null,Validators.required)
      })
  } // tes

  public onClick(){
    this.formIsActive = !this.formIsActive;
  }
  
  // Fonction appelée lorsque la date est sélectionnée
  onDateDaySelected() {
    console.log('Date sélectionnée : ', this.selectedDateDay);
    this.emitCombinedDateTime(); // Combiner et émettre le timestamp lorsque la date est sélectionnée
  }

  // Fonction appelée lorsque l'heure est sélectionnée
  onDateTimeSelected() {
    console.log('Heure sélectionnée : ', this.selectedDateTime);
    this.emitCombinedDateTime(); // Combiner et émettre le timestamp lorsque l'heure est sélectionnée
  }

  // Méthode pour combiner la date et l'heure, et émettre le timestamp
  private emitCombinedDateTime() {
    if (this.selectedDateDay && this.selectedDateTime) {
      // Combiner la date et l'heure dans une chaîne compatible avec la classe Date
      const combinedDateTimeString = `${this.selectedDateDay}T${this.selectedDateTime}`;

      // Créer un objet Date à partir de la chaîne
      const date = new Date(combinedDateTimeString);

      // Convertir en timestamp (nombre de millisecondes depuis le 1er janvier 1970)
      this.selectedDate = date.getTime();

      // Émettre le timestamp via le Subject
      this.dateTimeOutput.next(this.selectedDate);

      console.log('Timestamp émis : ', this.selectedDate);
    }
  }
  
}
