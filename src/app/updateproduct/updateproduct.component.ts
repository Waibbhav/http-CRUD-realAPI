import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiseService } from '../servise.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  id:any;
  image:any;
  selectimage: any;
  formvalue: any={};
  formDataa: any;
  singleprod:any;
  constructor(private actrout:ActivatedRoute,private serv:ServiseService, private router:Router) { }

  ngOnInit(): void {
    this.actrout.paramMap.subscribe((param)=>{
      this.id=param.get('id')
      // console.log("update",this.id);

      this.serv.singleprod(this.id).subscribe((res:any)=>{
        this.singleprod= res.data;
        console.log(this.singleprod);
        this.image=this.singleprod.image
        // console.log(this.image);
        
        this.formvalue=new FormGroup({
          name:new FormControl(this.singleprod.title),
          description:new FormControl(this.singleprod.description)
        })
      })
    })
  }

  onchange(event:any){
    this.selectimage = event.target.files[0]
    console.log(this.selectimage);
  }

  submit(){
// this.formDataa=this.formvalue.value
this.formDataa=this.formvalue.getRawValue()
// console.log(this.formDataa);

const formData: FormData = new FormData();
formData.append("id",this.singleprod._id)
formData.append("title",this.formDataa.name);
formData.append("description",this.formDataa.description);

if (this.selectimage) {
  formData.append('image',this.selectimage,this.selectimage?.name)
}else{
  formData.append('image',this.image)
}
// console.log(formData);

this.serv.updateprod(formData).subscribe((res:any) =>{
// console.log(res);
})
this.router.navigate(["/products"])
  }
}
