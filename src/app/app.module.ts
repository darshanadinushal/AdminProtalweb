import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupDetailsComponent } from './signup/signupdetails/signup-details.component';
import { SignupFormComponent } from './signup/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from './service/country.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupDetailsComponent,
    SignupFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 

  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
