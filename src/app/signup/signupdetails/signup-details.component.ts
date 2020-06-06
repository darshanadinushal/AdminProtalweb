import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/service/country.service';


@Component({
    selector: 'signup-details',
    templateUrl: './signup-details.component.html',
    styleUrls: ['./signup-details.component.scss']
  })
  export class SignupDetailsComponent implements OnInit  {

    userProfile:User ;

    constructor(){

    }
  ngOnInit(): void {
    this.getUserProfileValues();
  }

  getUserProfileValues(){
    this.userProfile =JSON.parse(localStorage.getItem('userProfile'));
  }
     

  }