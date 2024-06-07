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
  public token$!: Observable<ILoginResponseDTO>;

  constructor(private _httpClient: HttpClient, private _router: Router) {
    this._tokenSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('authToken')!));
    this.token$ = this._tokenSubject.asObservable();
  }

  public login(loginRequestDTO: ILoginRequest): Observable<ILoginResponseDTO>{
    return this._httpClient.post<ILoginResponseDTO>("https://localhost:7193/login", loginRequestDTO)
      .pipe(map( token => {
        if(token.accessToken){
          localStorage.setItem('authToken', JSON.stringify(token));
          this._tokenSubject.next(token);
        }
        return token;
      })
    )
  }

  public get tokenValue(): any{
    return this._tokenSubject.value;
  }
  
}
 