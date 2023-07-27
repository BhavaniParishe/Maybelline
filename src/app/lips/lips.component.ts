import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lips',
  templateUrl: './lips.component.html',
  styleUrls: ['./lips.component.css']
})
export class LipsComponent {
constructor(private service:ProductService,private route:Router){}
products:any;
img1="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/catalog-banners/sitebanner_lipgloss.jpg?rev=ef264ecec13747c2a5ef4844568bc5ba&cx=0.63&cy=0.15&cw=1320&ch=250&hash=4A63BB431FB8C3782C5E7C1587497686";
img2="";
lips:any;
lipbalm:any;
gloss:any;

cart(product:any){
  this.service.addtocart(product);
  this.route.navigateByUrl("/user/cart")
}
wishlist(product:any){
  this.service.addtowish(product);
  this.route.navigateByUrl("/user/wish")
}
ngOnInit(){ 
//   this.service.viewlips().subscribe((res)=>{
//     this.lips=res;
//     console.log(this.lips)
//   })
//   this.service.viewlipbalm().subscribe((res)=>{
//     this.lipbalm=res;
//     console.log(this.products)
//   })
//  this.gloss.push(this.service.viewgloss());
 this.service.viewProducts().subscribe((res)=>{
  this.products=res;
 }) 
}
checkout(){
  
  this.route.navigateByUrl('/user/checkout')
}
buy(){
  alert("Your order placed successfully")
}
}

