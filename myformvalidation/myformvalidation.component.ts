import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myformvalidation',
  templateUrl: './myformvalidation.component.html',
  styleUrls: ['./myformvalidation.component.css']
})
export class MyformvalidationComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  city: string;
  country: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}
