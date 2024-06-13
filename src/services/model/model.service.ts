import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateModel } from '../../interfaces/CreateOneModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private apiUrl = 'http://localhost:5212/api/model'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}

  getAllModel(): Observable<ICreateModel[]> {
    return this.http.get<ICreateModel[]>(`${this.apiUrl}`);
  }

  getModel(id: string): Observable<ICreateModel> {
    return this.http.get<ICreateModel>(`${this.apiUrl}/${id}`);
  }

  createModel(modelData: ICreateModel): void {
    this.http.post<any>(this.apiUrl + '/CreateModel', modelData).subscribe();
  }

  updateModel(id: string, model: ICreateModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, model);
  }

  deleteModel(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
