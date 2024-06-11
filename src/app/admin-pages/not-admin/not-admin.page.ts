import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-admin.page.html',
  styleUrl: './not-admin.page.scss'
})
export class NotAdminComponent {

}
