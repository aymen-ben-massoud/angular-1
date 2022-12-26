import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path: 'login' , component:LoginComponent},
{
  path: '' , component:HomepageComponent
},
 { path: 'support' , component:SupportComponent},
 { path: 'pricing' , component:PricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
