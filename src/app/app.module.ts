import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './pages/home/home.module';
import { ProductsModule } from './pages/products/products.module';
import { BlogModule } from './pages/blog/blog.module';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';
import { SustainabilityModule } from './pages/sustainability/sustainability.module';
import { QuoteModule } from './pages/quote/quote.module';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    ProductsModule,
    AboutModule,
    ContactModule,
    SustainabilityModule,
    BlogModule,
    QuoteModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
