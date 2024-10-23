import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Rent } from './../../models/Rent';
import { CreateRentVM } from '../../viewModel/rent/CreateRentVM';
import { environment } from '../../environments/environment';
import GetRentsByUserAsync from '../../interfaces/GetRentsByUserAsync';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  private newRent$ = new Subject<Omit<Rent, 'id'>>();

  constructor(private http: HttpClient) {}

  /**
   * Créer une nouvelle réservation (rent) de véhicule
   * @param rent Les informations de réservation
   * @returns Observable<Rent>
   */
  public create$ = (rent: CreateRentVM): Observable<Rent> =>
    this.http.post<Rent>(`${environment.apiUrl}/Rent/CreateOneRent`, rent);

  /**
   * Charger toutes les réservations (rents)
   * @returns Observable<Rent[]>
   */
  public loadAll$ = (): Observable<Rent[]> =>
    this.http.get<Rent[]>(`${environment.apiUrl}/Rent/GetAllRents`).pipe(
      tap((rents) => {
        console.log('Rents:', rents);
      })
    );

  /**
   * Charger toutes les réservations d'un utilisateur (rents)
   * @param userId L'ID de l'utilisateur
   * @returns Observable<Rent[]>
   */
  public loadRentByUser$(): Observable<GetRentsByUserAsync[]> {
    return this.http
      .get<GetRentsByUserAsync[]>(`${environment.apiUrl}/Rent/GetRentByUserId`)
      .pipe(tap((rents) => {}));
  }

  /**
   * Charger une réservation (rent) spécifique par ID
   * @param id L'ID de la réservation
   * @returns Observable<Rent>
   */
  public loadRentById$ = (id: string): Observable<Rent> => {
    const url = `${environment.apiUrl}/Rent/${id}`;
    return this.http.get<Rent>(url);
  };

  /**
   * Emet une notification `next` depuis l'observable `newRent$`
   * @param partialRent Données partielles de la réservation
   */
  emitNewRentObservable(partialRent: Omit<Rent, 'id'>): void {
    this.newRent$.next(partialRent);
  }

  /**
   * Renvoie une référence à l'observable `newRent$`
   * @returns Observable
   */
  getNewRentObservable(): Observable<Omit<Rent, 'id'>> {
    return this.newRent$.asObservable();
  }
}
