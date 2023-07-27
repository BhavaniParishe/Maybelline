import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {
  img1="https://img.freepik.com/free-photo/top-view-arrangement-with-beauty-bag-copy-space_23-2148301851.jpg?w=740&t=st=1688644261~exp=1688644861~hmac=6af98798a8f29188648ac7c2aace3a5480fe3d4aa15c90cdefeff6be2bbf09e4";
  pId:any;
  pName:any;
  pDesc:any;
  pImage:any;
  pPrice:any;
  pType:any;
  
  productobj:any;
  constructor(private service:ProductService, private route:Router){}

  addproduct(){
    this.productobj={
      productId:this.pId,
      productName:this.pName,
      productDesc:this.pDesc,
      productImage:this.pImage,
      productPrice:this.pPrice,
      productType:this.pType
    }
    this.service.addproduct(this.productobj);
    this.route.navigateByUrl("/user/products")
    
    }
    

  }