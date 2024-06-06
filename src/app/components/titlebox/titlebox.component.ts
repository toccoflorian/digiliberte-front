import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titlebox',
  standalone: true,
  imports: [],
  templateUrl: './titlebox.component.html',
  styleUrl: './titlebox.component.scss'
})
export class TitleboxComponent {
  @Input() backgroundColor = "#fffffff";
  @Input() textColor = "#39B739"
}
