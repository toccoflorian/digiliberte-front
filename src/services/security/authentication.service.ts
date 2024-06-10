import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILoginRequest} from '../../interfaces/authentication/loginRequest';
import { Observable, map, tap } from 'rxjs';
import ILoginResponseDTO from '../../interfaces/authentication/ILoginResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { identityRoleEnum } from '../../enums/identityRoleEnum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient, private _router: Router, private _route: ActivatedRoute) {}

  public login(loginRequestDTO: ILoginRequest): void{
    this._httpClient.post<ILoginResponseDTO>("http://localhost:5212/login", loginRequestDTO)
      .pipe(tap( token => {
        if(token.accessToken){
          localStorage.setItem('authToken', JSON.stringify(token));
        }
      })
    ).subscribe(()=>{
      this._router.navigate([this._route.snapshot.queryParams['returnUrl'] ?? '/'])
    })
  }

isLogedUser(): boolean{
  return localStorage.getItem('authToken') ? true : false;
}

isAdmin(): Observable<boolean>{
  return this._httpClient.get<string[]>('http://localhost:5212/api/auth/getrole').pipe(
    map((roles: string[]) => {return roles.includes(identityRoleEnum.admin)})
  )
}
}
 