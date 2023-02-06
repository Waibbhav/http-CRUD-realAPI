import { Component, OnInit } from '@angular/core';
import { ServiseService } from '../servise.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // showFiller = false;
    token:any;
  constructor(private serv2:StoreService ,private serv:ServiseService) { }

  ngOnInit(): void {
   
    
  }

  islogin(){
    this.token=this.serv2.getToken()
  // console.log(this.token);
   return this.token
  }

  logout(){
    this.serv2.logout();
  } 

}
