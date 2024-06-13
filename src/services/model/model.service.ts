import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ICreateModel, CreateModel } from './../../interfaces/CreateOnModel';
import { ApiResponse } from '../../interfaces/model/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private apiUrl = 'http://localhost:5212/api/Model'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}

  getAllModel(): Observable<ApiResponse<ICreateModel[]>> {
    return this.http.get<ApiResponse<ICreateModel[]>>(`${this.apiUrl}`);
  }

  getModel(id: string): Observable<ApiResponse<ICreateModel>> {
    return this.http.get<ApiResponse<ICreateModel>>(`${this.apiUrl}/${id}`);
  }

  createModel(modelData: ICreateModel): Observable<any> {
    console.log('modelData : ', modelData);
    console.log('this.apiUrl : ', this.apiUrl + '/createmodel');
    return this.http.post<ICreateModel>(
      this.apiUrl + '/createmodel',
      // 'https://localhost:7193/api/Model/CreateModel',
      modelData
    );
  }

  updateModel(id: string, model: ICreateModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, model);
  }

  deleteModel(id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.apiUrl}/${id}`);
  }
}
