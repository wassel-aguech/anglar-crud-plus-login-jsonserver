import { Component } from '@angular/core';
import { Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {

  updateproductform?:FormGroup
  constructor(private serviceproduct:ProductserviceService,private router:Router,private route:ActivatedRoute){}
id:any
  ngOnInit(){
    this.updateproductform = new FormGroup({
      marque: new FormControl('', [Validators.required, Validators.minLength(3)]),
      quantite: new FormControl('', [Validators.required, Validators.minLength(10)]),
      prix: new FormControl('', Validators.required),
      fournisseur: new FormControl('', Validators.required),
      dateentre: new FormControl('', Validators.required),
     
    })
    this.getoneproduct()
  }

  getoneproduct() {
    this.id = this.route.snapshot.params['id']
    this.serviceproduct.getproductbyid(this.id).subscribe((response) => {
      this.updateproductform?.patchValue(response);
    }, (Error) => {
      console.log('error')
    })
  }

  update() {
    this.serviceproduct.updateproduct(this.id, this.updateproductform?.value).subscribe((Response) => {
      alert('product updated success !!')
      this.router.navigateByUrl('/product')
    }, (Error) => {
      console.log('error')
    })
  }


  
}
