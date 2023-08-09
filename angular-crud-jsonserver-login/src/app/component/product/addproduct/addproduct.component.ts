import { Component } from '@angular/core';
import { Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  productform?:FormGroup
  submitted=false
  constructor(private serviceproduct:ProductserviceService,private router:Router){}

  ngOnInit(){
    this.productform = new FormGroup({
      marque: new FormControl('', [Validators.required, Validators.minLength(3)]),
      quantite: new FormControl('', [Validators.required, Validators.minLength(3)]),
      prix: new FormControl('', Validators.required),
      fournisseur: new FormControl('', Validators.required),
      dateentre: new FormControl('', Validators.required),
     
    })
  }



  onsubmit() {
    this.submitted=true
    if(this.productform?.invalid){
     return
    }
    this.serviceproduct.register(this.productform?.value)
      .subscribe(
        Response =>alert('product added successfuly'),
        error => console.log('error!!', error),
      )
      this.router.navigate(['/product']);

  }
}
