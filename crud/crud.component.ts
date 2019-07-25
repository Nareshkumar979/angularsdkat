import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CrudComponent implements OnInit {

  listofEmployees=[];
  enteredEmployeeInformation: any;
  editEmployeeInformation=[];
  editID: number;
  name: string;
  email: string;
  designation: string;
  experience: number;
  expertise: string;
  errorMessage: string;
  successMessage: string;
  searchEmployeeInformation: string;
  constructor() {     
  }

  ngOnInit() {
    this.listofEmployees=[];
  }

  saveEmployeeInformation()
  {
    if(this.name==undefined || this.email==undefined || this.designation==undefined || this.experience==undefined || this.expertise==undefined || this.name=='' || this.email=='' || this.designation=='' || this.experience==0 || this.expertise=='')
    {
      this.errorMessage='All Form Fields are Required...';
      this.successMessage='';
    }
    else
    {
      this.enteredEmployeeInformation = {
        'name': this.name,
        'email': this.email,
        'designation': this.designation,
        'experience': this.experience,
        'expertise': this.expertise
      }      
      this.listofEmployees.push(this.enteredEmployeeInformation);
      this.errorMessage='';
      this.successMessage='Data Inserted Sucessfully...';
      this.name='';
      this.email='';
      this.designation='';
      this.experience=0;
      this.expertise='';
    }
    
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  editSingleEmployee(index)
  {
    this.successMessage='';
    this.editEmployeeInformation = this.listofEmployees[index];
    console.log(this.editEmployeeInformation);
    this.editID=index;    
    this.name=this.editEmployeeInformation["name"];
    this.email = this.editEmployeeInformation["email"];
    this.designation = this.editEmployeeInformation["designation"];
    this.experience = this.editEmployeeInformation["experience"];
    this.expertise = this.editEmployeeInformation["expertise"];
  }

  updateEmployeeInformation()
  {
    if(this.name==undefined || this.email==undefined || this.designation==undefined || this.experience==undefined || this.expertise==undefined || this.name=='' || this.email=='' || this.designation=='' || this.experience==0 || this.expertise=='')
    {
      this.errorMessage='All Form Fields are Required...';
      this.successMessage='';
    }
    else
    {          
      this.listofEmployees[this.editID].name=this.name;
      this.listofEmployees[this.editID].email=this.email;
      this.listofEmployees[this.editID].designation=this.designation;
      this.listofEmployees[this.editID].experience=this.experience;
      this.listofEmployees[this.editID].expertise=this.expertise;
      this.errorMessage='';
      this.successMessage='Data Updated Sucessfully...';
      this.name='';
      this.email='';
      this.designation='';
      this.experience=0;
      this.expertise='';
      this.editEmployeeInformation=[];
    }
  }


  deleteSingleEmployee(index)
  {
    this.listofEmployees.splice(index,1);
  }



}
