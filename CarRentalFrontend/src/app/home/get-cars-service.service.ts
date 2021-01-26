import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCarsServiceService {

  constructor(private http:HttpClient) { }

  getAllCars():Observable<any>{
    return this.http.get("http://localhost:8090/getcars")
  }
}
