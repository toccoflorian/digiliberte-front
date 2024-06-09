import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILoginRequest} from '../../interfaces/authentication/loginRequest';
import { BehaviorSubject, Observable, map } from 'rxjs';
import ILoginResponseDTO from '../../interfaces/authentication/ILoginResponse';
import { Router } from '@angular/router';
import Token from '../../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _tokenSubject: BehaviorSubject<Token>;
  private _isLogedUser: BehaviorSubject<boolean>;
  public isLogedUser$: Observable<boolean>;

  constructor(private _httpClient: HttpClient, private _router: Router) {
    this._tokenSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('authToken')!));
    this._isLogedUser = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('authToken')!) ? true : false);
    this.isLogedUser$ = this._isLogedUser.asObservable();
  }

  public login(loginRequestDTO: ILoginRequest): void{
    this._httpClient.post<ILoginResponseDTO>("http://localhost:5212/login", loginRequestDTO)
      .pipe(map( token => {
        if(token.accessToken){
          localStorage.setItem('authToken', JSON.stringify(token));
          this._tokenSubject.next(token);
          this._isLogedUser.next(true);
        }
      })
    ).subscribe(()=>{
      this._router.navigate(['/'])
    })
  }

getIsLogedUserBooleanValue(): boolean{
  return JSON.parse(localStorage.getItem('authToken')!) ? true : false;
}
}
 