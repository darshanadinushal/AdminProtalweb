import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { CountryService, Country, State, User } from '../service/country.service';
import { Router } from '@angular/router';


@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.scss']
  })
  export class SignupFormComponent implements OnInit {

    signupFormGroup: FormGroup;
    countryList : Country[] =[];
    sateList : State[] =[];
    user : User ;

    constructor(private fb: FormBuilder , private countryService: CountryService ,private router: Router){

    }

    ngOnInit(): void {
        this.initialFormLoad();
    }

    initialFormLoad(){

      this.signupFormGroup = this.fb.group({
        country: new FormControl(this.getCountryList() , Validators.required),
        state : new FormControl(this.sateList , Validators.required),
        email: new FormControl('' ,[Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        password: new FormControl('' , Validators.required),
        phone: new FormControl('' ,[Validators.required ,Validators.pattern("(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})")])
      });

    }

    getCountryList(){
      this.countryService.getCountryList().subscribe(values => {
        if(values.data){
           this.countryList = values.data.country;
           this.sateList = this.countryList[0].state;
           return this.countryList;
        }
    });
    }

    changeCountry(e){
      const country : Country = this.signupFormGroup.controls['country'].value;
        if(country){
          this.sateList =country.state;
        }
    }

    saveUserClick(){
       debugger;
      if(!this.signupFormGroup.invalid){
        
       const selectedCountry:Country =this.signupFormGroup.controls['country'].value;
       const selectedSate :State=this.signupFormGroup.controls['state'].value;

       this.user = { 
         countryName: selectedCountry.name,
         email:this.signupFormGroup.controls['email'].value.trim(),
         password:this.signupFormGroup.controls['password'].value.trim(),
         phone:this.signupFormGroup.controls['phone'].value.trim(),
         stateName:selectedSate.name,
         id :0
       };
     
  
       this.countryService.saveUser(this.user).subscribe(data => {
        if(data){
          localStorage.setItem("userProfile", JSON.stringify(data));
          this.router.navigate(['signup-details'])
        }
    });

      }
     
    }
    


  }