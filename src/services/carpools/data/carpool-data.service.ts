import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CarpoolDataService {
  constructor(private http: HttpClient) {}
}
