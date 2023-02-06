import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ServiseService } from '../servise.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formData: any;
  selectimg: any;
  formdatavalue: any;

  constructor(private serv: ServiseService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      first_name: new FormControl('',),
      last_name: new FormControl('',),
      email: new FormControl('',),
      password: new FormControl('',)

    })
  }

  onchange(event: any) {
    // console.log(event);
    this.selectimg = event.target.files[0]
    // console.log(this.selectimg);
  }

  submitData() {
    this.formdatavalue = this.formData.value
    // console.log(this.formdatavalue);

    const formData: FormData = new FormData();

    formData.append('first_name', this.formdatavalue.first_name);
    formData.append('last_name', this.formdatavalue.last_name);
    formData.append('email', this.formdatavalue.email);
    formData.append('password', this.formdatavalue.password);
    formData.append('profile_pic', this.selectimg, this.selectimg.name)

    // console.log(formData);
    

    this.serv.sinup(formData).subscribe(res => {
      console.log(res);

    })

  }

}
