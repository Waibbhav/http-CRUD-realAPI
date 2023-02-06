import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';
import { ServiseService } from '../servise.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:any;
userdetail:any={};
base_url:any= 'https://wtsacademy.dedicateddevelopers.us/' ;
folder_path:any='uploads/user/profile_pic/';
img_url:any='';

  constructor(private serv2:StoreService ,private router:Router,private serv:ServiseService) { }

  ngOnInit(): void {
// this.user=this.serv2.getData()
// console.log(this.user);
this.serv.user_profile().subscribe((res:any)=>{
  this.userdetail=res.data
  // console.log(this.userdetail);
  this.img_url=this.base_url+this.folder_path+this.userdetail.profile_pic
  // console.log(this.img_url);
  
})
  }

  logout(){
    this.serv2.logout();
    alert('logout Successfull');
this.router.navigate(['/login'])
  }

}
