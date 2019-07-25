import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myformcontrolvalidation',
  templateUrl: './myformcontrolvalidation.component.html',
  styleUrls: ['./myformcontrolvalidation.component.css']
})
export class MyformcontrolvalidationComponent implements OnInit {

  myForm: FormGroup;  
  formDetails: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      fullname:['',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('.{6,}')]]
    });
  }

  submitForm()
  {
    this.formDetails = {
      'fullname': this.myForm.controls.fullname.value,
      'email': this.myForm.controls.email.value,
      'password': this.myForm.controls.password.value
    }    
    console.log(this.formDetails);

  }

}
