import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'home',
  component: HomeComponent
}, {
  path: 'lazy',
  loadChildren: '../../app/lazy/lazy.module#LazyModule'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
