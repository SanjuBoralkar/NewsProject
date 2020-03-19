import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import("../app/login/login.module").then(m => m.LoginModule)
  }
  ,{
    path:'pages',
    component: HeaderComponent,
    children: [
      {
        path: 'dashboard', 
        loadChildren: () => import('./dashbord/dashbord.module').then((m) => m.DashbordModule)
      },
      {
        path: 'news', 
        loadChildren: () => import('./news/news.module').then((m) => m.NewsModule)
      }
    ]
  }
  
  // {
  //   path: "", component: DashbordComponent
  // },
  // {
  //   path: "news/:id", component: NewsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
