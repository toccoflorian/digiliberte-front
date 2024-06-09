import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public mobilMenuIsVisible: boolean = false;
  public visibleSubMenu: Record<string, boolean> = {carpool: false, rent: false, infos: false};
  public visibilitySubMenuTimeout: any;
  public userIsLoged!: boolean;

  constructor(private _authenticationService: AuthenticationService){
  }
  
  ngOnInit(): void{
    this.userIsLoged = this._authenticationService.isLogedUser;
  }

  displaySubMenu(name: string): void{
    clearTimeout(this.visibilitySubMenuTimeout);
    for (const key in this.visibleSubMenu) {
      key === name ?
        this.visibleSubMenu[key] = true
        :
        this.visibleSubMenu[key] = false;
    }
  }

  unDisplaySubMenu(name: string): void{
    this.visibilitySubMenuTimeout = setTimeout(() => {
      for(const key in this.visibleSubMenu){
        this.visibleSubMenu[key] = false;
      }
    }, 500);
  }
}
