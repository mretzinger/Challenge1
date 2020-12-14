import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full' }
    ], { relativeLinkResolution: 'legacy' }),
  ]
})
export class AppRoutingModule { }
