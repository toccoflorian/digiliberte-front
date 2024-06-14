import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateCategory } from '../../interfaces/CreateOneCategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:5212/api/category'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<ICreateCategory[]> {
    return this.http.get<ICreateCategory[]>(`${this.apiUrl}`);
  }

  getCategory(id: string): Observable<ICreateCategory> {
    return this.http.get<ICreateCategory>(`${this.apiUrl}/${id}`);
  }

  createCategory(categoryData: ICreateCategory): void {
    this.http
      .post<any>(this.apiUrl + '/CreateCategory', categoryData)
      .subscribe();
  }

  updateCategory(id: string, category: ICreateCategory): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, category);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
