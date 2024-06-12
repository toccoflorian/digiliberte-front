import { Component } from '@angular/core';

@Component({
  selector: 'app-my-carpools',
  standalone: true,
  imports: [],
  templateUrl: './my-carpools.page.html',
  styleUrl: './my-carpools.page.scss'
})
export class MyCarpoolsPageComponent {
  constructor(){
    console.log('yeeees')
  }
}
