import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApIServiceService {

  constructor(private http:HttpClient) { }
  baseUrl = 'http://localhost:3333'
  userRegister(userData:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,userData);
  }
  userLogin(userData:any): Observable<any>{
    console.log("DAta:_")
    console.log(userData);
    return this.http.post(`${this.baseUrl}/login`,userData);
  }
}
