import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private _authenticationService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>{
    const result = this._authenticationService.checkUserIsAdmin();
    if(result){
      return result.pipe(
        map(isAdmin => {
          if(! isAdmin){
            this.router.navigate(['/notAdmin']);
            return false;
          }
          return true;
        })
      )
    }else{
      return false
    }
  }
}
