import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'nosotros', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
