import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiseService } from '../servise.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  count = 1;
  constructor(private serv: ServiseService, private rout:Router) { }
  data = {
  };
  ngOnInit(): void {
      this.data={
        page:1,
        perpage:5
      }
    this.serv.allprod(this.data).subscribe((res: any) => {
      this.products = res.data;
      // console.log(this.products);
    })
  }
  delet(event: any) {
    let target = event.target
    let idattr = target.attributes.id;
    let value = { id: idattr.nodeValue }
    // console.log(value);
    this.serv.delprod(value).subscribe(res => {
      console.log(res);
      this.serv.allprod(this.data).subscribe((res: any) => {
        this.products = res.data;
        // console.log(this.products);
      })
    })
  }
  prev(){
    this.count = this.count - 1;
    this.data={
      page:this.count,
      perpage:5
    }
  this.serv.allprod(this.data).subscribe((res: any) => {
    this.products = res.data;
    // console.log(this.products);
  })
  }
  next(){
    this.count = this.count + 1;
    this.data={
      page:this.count,
      perpage:5
    }
  this.serv.allprod(this.data).subscribe((res: any) => {
    this.products = res.data;
    // console.log(this.products);
  })
  }
}
