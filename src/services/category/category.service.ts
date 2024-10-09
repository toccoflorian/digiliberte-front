import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/Category';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }


  public loadAll$ = (): Observable<Category[]> => this._httpClient.get<Category[]>(`${environment.apiUrl}/category/all`);
}
