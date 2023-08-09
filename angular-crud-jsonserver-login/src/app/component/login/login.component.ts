import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform?: FormGroup;
  listusers: any
  found: any
  submitted = false
  constructor(private servicelogin: LoginserviceService, private route: Router, private http: HttpClient) { }


  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
    this.listUser()
  }


  listUser() {
    this.servicelogin.getallusers().subscribe((response: any) => {
      this.listusers = response
    }, (error) => {
      console.log(error);
    })
  }
  login() {
    this.submitted = true
    this.found = this.listusers.find((user: any) => user.mail === this.loginform?.value.username
      && user.password === this.loginform?.value.password
    )
    if (this.found) {
      this.route.navigate(['/user'])
      localStorage.setItem('connected', 'connected')
    } else {
      alert('verify your email or password')
    }
  }







}




