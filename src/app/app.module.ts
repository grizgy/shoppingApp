import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule,} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ItemComponent } from './components/item/item.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { QuantitySectionComponent } from './components/quantity-section/quantity-section.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const appRoutes:Routes = [
  {path : '',  component: MainFormComponent} , 
  {path : 'configuration/:id',  component: SelectedItemComponent},
  {path : 'cart',  component: CartComponent}, 
  {path : 'checkout',  component: CheckoutComponent}, 
  {path : 'login',  component: LoginComponent}, 
  {path : 'register',  component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainFormComponent,
    SearchFormComponent,
    ItemComponent,
    FooterComponent, 
    DropdownComponent,
    SelectedItemComponent,
    CartComponent,
    CartItemComponent,
    QuantitySectionComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    // RouterModule.forRoot(appRoutes,
    //   { enableTracing: true }) 
    RouterModule.forRoot(appRoutes) ,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
