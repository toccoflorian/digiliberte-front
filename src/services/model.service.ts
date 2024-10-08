import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/Model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private _httpClient: HttpClient) { }


  public loadAll$(): Observable<Model[]>{
    return this._httpClient.get<Model[]>(`${environment.apiUrl}/model/GetAllModelsAsync`);
  }
}
