import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CreateModel, ICreateModel } from '../../interfaces/CreateOnModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private apiUrl = 'http://localhost:5212/api/model'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}

  getAllModel(): Observable<ICreateModel[]>{
    return this.http.get<ICreateModel[]>(`${this.apiUrl}`);
  }

  getModel(id: string): Observable<ICreateModel> {
    return this.http.get<ICreateModel>(`${this.apiUrl}/${id}`);
  }

  createModel(modelData: ICreateModel): void {
    console.log('modelData : ', modelData);
    console.log('this.apiUrl : ', this.apiUrl + '/createmodel');
     this.http.post<any>(
      this.apiUrl + '/CreateModel',
      // 'https://localhost:7193/api/Model/CreateModel',
      modelData
    ).subscribe();
  }

  updateModel(id: string, model: ICreateModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, model);
  }

  deleteModel(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
