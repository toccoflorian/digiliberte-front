import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateMotorization } from '../../interfaces/CreateMotorization';

@Injectable({
  providedIn: 'root',
})
export class MotorizationService {
  private apiUrl = 'http://localhost:5212/api/Motorization'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}

  getAllmotorization(): Observable<ICreateMotorization[]> {
    return this.http.get<ICreateMotorization[]>(`${this.apiUrl}`);
  }

  getmotorization(id: string): Observable<ICreateMotorization> {
    return this.http.get<ICreateMotorization>(`${this.apiUrl}/${id}`);
  }

  createMotorization(motorizationData: ICreateMotorization): void {
    this.http
      .post<any>(this.apiUrl + '/CreateOneMotorization', motorizationData)
      .subscribe();
  }

  updatemotorization(
    id: string,
    motorization: ICreateMotorization
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, motorization);
  }

  deletemotorization(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
