import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../../models/Brand';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _httpClient: HttpClient) { }


  // public create$ = () => this._httpClient

  public loadAll$: ()=>Observable<Brand[]> = (): Observable<Brand[]> => this._httpClient.get<Brand[]>(`${environment.apiUrl}/brand/getAll`);

  public create$: (brand: Brand)=>Observable<Brand> = (brand: Brand): Observable<Brand> => this._httpClient.post<Brand>(`${environment.apiUrl}/brand/create`, brand);
}

