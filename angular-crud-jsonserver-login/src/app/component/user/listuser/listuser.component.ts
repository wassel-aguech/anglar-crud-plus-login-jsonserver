import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {
  nameuser: any
  listUsers: any
  constructor(private userservice: UserserviceService, private router: Router) { }

  ngOnInit() {
    this.listUser();
  }


  listUser() {
    this.userservice.getallusers().subscribe((response: any) => {
      this.listUsers = response
    }, (error) => {
      console.log(error);
    })
  }

  delete(id: any) {
    this.userservice.deleteuser(id).subscribe((response: any) => {
      alert('delete succsess')
      this.listUser();
    }, (error) => {
      console.log(error);

    })
  }
  gotoupdate(id: any) {
    this.router.navigate(['/user', id + 1])
  }
}

