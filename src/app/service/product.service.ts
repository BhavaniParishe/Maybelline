import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {products} from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  shoppingcart:any;
  eye:any;
  

  private productsList:products[]=[
    

    {
     
    productId:"1",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/powder/fit-me-mineral-loose-finishing-powder/light/fit_me_loose_powder_light_o_a.jpg?rev=309c9f5c61644d63b6b04032f3ede0c1&cx=0&cy=0&cw=315&ch=472&hash=97C47BAF3AB78C75BC20670DA8DB02C4",
    productDesc:"FIT ME FINISHING POWDER",
    productPrice:"600",
    isEdit:false

  },
  { 
    productId:"2",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/mascara/volum-express-the-colossal-washable-mascara/maybelline-mascara-colossal-classic-black-041554050905-c.jpg?rev=1aa3e2318b8c417f9c527ef8e1cfef24&cx=0&cy=0&cw=315&ch=472&hash=3BF712B927E9385D143F1F3C3571CA77",
    productDesc:"THE WASHABLE MASCARA",
    productPrice:"399",
    isEdit:false
  },
  {
    productId:"3",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/best-sellers/2-fit-me-foundation.jpg?rev=7d2b2ce1b0ba4b4d93591fbdacba39d0&cx=0.48&cy=0.35&cw=315&ch=472&hash=C52B8005F15CFC40274B4D0577850117",
    productDesc:"MATTE + LIQUID ",
    productPrice:"599",
    isEdit:false
  },
  { 
    productId:"4",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/best-sellers/4-superstay-matte-ink.jpg?rev=dab003bc5ee0481f83b88b48aecbb8b6&cx=0.48&cy=0.57&cw=315&ch=472&hash=318D9AF6E00171BC13A9EF1C4DA265FD",
    productDesc:"MATTE INK LIQUID LIPSTICK",
    productPrice:"699",
    isEdit:false
  },
  {
    productId:"5",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/best-sellers/3-concealer.jpg?rev=3c78495ae5c74d1bb6379c4abe4ce191&cx=0&cy=0&cw=315&ch=472&hash=1FE9086E90F3F7425C9C47853CC0F5E9",
    productDesc:"AGE REWIND CONCEALER",
    productPrice:"699",
    isEdit:false
  },
  {
    productId:"6",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/liners/drama-gel-liner/modules/product-info/black/drama-gel-liner-315-x-472-01.jpg?rev=0021e1327c464b31b6f3897c50ceb03c&cx=0.44&cy=0.72&cw=315&ch=472&hash=A88AECA69219DAEB87DB453C039F858F",
    productDesc:"EYESTUDIO LASTING",
    productPrice:"500",
    isEdit:false
  },
  {
    productId:"7",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/brow/tattoo-brow-36h-eyebrow-pencil/modules/product-info/natural-brown/natural-brown-01.jpg?rev=d5eeb4761dbd443399cca9b1edd63a36&cx=0&cy=0&cw=315&ch=472&hash=564FBFCF96C7A77DA00D567BEC626557",
    productDesc:"BROW 36H BROW PENCIL",
    productPrice:"549",
    isEdit:false
  },
  {
    productId:"8",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/contouring/facestudio-master-chrome-metallic-highlighter-powder/master-chrome-highlighter-a.jpg?rev=2de35b39c56845f2a78d83c819be7d54&cx=0&cy=0&cw=315&ch=472&hash=38315DACFE7D92073CBEEB38B13189F2",
    productDesc:"HIGHLIGHTER MAKEUP",
    productPrice:"550",
    isEdit:false
  },
  {
    productId:"9",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/brow/define-and-blend-brow-pencil/modules/product-info/grey-brown/define-and-blend-grey-brown-001.jpg?rev=2ffb659f353049d7a30ada4b8d9da824&cx=0&cy=0&cw=315&ch=472&hash=DF33A524262144D684AD7C19248E3BFD",
    productDesc:"BLEND BROW PENCIL",
    productPrice:"349",
    isEdit:false
  },
  {
    productId:"10",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-balm/baby-lips-loves-color/modules/product-info/berry-crush/berry-crush-001.jpg?rev=5075987f0016402381f25182494c68d4&cx=0&cy=0&cw=315&ch=472&hash=9D15C8C80AE43B0458A468B1F8B17D72",
    productDesc:"BABY LIPS COLOR LIP BALM",
    productPrice:"175",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/foundation/superstay-foundation/module/product-info/classic-ivory/880x1320_ss_foundation_classic_ivory_o.jpg?rev=34d091338dd94a058a405840e7e3e1b5&cx=0&cy=0&cw=315&ch=472&hash=3693BCF3A4136B6F7416AAB8EDFD661F",
    productDesc:"FULL COVERAGE FOUNDATION",
    productPrice:"750",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/eye-shadow/city-mini-palette/modules/product-info/5th-avenue-sunset/6902395697350-02.jpg?rev=94ca925c72aa4f10b50678e9efd3e17d&cx=0.59&cy=0.46&cw=315&ch=472&hash=FA038D41E4477FA15BFC2E57EDCFFCD3",
    productDesc:"MINI EYESHADOW PALETTE",
    productPrice:"900",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-color/sensational-liquid-matte/bare-it-all/bare-it-all-001.jpg?rev=c4f335b0cb8f4aecab834d23392a54de&cx=0.48&cy=0.54&cw=315&ch=472&hash=3953A601DDB8663250DAB877F8C6102E",
     productDesc:"MATTE INK CRAYON",
     productPrice:"599",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/premier/fit-me-primer/modules/product-info/poreless-primer/catalogue-matte-poreless-2.jpg?rev=90df7ec139814aba97234a5f8b3e34fa&cx=0&cy=0&cw=315&ch=472&hash=BFC808A747A5B0F45B5A380D6697C48Ax",
    productDesc:"MATTE + PORELESS SPRAY",
    productPrice:"699",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/mascara/volum-express-hypercurl-mascara/modules/product-info/waterproof/hc-waterproof-mascara-315-x-472-01.jpg?rev=dfe920062b9c44b2bcd73937a93751f8&cx=0.52&cy=0.34&cw=315&ch=472&hash=38DAEF2A68A494F0189C0B0F138FE693",
    productDesc:"WATERPROOF MASCARA",
    productPrice:"335",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"shop",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-color/superstay-ink-crayon-lipstick-pink-edition/modules/product-info/speak-your-mind/speak-your-mind-001.jpg?rev=2909de1e642e44a899f2c5f7922a544e&cx=0.59&cy=0.68&cw=315&ch=472&hash=C17881B9995E62E79AEDDF9EBFBEE196",
    productDesc:"CRAYON X PINKS EDITION",
    productPrice:"599",
    isEdit:false
  },
  
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/liners/tattoostudio-sharpenable-gel-pencil-longwear-eyeliner-makeup/041554563351-001.jpg?rev=7b979a664348442c890f4bc4aa1b4727&cx=0.52&cy=0.36&cw=315&ch=472&hash=6BF19914291775463A8452F892E215F7",
    productDesc:"TATTOO STUDIO GEL PENCIL",
    productPrice:"499",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productDesc:"WATERPROOF MASCARA",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/homepage/best-sellers/1-waterproof-mascara.jpg?rev=3f1266a6dc3f4c0b911c52c6015fcea7&cx=0.45&cy=0.48&cw=315&ch=472&hash=8E2465961296AE1E2649E225D9C08877",
    productPrice:"399",
    isEdit:false
  },
  { productId:"",
  productName:"",
  productType:"eye",
  productDesc:"THE CITY MINI EYESHADOW ",
   productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/eye-shadow/city-mini-palette/modules/product-info/5th-avenue-sunset/6902395697350-02.jpg?rev=94ca925c72aa4f10b50678e9efd3e17d&cx=0.59&cy=0.46&cw=315&ch=472&hash=FA038D41E4477FA15BFC2E57EDCFFCD3",
    productPrice:"900",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/liners/tattoostudio-smokey-gel-pencil-eyeliner/productimage_productinfo_tattooliner_smokeygelpencil_desktop_316x474.jpg?rev=6e3c1380aba74478bc8143075510ca37&cx=0&cy=0&cw=315&ch=472&hash=82637F4C89B1BCF82B143DFD2E5E5EEF",
    productDesc:"TATTOO STUDIO SMOKEY",
    productPrice:"499",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/liners/drama-gel-liner/modules/product-info/black/drama-gel-liner-315-x-472-01.jpg?rev=0021e1327c464b31b6f3897c50ceb03c&cx=0.44&cy=0.72&cw=315&ch=472&hash=A88AECA69219DAEB87DB453C039F858F",
    productDesc:"SMOKEY GEL PENCIL EYELINER",
    productPrice:"499",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/mascara/lash-sensational-mascara/modules/product-info/waterproof/6902395395935-01.jpg?rev=ce890812a75c417ab121ae89f22b1d31&cx=0.48&cy=0.51&cw=315&ch=472&hash=204DE89D97826B8A2EB3A3D991CF4841",
    productDesc:"LASH SENSATIONAL MASCARA",
    productPrice:"310",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/eye-shadow/the-nudes-palette/modules/product-info/041554419184-01.jpg?rev=83899070362942b9a6d3cb3bf90f6d62&cx=0.57&cy=0.46&cw=315&ch=472&hash=2ED4E9AB5057550A81C82CD3DDB05C73",
    productDesc:"THE EYESHADOW PALETTES",
    productPrice:"899",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/kajal/colossal-kajal/modules/product-info/colossal-kajal-01.jpg?rev=9eeb6b161e264f7ea2a721284e3dfe7d&cx=0&cy=0&cw=315&ch=472&hash=ECC67F09C80C8CA1BCD3245CC0384666",
    productDesc:"THE COLOSSAL KAJAL 24HR",
    productPrice:"180",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/liners/hyper-glossy-liquid-liner/modules/product-info/black/hyper-glossy-liner_black_c_315-x-472-px_eyeliner.jpg?rev=b9507eba3a46410b851a5ea4c071add8&cx=0&cy=0&cw=315&ch=472&hash=B4B3013F7F10CB9864E1923F0293418F",
    productDesc:"DRAMA GEL EYELINER",
  productPrice:"500",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/mascara/lash-lift-mascara-waterproof/modules/product-info/waterproof/6902395781660-01.jpg?rev=6695b40bd5cf41c086f1dec01d9101b1&cx=0.51&cy=0.48&cw=315&ch=472&hash=42CAF508D9EB387D504D3B9C3AB54CC8",
    productDesc:"LASH LIFT WATERPROOF",
    productPrice:"350",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/eye-shadow/the-blushed-nudes-palette/modules/product-info/blushed-nudes-palett-01_315-x-472-01.jpg?rev=4b3424bf1ca244488799dcc2cc547837&cx=0&cy=0&cw=315&ch=472&hash=8F1BC0B1C3212438649C41AB3487EC04",
    productDesc:"THE BLUSHED EYESHADOW",
    productPrice:"799",
    isEdit:false
  },
  {
    productId:"",
    productName:"",
    productType:"eye",
    productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/eye-makeup/kajal/colossal-kajal-super-black/modules/product-info/colossal-super-black-02.jpg?rev=1de2cca1219d48a8af1f7eb3495f4273&cx=0&cy=0&cw=315&ch=472&hash=36D43E8CFEB222D01B5E5E3378099663",
    productDesc:"COLOSSAL KAJAL BLACK",
    productPrice:"300",
    isEdit:false
  },
  {
  productId:"",
  productName:"",
  productType:"lips",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-color/superstay-matte-ink-liquid-lipstick-rogue-reds/modules/product-info/gritty/285_image-001.jpg?rev=25004a5bda0f4181a8057db8892ffb32&cx=0.52&cy=0.39&cw=316&ch=475&hash=9490AE836A4ECDC33D984257624ECE29",
  productDesc:"MATTE INK LIQUID LIPSTICK ROGUE REDS",
  productPrice:"699",
  isEdit:false
},
{
  productId:"",
  productName:"",
  productType:"lips",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-color/superstay-ink-crayon/enjoy-the-view/enjoy-the-view-01.jpg?rev=b2cd9d81fb374508985741103cf0c6ed&cx=0&cy=0&cw=316&ch=475&hash=9C4E1ABBC2F1C525431B9E37832060DE",
  productDesc:"LIQUID LIPSTICK X PINKS EDITION",
  productPrice:"699",
  isEdit:false
},
{
  productId:"",
  productName:"",
  productType:"lips",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-color/color-sensational-ultimattes/modules/product-info/199-ruby/1-199-more-ruby.jpg?rev=a72a05e5b3cd472aa1b0412d8a8b9afd&cx=0&cy=0&cw=316&ch=475&hash=DD4EC96A7239817150BCBE6DB175F18A",
  productDesc:"MAYBELLINE COLOR SENSATIONAL ",
  productPrice:"549",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"balm",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-balm/baby-lips-bloom/modules/product-info/peach/bloom_peach-001.jpg?rev=7c30df0eede5438a927441f16428c7fb&cx=0&cy=0&cw=316&ch=475&hash=EB5F1FC9E0F5F49CE5A44EA868B75D19",
  productDesc:"BABY LIPS BLOOM LIP BALM",
  productPrice:"180",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"balm",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-balm/baby-lips-loves-color/modules/product-info/berry-crush/berry-crush-001.jpg?rev=5075987f0016402381f25182494c68d4&cx=0&cy=0&cw=316&ch=475&hash=CE11F643DE603BC55BD54B645B5A1568",
  productDesc:" LOVES COLOR LIP BALM",
  productPrice:"195",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"GLOSS",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/lip-makeup/lip-gloss/lifter-gloss-tinted-lip-gloss-with-hyaluronic-acid/product-info/moon/041554583878-3.jpg?rev=10476c91c6234f858c5afcb8b7c45c20&cx=0&cy=0&cw=316&ch=475&hash=98DCA1BD716F872B1C0545E6F7BFF382",
  productDesc:"MAYBELLINE NEW YORK LIFTER GLOSS",
  productPrice:"799",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"face",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/foundation/fitme-matte-and-poreless-foundation/modules/product-info/115-ivory/fmt-bottle_115.jpg?rev=89ffedd9f4874c99b7cf093566acb485&cx=0&cy=0&cw=316&ch=475&hash=734AE5D4084A8ADB430D321A667A4A06",
  productDesc:"MATTE + LIQUID SPF22",
  productPrice:"599",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"face",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/foundation/fit-me-fresh-tint-with-vitamin-c/module/product-info/shade01/6902395830504-1.jpg?rev=a88857165536424c80b24bdbf84570af&cx=0.35&cy=0.45&cw=316&ch=475&hash=44AC373838019525150545E43F834894",
  productDesc:"FIT ME FRESH TINT",
  productPrice:"399",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"face",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/foundation/fit-me-tube-foundation/module/product-info/230-natural-buff/fmt-tube_230.jpg?rev=c79c9a8d4d3c43a387da7d01d42b110b&cx=0&cy=0&cw=316&ch=475&hash=F6C0E4AA98B975BEDAE3FD93397A128D",
  productDesc:"FIT ME TUBE FOUNDATION",
  productPrice:"299",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"face",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/foundation/superstay-foundation/module/product-info/classic-ivory/880x1320_ss_foundation_classic_ivory_o.jpg?rev=34d091338dd94a058a405840e7e3e1b5&cx=0&cy=0&cw=316&ch=475&hash=F8300C80CFB21B4DA9C30E18C57DC2C3",
  productDesc:"FULL COVERAGE FOUNDATION",
  productPrice:"750",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"POWDER",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/powder/fit-me-mineral-loose-finishing-powder/light/fit_me_loose_powder_light_o_a.jpg?rev=309c9f5c61644d63b6b04032f3ede0c1&cx=0&cy=0&cw=315&ch=472&hash=97C47BAF3AB78C75BC20670DA8DB02C4",
  productDesc:"FIT ME FINISHING POWDER",
  productPrice:"695",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"POWDER",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/powder/fit-me-matte-poreless-powder/1-closed-packshot-330.jpg?rev=5bcac0290faa49ae939ca1382f998fc5&cx=0.51&cy=0.5&cw=315&ch=472&hash=85835A75DA8AC321F148908941555F91",
  productDesc:"MATTE + PORELESS PRESSED",
  productPrice:"549",
  isEdit:false
},
{productId:"",
  productName:"",
  productType:"Blush",
  productImage:"https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/blush-and-bronzer/fit-me-blush/maybelline-fitme-blush-25-pink-041554503104-c-(1).jpg?rev=211f13bbbd8445d5b08946fe8e818927&cx=0&cy=0&cw=315&ch=472&hash=FBEAEF4ADDD9AA27D3D7A4D7F49A3C19",
  productDesc:"FIT ME MONO BLUSH",
  productPrice:"440",
  isEdit:false
},

]
cart:products[]=[];
lips:products[]=[]
lipbalm:products[]=[];
gloss:products[]=[];
face:products[]=[];
powder:products[]=[];
blush:products[]=[];
wish:products[]=[];

