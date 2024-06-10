import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private _authenticationService: AuthenticationService, private router: Router) {
    
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>{
    return this._authenticationService.isAdmin().pipe(
      tap(isAdmin => {
        console.log('isAdmin', isAdmin);
        
        if(! isAdmin){
          this.router.navigate(['/notAdmin'])
        }
      })
    )
  }
}
