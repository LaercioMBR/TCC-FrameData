import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/views/home/home.component';
import {ManageComponent} from './components/views/manage/manage.component';

const routes: Routes = [
   
  { path: "home", component:HomeComponent   },
  { path:"manage", component:ManageComponent  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
