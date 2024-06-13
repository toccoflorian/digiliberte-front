import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { dev } from "../../../app/env/env";
import { Observable } from "rxjs";
import IListGetOneRent from "../../../interfaces/carpool/IListGetOneRent";
import IGetOneRentWithCarPool from "../../../interfaces/carpool/IGetOneRentWithCarPool";

@Injectable({
  providedIn: "root",
})
/**
 * SERVICE FOR ALL DATA PURPOSE THAT WILL BE USED FOR CARPOOL THINGS
 */
export class CarpoolDataService {
  constructor(private http: HttpClient) {}

  private apiUrl = dev.baseApiUrlSwagger;

  getRentByUser(): Observable<Array<IGetOneRentWithCarPool>> {
    return this.http.get<Array<IGetOneRentWithCarPool>>(
      this.apiUrl + "/Rent/GetRentByUserId"
    );
  }
}
