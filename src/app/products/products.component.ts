import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any;

  constructor(private service:ProductService,private route:Router){}
  editcontent(product:any){
    product.isEdit = true;
  }
  delete(product:any){
    this.service.deletecart(product);
  }
  cart(product:any){
    this.service.addtocart(product);
    this.route.navigateByUrl("/user/cart")
  }
  
   update(product:any){
    product.isEdit=false;
    this.service.updateProduct(product);
    console.table(product)
  }
  ngOnInit(){ 
    this.service.viewProducts().subscribe((res)=>{
      this.products=res;
      console.log(this.products)
    })
  }
  

}