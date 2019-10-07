import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenchListComponent } from './bench-list/bench-list.component';
import { DeskListComponent } from './desk-list/desk-list.component';
import { DetailViewComponent } from './detail-view/detail-view.component';


const routes: Routes = [
  { path: "bench-list", component: BenchListComponent },
  { path: "desk-list", component: DeskListComponent },
  { path: "desk-list/:id", component: DetailViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
