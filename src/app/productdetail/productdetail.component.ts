import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiseService } from '../servise.service';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  pid: any;
  product :any=[];

  constructor(private actrt: ActivatedRoute, private serv: ServiseService) { }

  ngOnInit(): void {
    this.actrt.paramMap.subscribe(res => {
      this.pid = res.get('id')
      console.log(this.pid);
      this.serv.singleprod(this.pid).subscribe((res: any) => {
       console.log(res.data);
       this.product=res.data;

      })
    })
  }
}
