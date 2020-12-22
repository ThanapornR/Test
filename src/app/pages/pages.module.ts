import { HomeModule } from './components/home/home.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
