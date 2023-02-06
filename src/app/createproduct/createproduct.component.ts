import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { ServiseService } from '../servise.service';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  selectimage: any;
  formvalue: any;
  formDataa: any;
  
  constructor( private serv:ServiseService,private router:Router) { }

  ngOnInit(): void {
    this.formvalue=new FormGroup({
      name:new FormControl('',),
      description:new FormControl('',)
    })
  }

  onchange(event:any){
    this.selectimage = event.target.files[0]
    // console.log(this.selectimage);
  }

  submit(){
this.formDataa=this.formvalue.value
// console.log(this.formDataa);

const formData: FormData = new FormData();

formData.append("title",this.formDataa.name);
formData.append("description",this.formDataa.description);
formData.append('image',this.selectimage,this.selectimage.name)

// console.log(formData);

this.serv.addprod(formData).subscribe((res) =>{
console.log(res);
})
this.router.navigate(["/products"])
  }

}
