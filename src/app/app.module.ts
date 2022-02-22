import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ItemComponent } from './components/item/item.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import {MatSelectModule,} from '@angular/material/select';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { QuantitySectionComponent } from './components/quantity-section/quantity-section.component';


const appRoutes:Routes = [
  { path : '',  component: MainFormComponent } , 
  {path : 'configuration/:id',  component: SelectedItemComponent},
  {path : 'cart',  component: CartComponent}
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
    QuantitySectionComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
