import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdGuard } from './auth-gaurd.guard';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import {UserComponent} from './user/user.component'
import { ProductdetailComponent } from './productdetail/productdetail.component';
const routes: Routes = [
  {path :'register' , component:RegistrationComponent},
  {path :"login", component:LoginComponent},
  {path :'user' , component:UserComponent, canActivate:[AuthGaurdGuard]},
  {path :'products',component:ProductsComponent ,canActivate:[AuthGaurdGuard]},
  {path :'update/:id',component:UpdateproductComponent,canActivate:[AuthGaurdGuard]},
  {path :"addproduct",component:CreateproductComponent,canActivate:[AuthGaurdGuard]},
  {path :"details/:id",component:ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
