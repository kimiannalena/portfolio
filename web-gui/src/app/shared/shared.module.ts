import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [SidenavComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
