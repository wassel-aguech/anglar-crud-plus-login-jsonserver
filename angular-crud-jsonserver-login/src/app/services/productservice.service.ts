import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  url = 'http://localhost:3000/products';

  constructor( private http : HttpClient ) { }


register(productData : any){
 return this.http.post(this.url , productData)
}
getallproduct(){
  return this.http.get(this.url)
}
deleteproduct(id:any){
  return this.http.delete(this.url +'/'+id)
}
getproductbyid(id: any) {
  return this.http.get(this.url + '/' + id)
}
updateproduct(id: any, data: any) {
  return this.http.put(this.url +'/'+ id, data)
}
}
