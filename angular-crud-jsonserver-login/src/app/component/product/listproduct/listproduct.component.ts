import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {

constructor(private serviceproduct:ProductserviceService,private router:Router){}
listProducts:any
nameproduct:any;
ngOnInit(){
  this.listProduct()
}



  listProduct() {
    this.serviceproduct.getallproduct().subscribe((response: any) => {

      this.listProducts = response

    }, (error) => {
      console.log(error);

    })
  }



  delete(id: any) {
    this.serviceproduct.deleteproduct(id).subscribe((response: any) => {
      alert('delete succsess')
      this.listProduct();
    }, (error) => {
      console.log(error);

    })
  }

  gotoupdate(id:any){
    this.router.navigate(['/product',id+1])
      }
}
