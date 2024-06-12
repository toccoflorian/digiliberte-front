import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FeatureCollection } from "../../interfaces/geoCoding/FeatureCollection";

@Injectable({
  providedIn: "root",
})
export class GeoService {
  private apiUrl = "https://api-adresse.data.gouv.fr/search/?q=";

  constructor(private http: HttpClient) {}

  getData(querry?: string): Observable<FeatureCollection> {
    const headers = new HttpHeaders();
    return this.http.get<FeatureCollection>(this.apiUrl + querry, {
      headers,
    });
  }
  getAddressDetails(label: string): Observable<FeatureCollection> {
    const headers = new HttpHeaders();

    return this.http.get<FeatureCollection>(this.apiUrl + label, { headers });
  }
}
