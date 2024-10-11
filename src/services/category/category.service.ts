import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/Category';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CreateCategoryVM } from '../../viewModel/category/CreateCategoryVM';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }

  public create$ = (category: CreateCategoryVM): Observable<Category> => this._httpClient.post<Category>(`${environment.apiUrl}/category/create`, category)
  public loadAll$ = (): Observable<Category[]> => this._httpClient.get<Category[]>(`${environment.apiUrl}/category/all`);
}
