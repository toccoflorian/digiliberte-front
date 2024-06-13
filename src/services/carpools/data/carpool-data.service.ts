import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { dev } from "../../../app/env/env";
import { Observable } from "rxjs";
import IListGetOneRent from "../../../interfaces/carpool/IListGetOneRent";

@Injectable({
  providedIn: "root",
})
/**
 * SERVICE FOR ALL DATA PURPOSE THAT WILL BE USED FOR CARPOOL THINGS
 */
export class CarpoolDataService {
  constructor(private http: HttpClient) {}

  private apiUrl = dev.baseApiUrlSwagger;

  getRentByUser(): Observable<IListGetOneRent> {
    return this.http.get<IListGetOneRent>(
      this.apiUrl + "/Rent/GetRentByUserId"
    );
  }
}
