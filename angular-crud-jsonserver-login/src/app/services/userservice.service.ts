import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url = 'http://localhost:3000/users';

  constructor( private http : HttpClient ) { }


register(userData : any){
 return this.http.post(this.url , userData)
}

getallusers(){
  return this.http.get(this.url)
}

deleteuser(id:any){
  return this.http.delete(this.url +'/'+id)
}

getuserbyid(id: any) {
  return this.http.get(this.url + '/' + id)


}
updateuser(id: any, data: any) {
  return this.http.put(this.url +'/'+ id, data)
}

}
