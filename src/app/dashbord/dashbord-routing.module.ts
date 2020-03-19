import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
import { NewsComponent } from '../news/news.component';


const routes: Routes = [
  {
    path: "", component: DashbordComponent
  }
//   {
//     path: "news/:id", component: NewsComponent
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }