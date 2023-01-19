import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Import for calls
import { HttpClientModule} from '@angular/common/http'
//Import Optimized image
import { NgOptimizedImage } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
