import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponenet } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    MainPageComponenet,
    ListComponent
  ],
  exports: [
    MainPageComponenet
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
