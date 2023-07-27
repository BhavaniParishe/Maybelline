import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { ShopComponent } from './shop/shop.component';
import { EyesComponent } from './eyes/eyes.component';
import { LipsComponent } from './lips/lips.component';
import { FaceComponent } from './face/face.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"cart",
    component:CartComponent
  },

  {
    path:'user',
    component:NavbarComponent,
    children:[
      {
        path:'products',
      component:ProductsComponent
    },
    {
      path:'add',
      component:AddproductsComponent
    },
    {
      path:'cart',
      component:CartComponent
    },
    {
      path:'checkout',
      component:FormComponent
    },
    {
      path:'shop',
      component:ShopComponent
    },
    
    {
      path:'eyes',
      component:EyesComponent
    },
    {
      path:'lip',
      component:LipsComponent
    },
    {
      path:'face',
      component:FaceComponent
    },
    {
      path:'wish',
      component:WishComponent
    }

  ]
}
];

    
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
