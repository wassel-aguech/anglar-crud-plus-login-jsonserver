import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
source:any
color:any
constructor(){}

ngOnInit(){
}



changesource(source :any,color:any){
this.source=source;
this.color=color;
}







}
