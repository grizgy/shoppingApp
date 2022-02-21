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
import { CartItemComponent } from './components/cart-item/cart-item.component';

const appRoutes:Routes = [
  { path : '',  component: MainFormComponent } , 
  {path : 'configuration/:id',  component: CartItemComponent}
  
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
     CartItemComponent
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
