import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMotorization } from '../../interfaces/Motorization';

@Injectable({
  providedIn: 'root',
})
export class MotorizationService {
  private apiUrl = 'http://localhost:5212/api/Motorization'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}

  getAllmotorization(): Observable<IMotorization[]> {
    return this.http.get<IMotorization[]>(`${this.apiUrl}`);
  }

  getmotorization(id: string): Observable<IMotorization> {
    return this.http.get<IMotorization>(`${this.apiUrl}/${id}`);
  }

  createMotorization(motorizationData: IMotorization): void {
    this.http
      .post<any>(this.apiUrl + '/CreateOneMotorization', motorizationData)
      .subscribe();
  }

  updatemotorization(id: string, motorization: IMotorization): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, motorization);
  }

  deletemotorization(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
