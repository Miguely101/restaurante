import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/models/usersModels';
import { Restaurant } from '../app/models/restaurantModel';

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
    console.log(userData);
    return this.http.post(`${this.baseUrl}/login`,userData);
  }

  userUpdate(userData:any): Observable<any>{
    console.log(userData);
    return this.http.put(`${this.baseUrl}/user`,userData);
  }
  
  getUserData(): Observable<any> {
    // Add authorization header to request
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    // Make API call with headers
    return this.http.get(`${this.baseUrl}/usercheck`, { headers });
  }

  makeReserva(body:any): Observable<any> {
    // Add authorization header to request
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    // Make API call with headers
    return this.http.post(`${this.baseUrl}/createreserva`,body,{ headers });
  }


  getRestaurantes(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/restaurants`);
  }

 
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/user`);
  }
  
}