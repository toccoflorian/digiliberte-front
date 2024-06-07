import { Injectable } from '@angular/core';
import IGetOneVehicule from '../../interfaces/IGetOneVehicule';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiculesService {
  private newVehicule$;
  constructor(private http: HttpClient) {
    this.newVehicule$ = new Subject();
  }

  /**
   * Emet une notification next depuis l'observable newVehicule$
   * @param partialVehicule
   */
  emitNewVehiculeObservable(
    partialVehicule: Omit<IGetOneVehicule, 'id'>
  ): void {
    this.newVehicule$.next(partialVehicule);
  }
  /**
   * Renvoie une référence à l'observable newVehicule$ qui est chaud par défaut car
   * issu de Subject
   * @returns Observable
   */
  getNewVehiculeObservable(): Observable<any> {
    return this.newVehicule$.asObservable();
  }

  loadVehicules(): Observable<IGetOneVehicule[]> {
    const url =
      // N'oublie pas les variables pour la pagination !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      'https://localhost:7193/api/Vehicle/GetAllVehicles/all?paginationIndex=0&pageSize=10';
    const params = { status: 'PENDING' };
    return this.http.get<Array<IGetOneVehicule>>(url, { params });
  }
}
