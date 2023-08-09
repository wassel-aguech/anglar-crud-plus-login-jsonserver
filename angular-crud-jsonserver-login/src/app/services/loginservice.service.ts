import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  url = 'http://localhost:3000/users';

  constructor( private http : HttpClient ) { }




getallusers(){
  return this.http.get(this.url)
}


}
