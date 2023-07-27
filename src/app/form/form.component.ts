import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  Address:any;
  products:any;
  productName:any;
  productImage:any;
  productPrice:any;
  constructor(private route:Router){}
  buy(){
    alert("Your order placed successfully")
  }
  gotocart(){
  
  }

}

