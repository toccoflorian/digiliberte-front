import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLinkActive, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private _router: Router){}

  isActive(url: string): boolean{
    return this._router.url.split('?')[0] === url;
  }
}
