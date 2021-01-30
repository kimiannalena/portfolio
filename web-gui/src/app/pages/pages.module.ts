import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProjectListComponent } from './project-list/project-list.component';



@NgModule({
  declarations: [StartComponent, ProjectListComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
