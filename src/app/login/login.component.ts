import { Serializer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiseService } from '../servise.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Fg:any;
formvalue:any;
responce:any;
  constructor( private serv :ServiseService , private serv2 :StoreService , private rout:Router)  { }

  ngOnInit(): void {

    this.Fg=new FormGroup({
      email : new FormControl('',),
      password : new FormControl('',)
    })
  }
submit(){
this.formvalue=this.Fg.value 
// console.log(this.formvalue);
this.serv.singin(this.formvalue).subscribe(res =>{
  // console.log(res);
this.responce= res
// console.log(this.responce);

if(this.responce.status==200){
  this.serv2.setData( this.responce.data.first_name,
    this.responce.data.last_name,
    this.responce.data.email,
    this.responce.token
    )

    this.rout.navigate(['/user'])
  }
})
}
}
