import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.css']
})
export class EyesComponent {
  constructor(private service:ProductService,private route:Router){}
  eye:any;
  products:any;
  img1="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/catalog-banners/sitebanner_eyeliner_desktop.jpg?rev=3b3d4c0d7cc84024b9b3685f1bb7b7cc&cx=0.49&cy=0.31&cw=1320&ch=250&hash=423A35A8E66F5F0A288B6E270595162F";
  img2="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/navigation/header/eyes/new-eyeliner.jpg?rev=f1544bbe91c54601b07eb9befb73a208&cx=0.59&cy=0.56&cw=150&ch=182&hash=6093CAB941105F498722BCB20B95AD4C";
  img3="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/navigation/header/eyes/colossal-mascara.jpg?rev=573dee544d234595b441f4a7dda5dd2d&cx=0.25&cy=0.31&cw=150&ch=182&hash=3FDA3132C65D53809D41A282DAAB1B71";
  img4="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/navigation/header/eyes/eye-shadow-01.jpg?rev=7f9314c1d9b14f23ac4c5fa872239588&cx=0.44&cy=0.4&cw=150&ch=182&hash=7C056CEAB26457D0994D110930044D09";
  img5="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/navigation/header/eyes/new-kajal.jpg?rev=5b5f5918808b4859b4c26cf8bdf93132&cx=0.68&cy=0.54&cw=150&ch=182&hash=EF06EB0F669330AC492123A59356B4A5";
  img6="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/navigation/header/eyes/eyes-brow.jpg?rev=3ab8e207a54d4fbba6f411a744a010cd&cx=0.25&cy=0.31&cw=150&ch=182&hash=042F75C2FA8FC5A4526ECC6C36AE3AE4";
  
  ngOnInit(){ 
    this.service.viewProducts().subscribe((res)=>{
      console.log(res)
      this.products=res;
      console.log(this.products)
    })
  }
  cart(product:any){
    this.service.addtocart(product);
    this.route.navigateByUrl("/user/cart")
  }
  wishlist(product:any){
    this.service.addtowish(product);
    this.route.navigateByUrl("/user/wish")
  }
  checkout(){
  
    this.route.navigateByUrl('/user/checkout')
  }
  buy(){
    alert("Your order placed successfully")
  }
}