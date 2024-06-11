import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/security/authentication.service';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public mobilMenuIsVisible: boolean = false;
  public visibleSubMenu: Record<string, boolean> = {admin: false, carpool: false, rent: false, infos: false};
  public visibilitySubMenuTimeout: any;
  public userIsAdmin$!: Observable<boolean>;

  constructor(private _authenticationService: AuthenticationService, private _router: Router){
    this.userIsAdmin$ = _authenticationService.userIsAdmin$
  }

  public handleClickLogout(): void{
    this._authenticationService.logout();
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

  userIsLoged(): boolean{
    return this._authenticationService.isLogedUser();
  }
}
