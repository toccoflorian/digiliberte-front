import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginRequest } from '../../interfaces/authentication/loginRequest';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import ILoginResponseDTO from '../../interfaces/authentication/ILoginResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { identityRoleEnum } from '../../enums/identityRoleEnum';
import ILoginResponse from '../../interfaces/authentication/ILoginResponse';
import { environment } from '../../environments/environment';
import { CreateUserDto } from '../../interfaces/authentication/CreateUserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public _userIsAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userIsAdmin$: Observable<boolean> = this._userIsAdminSubject.asObservable();

  constructor(private _httpClient: HttpClient, private _router: Router, private _route: ActivatedRoute) {
    this.checkUserIsAdmin()?.subscribe((v) => { this._userIsAdminSubject.next(v) })
  }


  public login$(loginRequestDTO: ILoginRequest): Observable<ILoginResponse> {
    const result = this._httpClient.post<ILoginResponseDTO>("https://api.ppstudio.fr/login", loginRequestDTO)
      .pipe(tap(token => {
        if (token.accessToken) {
          localStorage.setItem('authToken', JSON.stringify(token));
          this.checkUserIsAdmin();
        }
      })
      )
    result.subscribe(() => {
      document.location.href = this._route.snapshot.queryParams['returnUrl'] ?? '/';
    });
    return result;
  }

  public logout(): void {
    localStorage.removeItem('authToken');
    this.checkUserIsAdmin();
    document.location.reload();
  }

  public isLogedUser(): boolean {
    return localStorage.getItem('authToken') ? true : false;
  }

  public checkUserIsAdmin(): Observable<boolean> | undefined {
    if (this.isLogedUser()) {
      return this._httpClient.get<string[]>(`${environment.apiUrl}/auth/getUserRoles`).pipe(
        map((roles: string[]) => {console.log('v', roles);return roles.includes(identityRoleEnum.admin)}),
        tap(isAdmin => {
          this._userIsAdminSubject.next(isAdmin);
        })
      );
    } else {
      this._userIsAdminSubject.next(false);
      return undefined;
    }
  }

  public register$ = (registerForm: CreateUserDto) => {
    console.log(`${environment.apiUrl}/auth/register`);
    
    return this._httpClient.post<void>(`${environment.apiUrl}/auth/register`, registerForm);}
}
