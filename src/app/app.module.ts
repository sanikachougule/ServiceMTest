import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassangerModule } from './passanger/passanger.module';
import { ProductsModule } from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    PassangerModule,
    ProductsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
