import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { ShopComponent } from './shop/shop.component';
import { EyesComponent } from './eyes/eyes.component';
import { LipsComponent } from './lips/lips.component';
import { FaceComponent } from './face/face.component';
import { WishComponent } from './wish/wish.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProductsComponent,
    AddproductsComponent,
    CartComponent,
    FormComponent,
    ShopComponent,
    EyesComponent,
    LipsComponent,
    FaceComponent,
    WishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }