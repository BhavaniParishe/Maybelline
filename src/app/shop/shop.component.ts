import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(private service:ProductService,private route:Router){}
  products:any;
  img2="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/catalog-banners/sitebanner_lipstick_desktop_27_10.jpg?rev=9111a4cd38f54598aea8c6b6a0c34452&cx=0.55&cy=0.6&cw=1320&ch=250&hash=48F914FAF8C42E8CD8F9E476AEE2C2B4";
   shop1="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/powder/fit-me-mineral-loose-finishing-powder/light/fit_me_loose_powder_light_o_a.jpg?rev=309c9f5c61644d63b6b04032f3ede0c1&cx=0&cy=0&cw=315&ch=472&hash=97C47BAF3AB78C75BC20670DA8DB02C4";
   shop2="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/mascara/volum-express-the-colossal-washable-mascara/maybelline-mascara-colossal-classic-black-041554050905-c.jpg?rev=1aa3e2318b8c417f9c527ef8e1cfef24&cx=0&cy=0&cw=315&ch=472&hash=3BF712B927E9385D143F1F3C3571CA77";
   shop3="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/best-sellers/2-fit-me-foundation.jpg?rev=7d2b2ce1b0ba4b4d93591fbdacba39d0&cx=0.48&cy=0.35&cw=315&ch=472&hash=C52B8005F15CFC40274B4D0577850117";
   shop4="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/best-sellers/4-superstay-matte-ink.jpg?rev=dab003bc5ee0481f83b88b48aecbb8b6&cx=0.48&cy=0.57&cw=315&ch=472&hash=318D9AF6E00171BC13A9EF1C4DA265FD";
   shop5="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/best-sellers/3-concealer.jpg?rev=3c78495ae5c74d1bb6379c4abe4ce191&cx=0&cy=0&cw=315&ch=472&hash=1FE9086E90F3F7425C9C47853CC0F5E9";
   shop6="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/liners/drama-gel-liner/modules/product-info/black/drama-gel-liner-315-x-472-01.jpg?rev=0021e1327c464b31b6f3897c50ceb03c&cx=0.44&cy=0.72&cw=315&ch=472&hash=A88AECA69219DAEB87DB453C039F858F";
   shop7="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/brow/tattoo-brow-36h-eyebrow-pencil/modules/product-info/natural-brown/natural-brown-01.jpg?rev=d5eeb4761dbd443399cca9b1edd63a36&cx=0&cy=0&cw=315&ch=472&hash=564FBFCF96C7A77DA00D567BEC626557";
   shop8="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/contouring/facestudio-master-chrome-metallic-highlighter-powder/master-chrome-highlighter-a.jpg?rev=2de35b39c56845f2a78d83c819be7d54&cx=0&cy=0&cw=315&ch=472&hash=38315DACFE7D92073CBEEB38B13189F2";
   shop9="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/brow/define-and-blend-brow-pencil/modules/product-info/grey-brown/define-and-blend-grey-brown-001.jpg?rev=2ffb659f353049d7a30ada4b8d9da824&cx=0&cy=0&cw=315&ch=472&hash=DF33A524262144D684AD7C19248E3BFD";
   shop10="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/brow/fashion-brow-cream-pencil/modules/product-info/grey/315-x-472_grey-eyebrow-01.jpg?rev=fa673c07ff7d4ea991749b04a77225b9&cx=0&cy=0&cw=315&ch=472&hash=9EE5C848E9722C28A0CDBD45415F80A8";
   shop11="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/foundation/superstay-foundation/module/product-info/classic-ivory/880x1320_ss_foundation_classic_ivory_o.jpg?rev=34d091338dd94a058a405840e7e3e1b5&cx=0&cy=0&cw=315&ch=472&hash=3693BCF3A4136B6F7416AAB8EDFD661F";
   shop12="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-balm/baby-lips-loves-color/modules/product-info/berry-crush/berry-crush-001.jpg?rev=5075987f0016402381f25182494c68d4&cx=0&cy=0&cw=315&ch=472&hash=9D15C8C80AE43B0458A468B1F8B17D72";

  
   cart(product:any){
    this.service.addtocart(product);
    this.route.navigateByUrl("/user/cart")
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