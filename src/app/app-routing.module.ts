import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupDetailsComponent } from './signup/signupdetails/signup-details.component';
import { SignupFormComponent } from './signup/signup-form.component';


const routes: Routes =[
  {path: 'signup-details', component: SignupDetailsComponent },
  {path: '', component: SignupFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
