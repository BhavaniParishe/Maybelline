import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent {

  products:any;
  constructor (private service:ProductService, private route:Router){}
  delete(product:any){
    this.service.deletewish(product);
  }
  ngOnInit(){
    this.service.viewwish().subscribe((res)=>
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

