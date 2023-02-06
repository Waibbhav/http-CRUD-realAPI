import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Userdetail } from './user';
import { StoreService } from "./store.service";
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ServiseService {
  singupapi = 'https://wtsacademy.dedicateddevelopers.us/api/user/signup'
  singinapi = 'https://wtsacademy.dedicateddevelopers.us/api/user/signin'
  profile_api = 'https://wtsacademy.dedicateddevelopers.us/api/user/profile-details'


  addprod_api = "https://wtsacademy.dedicateddevelopers.us/api/product/create"
  delprod_api = "https://wtsacademy.dedicateddevelopers.us/api/product/remove"
  allprod_api = "https://wtsacademy.dedicateddevelopers.us/api/product/list"
  singleprod_api = 'https://wtsacademy.dedicateddevelopers.us/api/product/detail'
  updateprod_api='https://wtsacademy.dedicateddevelopers.us/api/product/update'
  constructor(private http: HttpClient, private auth: StoreService) { }
  sinup(newuser: any): Observable<User[]> {
    return this.http.post<User[]>(this.singupapi, newuser)
  }
  singin(detail: any): Observable<Userdetail[]> {
    return this.http.post<Userdetail[]>(this.singinapi, detail)
  }
  user_profile(): Observable<User[]> {
    return this.http.get<User[]>(this.profile_api)
    // return this.http.get<User[]>(this.profile_api,{headers:new HttpHeaders({'x-access-token' :`${this.auth.getToken()}`})})
  }
  addprod(newprod: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.addprod_api, newprod)
  }

  allprod(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.allprod_api, data)

  }
  delprod(id: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.delprod_api, id)
  }
  singleprod(id: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.singleprod_api}/${id}`)
  }

  updateprod(data:any):Observable<Product[]>{
    return this.http.post<Product[]>(this.updateprod_api,data)
  }
}
