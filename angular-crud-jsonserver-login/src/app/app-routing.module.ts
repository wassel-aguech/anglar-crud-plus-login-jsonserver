import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { AddproductComponent } from './component/product/addproduct/addproduct.component';
import { ListproductComponent } from './component/product/listproduct/listproduct.component';
import { UpdateproductComponent } from './component/product/updateproduct/updateproduct.component';
import { AdduserComponent } from './component/user/adduser/adduser.component';
import { ListuserComponent } from './component/user/listuser/listuser.component';
import { UpdateuserComponent } from './component/user/updateuser/updateuser.component';
import { GardloginGuard } from './guards/gardlogin.guard';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: ListuserComponent, canActivate: [GardloginGuard] },
  { path: 'product', component: ListproductComponent, canActivate: [GardloginGuard] },
  { path: 'adduser', component: AdduserComponent },
  { path: 'addproduct', component: AddproductComponent, canActivate: [GardloginGuard] },
  { path: 'user/:id', component: UpdateuserComponent, canActivate: [GardloginGuard] },
  { path: 'product/:id', component: UpdateproductComponent, canActivate: [GardloginGuard] },
  { path: 'login', component: LoginComponent },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
