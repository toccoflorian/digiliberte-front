import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Motorization } from '../../models/Motorization';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotorizationService {

  constructor(private _httpClient: HttpClient) { }



  public create$ = (motorization: Motorization): Observable<Motorization> => this._httpClient.post<Motorization>(`${environment.apiUrl}/motorization/create`, motorization);

  public loadAll$ = (): Observable<Motorization[]> => this._httpClient.get<Motorization[]>(`${environment.apiUrl}/motorization/all`);
}
