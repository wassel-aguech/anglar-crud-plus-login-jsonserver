import { Component } from '@angular/core';
import { Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
userform? : FormGroup
listUsers:any;
submitted=false
  constructor( private userservice:UserserviceService, private router:Router ){}
  
  
  ngOnInit(){
    this.userform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      country: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
     
    })
  }

  onsubmit() {
    this.submitted=true
    if(this.userform?.invalid){
      return
     }
    this.userservice.register(this.userform?.value)
      .subscribe(
        Response =>alert('user added successfuly'),
        error => console.log('error!!', error),
      )
      this.router.navigate(['/user']);
  }
}
