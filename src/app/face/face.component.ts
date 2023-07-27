import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent {
  constructor(private service:ProductService,private route:Router){}
  img1="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/catalog-banners/sitebanner_powder_desktop_27_10.jpg?rev=f79772a8b12a40018b5c97e6f686b0f0&cx=0.25&cy=0.31&cw=1320&ch=250&hash=EA5E4E34757C08FBF747F6500AB39EED";
  products:any;
  cart(product:any){
    this.service.addtocart(product);
    this.route.navigateByUrl("/user/cart")
  }
  wishlist(product:any){
    this.service.addtowish(product);
    this.route.navigateByUrl("/user/wish")
  }
  ngOnInit(){ 
    this.service.viewProducts().subscribe((res)=>{
      this.products=res;
      console.log(this.products)
    })
  }
  checkout(){
    
    this.route.navigateByUrl('/user/checkout')
  }
  buy(){
    alert("Your order placed successfully")
  }


}
