import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.scss'
})
export class MainLayoutComponent {

}
