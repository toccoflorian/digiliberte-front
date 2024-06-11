import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILoginRequest} from '../../interfaces/authentication/loginRequest';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import ILoginResponseDTO from '../../interfaces/authentication/ILoginResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { identityRoleEnum } from '../../enums/identityRoleEnum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public _userIsAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userIsAdmin$: Observable<boolean> = this._userIsAdminSubject.asObservable();

  constructor(private _httpClient: HttpClient, private _router: Router, private _route: ActivatedRoute) {
    this.checkUserIsAdmin()?.subscribe((v)=>{this._userIsAdminSubject.next(v)})
  }


  public login(loginRequestDTO: ILoginRequest): void{
    this._httpClient.post<ILoginResponseDTO>("http://localhost:5212/login", loginRequestDTO)
      .pipe(tap( token => {
        if(token.accessToken){
          localStorage.setItem('authToken', JSON.stringify(token));
          this.checkUserIsAdmin();
        }
      })
    ).subscribe(()=>{
      document.location.href = this._route.snapshot.queryParams['returnUrl'] ?? '/';
  })
  }

  public logout(): void{
    localStorage.removeItem('authToken');
    this.checkUserIsAdmin();
    document.location.reload();
  }

  public isLogedUser(): boolean{
    return localStorage.getItem('authToken') ? true : false;
  }

  public checkUserIsAdmin(): Observable<boolean> | undefined{
    if (this.isLogedUser()) {
      return this._httpClient.get<string[]>('http://localhost:5212/api/auth/getrole').pipe(
        map((roles: string[]) => roles.includes(identityRoleEnum.admin)),
        tap(isAdmin => {
          this._userIsAdminSubject.next(isAdmin);
        })
      );
    } else {
      this._userIsAdminSubject.next(false);
      return undefined;
    }}
}
 