import { Component } from '@angular/core';
import { Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
userform?:FormGroup;
id:any

  constructor(private router:Router , private route:ActivatedRoute , private serviceuser:UserserviceService){}



  ngOnInit(){
    this.userform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      country: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
     
    })
    this.getoneuser()
  }



  getoneuser() {
    this.id = this.route.snapshot.params['id']
    this.serviceuser.getuserbyid(this.id).subscribe((response) => {
      this.userform?.patchValue(response);
    }, (Error) => {
      console.log('error')
    })
  }

  update() {
    this.serviceuser.updateuser(this.id, this.userform?.value).subscribe((Response) => {
      alert('user updated success !!')
      this.router.navigateByUrl('/user')
    }, (Error) => {
      console.log('error')
    })
  }






}