viewlips(){
this.productsList.map((pr)=>
  {
    if(pr.productType==="lips")
    {
      this.lips.push(pr)
    }
  })
  return of (this.lips);
}

viewlipbalm(){
  this.productsList.forEach((pr1)=>
    {
      if(pr1.productType==="balm")
      {
        this.lipbalm.push(pr1)
      }
    })
    return of (this.lipbalm);
  }
  viewgloss(){
    this.productsList.filter((pro,ind)=>
      {
        if(pro.productType==="GLOSS")
        {
          return pro;
        }
        else{
          return null;
        }
      })
      
    }
    viewface(){
      this.productsList.map((pr)=>
        {
          if(pr.productType==="face")
          {
            this.face.push(pr)
          }
        })
        return of (this.face);
      }
      
      viewpowder(){
        this.productsList.forEach((pr1)=>
          {
            if(pr1.productType==="POWDER")
            {
              this.powder.push(pr1)
            }
          })
          return of (this.powder);
        }
        viewblush(){
          this.productsList.filter((pro,ind)=>
            {
              if(pro.productType==="Blush")
              {
                return pro;
              }
              else{
                return null;
              }
            })
            
          }
addtocart(p1:any){
    console.log(p1)
    this.cart.push(p1);
  }
viewcart(){
    return of (this.cart);
  }
addtowish(w:any){
    this.wish.push(w)

  }
viewwish(){
  return of (this.wish)
  }
  
viewProducts(){
    return of (this.productsList);
  }
  
  addproduct(product:any){
    this.productsList.push(product);
  }
  
  
updateProduct(product:any){
    this.productsList.forEach((bhav,ind)=>{
    if(bhav.productId==product.productId){
      this.productsList.splice(ind,1,product)
    }
  })
}
  deletecart(product:any){
    this.cart.forEach((bhav,ind)=>{
    if(bhav.productId==product.productId){
      this.cart.splice(ind,1)
    }
  })
}
deletewish(product:any){
  this.wish.forEach((bhav,ind)=>{
  if(bhav.productId==product.productId){
    this.wish.splice(ind,1)
  }
})
}
  constructor() { }
}


function bhav(value: products, index: number, array: products[]): void {
  throw new Error('Function not implemented.');
}