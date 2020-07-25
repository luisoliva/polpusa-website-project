import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SustainabilityComponent } from './pages/sustainability/sustainability.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { ProductsComponent } from './pages/products/products.component';
import {BlogDetailComponent} from "./pages/blog/blog-detail/blog-detail.component";

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'productos', component: ProductsComponent/*,  children: [
    { path: '', component: ProductItemsComponent },
    { path: 'detalle/:id', component: ProductDetailComponent }
  ] */},
  {path: 'nosotros', component: AboutComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'sustentabilidad', component: SustainabilityComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/detail/:id', component:BlogDetailComponent},
  {path: 'cotizar', component: QuoteComponent},
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
