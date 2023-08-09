import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { AdduserComponent } from './component/user/adduser/adduser.component';
import { ListuserComponent } from './component/user/listuser/listuser.component';
import { AddproductComponent } from './component/product/addproduct/addproduct.component';
import { ListproductComponent } from './component/product/listproduct/listproduct.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateuserComponent } from './component/user/updateuser/updateuser.component';
import { UpdateproductComponent } from './component/product/updateproduct/updateproduct.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagenotfoundComponent,
    AdduserComponent,
    ListuserComponent,
    AddproductComponent,
    ListproductComponent,
    LoginComponent,
    FooterComponent,
    UpdateuserComponent,
    UpdateproductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
