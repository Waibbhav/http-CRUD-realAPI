import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserComponent } from './user/user.component';
import {MatCardModule} from '@angular/material/card';
import { TokenService } from './token.service';
import { SelectorListContext } from '@angular/compiler';
import { StoreService } from './store.service';
import { ServiseService } from './servise.service';
import { ProductsComponent } from './products/products.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SidebarComponent,
    UserComponent,
    ProductsComponent,
    CreateproductComponent,
    UpdateproductComponent,
    ProductdetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule
    
  ],
  providers: [
    StoreService,
    ServiseService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenService,
      multi:true
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
