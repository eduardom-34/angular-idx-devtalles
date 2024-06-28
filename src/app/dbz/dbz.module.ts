import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponenet } from './pages/main-page.component';


@NgModule({
  declarations: [
    MainPageComponenet
  ],
  exports: [
    MainPageComponenet
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
