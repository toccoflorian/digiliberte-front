import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateBrand } from '../../interfaces/CreateOneBrand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private apiUrl = 'http://localhost:5212/api/Brand'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}

  getAllBrand(): Observable<ICreateBrand[]> {
    return this.http.get<ICreateBrand[]>(`${this.apiUrl}`);
  }

  getBrand(id: string): Observable<ICreateBrand> {
    return this.http.get<ICreateBrand>(`${this.apiUrl}/${id}`);
  }

  createBrand(brandData: ICreateBrand): void {
    this.http.post<any>(this.apiUrl + '/CreateBrand', brandData).subscribe();
  }

  updateBrand(id: string, brand: ICreateBrand): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, brand);
  }

  deleteBrand(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
