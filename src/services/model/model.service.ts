import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../../models/Model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private _httpClient: HttpClient) { }


  public create$ = (model: Model): Observable<Model> => this._httpClient.post<Model>(`${environment.apiUrl}/model/create`, model);

  public loadAll$ = (): Observable<Model[]> => this._httpClient.get<Model[]>(`${environment.apiUrl}/model/all?paginationIndex=0&pageSize=10`);
}
