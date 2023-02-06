import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private router:Router) { }

  setData(first_name:string,last_name:string,email:string,token:string){
   window.localStorage.setItem("f_name",first_name),
   window.localStorage.setItem('l_name',last_name),
   window.localStorage.setItem('email',email),
   window.localStorage.setItem('token',token)
  }

  getData(){
    const allData=[];
    let data = {
      first_name:window.localStorage.getItem('f_name'),
      last_name:window.localStorage.getItem('l_name'),
      email:window.localStorage.getItem('email'),
      // token:window.localStorage.getItem('token')
    }
    allData.push(data);
    return allData
  }
  getToken(){
    return window.localStorage.getItem('token');
  }

  logout(){
    return window.localStorage.clear(), this.router.navigate(['/login']);
  }
}
