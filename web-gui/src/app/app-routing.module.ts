import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './pages/start/start.component';
import {ProjectListComponent} from './pages/project-list/project-list.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'projects', component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
