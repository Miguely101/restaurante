import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/models/usersModels';
import { Restaurant } from '../app/models/restaurantModel';
import { a } from '@fullcalendar/resource/internal-common';

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

  makePrato(body:any): Observable<any> {
  
    // Make API call with headers
    return this.http.post(`${this.baseUrl}/pratos`,body);
  }


  getRestaurantes(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}/restaurantes`);
  }

  getReservas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/reserva`);
  }

  getReservasById(ids:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/reserva/${ids}`);
  }
  
  getMesasById(ids:any,ids2:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mesas/${ids}/${ids2}`);
  }
  
  setMesas(array:any,ids:any,ids2:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/reserva/${ids}/${ids2}`,array);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/user`);
  }

  getAllPratos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/pratos`);
  }
  getAllPratosTipos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/pratostipos`);
  }
  deletePratos(array:any): Observable<any[]>{
    return this.http.put<any[]>(`${this.baseUrl}/pratosdelete`,array);
  }

  editPrato(pratodata:any): Observable<any>{
    return this.http.put(`${this.baseUrl}/pratoedit`,pratodata);
  }

  getAllMenus(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/menu`);
  }
  getAllMenusItems(ids:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/menuitems/${ids}`);
  }
  makeMenu(body:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/menu`,body);
  }
  deleteMenu(body:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/menudelete`,body);
  }

    editMenu(body:any,id:any): Observable<any> {
    return this.http.put(`${this.baseUrl}/menu/${id}`,body);
  }
  Encomenda(body:any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/encomenda`,body,{ headers });
  }

  getInfos(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/userinfos`,{ headers });
  }

  getAllEncomendasById(ids:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/encomenda/${ids}`);
  }
  getAllEncomendasItems(ids:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/encomendaitems/${ids}`);
  }
  getMesas(ids:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/reservaMesas/${ids}`);
  }
  setEstadoEncomenda(id1:any,id2:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/encomendaestado/${id1}/${id2}`);
  }
  donate(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/donations`,null,{ headers });
  }
  getDonate(): Observable<any> {
    return this.http.get(`${this.baseUrl}/donations`);
  }
}
