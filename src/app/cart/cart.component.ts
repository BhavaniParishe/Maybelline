import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  products:any;
  constructor (private service:ProductService, private route:Router){}
  delete(product:any){
    this.service.deletecart(product);
  }
  ngOnInit(){
    this.service.viewcart().subscribe((res)=>
    {
      this.products=res;
      console.log("res"+res)
    }
    )
  }
  checkout(){
    
    this.route.navigateByUrl('/user/checkout')
  }
  

}
